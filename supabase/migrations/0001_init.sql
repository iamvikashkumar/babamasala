-- ============================================================
-- BabaMasala — Initial schema
-- Run this in Supabase SQL Editor (or via `supabase db push`)
-- ============================================================

-- ---------- PROFILES ----------
-- Extends Supabase's built-in auth.users with app-specific fields.
-- One row per user, created automatically on signup via trigger below.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  full_name text not null,
  mobile text not null,
  email text,
  address text,
  city text,
  pincode text,
  created_at timestamptz not null default now()
);

-- Auto-create a profile row whenever a new auth user signs up.
-- Reads full_name/mobile/etc from the signup metadata the frontend passes in.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, mobile, email, address, city, pincode, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.raw_user_meta_data->>'mobile', ''),
    new.raw_user_meta_data->>'real_email',
    new.raw_user_meta_data->>'address',
    new.raw_user_meta_data->>'city',
    new.raw_user_meta_data->>'pincode',
    coalesce(new.raw_user_meta_data->>'role', 'customer')
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ---------- PRODUCTS ----------
create table public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  description text,
  image text,
  created_at timestamptz not null default now()
);

create table public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  weight_label text not null,
  price numeric(10,2) not null,
  available boolean not null default true,
  created_at timestamptz not null default now()
);

create index on public.product_variants (product_id);

-- ---------- ORDERS ----------
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_code text not null unique,
  customer_id uuid not null references public.profiles(id),
  address_snapshot jsonb not null,
  subtotal numeric(10,2) not null,
  final_total numeric(10,2) not null,
  status text not null default 'PENDING' check (
    status in ('PENDING','ACCEPTED','PROCESSING','PARTIALLY_UNAVAILABLE',
               'READY_FOR_DELIVERY','DELIVERED','CANCELLED')
  ),
  expected_delivery date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  delivered_at timestamptz
);

create index on public.orders (customer_id);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id),
  product_name_snapshot text not null,
  weight_snapshot text not null,
  price_snapshot numeric(10,2) not null,
  quantity int not null check (quantity > 0),
  line_total numeric(10,2) not null,
  item_status text not null default 'AVAILABLE' check (item_status in ('AVAILABLE','UNAVAILABLE'))
);

create index on public.order_items (order_id);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.product_variants enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Helper: is the current user an admin?
create function public.is_admin()
returns boolean
language sql
security definer set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- ---------- profiles policies ----------
create policy "customers read own profile"
  on public.profiles for select
  using (id = auth.uid() or public.is_admin());

create policy "customers update own profile"
  on public.profiles for update
  using (id = auth.uid())
  with check (id = auth.uid());
-- Note: customers cannot change their own `role` column via the app UI;
-- enforce that in application logic (never send role in the update payload).
-- No insert policy — profiles are created only via the handle_new_user trigger.

-- ---------- products / variants: public read, admin write ----------
create policy "anyone can read products"
  on public.products for select
  using (true);

create policy "admin can write products"
  on public.products for insert with check (public.is_admin());
create policy "admin can update products"
  on public.products for update using (public.is_admin());

create policy "anyone can read variants"
  on public.product_variants for select
  using (true);

create policy "admin can write variants"
  on public.product_variants for insert with check (public.is_admin());
create policy "admin can update variants"
  on public.product_variants for update using (public.is_admin());

-- ---------- orders: customers see own, admin sees all ----------
create policy "customers read own orders"
  on public.orders for select
  using (customer_id = auth.uid() or public.is_admin());

create policy "admin can update orders"
  on public.orders for update using (public.is_admin());
-- No direct insert policy for orders — all order creation goes through the
-- place_order() function below, which runs as security definer and
-- validates/prices everything server-side.

-- ---------- order_items: visible if you can see the parent order ----------
create policy "read items of visible orders"
  on public.order_items for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = order_items.order_id
      and (o.customer_id = auth.uid() or public.is_admin())
    )
  );
-- No direct insert/update policy — items are written only via
-- place_order() and mark_item_unavailable() below.

-- ============================================================
-- ORDER-INTEGRITY FUNCTIONS
-- These run as security definer so they can write to orders/order_items
-- (which have no direct insert policy for regular users), but they only
-- ever compute prices from product_variants — never from client input.
-- ============================================================

