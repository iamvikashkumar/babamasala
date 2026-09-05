import { getProductsByCategory } from '../data/products'
import ImageWithFallback from './ImageWithFallback'
import SectionHeading from './SectionHeading'
import WhatsAppIcon from './WhatsAppIcon'
import { productWhatsAppLink } from '../utils/whatsapp'

export default function RegionalSpecials({ onOpenProduct }) {
  const regional = getProductsByCategory('Regional')
  const [sattu, biryani, ...others] = regional

  return (
    <section id="regional-specials" className="bg-ivory-soft py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Regional Specials"
          title="Flavours With a Story"
          description="Two regions, two signature blends — each made the way it has always been made."
        />

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <FeatureCard product={sattu} region="Bihar Special" onOpen={onOpenProduct} theme="forest" />
          <FeatureCard product={biryani} region="Hyderabad Special" onOpen={onOpenProduct} theme="burgundy" />
        </div>

        {others.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {others.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onOpenProduct(p)}
                className="flex items-center gap-4 bg-white/60 border border-ink/10 rounded-xl p-4 text-left hover:border-gold/60 transition-colors"
              >
                <ImageWithFallback
                  src={p.image}
                  alt={p.name}
                  theme="gold"
                  className="w-16 h-16 rounded-lg object-cover shrink-0"
                />
                <div>
                  <p className="font-display text-ink">{p.name}</p>
                  <p className="text-sm text-ink-soft line-clamp-1">{p.description}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function FeatureCard({ product, region, onOpen, theme }) {
  if (!product) return null
  const barColor = theme === 'forest' ? 'bg-forest' : 'bg-burgundy'

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-ink">
      <ImageWithFallback
        src={product.image}
        alt={product.name}
        theme={theme}
        className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
      <div className="relative p-7 sm:p-9 min-h-[340px] flex flex-col justify-end">
        <span className="section-label text-gold-light mb-2 not-italic text-sm">{region}</span>
        <h3 className="font-display text-ivory-soft text-2xl sm:text-3xl">{product.name}</h3>
        <p className="mt-3 text-ivory-soft/80 text-sm sm:text-base max-w-md leading-relaxed">
          {product.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onOpen(product)}
            className="text-sm text-ivory-soft underline underline-offset-4 decoration-gold hover:text-gold-light transition-colors"
          >
            View details
          </button>
          <a
            href={productWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 ${barColor} text-ivory-soft px-4 py-2 rounded-full text-sm font-medium`}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
