import { motion } from 'framer-motion'
import SEO from '../components/SEO.jsx'

const projects = [
  {
    type: 'LIVE SAAS APP',
    title: 'RentDivider',
    description: 'A roommate rent division application that solves the problem of splitting rent fairly. Roommates input details like room square footage, windows, private bathrooms, and walk-in closets, and the system runs an algorithm to compute a fair price distribution.',
    stack: ['React', 'Tailwind CSS', 'Vite', 'Algorithm splitting'],
    url: 'https://rentdivider.com',
    linkText: 'rentdivider.com',
    imageWebp: '/portfolio/rentdivider.webp',
    imagePng: '/portfolio/rentdivider.png',
  },
  {
    type: 'PROTOTYPE DEMO BUILD',
    title: 'Good Day Bakery',
    description: 'A speed-optimized bakery catalog interface. Developed honestly as a high-fidelity design prototype to demonstrate interactive shopping carts, animations, and Lighthouse speed audits, rather than a live customer deployment.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    url: 'https://goodday-eight.vercel.app',
    linkText: 'goodday-eight.vercel.app',
    imageWebp: '/portfolio/goodday-bakery.webp',
    imagePng: '/portfolio/goodday-bakery.png',
  },
]

export default function Portfolio() {
  return (
    <>
      <SEO 
        title="Portfolio & Case Studies" 
        description="Browse the personal portfolio projects of Mobashir Ali. Including RentDivider and high-performance Web prototypes."
      />

      <section className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-left">
            <p className="typography-mono-eyebrow text-mute mb-3">// Projects</p>
            <h1 className="font-sans typography-heading-lg md:text-5xl text-ink font-semibold">
              Real projects, built with purpose.
            </h1>
            <p className="typography-body-lg text-body mt-4 max-w-2xl">
              I believe in building software that is fast, accessible, and solves a real problem. Here are the projects I have designed, coded, and deployed.
            </p>
          </div>

          {/* Projects List */}
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
                className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="typography-mono-eyebrow text-mute text-[10px]">
                      {project.type}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-link" />
                  </div>

                  {/* Card Preview Image */}
                  <div className="w-full h-48 overflow-hidden rounded-sm border border-hairline mb-6 bg-canvas">
                    <picture>
                      <source srcSet={project.imageWebp} type="image/webp" />
                      <img
                        src={project.imagePng}
                        alt={`${project.title} Screenshot`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                      />
                    </picture>
                  </div>

                  <h2 className="typography-heading-md text-ink font-semibold mb-3">
                    {project.title}
                  </h2>
                  <p className="typography-body-md text-body mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-mute bg-hairline-soft border border-hairline px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Link */}
                <div className="border-t border-hairline pt-4 mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link hover:text-link-deep transition-colors typography-body-md font-semibold inline-flex items-center gap-1.5"
                  >
                    <span>Visit: {project.linkText}</span>
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Empty card slot for future work */}
            <div className="bg-canvas-elevated/50 border border-dashed border-hairline rounded-md p-6 md:p-8 flex flex-col items-center justify-center text-center text-mute min-h-[220px]">
              <span className="typography-mono-eyebrow">// FUTURE WORK</span>
              <p className="typography-body-sm mt-3 max-w-xs leading-relaxed">
                Currently building custom patient coordinator reception systems. New case studies will be posted here once live.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
