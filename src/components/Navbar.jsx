import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { CALENDLY_URL, BRAND } from '../constants.js'

const links = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    if (saved === 'light') {
      document.documentElement.classList.add('light')
      setTheme('light')
    } else {
      document.documentElement.classList.remove('light')
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-canvas border-b border-hairline font-sans flex items-center">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Vercel-style branding */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2.5 text-[16px] font-semibold tracking-[-0.4px] text-ink hover:opacity-80 transition-opacity"
        >
          {/* Vercel Triangle Monogram */}
          <svg className="w-[18px] h-[16px] fill-current" viewBox="0 0 116 100">
            <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
          </svg>
          <span className="font-semibold uppercase tracking-tight">{BRAND}</span>
        </Link>

        {/* Center menu links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="typography-body-md text-body hover:text-ink hover:bg-hairline-soft/80 rounded-full px-3 py-1.5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Button & Theme Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="btn-active-scale w-8 h-8 rounded-full border border-hairline bg-canvas-elevated hover:bg-hairline-soft/80 flex items-center justify-center text-ink transition-colors"
          >
            {theme === 'dark' ? (
              <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            ) : (
              <svg className="w-[16px] h-[16px] stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-active-scale bg-primary hover:bg-ink/90 text-on-primary typography-button-md rounded-sm px-3.5 py-1.5 transition-colors font-medium border border-primary hidden sm:inline-block"
          >
            Book Demo
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 md:hidden text-ink"
          >
            <span
              className={`block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                mobileOpen ? 'translate-y-[6px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-current transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-current transition-transform duration-200 ${
                mobileOpen ? '-translate-y-[6px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 inset-x-0 overflow-hidden bg-canvas border-b border-hairline md:hidden flex flex-col px-6 py-4 gap-1"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[15px] font-medium text-body border-b border-hairline/50 last:border-0 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
