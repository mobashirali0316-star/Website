import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-canvas text-ink flex flex-col items-center justify-center px-6 text-center font-sans">
          <div className="max-w-md w-full flex flex-col items-center">
            {/* Vercel Error Monogram */}
            <div className="w-12 h-12 rounded-sm bg-error-deep/10 flex items-center justify-center text-error mb-8">
              <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            
            <h1 className="typography-heading-lg text-ink font-semibold mb-4">
              Something went wrong
            </h1>
            <p className="typography-body-md text-body mb-8 leading-relaxed">
              We encountered a runtime application error. Reload the page or head back to safety.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button
                onClick={() => window.location.reload()}
                className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-lg rounded-pill px-6 py-2.5 transition-colors font-medium border border-primary"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="btn-active-scale bg-canvas-elevated hover:bg-hairline-soft/80 text-ink border border-hairline typography-button-lg rounded-pill px-6 py-2.5 text-center transition-colors font-medium"
              >
                Back Home
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
