import { motion } from 'framer-motion'
import { CALENDLY_URL } from '../constants.js'

export default function Services() {
  return (
    <section id="services" className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
      <div className="w-full max-w-7xl">
        {/* Section Title Block */}
        <div className="mb-16 text-left">
          <p className="typography-mono-eyebrow text-mute mb-3">// 01 / Core Capabilities</p>
          <h2 className="font-sans typography-heading-lg text-ink font-semibold">
            Two systems built to run your business for you
          </h2>
        </div>

        {/* Features Card Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: AI Receptionist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="typography-mono-eyebrow text-link bg-link-soft/40 px-2 py-0.5 rounded-sm">
                  Active Agent
                </span>
                <span className="text-xs text-mute font-mono">receptionist.config.json</span>
              </div>
              <h3 className="typography-heading-md text-ink font-semibold mb-4">
                AI Receptionist
              </h3>
              <p className="typography-body-md text-body mb-8">
                Stop losing customers to voicemail. Our AI agent takes incoming calls, schedules patient bookings directly into CRM/Calendly, and triggers immediate SMS confirmation workflows — 24/7.
              </p>

              {/* Code Illustration */}
              <div className="bg-canvas border border-hairline rounded-md p-4 mb-8 font-mono text-xs text-body leading-relaxed">
                <p className="text-pink">{"{"}</p>
                <p className="pl-4"><span className="text-cyan">"name"</span>: <span className="text-link">"AI Patient Coordinator"</span>,</p>
                <p className="pl-4"><span className="text-cyan">"voice"</span>: <span className="text-link">"neural-en-us"</span>,</p>
                <p className="pl-4"><span className="text-cyan">"integrations"</span>: <span className="text-link">["Calendly", "HubSpot", "Zapier"]</span>,</p>
                <p className="pl-4"><span className="text-cyan">"answeringRate"</span>: <span className="text-link">"100%"</span></p>
                <p className="text-pink">{"}"}</p>
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-active-scale bg-canvas-elevated hover:bg-hairline-soft/80 text-ink border border-hairline typography-button-md rounded-sm py-2 text-center transition-colors font-medium w-full"
            >
              Test AI Flow
            </a>
          </motion.div>

          {/* Card 2: Custom Websites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="typography-mono-eyebrow text-violet bg-violet-soft/30 px-2 py-0.5 rounded-sm">
                  Web-Core
                </span>
                <span className="text-xs text-mute font-mono">lighthouse.metrics.log</span>
              </div>
              <h3 className="typography-heading-md text-ink font-semibold mb-4">
                Custom Websites
              </h3>
              <p className="typography-body-md text-body mb-8">
                Fast, responsive websites engineered with static rendering and optimal design structures. Built explicitly for dental clinics and local businesses to maximize customer conversions.
              </p>

              {/* Lighthouse illustration */}
              <div className="border border-hairline rounded-md p-4 mb-8 bg-canvas flex flex-col gap-3 font-mono text-xs">
                <div className="flex justify-between items-center text-mute border-b border-hairline pb-2">
                  <span>Lighthouse Audit</span>
                  <span className="text-green-600 font-bold">100% Passed</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center pt-1">
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full border-2 border-green-500 text-green-600 font-bold flex items-center justify-center text-[10px]">100</span>
                    <span className="text-[10px] text-mute mt-1.5 font-sans">Perf</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full border-2 border-green-500 text-green-600 font-bold flex items-center justify-center text-[10px]">100</span>
                    <span className="text-[10px] text-mute mt-1.5 font-sans">Access</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full border-2 border-green-500 text-green-600 font-bold flex items-center justify-center text-[10px]">100</span>
                    <span className="text-[10px] text-mute mt-1.5 font-sans">Best P.</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="w-8 h-8 rounded-full border-2 border-green-500 text-green-600 font-bold flex items-center justify-center text-[10px]">100</span>
                    <span className="text-[10px] text-mute mt-1.5 font-sans">SEO</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-active-scale bg-canvas-elevated hover:bg-hairline-soft/80 text-ink border border-hairline typography-button-md rounded-sm py-2 text-center transition-colors font-medium w-full"
            >
              See Code Showcase
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
