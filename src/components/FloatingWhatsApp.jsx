import WhatsAppIcon from './WhatsAppIcon'
import { generalWhatsAppLink } from '../utils/whatsapp'

export default function FloatingWhatsApp() {
  return (
    <a
      href={generalWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-30 items-center justify-center w-14 h-14 rounded-full bg-forest text-ivory-soft shadow-xl hover:bg-forest-light transition-colors"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  )
}
