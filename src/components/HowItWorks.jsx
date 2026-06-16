import { motion } from 'framer-motion'

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6.5 3h2l1.2 4-1.6 1.2a12 12 0 0 0 5.7 5.7l1.2-1.6 4 1.2v2a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BuildIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="m14.7 6.3 3 3M3 21l3.8-.8 11-11a2.1 2.1 0 0 0-3-3l-11 11L3 21Zm14-9 1.6-1.6a2.4 2.4 0 0 0-3.4-3.4L13.6 8.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RelaxIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12a7 7 0 1 1 14 0M3 12h18M8 12v1a4 4 0 0 0 8 0v-1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const steps = [
  {
    icon: PhoneIcon,
    title: 'Book a Free Demo Call',
    description: 'We understand your business needs.',
  },
  {
    icon: BuildIcon,
    title: 'We Build & Set Up',
    description: 'Your AI receptionist or website is ready in days.',
  },
  {
    icon: RelaxIcon,
    title: 'You Sit Back',
    description: 'Your system runs, books, and converts automatically.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-glow">How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Up and running in three simple steps
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden md:block">
            <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="grid h-[72px] w-[72px] place-items-center rounded-2xl border border-white/10 bg-ink-800 text-accent-glow shadow-xl shadow-black/40">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-accent-glow to-accent text-xs font-bold text-white shadow-lg shadow-accent/40">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-slate-400">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
