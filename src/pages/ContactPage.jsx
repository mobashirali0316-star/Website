import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'
import { CALENDLY_URL, EMAIL } from '../constants.js'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      console.log('Form submitted:', formData)
      setSuccess(true)
      // Clear form
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <>
      <SEO 
        title="Contact Mobashir Ali" 
        description="Get in touch to build AI voice receptionists or custom websites. Access Calendly booking or send a direct email message."
      />

      <section className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-left">
            <p className="typography-mono-eyebrow text-mute mb-3">// Contact</p>
            <h1 className="font-sans typography-heading-lg md:text-5xl text-ink font-semibold">
              Let's build something together.
            </h1>
            <p className="typography-body-lg text-body mt-4 max-w-2xl">
              Have questions about how a custom AI voice receptionist integrates with your phone line, or need a fast personal website? Get in touch.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-12 items-start">
            {/* Form Column */}
            <div className="md:col-span-7 bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-12 h-12 rounded-full bg-link-soft text-link flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="typography-heading-md text-ink font-semibold mb-2">Message Sent</h3>
                  <p className="typography-body-md text-body">
                    Thanks for reaching out! I'll get back to you personally within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm text-link hover:underline font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block typography-label-sm text-ink font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-canvas-elevated border border-hairline rounded-sm px-4 py-2.5 typography-body-md text-ink focus:outline-none focus:border-link transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block typography-label-sm text-ink font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-canvas-elevated border border-hairline rounded-sm px-4 py-2.5 typography-body-md text-ink focus:outline-none focus:border-link transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block typography-label-sm text-ink font-semibold mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what system you need built..."
                      className="w-full bg-canvas-elevated border border-hairline rounded-sm px-4 py-2.5 typography-body-md text-ink focus:outline-none focus:border-link transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-8 py-3 transition-colors font-medium border border-primary w-full text-center"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Links Column */}
            <div className="md:col-span-5 space-y-8">
              {/* Calendly Booking Card */}
              <div className="bg-canvas-elevated border border-hairline rounded-md p-6 whisper-shadow">
                <span className="typography-mono-eyebrow text-link">STRATEGY MEETING</span>
                <h3 className="typography-heading-md text-ink font-semibold mt-4 mb-3">Book Into My Calendar</h3>
                <p className="typography-body-md text-body mb-6">
                  Want to skip the form? Select an open slot directly in my calendar for a quick 20-minute strategy call.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-active-scale bg-canvas-elevated hover:bg-hairline-soft/80 text-ink border border-hairline typography-button-md rounded-sm px-5 py-2.5 transition-colors font-medium inline-block text-center w-full"
                >
                  Schedule Strategy Call
                </a>
              </div>

              {/* Direct email card */}
              <div className="bg-canvas-elevated border border-hairline rounded-md p-6 whisper-shadow">
                <span className="typography-mono-eyebrow text-mute">DIRECT INQUIRIES</span>
                <h3 className="typography-heading-md text-ink font-semibold mt-4 mb-2">Send an Email</h3>
                <p className="typography-body-md text-body mb-6">
                  For support, questions, or custom inquiries, email me directly at:
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="typography-body-md text-link hover:underline font-semibold block"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
