import { motion } from 'framer-motion'
import { CALENDLY_URL, EMAIL } from '../constants.js'

export default function Contact() {
  return (
    <section id="contact" className="bg-canvas text-ink py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
      <div className="w-full max-w-4xl text-center flex flex-col items-center">
        {/* Technical Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="typography-mono-eyebrow text-mute mb-5"
        >
          // GET IN TOUCH
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="font-sans typography-heading-lg md:text-5xl text-ink font-semibold"
        >
          Ready to automate your business?
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="typography-body-lg text-body max-w-xl mt-4"
        >
          Book a free 20-minute demo call. We will walk you through live custom integrations. No pressure, no contracts.
        </motion.p>

        {/* Pill Marketing CTA & Email link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-8 py-3.5 shadow-sm transition-colors font-medium border border-primary"
          >
            Book a Free Demo
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="typography-body-md text-mute hover:text-ink transition-colors font-medium underline"
          >
            {EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
