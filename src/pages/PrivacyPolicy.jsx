import SEO from '../components/SEO.jsx'
import { BRAND } from '../constants.js'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title={`Privacy Policy | ${BRAND}`}
        description="Transparent and honest privacy terms regarding what data we collect (contact forms, bookings, analytics) and how we protect it."
      />

      <section className="bg-canvas text-ink py-20 px-6 md:px-8 flex flex-col items-center font-sans">
        <div className="w-full max-w-3xl">
          <div className="mb-12 border-b border-hairline pb-8">
            <span className="typography-mono-eyebrow text-mute">// LEGAL AGREEMENTS</span>
            <h1 className="typography-heading-lg text-ink font-semibold mt-3 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs text-mute font-mono">
              Last Updated: July 22, 2026
            </p>
          </div>

          <div className="space-y-8 typography-body-md text-body leading-relaxed">
            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">1. Honest & Transparent Policy</h2>
              <p>
                This policy outlines how I handle data on my personal brand portfolio website ({BRAND}). I believe in minimal data collection and honest communication. No confusing corporate jargon or complex legal clauses.
              </p>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">2. What Data is Collected & Why</h2>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-ink">Contact Form Data:</strong> When you send a message, I collect your name, email, and description details to read, review, and reply directly.
                </li>
                <li>
                  <strong className="text-ink">Calendly Booking Info:</strong> If you schedule a demo call, Calendly processes your name, email, and time choices so we can synchronize our calendars.
                </li>
                <li>
                  <strong className="text-ink">Analytics Logs:</strong> I use standard Google Analytics to log general, anonymous traffic details (like page views, region, browser types) to analyze page speed and performance. No personal identifiers are logged.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">3. No Sharing or Selling</h2>
              <p>
                I will <strong className="text-ink">never</strong> sell, share, rent, or lease your personal information to third parties, advertising firms, or marketing companies. Your data is used exclusively to communicate with you about your projects and setups.
              </p>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">4. Security & Protection</h2>
              <p>
                I employ strict hosting guidelines on Vercel and secure connection protocols (HTTPS/SSL) to protect data transmissions. While no web transmission is 100% secure, your forms and inputs are never stored on public databases.
              </p>
            </div>

            <div>
              <h2 className="typography-heading-md text-ink font-semibold mb-3">5. Data Deletion Requests</h2>
              <p>
                You have complete ownership of your details. If you would like me to delete your contact form records or email communications, simply reach out to me directly at <a href="mailto:mobashirali0316@gmail.com" className="text-link hover:underline">mobashirali0316@gmail.com</a> and I will wipe them immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
