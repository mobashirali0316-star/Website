import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import { BRAND, CALENDLY_URL } from '../constants.js'

const faqs = [
  {
    question: "What is an AI receptionist for small business, and how does it work?",
    answer: "An AI receptionist for small business is an automated phone answering system powered by advanced voice AI (Large Language Models). Unlike old press-button menus or basic robocalls, our AI voice agents converse in natural language, answer custom practice FAQs, capture caller contact details, and sync bookings directly into your scheduling software or CRM in real-time. It operates 24/7, meaning you never miss a patient call or inquiry again."
  },
  {
    question: "How does the voice agent integrate with my existing scheduling or CRM tools?",
    answer: "Our voice systems connect directly with standard scheduling APIs (like Calendly, Acuity, or custom medical CRMs) and databases. When a caller asks to book an appointment, the AI voice agent instantly checks your live calendar slots, reads options to the caller, takes their selection, registers the booking, and sends an automated SMS confirmation. The entire synchronization takes under 2 seconds, running seamlessly in the background."
  },
  {
    question: "What does 'custom website for local business' mean, and why is it faster?",
    answer: "Most local business websites are built using heavy templates, page builders, or standard CMS plugins that bloat loading speeds and hurt Google rankings. A custom website for local business from us means we hand-code the frontend from scratch using lightweight, static React frameworks. By eliminating databases and server-side compile lags, pages load in under 1 second, scoring 99+ on Google Lighthouse metrics and ensuring maximum search engine indexing."
  },
  {
    question: "What are your pricing structures and project timelines?",
    answer: "We structure our fees based on project complexity. Custom speed-optimized websites are delivered within 2-3 weeks at a flat project rate. AI Receptionist setups depend on the volume of FAQ training data and call minutes, typically launching within 14 days of script approval. We provide transparent upfront quotes without long-term locks."
  },
  {
    question: "Who are these automation tools and custom sites built for?",
    answer: "Our solutions are custom-built for local service businesses, dental clinics, law practices, medical offices, and solo practitioner offices. Any business that loses revenue due to missed calls or slow-loading landing pages will benefit significantly from our 24/7 call answering service and optimized web platforms."
  },
  {
    question: "How do I get started with setting up an AI receptionist or new site?",
    answer: "Getting started is simple. Select a time on our Calendly scheduler to book a free 15-minute setup demo. We will analyze your current phone workflows and web performance, outline an integration plan tailored to your practice, and demonstrate a live voice call agent setup."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SEO 
        title={`Frequently Asked Questions | ${BRAND}`}
        description="Find answers to common questions about setting up an AI receptionist for small business, custom websites, integrations, pricing, and project timelines."
      />

      <section className="bg-canvas text-ink py-20 px-6 md:px-8 flex flex-col items-center font-sans">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-16">
            <span className="typography-mono-eyebrow text-mute">// HELP & KNOWLEDGE</span>
            <h1 className="typography-heading-lg text-ink font-semibold mt-3 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="typography-body-md text-body max-w-xl mx-auto leading-relaxed">
              Have questions about how the AI voice agents, websites, or integrations work? Find quick, direct answers below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div 
                  key={index}
                  className="bg-canvas-elevated border border-hairline rounded-md transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-hairline-soft/40 transition-colors"
                  >
                    <span className="typography-label-md text-ink font-medium pr-4">
                      {faq.question}
                    </span>
                    <span className="text-mute flex-shrink-0 transition-transform duration-200">
                      {isOpen ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-hairline pt-4 bg-canvas-elevated/40">
                      <p className="typography-body-md text-body leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Quick CTA */}
          <div className="mt-16 text-center border-t border-hairline pt-12">
            <h3 className="typography-heading-md text-ink font-semibold mb-3">Still have questions?</h3>
            <p className="typography-body-md text-body mb-6">
              Let's talk through your business requirements and set up a custom voice testing script.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-8 py-3 transition-colors font-medium inline-block border border-primary"
            >
              Book a Setup Demo
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
