import { Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section className="bg-ivory-deep py-16 sm:py-24">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading eyebrow="Customer Voices" title="What our customers say" align="center" />

        <div className="mt-10 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="shrink-0 w-[80vw] sm:w-auto snap-start bg-white/60 border border-ink/10 rounded-xl p-6 flex flex-col"
            >
              <Quote className="w-6 h-6 text-gold-dark mb-3" strokeWidth={1.5} />
              <blockquote className="text-ink-soft text-sm sm:text-base leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-ink/10">
                <p className="font-display text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft/70">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
