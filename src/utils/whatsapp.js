import { WHATSAPP_NUMBER } from '../data/config'

/**
 * Build a wa.me link with an encoded pre-filled message.
 */
export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

/**
 * Generic "browse the site" enquiry message.
 */
export function generalWhatsAppLink() {
  return buildWhatsAppLink(
    'Hello! I would like to know more about your products and place an order.'
  )
}

/**
 * Per-product enquiry message.
 */
export function productWhatsAppLink(productName) {
  return buildWhatsAppLink(
    `Hello, I am interested in ${productName}. Please share the available pack sizes and price.`
  )
}

/**
 * Bulk / wholesale enquiry message.
 */
export function bulkWhatsAppLink() {
  return buildWhatsAppLink(
    'Hello! I am enquiring about bulk / wholesale quantities. Could you share more details on pricing and minimum order quantities?'
  )
}

export function telLink(phoneNumber) {
  return `tel:${phoneNumber}`
}
