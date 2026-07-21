import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import { CALENDLY_URL } from '../constants.js'

export default function About() {
  return (
    <>
      <SEO 
        title="About Mobashir Ali" 
        description="Learn about Mobashir Ali, a B.Tech CSE (AI/ML) student and solopreneur who designs and deploys custom digital systems for local businesses."
      />

      <section className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="mb-12 text-left">
            <p className="typography-mono-eyebrow text-mute mb-3">// About Me</p>
            <h1 className="font-sans typography-heading-lg md:text-5xl text-ink font-semibold">
              First-year student, full-time builder.
            </h1>
          </div>

          {/* Personal Bio Narrative */}
          <div className="typography-body-lg text-body space-y-6 leading-relaxed">
            <p>
              Hi, I'm Mobashir Ali. I am currently a first-year <strong>B.Tech Computer Science Engineering</strong> student, specializing in <strong>Artificial Intelligence and Machine Learning (AI/ML)</strong>. 
            </p>
            <p>
              Alongside my university curriculum, I work as an independent solopreneur. I design, program, and maintain high-performance digital systems — specifically voice-based AI receptionists and speed-optimized websites — for dental practices, local small offices, and independent businesses.
            </p>
            <p>
              I started this brand because I noticed local businesses losing customers simply due to missed phone calls or slow-loading websites built on outdated templates. By crafting custom software and training intelligent voice agents, I give small business owners the automated support they need to book appointments while they sleep.
            </p>
            <p>
              My approach focuses on simplicity and performance: zero bloated page builders, clean semantic code, and concrete integrations that deliver clear business outcomes.
            </p>
          </div>

          {/* Core Technical Values */}
          <div className="mt-16 border-t border-hairline pt-10">
            <h2 className="typography-heading-md text-ink font-semibold mb-6">Technical Focus</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-canvas-elevated border border-hairline rounded-md p-5 whisper-shadow">
                <h3 className="typography-label-sm text-ink font-semibold mb-2">Voice AI Integrations</h3>
                <p className="typography-body-sm text-body">
                  Low-latency voice processing and API integrations to sync customer scheduling requests with real-time calendars.
                </p>
              </div>
              <div className="bg-canvas-elevated border border-hairline rounded-md p-5 whisper-shadow">
                <h3 className="typography-label-sm text-ink font-semibold mb-2">Clean Frontend Stack</h3>
                <p className="typography-body-sm text-body">
                  Static React interfaces styled with clean styling utilities to ensure high page speed scores and search engine indexing.
                </p>
              </div>
            </div>
          </div>

          {/* About Call To Action */}
          <div className="mt-16 border-t border-hairline pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="typography-label-sm text-ink font-semibold">Want to collaborate?</h3>
              <p className="typography-body-sm text-mute mt-1">Book a free strategy session to discuss website speeds or AI coordination.</p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-md rounded-sm px-6 py-2.5 transition-colors font-medium inline-block text-center border border-primary"
            >
              Book Strategy Session
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
