import { motion } from 'framer-motion'
import { CALENDLY_URL } from '../constants.js'

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const offset = 64
      const elementPosition = el.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="relative bg-canvas text-ink pt-32 pb-24 px-6 md:px-8 overflow-hidden flex flex-col items-center geist-mesh-gradient border-b border-hairline">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        {/* Technical Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="typography-mono-eyebrow text-mute mb-5 flex items-center gap-2"
        >
          <span>//</span>
          <span>US Business Automation Platform</span>
        </motion.div>

        {/* Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="font-sans typography-display-xl md:text-6xl text-ink font-semibold"
        >
          Your Business, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-mute font-bold">
            Running on Autopilot
          </span>
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="mt-6 max-w-2xl text-body typography-body-lg text-base md:text-lg"
        >
          AI Receptionist and custom websites that work while you sleep — built for US dental clinics and local businesses.
        </motion.p>

        {/* Pill Marketing CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          className="mt-8 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-8 py-3.5 transition-colors w-full sm:w-auto font-medium"
          >
            Book a Free Demo
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => handleScrollTo(e, '#how-it-works')}
            className="btn-active-scale bg-canvas-elevated hover:bg-hairline-soft/80 text-ink border border-hairline typography-button-lg rounded-pill px-8 py-3.5 transition-colors w-full sm:w-auto font-medium"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      {/* Elevated Terminal / Dashboard illustration showing live AI Logs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="w-full max-w-2xl mt-16 bg-canvas-elevated border border-hairline rounded-md floating-shadow overflow-hidden flex flex-col text-left font-mono"
      >
        {/* Dashboard Header Bar */}
        <div className="h-10 bg-canvas border-b border-hairline flex items-center justify-between px-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs text-mute font-sans tracking-wide">// AI-GATEWAY-CONSOLE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-link animate-pulse" />
            <span className="text-xs text-mute font-sans">LIVE</span>
          </div>
        </div>

        {/* Console Logs */}
        <div className="p-5 text-xs md:text-sm space-y-4 text-ink overflow-x-auto">
          <div>
            <span className="text-link">mobashir-ali-site ~ </span>
            <span className="text-mute">npm run start:receptionist</span>
          </div>
          <div className="text-mute border-l-2 border-hairline pl-3 space-y-2">
            <p className="text-ink">// Agent deployed to USA East Node (12 ms latency)</p>
            <p>Ready to route patient calendar bookings...</p>
            <p className="text-ink font-semibold">Incoming Call: +1 (312) 809-9021 [Dentist Inquiry]</p>
            <p className="text-link">↳ Intent Detected: Schedule Root Canal</p>
            <p className="text-ink">↳ Action: Sync with Calendly CRM (Dr. Jenkins Practice)</p>
            <p className="text-green-600 font-bold">↳ Status: 200 OK (Appointment Booked & Confirmed)</p>
          </div>
          <div className="border-t border-hairline pt-3 text-mute">
            <span className="text-link">mobashir-ali-site ~ </span>
            <span className="text-mute font-bold">System Status: Active (143 calls handled today, 0 missed)</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