-- Places an order from a cart. cart_items shape:
-- [{ "variant_id": "uuid", "quantity": 2 }, ...]
-- Price is looked up fresh from product_variants — any price the client
-- sends is ignored entirely.
create function public.place_order(cart_items jsonb, delivery_address jsonb)
returns public.orders
language plpgsql
security definer set search_path = public
as $$
declare
  new_order public.orders;
  item jsonb;
  v_variant public.product_variants;
  v_product public.products;
  v_line_total numeric(10,2);
  v_subtotal numeric(10,2) := 0;
  v_order_code text;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  if jsonb_array_length(cart_items) = 0 then
    raise exception 'Cart is empty';
  end if;

  v_order_code := 'BM-' || to_char(now(), 'YYYYMMDD') || '-' ||
                  lpad((floor(random() * 10000))::text, 4, '0');

  insert into public.orders (order_code, customer_id, address_snapshot, subtotal, final_total, status)
  values (v_order_code, auth.uid(), delivery_address, 0, 0, 'PENDING')
  returning * into new_order;

  for item in select * from jsonb_array_elements(cart_items)
  loop
    select * into v_variant from public.product_variants
      where id = (item->>'variant_id')::uuid;

    if v_variant is null then
      raise exception 'Product variant not found: %', item->>'variant_id';
    end if;

    if not v_variant.available then
      raise exception 'This product size is currently unavailable';
    end if;

    select * into v_product from public.products where id = v_variant.product_id;

    v_line_total := v_variant.price * (item->>'quantity')::int;
    v_subtotal := v_subtotal + v_line_total;

    insert into public.order_items
      (order_id, product_id, product_name_snapshot, weight_snapshot,
       price_snapshot, quantity, line_total, item_status)
    values
      (new_order.id, v_product.id, v_product.name, v_variant.weight_label,
       v_variant.price, (item->>'quantity')::int, v_line_total, 'AVAILABLE');
  end loop;

  update public.orders
    set subtotal = v_subtotal, final_total = v_subtotal
    where id = new_order.id
    returning * into new_order;

  return new_order;
end;
$$;

-- Admin marks one order item unavailable; recalculates the order total.
create function public.mark_item_unavailable(p_order_item_id uuid)
returns public.orders
language plpgsql
security definer set search_path = public
as $$
declare
  v_order_id uuid;
  v_new_total numeric(10,2);
  updated_order public.orders;
begin
  if not public.is_admin() then
    raise exception 'Not authorized';
  end if;

  select order_id into v_order_id from public.order_items where id = p_order_item_id;
  if v_order_id is null then
    raise exception 'Order item not found';
  end if;

  update public.order_items
    set item_status = 'UNAVAILABLE'
    where id = p_order_item_id;

  select coalesce(sum(line_total), 0) into v_new_total
    from public.order_items
    where order_id = v_order_id and item_status = 'AVAILABLE';

  update public.orders
    set final_total = v_new_total,
        status = 'PARTIALLY_UNAVAILABLE',
        updated_at = now()
    where id = v_order_id
    returning * into updated_order;

  return updated_order;
end;
$$;

-- Admin-only status transitions. Kept as small dedicated functions so the
-- allowed transitions stay explicit rather than letting the client PATCH
-- an arbitrary status value directly.
create function public.accept_order(p_order_id uuid)
returns public.orders
language plpgsql
security definer set search_path = public
as $$
declare updated_order public.orders;
begin
  if not public.is_admin() then raise exception 'Not authorized'; end if;
  update public.orders set status = 'ACCEPTED', updated_at = now()
    where id = p_order_id and status = 'PENDING'
    returning * into updated_order;
  if updated_order is null then raise exception 'Order not found or not in PENDING state'; end if;
  return updated_order;
end;
$$;

create function public.set_expected_delivery(p_order_id uuid, p_date date)
returns public.orders
language plpgsql
security definer set search_path = public
as $$
declare updated_order public.orders;
begin
  if not public.is_admin() then raise exception 'Not authorized'; end if;
  update public.orders set expected_delivery = p_date, updated_at = now()
    where id = p_order_id
    returning * into updated_order;
  return updated_order;
end;
$$;

create function public.mark_delivered(p_order_id uuid)
returns public.orders
language plpgsql
security definer set search_path = public
as $$
declare updated_order public.orders;
begin
  if not public.is_admin() then raise exception 'Not authorized'; end if;
  update public.orders
    set status = 'DELIVERED', delivered_at = now(), updated_at = now()
    where id = p_order_id
    returning * into updated_order;
  return updated_order;
end;
$$;
