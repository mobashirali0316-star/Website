import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import { CALENDLY_URL } from '../constants.js'

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Services & Systems" 
        description="Explore concrete digital automation systems: custom AI receptionist agents and speed-optimized, high-converting local websites."
      />

      <section className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-left">
            <p className="typography-mono-eyebrow text-mute mb-3">// Services</p>
            <h1 className="font-sans typography-heading-lg md:text-5xl text-ink font-semibold">
              Concrete business systems, zero fluff.
            </h1>
            <p className="typography-body-lg text-body mt-4 max-w-2xl">
              I specialize in designing and deploying two core systems that solve the most common small business bottlenecks: missed calls and low website conversions.
            </p>
          </div>

          {/* Detailed Services Grid */}
          <div className="grid gap-12">
            {/* Service 1: AI Receptionist */}
            <div className="bg-canvas-elevated border border-hairline rounded-md p-8 whisper-shadow grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7">
                <span className="typography-mono-eyebrow text-link bg-link-soft/40 px-2 py-0.5 rounded-sm">AI AUTOMATION</span>
                <h2 className="typography-heading-md text-ink font-semibold mt-4 mb-4">AI Voice & Chat Receptionist</h2>
                <p className="typography-body-md text-body leading-relaxed mb-6">
                  Every missed call is a missed customer. I train custom AI agents to act as your office receptionists. They answer practice phone calls in natural voices, respond to patient questions about your services/hours/policies, and book open slots directly into your calendar.
                </p>
                <ul className="text-sm text-body space-y-3 font-sans list-disc list-inside mb-6">
                  <li>Runs 24/7 to catch after-hours inquiries and emergency bookings</li>
                  <li>Directly syncs appointments into your scheduling software (Calendly, CRM)</li>
                  <li>Sends instant follow-up SMS messages with booking confirmations</li>
                  <li>No extra phone line equipment or staffing overhead required</li>
                </ul>
              </div>
              <div className="md:col-span-5 bg-canvas border border-hairline rounded-md p-5 font-mono text-xs text-mute space-y-3">
                <p className="text-ink">// receptionist-schema.json</p>
                <div className="space-y-1">
                  <p><span className="text-cyan">"activeHours"</span>: <span className="text-link">"24/7/365"</span>,</p>
                  <p><span className="text-cyan">"voiceProcessing"</span>: <span className="text-link">"low-latency"</span>,</p>
                  <p><span className="text-cyan">"bookingSystem"</span>: <span className="text-link">"api-integrated"</span>,</p>
                  <p><span className="text-cyan">"smsAlertOnSuccess"</span>: <span className="text-link">true</span></p>
                </div>
              </div>
            </div>

            {/* Service 2: Custom Websites */}
            <div className="bg-canvas-elevated border border-hairline rounded-md p-8 whisper-shadow grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7">
                <span className="typography-mono-eyebrow text-violet bg-violet-soft/30 px-2 py-0.5 rounded-sm">WEB DEVELOPMENT</span>
                <h2 className="typography-heading-md text-ink font-semibold mt-4 mb-4">Speed & SEO Optimized Websites</h2>
                <p className="typography-body-md text-body leading-relaxed mb-6">
                  Many business websites look decent but load slowly and fail to convert traffic. I code custom websites by hand without bulky templates. They are optimized for maximum page speed (critical for Google rankings) and structured layout flows to guide visitors into calling or booking.
                </p>
                <ul className="text-sm text-body space-y-3 font-sans list-disc list-inside mb-6">
                  <li>Static-rendered frontend to ensure sub-second page loads</li>
                  <li>Responsive layout design optimized for mobile bookings</li>
                  <li>Clean semantic HTML and local SEO structure to rank on search results</li>
                  <li>Zero bloated page builders, plugins, or security vulnerabilities</li>
                </ul>
              </div>
              <div className="md:col-span-5 bg-canvas border border-hairline rounded-md p-5 font-mono text-xs text-mute space-y-2">
                <p className="text-ink">// Lighthouse Performance Logs</p>
                <p className="text-green-600">✓ Page Speed: 99/100</p>
                <p className="text-green-600">✓ Mobile Responsiveness: 100/100</p>
                <p className="text-green-600">✓ Search Engine Indexing: 100/100</p>
                <p className="text-green-600">✓ Accessibility Compliance: 100/100</p>
              </div>
            </div>
          </div>

          {/* Interactive Demo Video Walkthrough */}
          <div className="mt-16 bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow">
            <span className="typography-mono-eyebrow text-mute">// LIVE DEMO</span>
            <h2 className="typography-heading-md text-ink font-semibold mt-2 mb-4">AI Receptionist Demonstration</h2>
            <p className="typography-body-md text-body mb-8 max-w-2xl">
              Watch how the voice agent answers customer calls, handles dental clinic bookings, and syncs calendar entries automatically in this 3-minute video walkthrough.
            </p>
            
            {/* Browser Mockup */}
            <div className="bg-canvas border border-hairline rounded-md overflow-hidden floating-shadow mx-auto max-w-[760px]">
              <div className="h-10 bg-canvas-elevated border-b border-hairline flex items-center px-4 justify-between">
                <div className="flex items-center gap-1.5 w-1/4">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                
                <div className="bg-canvas border border-hairline rounded-sm text-[10px] text-mute font-mono px-3 py-1 w-2/4 text-center select-none truncate">
                  https://api.mobashir.ali/demo_receptionist
                </div>
                
                <div className="w-1/4" />
              </div>

               {/* Loom Video Frame */}
               <div className="relative h-0 w-full overflow-hidden" style={{ paddingBottom: '64.98194945848375%' }}>
                 <iframe
                   src="https://www.loom.com/embed/c50c653d691f40cf863b8737ea336789"
                   frameBorder="0"
                   // React supports these standard and custom attributes for iframe:
                   allowFullScreen
                   // Webkit and Mozilla fullscreen attributes
                   {...{
                     webkitallowfullscreen: "true",
                     mozallowfullscreen: "true"
                   }}
                   style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                   className="border-0"
                 />
               </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div className="mt-16 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-8 py-3.5 transition-colors font-medium inline-block border border-primary"
            >
              Book a Setup Demo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
