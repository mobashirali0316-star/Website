import { motion } from 'framer-motion'
import { PhoneCall, Wrench, Coffee } from 'lucide-react'

const steps = [
  {
    icon: PhoneCall,
    title: 'Book a Free Demo Call',
    description: 'We understand your business needs in a quick 20-minute call.',
  },
  {
    icon: Wrench,
    title: 'We Build & Set Up',
    description: 'Your AI receptionist or website is ready within days, fully configured.',
  },
  {
    icon: Coffee,
    title: 'You Sit Back',
    description: 'Your system runs, books, and converts automatically around the clock.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-luxe text-gold">How It Works</p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Up and running in three simple steps
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* Desktop: horizontal line that draws across on scroll */}
          <div className="absolute left-0 right-0 top-9 hidden px-[16%] md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-px w-full bg-gradient-to-r from-gold-deep via-gold-light to-gold-deep"
            />
          </div>

          {/* Mobile: vertical line that draws down on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute bottom-24 left-1/2 top-4 w-px -translate-x-1/2 bg-gradient-to-b from-gold-deep via-gold-light to-gold-deep md:hidden"
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="grid h-[72px] w-[72px] place-items-center rounded-2xl border border-gold/15 bg-charcoal-800 text-gold-light shadow-xl shadow-black/40">
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold font-serif text-xs font-bold text-charcoal-950 shadow-lg shadow-gold/30">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-sand">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
