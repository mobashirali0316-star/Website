import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CALENDLY_URL } from '../constants.js'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-5 pt-24 sm:px-8">
      {/* Soft vignette that fades the 3D field into the page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent to-charcoal-950" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-luxe text-gold-light backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          AI automation for US businesses
        </motion.div>

        <motion.h1
          variants={item}
          className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-6xl md:text-7xl"
        >
          Your Business,{' '}
          <span className="text-shimmer italic">Running on Autopilot</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-2xl text-pretty text-base text-sand sm:text-lg md:text-xl"
        >
          AI Receptionist and custom websites that work while you sleep — built for US businesses.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-gold-light to-gold px-8 py-4 text-base font-semibold text-charcoal-950 shadow-xl shadow-gold/25 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Book a Free Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => scrollTo(e, '#how-it-works')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/25 bg-white/5 px-8 py-4 text-base font-semibold text-cream backdrop-blur transition-colors hover:border-gold/50 hover:bg-gold/10 sm:w-auto"
          >
            See How It Works
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-gold/25 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="block h-1.5 w-1 rounded-full bg-gold/70"
          />
        </div>
      </motion.div>
    </section>
  )
}
