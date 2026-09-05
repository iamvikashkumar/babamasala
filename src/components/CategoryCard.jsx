import { ArrowUpRight } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'

const ACCENT_TEXT = {
  gold: 'text-gold-light',
  forest: 'text-ivory-deep',
  burgundy: 'text-ivory-deep',
}

export default function CategoryCard({ category, size = 'md' }) {
  const isLarge = size === 'lg'

  return (
    <a
      href={category.anchor}
      className={`group relative block overflow-hidden rounded-2xl shrink-0 ${
        isLarge ? 'aspect-[4/5] sm:aspect-[16/11]' : 'aspect-[4/5]'
      } w-[72vw] sm:w-auto snap-start`}
    >
      <ImageWithFallback
        src={category.image}
        alt={category.name}
        theme={category.accent}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
        <span className={`section-label ${ACCENT_TEXT[category.accent] || 'text-gold-light'} mb-1 not-italic text-xs sm:text-sm`}>
          {category.tagline}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="font-display text-ivory-soft text-xl sm:text-2xl">{category.name}</h3>
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-ivory-soft/15 text-ivory-soft group-hover:bg-gold group-hover:text-ink transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </a>
  )
}
