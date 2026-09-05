import { Instagram, Facebook } from 'lucide-react'
import { BUSINESS_CONFIG, PHONE_NUMBER } from '../data/config'
import { generalWhatsAppLink, telLink } from '../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-ivory-soft/80">
      <div className="max-w-content mx-auto container-px py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-ivory-soft text-xl">{BUSINESS_CONFIG.brandName}</p>
          <p className="mt-3 text-sm leading-relaxed">{BUSINESS_CONFIG.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={BUSINESS_CONFIG.social.instagram}
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-ivory-soft/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_CONFIG.social.facebook}
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-ivory-soft/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-ivory-soft font-medium mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-gold-light transition-colors">Home</a></li>
            <li><a href="#dry-fruits" className="hover:text-gold-light transition-colors">Dry Fruits</a></li>
            <li><a href="#masalas" className="hover:text-gold-light transition-colors">Masalas</a></li>
            <li><a href="#regional-specials" className="hover:text-gold-light transition-colors">Regional Specials</a></li>
            <li><a href="#our-story" className="hover:text-gold-light transition-colors">Our Story</a></li>
            <li><a href="#contact" className="hover:text-gold-light transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-ivory-soft font-medium mb-4">Products</p>
          <ul className="space-y-2 text-sm">
            <li>Dry Fruits</li>
            <li>Masalas</li>
            <li>Whole Spices</li>
            <li>Regional Specials</li>
          </ul>
        </div>

        <div>
          <p className="text-ivory-soft font-medium mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li><a href={telLink(PHONE_NUMBER)} className="hover:text-gold-light transition-colors">{PHONE_NUMBER}</a></li>
            <li>
              <a
                href={generalWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold-light transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" /> Order directly through WhatsApp
              </a>
            </li>
            <li>Mon–Sat: {BUSINESS_CONFIG.hours.weekdays}</li>
            <li>Sun: {BUSINESS_CONFIG.hours.sunday}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory-soft/10 py-5">
        <p className="max-w-content mx-auto container-px text-xs text-ivory-soft/50">
          © {year} {BUSINESS_CONFIG.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
