import { motion } from 'framer-motion'
import { CALENDLY_URL, EMAIL } from '../constants.js'

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass glow-ring relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 md:py-20"
        >
          {/* Ambient glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-violet-500/20 blur-[130px]" />

          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to Automate Your Business?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
            Book a free 20-minute demo call. No pressure, no contracts.
          </p>

          <div className="relative mt-10 flex flex-col items-center gap-6">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-glow to-accent px-10 py-5 text-lg font-semibold text-white shadow-2xl shadow-accent/30 transition-transform hover:scale-[1.04]"
            >
              Book a Free Demo
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
