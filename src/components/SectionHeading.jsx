import { useReveal } from '../hooks/useReveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      {eyebrow && (
        <p className={`section-label mb-3 ${light ? 'text-gold-light' : 'text-gold-dark'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl leading-tight ${
          light ? 'text-ivory-soft' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-ivory-soft/80' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
