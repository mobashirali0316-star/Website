import { EMAIL, BRAND } from '../constants.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent-glow to-accent text-xs font-black text-white">
            M
          </span>
          {BRAND}
        </div>

        <p className="text-sm text-slate-500">© 2025 {BRAND}. All rights reserved.</p>

        <a
          href={`mailto:${EMAIL}`}
          className="text-sm text-slate-400 transition-colors hover:text-white"
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  )
}
