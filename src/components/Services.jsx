import { motion } from 'framer-motion'
import { Headset, Globe } from 'lucide-react'

const services = [
  {
    icon: Headset,
    title: 'AI Receptionist',
    description:
      'Never miss a call or appointment again. Our AI handles patient calls, answers questions, and books appointments 24/7 — without hiring extra staff.',
  },
  {
    icon: Globe,
    title: 'Custom Websites',
    description:
      'Fast, modern websites built for local US businesses. Designed to convert visitors into customers — not just look good.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-luxe text-gold">What We Build</p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Two systems that run your business for you
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="group glass relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_0_34px_-6px_rgba(198,160,92,0.35)] sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold-deep/10 text-gold-light ring-1 ring-inset ring-gold/20">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>

                <h3 className="relative font-serif text-2xl font-bold text-cream">{service.title}</h3>
                <p className="relative mt-4 text-base leading-relaxed text-sand">{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
