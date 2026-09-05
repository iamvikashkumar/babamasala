# Saffron & Sack — Premium Dry Fruits & Masalas Website

A mobile-first, static React + Vite + Tailwind website for a premium Indian
dry fruit and masala brand. No backend, no database, no payment gateway —
ordering happens via WhatsApp and phone calls.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Before you launch — replace these placeholders

Open **`src/data/config.js`** and fill in:

- `brandName` — your business name (shown in the navbar, footer, and page title-adjacent copy)
- `whatsapp` — your WhatsApp number, digits only with country code, e.g. `919876543210`
- `phone` — your phone number for the `tel:` links, e.g. `+919876543210`
- `email`, `address`, `hours`, `social.instagram`, `social.facebook`

Also update the page title and meta description in **`index.html`**, and the
`og:image` URL once you have real photography.

## Replacing product photos

Every product and category lives in **`src/data/products.js`** and
**`src/data/categories.js`**. Each entry has an `image` field with a remote
Unsplash-style URL as a placeholder — swap these for your own photography
whenever you're ready. If any image URL is broken or slow, the site
automatically falls back to a soft branded color swatch instead of a broken
image icon, so nothing looks unfinished.

## Adding more products

Add a new object to the `products` array in `src/data/products.js` — every
listing, filter, and search feature reads from this one file, so there's
nothing else to wire up.

## Project structure

```
src/
  components/     UI components (Navbar, Hero, ProductCard, etc.)
  data/           products.js, categories.js, testimonials.js, config.js
  utils/          whatsapp.js (wa.me / tel: link builders)
  hooks/          useReveal.js (scroll-reveal animation hook)
  App.jsx         assembles all sections
  main.jsx        React entry point
  index.css       Tailwind + global styles
```

## Notes

- Testimonials in `src/data/testimonials.js` are placeholder examples —
  swap in real customer feedback when you have it.
- No fake claims ("India's No.1", "100% organic", etc.) are used anywhere;
  copy sticks to what can be said without verified evidence.
