import { useState } from 'react'
import { Leaf } from 'lucide-react'

const FALLBACK_THEMES = {
  gold: 'from-gold/30 via-ivory-deep to-gold/10 text-gold-dark',
  forest: 'from-forest/25 via-ivory-deep to-forest/10 text-forest',
  burgundy: 'from-burgundy/25 via-ivory-deep to-burgundy/10 text-burgundy',
}

/**
 * Renders a remote product/category image, but falls back to an elegant
 * gradient swatch (instead of a broken image icon) if the URL fails to load.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  theme = 'gold',
  ...rest
}) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br ${FALLBACK_THEMES[theme] || FALLBACK_THEMES.gold} ${className}`}
      >
        <Leaf className="w-8 h-8 opacity-60" strokeWidth={1.5} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={className}
      {...rest}
    />
  )
}
