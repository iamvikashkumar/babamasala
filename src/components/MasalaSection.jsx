import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { products } from '../data/products'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

const FILTERS = [
  { label: 'All', tag: null },
  { label: 'Powdered Masalas', tag: 'powdered' },
  { label: 'Whole Spices', tag: 'whole' },
  { label: 'Biryani', tag: 'biryani' },
  { label: 'Vegetarian', tag: 'vegetarian' },
  { label: 'Non-Vegetarian', tag: 'non-vegetarian' },
  { label: 'Regional Specials', tag: 'regional' },
]

const POOL = products.filter((p) =>
  ['Masalas', 'Whole Spices', 'Regional'].includes(p.category)
)

export default function MasalaSection({ onOpenProduct }) {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    const filter = FILTERS.find((f) => f.label === active)
    if (!filter || !filter.tag) return POOL
    return POOL.filter((p) => p.tags.includes(filter.tag))
  }, [active])

  return (
    <section id="masalas" className="bg-forest py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Authentic Indian Masalas"
          title="Traditional blends. Bold aroma. Authentic taste."
          light
        />

        <div className="mt-8 flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {FILTERS.map((f) => (
            <button
              key={f.label}
              type="button"
              onClick={() => setActive(f.label)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                active === f.label
                  ? 'bg-gold text-ink border-gold'
                  : 'border-ivory-soft/25 text-ivory-soft/85 hover:border-ivory-soft/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <ProductCard product={product} onOpen={onOpenProduct} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-ivory-soft/70 text-sm py-10 text-center">
            No products match this filter yet.
          </p>
        )}
      </div>
    </section>
  )
}
