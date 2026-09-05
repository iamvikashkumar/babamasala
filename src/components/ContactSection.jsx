import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { BUSINESS_CONFIG, PHONE_NUMBER } from '../data/config'
import { generalWhatsAppLink, telLink } from '../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-ivory-soft py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-content mx-auto container-px grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="We're happy to help"
            description="Reach out for products, pack sizes, gifting or bulk orders — whichever way suits you."
          />

          <div className="mt-8 space-y-4">
            <ContactRow icon={Phone} label="Phone" value={PHONE_NUMBER} href={telLink(PHONE_NUMBER)} />
            <ContactRow
              icon={WhatsAppIcon}
              label="WhatsApp"
              value="Chat with us"
              href={generalWhatsAppLink()}
              external
            />
            <ContactRow icon={Mail} label="Email" value={BUSINESS_CONFIG.email} href={`mailto:${BUSINESS_CONFIG.email}`} />
            <ContactRow icon={MapPin} label="Address" value={BUSINESS_CONFIG.address} />
            <ContactRow
              icon={Clock}
              label="Business Hours"
              value={`Mon–Sat: ${BUSINESS_CONFIG.hours.weekdays}  •  Sun: ${BUSINESS_CONFIG.hours.sunday}`}
            />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-ink/10 min-h-[280px] bg-ivory-deep flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin className="w-8 h-8 text-gold-dark mx-auto mb-3" strokeWidth={1.5} />
            <p className="text-ink-soft text-sm">
              Map placeholder — replace with an embedded map once your store address is confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-ivory-deep text-forest shrink-0">
        <Icon className="w-4 h-4" />
      </span>
      <div>
        <p className="text-xs text-gold-dark font-medium">{label}</p>
        <p className="text-ink font-medium">{value}</p>
      </div>
    </div>
  )

  if (!href) return content

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="block hover:opacity-80 transition-opacity"
    >
      {content}
    </a>
  )
}
