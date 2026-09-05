import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ImageWithFallback from './ImageWithFallback'
import WhatsAppIcon from './WhatsAppIcon'
import { generalWhatsAppLink } from '../utils/whatsapp'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-forest-dark">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80&auto=format&fit=crop"
          alt="An arrangement of Indian spices and dry fruits in wooden bowls"
          theme="forest"
          className="w-full h-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="absolute inset-0 bg-forest-dark/30" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-content mx-auto container-px py-28 sm:py-36 lg:py-48 flex flex-col items-start"
      >
        <motion.span variants={item} className="section-label text-gold-light mb-4">
          Since the source, to your kitchen
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-ivory-soft text-4xl sm:text-6xl lg:text-7xl leading-[1.08] max-w-3xl"
        >
          Authentic Flavours.
          <br />
          Naturally Premium.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-ivory-soft/85 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          From carefully selected dry fruits to traditional Indian masalas,
          discover quality ingredients sourced for authentic taste.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#dry-fruits"
            className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-ink px-7 py-3.5 rounded-full font-medium transition-colors"
          >
            Explore Our Collection
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={generalWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-ivory-soft/40 text-ivory-soft px-7 py-3.5 rounded-full font-medium hover:bg-ivory-soft/10 transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Order on WhatsApp
          </a>
        </motion.div>

        <motion.p variants={item} className="mt-10 text-ivory-soft/70 text-sm tracking-wide">
          Premium Quality &nbsp;•&nbsp; Carefully Sourced &nbsp;•&nbsp; Freshly Packed
        </motion.p>
      </motion.div>
    </section>
  )
}
