import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

export default function ErrorPage({ code = 500 }) {
  const is505 = code === 505
  const errorTitle = is505 ? 'HTTP Version Not Supported' : 'Something went wrong'
  const errorDesc = is505
    ? 'The server does not support the HTTP protocol version used in the request. Please return back to safety.'
    : 'We encountered a runtime application error. Please reload the page or head back to safety.'

  return (
    <>
      <SEO 
        title={`${code} - ${errorTitle}`} 
        description={errorDesc}
      />

      <div className="min-h-screen bg-canvas text-ink flex flex-col items-center justify-center px-6 text-center font-sans">
        <div className="max-w-md w-full flex flex-col items-center">
          {/* Vercel-style warning monogram */}
          <div className="w-12 h-12 rounded-sm bg-error-deep/10 flex items-center justify-center text-error mb-8 border border-error/30">
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <span className="typography-mono-eyebrow text-mute mb-2">ERROR_CODE: {code}_ERROR</span>
          <h1 className="typography-heading-lg text-ink font-semibold mb-4">
            {errorTitle}
          </h1>
          <p className="typography-body-md text-body mb-8 leading-relaxed">
            {errorDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => window.location.reload()}
              className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-6 py-2.5 transition-colors font-medium border border-primary"
            >
              Reload Page
            </button>
            <Link
              to="/"
              className="btn-active-scale bg-canvas-elevated hover:bg-hairline-soft/80 text-ink border border-hairline typography-button-lg rounded-pill px-6 py-2.5 text-center transition-colors font-medium"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
