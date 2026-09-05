import { Award, Gem, Layers, Scale, PackageCheck, MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'

const REASONS = [
  {
    icon: Award,
    title: 'Premium Quality',
    text: 'Carefully selected ingredients.',
  },
  {
    icon: Gem,
    title: 'Authentic Taste',
    text: 'Traditional flavours preserved.',
  },
  {
    icon: Layers,
    title: 'Wide Variety',
    text: 'From everyday essentials to regional favourites.',
  },
  {
    icon: Scale,
    title: 'Multiple Pack Sizes',
    text: 'From small packs to bulk quantities.',
  },
  {
    icon: PackageCheck,
    title: 'Freshly Packed',
    text: 'Packed with care for freshness.',
  },
  {
    icon: MessageCircle,
    title: 'Personal Service',
    text: 'Easy ordering directly through WhatsApp.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory-soft py-16 sm:py-24">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading eyebrow="Why Choose Us" title="What sets our kitchen staples apart" />

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="p-5 sm:p-6 rounded-xl border border-ink/10 bg-white/50 hover:border-gold/50 transition-colors"
            >
              <Icon className="w-6 h-6 text-burgundy mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-base sm:text-lg text-ink">{title}</h3>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
