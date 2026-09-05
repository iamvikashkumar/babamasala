import { Phone, MessageSquareText } from 'lucide-react'
import { PHONE_NUMBER } from '../data/config'
import { generalWhatsAppLink, telLink } from '../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-ivory-soft border-t border-ink/10 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-3">
        <a
          href={telLink(PHONE_NUMBER)}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft"
        >
          <Phone className="w-5 h-5" strokeWidth={1.75} />
          <span className="text-[11px] font-medium">Call</span>
        </a>
        <a
          href={generalWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 bg-forest text-ivory-soft"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <a
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-ink-soft"
        >
          <MessageSquareText className="w-5 h-5" strokeWidth={1.75} />
          <span className="text-[11px] font-medium">Enquire</span>
        </a>
      </div>
    </div>
  )
}
