import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { CALENDLY_URL } from '../constants.js'

export default function Home() {
  return (
    <>
      <SEO 
        title="AI Receptionists & Custom Websites" 
        description="I build custom AI receptionists and high-converting websites for dental clinics and local small businesses to run operations on autopilot."
      />

      {/* HERO SECTION */}
      <section className="relative bg-canvas text-ink pt-32 pb-24 px-6 md:px-8 overflow-hidden flex flex-col items-center geist-mesh-gradient border-b border-hairline">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="typography-mono-eyebrow text-mute mb-5 flex items-center gap-2"
          >
            <span>//</span>
            <span>Mobashir Ali — Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="font-sans typography-display-xl md:text-6xl text-ink font-semibold"
          >
            I build AI receptionists & custom websites that run your business on autopilot.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="mt-6 max-w-2xl text-body typography-body-lg text-base md:text-lg leading-relaxed"
          >
            Hi, I'm Mobashir. I design and code high-converting websites and custom AI voice receptionists for dental clinics and small businesses so they never miss a customer call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
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
            <Link
              to="/portfolio"
              className="btn-active-scale bg-canvas-elevated hover:bg-hairline-soft/80 text-ink border border-hairline typography-button-lg rounded-pill px-8 py-3.5 transition-colors w-full sm:w-auto font-medium"
            >
              See Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Visual System Flowchart Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="w-full max-w-3xl mt-16 bg-canvas-elevated border border-hairline rounded-md floating-shadow overflow-hidden flex flex-col text-left"
        >
          {/* Header Panel */}
          <div className="h-10 bg-canvas border-b border-hairline flex items-center justify-between px-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-mute" />
              <span className="text-xs text-mute font-mono tracking-wide uppercase">// AUTOMATION FLOWPIPELINE</span>
            </div>
            <span className="text-xs text-link font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-link rounded-full animate-ping" />
              ACTIVE SYSTEM
            </span>
          </div>

          {/* Flowchart Nodes */}
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 bg-canvas-elevated">
            {/* Node 1: Customer Call */}
            <div className="w-full md:w-1/3 bg-canvas border border-hairline rounded-sm p-5 whisper-shadow text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-hairline-soft border border-hairline flex items-center justify-center text-ink mb-3">
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h4 className="typography-label-sm text-ink font-semibold mb-1">1. Customer Call</h4>
              <p className="text-xs text-mute font-sans leading-relaxed">
                Patient calls practice phone lines. Caught instantly by AI.
              </p>
            </div>

            {/* Connection Arrow 1 */}
            <div className="hidden md:flex flex-col items-center justify-center text-mute select-none px-2">
              <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Node 2: AI Voice Router */}
            <div className="w-full md:w-1/3 bg-canvas border border-hairline rounded-sm p-5 whisper-shadow text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-link-soft/20 border border-hairline flex items-center justify-center text-link mb-3">
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </div>
              <h4 className="typography-label-sm text-ink font-semibold mb-1">2. AI Voice Assistant</h4>
              <p className="text-xs text-mute font-sans leading-relaxed">
                Processes questions and intent using low-latency LLMs.
              </p>
            </div>

            {/* Connection Arrow 2 */}
            <div className="hidden md:flex flex-col items-center justify-center text-mute select-none px-2">
              <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>

            {/* Node 3: Calendar Sync */}
            <div className="w-full md:w-1/3 bg-canvas border border-hairline rounded-sm p-5 whisper-shadow text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-hairline-soft border border-hairline flex items-center justify-center text-green-500 mb-3">
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h4 className="typography-label-sm text-ink font-semibold mb-1">3. Automated Sync</h4>
              <p className="text-xs text-mute font-sans leading-relaxed">
                Books appointment directly to calendar and triggers SMS alerts.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section className="bg-canvas py-20 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-4xl text-center">
          <p className="typography-mono-eyebrow text-mute mb-3">// Demonstration</p>
          <h2 className="font-sans typography-heading-lg text-ink font-semibold mb-6">
            See the AI receptionist in action
          </h2>
          <p className="typography-body-md text-body mb-10 max-w-xl mx-auto leading-relaxed">
            Watch this quick walkthrough to see how the voice agent answers customer calls, answers FAQs, and books appointments automatically.
          </p>
          
          {/* Browser Mockup */}
          <div className="bg-canvas border border-hairline rounded-md overflow-hidden floating-shadow mx-auto max-w-[760px] text-left">
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
            <div 
              dangerouslySetInnerHTML={{
                __html: `<div style="position: relative; padding-bottom: 64.98194945848375%; height: 0;"><iframe src="https://www.loom.com/embed/c50c653d691f40cf863b8737ea336789" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICES TEASER SECTION */}
      <section className="bg-canvas py-20 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="typography-mono-eyebrow text-mute mb-3">// Services</p>
              <h2 className="font-sans typography-heading-lg text-ink font-semibold">
                What I Build
              </h2>
            </div>
            <Link
              to="/services"
              className="text-link hover:text-link-deep transition-colors typography-body-md font-medium mt-4 md:mt-0 inline-flex items-center gap-1"
            >
              View all services <span>→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow">
              <h3 className="typography-heading-md text-ink font-semibold mb-3">AI Receptionist</h3>
              <p className="typography-body-md text-body mb-6">
                Voice agents that answer practice calls 24/7, answer common questions, and book scheduling slots directly into your CRM.
              </p>
              <Link to="/services" className="text-link hover:underline typography-body-md font-medium">
                Learn more
              </Link>
            </div>
            <div className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow">
              <h3 className="typography-heading-md text-ink font-semibold mb-3">Custom Websites</h3>
              <p className="typography-body-md text-body mb-6">
                Fast, responsive static websites built specifically for dentists, lawyers, and local businesses to maximize visitor conversion.
              </p>
              <Link to="/services" className="text-link hover:underline typography-body-md font-medium">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER SECTION */}
      <section className="bg-canvas py-20 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="typography-mono-eyebrow text-mute mb-3">// Portfolio</p>
              <h2 className="font-sans typography-heading-lg text-ink font-semibold">
                Featured Case Studies
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-link hover:text-link-deep transition-colors typography-body-md font-medium mt-4 md:mt-0 inline-flex items-center gap-1"
            >
              See all case studies <span>→</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* RentDivider Teaser */}
            <div className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow flex flex-col justify-between">
              <div>
                <span className="typography-mono-eyebrow text-mute text-[10px]">LIVE SAAS PROJECT</span>
                <div className="w-full h-40 overflow-hidden rounded-sm border border-hairline my-4 bg-canvas">
                  <picture>
                    <source srcSet="/portfolio/rentdivider.webp" type="image/webp" />
                    <img
                      src="/portfolio/rentdivider.png"
                      alt="RentDivider Screenshot"
                      loading="lazy"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    />
                  </picture>
                </div>
                <h3 className="typography-heading-md text-ink font-semibold mb-3">RentDivider</h3>
                <p className="typography-body-md text-body mb-6">
                  An algorithm-based helper that calculates how roommates should split rent fairly based on room sizes and facilities.
                </p>
              </div>
              <Link to="/portfolio" className="text-link hover:underline typography-body-md font-medium mt-auto">
                View project details
              </Link>
            </div>

            {/* Good Day Bakery Teaser */}
            <div className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow flex flex-col justify-between">
              <div>
                <span className="typography-mono-eyebrow text-mute text-[10px]">DEMO PROTOTYPE</span>
                <div className="w-full h-40 overflow-hidden rounded-sm border border-hairline my-4 bg-canvas">
                  <picture>
                    <source srcSet="/portfolio/goodday-bakery.webp" type="image/webp" />
                    <img
                      src="/portfolio/goodday-bakery.png"
                      alt="Good Day Bakery Screenshot"
                      loading="lazy"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    />
                  </picture>
                </div>
                <h3 className="typography-heading-md text-ink font-semibold mb-3">Good Day Bakery</h3>
                <p className="typography-body-md text-body mb-6">
                  A high-speed prototype bakery interface displaying responsive product cards, shopping carts, and conversion audits.
                </p>
              </div>
              <Link to="/portfolio" className="text-link hover:underline typography-body-md font-medium mt-auto">
                View project details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-canvas text-ink py-20 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-4xl text-center flex flex-col items-center">
          <p className="typography-mono-eyebrow text-mute mb-5">// Work with me</p>
          <h2 className="font-sans typography-heading-lg md:text-5xl text-ink font-semibold">
            Ready to automate your small business?
          </h2>
          <p className="typography-body-lg text-body max-w-xl mt-4">
            Book a 20-minute strategy session with me to see how we can set up custom receptionists or deploy a fast-loading website.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-8 py-3.5 transition-colors font-medium border border-primary"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
