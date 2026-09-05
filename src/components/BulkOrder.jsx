import { Phone } from 'lucide-react'
import { PHONE_NUMBER } from '../data/config'
import { bulkWhatsAppLink, telLink } from '../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function BulkOrder() {
  return (
    <section className="bg-burgundy py-16 sm:py-20">
      <div className="max-w-content mx-auto container-px flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="font-display text-ivory-soft text-3xl sm:text-4xl leading-tight">
            Buying in Bulk?
          </h2>
          <p className="mt-4 text-ivory-soft/85 leading-relaxed">
            Looking for larger quantities for your business, restaurant, events, gifting or
            distribution? Get in touch with us for bulk requirements.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <a
            href={telLink(PHONE_NUMBER)}
            className="inline-flex items-center justify-center gap-2 border border-ivory-soft/40 text-ivory-soft px-6 py-3.5 rounded-full font-medium hover:bg-ivory-soft/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call for Bulk Enquiry
          </a>
          <a
            href={bulkWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3.5 rounded-full font-medium hover:bg-gold-light transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp for Bulk Order
          </a>
        </div>
      </div>
    </section>
  )
}
