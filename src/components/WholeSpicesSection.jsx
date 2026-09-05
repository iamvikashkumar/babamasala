import { getProductsByCategory } from '../data/products'
import ProductGrid from './ProductGrid'
import SectionHeading from './SectionHeading'

export default function WholeSpicesSection({ onOpenProduct }) {
  const wholeSpices = getProductsByCategory('Whole Spices')

  return (
    <section id="whole-spices" className="bg-ivory-deep py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Whole & Raw Spices"
          title="Pure Spices. Nothing Complicated."
          description="Sourced whole and packed as they are — for kitchens that like to grind and roast fresh."
        />
        <div className="mt-10">
          <ProductGrid products={wholeSpices} onOpen={onOpenProduct} />
        </div>
      </div>
    </section>
  )
}
