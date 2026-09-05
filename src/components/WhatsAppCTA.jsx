import WhatsAppIcon from './WhatsAppIcon'
import { generalWhatsAppLink } from '../utils/whatsapp'

export default function WhatsAppCTA() {
  return (
    <section className="bg-forest py-16 sm:py-20">
      <div className="max-w-content mx-auto container-px flex flex-col items-center text-center">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-ivory-soft/10 text-ivory-soft mb-5">
          <WhatsAppIcon className="w-7 h-7" />
        </span>
        <h2 className="font-display text-ivory-soft text-3xl sm:text-4xl max-w-xl">
          Prefer to order the simple way?
        </h2>
        <p className="mt-4 text-ivory-soft/80 max-w-md leading-relaxed">
          Message us on WhatsApp with what you need — pack sizes, prices and availability, all in
          one conversation.
        </p>
        <a
          href={generalWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-ink px-8 py-3.5 rounded-full font-medium transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Chat With Us Now
        </a>
      </div>
    </section>
  )
}
