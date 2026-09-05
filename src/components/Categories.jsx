import { categories } from '../data/categories'
import CategoryCard from './CategoryCard'
import SectionHeading from './SectionHeading'

export default function Categories() {
  const [first, second, ...rest] = categories

  return (
    <section className="bg-ivory-soft py-16 sm:py-24">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="What we carry"
          title="A variety built over years, not overnight"
          description="From everyday kitchen staples to festival gifting, every category is stocked with intent."
        />

        {/* Mobile: horizontal scroll. Desktop: asymmetric bento grid. */}
        <div className="mt-10 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 sm:hidden">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-4 gap-5 items-start">
          <div className="col-span-2">
            <CategoryCard category={first} size="lg" />
          </div>
          <div className="col-span-2">
            <CategoryCard category={second} size="lg" />
          </div>
          {rest.map((c) => (
            <div key={c.id} className="col-span-1">
              <CategoryCard category={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
