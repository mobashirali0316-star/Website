import { Link } from 'react-router-dom'
import { EMAIL, BRAND } from '../constants.js'

export default function Footer() {
  return (
    <footer className="bg-canvas text-body border-t border-hairline pt-16 pb-12 px-6 md:px-8 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-hairline">
          {/* Column 1: Navigation */}
          <div>
            <h4 className="typography-label-sm text-ink font-semibold mb-4">Explore</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/services" className="typography-body-md text-body hover:text-ink transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="typography-body-md text-body hover:text-ink transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="typography-body-md text-body hover:text-ink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="typography-body-md text-body hover:text-ink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Direct CTAs */}
          <div>
            <h4 className="typography-label-sm text-ink font-semibold mb-4 font-sans">Connect</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`mailto:${EMAIL}`} className="typography-body-md text-body hover:text-ink transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li>
                <Link to="/contact" className="typography-body-md text-body hover:text-ink transition-colors">
                  Book a Strategy Call
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Remaining columns empty to align structure or for descriptions */}
          <div className="md:col-span-2 text-left md:text-right flex flex-col md:items-end justify-between">
            <div>
              <h4 className="typography-label-sm text-ink font-semibold mb-2">{BRAND}</h4>
              <p className="typography-body-sm text-mute max-w-xs leading-relaxed">
                Building AI voice receptionists and custom static websites for local small businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Row at Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-mute">
          <div className="typography-body-sm">
            Copyright © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 typography-body-sm">
            <span className="hover:text-ink cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-ink cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
