import { useEffect } from 'react'
import { X } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'
import WhatsAppIcon from './WhatsAppIcon'
import { productWhatsAppLink } from '../utils/whatsapp'

const CATEGORY_THEME = {
  'Dry Fruits': 'gold',
  Masalas: 'burgundy',
  'Whole Spices': 'forest',
  Regional: 'gold',
}

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (product) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      <div className="absolute inset-0 bg-ink/60" onClick={onClose} />

      <div className="relative bg-ivory-soft w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl overflow-hidden max-h-[92vh] overflow-y-auto animate-fade-in">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-ivory-soft/90 text-ink shadow"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="aspect-[16/10] sm:aspect-[16/9]">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            theme={CATEGORY_THEME[product.category] || 'gold'}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <p className="section-label text-gold-dark not-italic">{product.category}</p>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mt-1">{product.name}</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">{product.description}</p>

          <div className="mt-5">
            <p className="text-sm text-ink-soft/70 mb-2">Available pack sizes</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <span
                  key={size}
                  className="text-sm px-3 py-1.5 rounded-full bg-ivory-deep text-ink-soft"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <a
            href={productWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-forest hover:bg-forest-light text-ivory-soft px-7 py-3.5 rounded-full font-medium transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
