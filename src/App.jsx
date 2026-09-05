import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Categories from './components/Categories'
import DryFruitsSection from './components/DryFruitsSection'
import MasalaSection from './components/MasalaSection'
import ArchDivider from './components/ArchDivider'
import RegionalSpecials from './components/RegionalSpecials'
import WholeSpicesSection from './components/WholeSpicesSection'
import QualityStory from './components/QualityStory'
import WhyChooseUs from './components/WhyChooseUs'
import BulkOrder from './components/BulkOrder'
import Testimonials from './components/Testimonials'
import WhatsAppCTA from './components/WhatsAppCTA'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import SearchOverlay from './components/SearchOverlay'
import ProductModal from './components/ProductModal'

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <div className="pb-16 md:pb-0">
      <AnnouncementBar />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />

      <main>
        <Hero />
        <TrustStrip />
        <Categories />

        <DryFruitsSection onOpenProduct={setActiveProduct} />
        <ArchDivider fromColor="#F3EAD8" toColor="#1F3D2B" />

        <MasalaSection onOpenProduct={setActiveProduct} />
        <ArchDivider fromColor="#1F3D2B" toColor="#F3EAD8" />

        <RegionalSpecials onOpenProduct={setActiveProduct} />
        <WholeSpicesSection onOpenProduct={setActiveProduct} />

        <QualityStory />
        <WhyChooseUs />
        <BulkOrder />
        <Testimonials />
        <WhatsAppCTA />
        <ContactSection />
      </main>

      <Footer />

      <MobileActionBar />
      <FloatingWhatsApp />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={setActiveProduct}
      />
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
    </div>
  )
}
