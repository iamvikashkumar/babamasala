import ProductCard from './ProductCard'

export default function ProductGrid({ products, onOpen }) {
  if (!products.length) {
    return (
      <p className="text-ink-soft text-sm py-10 text-center">
        No products match this filter yet.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onOpen={onOpen} />
      ))}
    </div>
  )
}
