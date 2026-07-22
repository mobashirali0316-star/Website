import SEO from '../components/SEO.jsx'
import { BRAND } from '../constants.js'

export default function Terms() {
  return (
    <>
      <SEO 
        title={`Terms & Conditions | ${BRAND}`}
        description="Minimal service scope guidelines, payment structures, liability disclaimers, and site usage policies."
      />

      <section className="bg-canvas text-ink py-20 px-6 md:px-8 flex flex-col items-center font-sans">
        <div className="w-full max-w-3xl">
          <div className="mb-12 border-b border-hairline pb-8">
            <span className="typography-mono-eyebrow text-mute">// LEGAL AGREEMENTS</span>
            <h1 className="typography-heading-lg text-ink font-semibold mt-3 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xs text-mute font-mono">
              Last Updated: July 22, 2026
            </p>
          </div>

          <div className="space-y-8 typography-body-md text-body leading-relaxed">
            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing this website ({BRAND}) or hiring me for services, you agree to these minimal, straightforward terms. I believe in mutual respect and clear expectations without bloated legal disclaimers.
              </p>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">2. Service Scope</h2>
              <p>
                I build and deploy custom React websites, integrate AI receptionists (voice/chat assistants), and configure CRM connections. Exact milestones, integrations, and training guidelines are agreed upon in writing before project kickoff.
              </p>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">3. Payments & Milestones</h2>
              <p>
                Unless stated otherwise, client work relies on flat-rate pricing structures:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 mt-2">
                <li><strong className="text-ink">50% Deposit:</strong> Paid upfront to secure the project slot and cover initialization.</li>
                <li><strong className="text-ink">50% Final Payment:</strong> Paid upon final demo signoff and before transfer of code assets or deployment to your hosting server.</li>
              </ul>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">4. Intellectual Property</h2>
              <p>
                Once final payment is cleared, you receive full ownership of the frontend code files, visual components, and content assets created specifically for your website. The designs, code framework, and content on this portfolio itself remain my intellectual property.
              </p>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">5. Uptime & Liability Disclaimer</h2>
              <p>
                I configure, integrate, and verify systems carefully. However, since websites and voice systems rely on third-party hosting services (like Vercel, Twilio, Vapi, OpenAI), I cannot guarantee 100% uptime of these vendor networks and cannot be held liable for external platform outages.
              </p>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">6. Governing Scope</h2>
              <p>
                These terms are governed by standard local business practices. Any disputes or revisions will be handled in good faith directly between us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
