import { getProductsByCategory } from '../data/products'
import ProductGrid from './ProductGrid'
import SectionHeading from './SectionHeading'

export default function DryFruitsSection({ onOpenProduct }) {
  const dryFruits = getProductsByCategory('Dry Fruits')

  return (
    <section id="dry-fruits" className="bg-ivory-soft py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Premium Dry Fruits"
          title="Handpicked favourites, every day"
          description="Handpicked favourites for everyday nutrition, gifting and celebrations."
        />
        <div className="mt-10">
          <ProductGrid products={dryFruits} onOpen={onOpenProduct} />
        </div>
      </div>
    </section>
  )
}
