import ImageWithFallback from './ImageWithFallback'
import WhatsAppIcon from './WhatsAppIcon'
import { productWhatsAppLink } from '../utils/whatsapp'

const CATEGORY_ACCENT = {
  'Dry Fruits': { theme: 'gold', bar: 'bg-gold', text: 'text-gold-dark' },
  Masalas: { theme: 'burgundy', bar: 'bg-burgundy', text: 'text-burgundy' },
  'Whole Spices': { theme: 'forest', bar: 'bg-forest', text: 'text-forest' },
  Regional: { theme: 'gold', bar: 'bg-gold', text: 'text-gold-dark' },
}

export default function ProductCard({ product, onOpen }) {
  const accent = CATEGORY_ACCENT[product.category] || CATEGORY_ACCENT['Dry Fruits']

  return (
    <div className="group bg-ivory-soft rounded-xl overflow-hidden border border-ink/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="relative aspect-[4/3] overflow-hidden w-full text-left"
        aria-label={`View details for ${product.name}`}
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          theme={accent.theme}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className={`absolute top-0 left-0 h-1 w-10 ${accent.bar}`} />
      </button>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <button type="button" onClick={() => onOpen(product)} className="text-left">
          <h3 className="font-display text-lg text-ink leading-snug">{product.name}</h3>
        </button>
        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.sizes.slice(0, 4).map((size) => (
            <span
              key={size}
              className="text-xs px-2 py-1 rounded-full bg-ivory-deep text-ink-soft"
            >
              {size}
            </span>
          ))}
        </div>

        <a
          href={productWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium text-ivory-soft ${accent.bar} hover:opacity-90 transition-opacity`}
        >
          <WhatsAppIcon className="w-4 h-4" />
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}
