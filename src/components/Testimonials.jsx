import { motion } from 'framer-motion'

const reviews = [
  {
    quote: '“The AI receptionist books appointments while we sleep. We stopped losing after-hours calls almost overnight.”',
    author: 'Dr. Sarah Jenkins',
    role: 'Dental Practice Owner',
  },
  {
    quote: '“Our new site loads instantly and actually converts. Inquiries are up and it finally looks like the premium brand we wanted.”',
    author: 'James Vance',
    role: 'Law Firm Partner',
  },
  {
    quote: '“Setup was effortless. Within a week we had an AI agent that never sleeps, never misses a lead, and fits our branding.”',
    author: 'Elena Rostova',
    role: 'Med Spa Founder',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
      <div className="w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <p className="typography-mono-eyebrow text-mute mb-3">// 03 / Client Success</p>
          <h2 className="font-sans typography-heading-lg text-ink font-semibold">
            Trusted by US business owners
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
              className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 floating-shadow flex flex-col justify-between text-left"
            >
              {/* Star Rating (Minimalist Mute gray stars) */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-4 h-4 text-mute fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="typography-body-md text-body mb-8 italic leading-relaxed">
                {review.quote}
              </blockquote>

              {/* Author Info */}
              <figcaption className="border-t border-hairline pt-4 mt-auto">
                <div className="typography-label-sm text-ink font-semibold">
                  {review.author}
                </div>
                <div className="typography-body-sm text-mute mt-0.5">
                  {review.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
