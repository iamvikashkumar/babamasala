import { useEffect, useState } from 'react'
import { Search, X } from 'lucide-react'
import { searchProducts } from '../data/products'
import ImageWithFallback from './ImageWithFallback'

export default function SearchOverlay({ open, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('')
  const results = searchProducts(query)

  useEffect(() => {
    if (!open) setQuery('')
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-ivory-soft flex flex-col">
      <div className="border-b border-ink/10">
        <div className="max-w-content mx-auto container-px flex items-center gap-3 py-4">
          <Search className="w-5 h-5 text-ink-soft shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for almonds, biryani masala, sattu…"
            className="flex-1 bg-transparent outline-none text-lg text-ink placeholder:text-ink-soft/50"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-2 rounded-full hover:bg-ink/5"
          >
            <X className="w-6 h-6 text-ink" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-content mx-auto container-px py-6">
          {query.trim() === '' && (
            <p className="text-ink-soft text-sm">Start typing to search across all products.</p>
          )}

          {query.trim() !== '' && results.length === 0 && (
            <p className="text-ink-soft text-sm">
              No products found for "{query}". Try a different name, like "almonds" or "biryani".
            </p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {results.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => {
                  onSelectProduct(product)
                  onClose()
                }}
                className="text-left group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-2">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    theme="gold"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-medium text-ink">{product.name}</p>
                <p className="text-xs text-ink-soft/70">{product.category}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
