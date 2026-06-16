import { motion } from 'framer-motion'
import { CALENDLY_URL } from '../constants.js'

function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Base radial glow */}
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      {/* Floating orbs */}
      <div className="absolute left-[12%] top-[30%] h-72 w-72 animate-float rounded-full bg-indigo-600/20 blur-[100px]" />
      <div
        className="absolute right-[10%] top-[18%] h-80 w-80 animate-float rounded-full bg-violet-500/20 blur-[120px]"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-[5%] left-1/2 h-72 w-[480px] -translate-x-1/2 animate-float rounded-full bg-blue-600/10 blur-[120px]"
        style={{ animationDelay: '4s' }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />
      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  )
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-5 pt-24 sm:px-8">
      <GradientMesh />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          AI automation for US businesses
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Your Business,{' '}
          <span className="bg-gradient-to-r from-accent-glow via-violet-400 to-accent bg-clip-text text-transparent">
            Running on Autopilot
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-pretty text-base text-slate-400 sm:text-lg md:text-xl"
        >
          AI Receptionist and custom websites that work while you sleep — built for US businesses.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent-glow to-accent px-8 py-4 text-base font-semibold text-white shadow-xl shadow-accent/30 transition-transform hover:scale-[1.03] sm:w-auto"
          >
            Book a Free Demo
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => scrollTo(e, '#how-it-works')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
          >
            See How It Works
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="block h-1.5 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  )
}
