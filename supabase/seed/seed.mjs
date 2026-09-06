// ============================================================
// One-time seed script: migrates src/data/products.js (the existing
// static catalogue) into real `products` + `product_variants` rows.
//
// PRICES ARE PLACEHOLDERS. There is no real price list yet (confirmed
// with the business owner) — this script assigns a rough, clearly-fake
// price per gram by category so the demo has *something* to show.
// The admin can and should update every price via /admin/products
// before this goes live.
//
// Usage (run locally, never in the browser):
//   1. npm install (if not already done — adds @supabase/supabase-js)
//   2. Create a .env file (see .env.example) with:
//        SUPABASE_URL=...
//        SUPABASE_SERVICE_ROLE_KEY=...   <-- service role, NOT the anon key
//      The service role key is required here because seeding bypasses
//      RLS on purpose. NEVER put this key in frontend code or commit it.
//   3. node supabase/seed/seed.mjs
// ============================================================

import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import { products } from '../../src/data/products.js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Create a .env file — see .env.example.'
  )
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

// Rough, clearly-placeholder price-per-gram by category (in rupees).
// Chosen only so the demo has plausible-looking numbers — not real pricing.
const PRICE_PER_GRAM = {
  'Dry Fruits': 1.2,
  Masalas: 0.55,
  'Whole Spices': 0.5,
  Regional: 0.7,
}

const GRAMS = {
  '25g': 25,
  '50g': 50,
  '100g': 100,
  '200g': 200,
  '250g': 250,
  '500g': 500,
  '1kg': 1000,
}

function placeholderPrice(category, sizeLabel) {
  if (sizeLabel === 'Custom Hamper') return 999 // flat placeholder for gift hampers
  const grams = GRAMS[sizeLabel] ?? 100
  const perGram = PRICE_PER_GRAM[category] ?? 0.6
  // Round to the nearest 10 for a clean, demo-friendly number.
  return Math.max(10, Math.round((perGram * grams) / 10) * 10)
}

async function seed() {
  console.log(`Seeding ${products.length} products...`)

  for (const p of products) {
    const { data: insertedProduct, error: productError } = await supabase
      .from('products')
      .insert({
        name: p.name,
        category: p.category,
        description: p.description,
        image: p.image,
      })
      .select()
      .single()

    if (productError) {
      console.error(`Failed to insert product "${p.name}":`, productError.message)
      continue
    }

    const variantRows = p.sizes.map((size) => ({
      product_id: insertedProduct.id,
      weight_label: size,
      price: placeholderPrice(p.category, size),
      available: true,
    }))

    const { error: variantError } = await supabase.from('product_variants').insert(variantRows)

    if (variantError) {
      console.error(`Failed to insert variants for "${p.name}":`, variantError.message)
    } else {
      console.log(`  ✓ ${p.name} (${variantRows.length} sizes)`)
    }
  }

  console.log('Done. All prices are placeholders — update them in /admin/products before going live.')
}

seed()
