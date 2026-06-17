import { EMAIL, BRAND } from '../constants.js'

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2.5 font-serif text-sm font-semibold text-cream">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-gold-light to-gold text-xs font-black text-charcoal-950">
            M
          </span>
          {BRAND}
        </div>

        <p className="text-sm text-sand">© 2025 {BRAND}. All rights reserved.</p>

        <a
          href={`mailto:${EMAIL}`}
          className="text-sm text-sand transition-colors hover:text-cream"
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  )
}
