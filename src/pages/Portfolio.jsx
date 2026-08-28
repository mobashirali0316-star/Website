import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO.jsx'

const projects = [
  {
    type: 'AI CAMPUS MANAGEMENT',
    title: 'Campus360 AI',
    description: 'An intelligent classroom and campus resource optimizer for B.Tech students. It helps users find suitable campus resources based on requirements such as classroom capacity, equipment, and availability.',
    stack: ['AI', 'Campus Management', 'Resource Optimization'],
    url: 'https://campus360-ai.vercel.app',
    linkText: 'campus360-ai.vercel.app',
    imageWebp: '/portfolio/campus360-optimizer.png',
    imagePng: '/portfolio/campus360-optimizer.png',
    category: 'AI / Campus Management'
  },
  {
    type: 'LIVE SAAS APP',
    title: 'RentDivider',
    description: 'A roommate rent division application that solves the problem of splitting rent fairly. Roommates input details like room square footage, windows, private bathrooms, and walk-in closets, and the system runs an algorithm to compute a fair price distribution.',
    stack: ['React', 'Tailwind CSS', 'Vite', 'Algorithm splitting'],
    url: 'https://rentdivider.com',
    linkText: 'rentdivider.com',
    imageWebp: '/portfolio/rentdivider.webp',
    imagePng: '/portfolio/rentdivider.png',
    category: 'AI & SaaS'
  },
  {
    type: 'UTILITY WEB APP',
    title: 'Presento | Attendance Tracker',
    description: 'A clean, intuitive student attendance tracker designed to streamline presence logging, analytics, and group tracking for class coordinators and organizations.',
    stack: ['Next.js', 'React', 'Firebase', 'Tailwind CSS', 'Recharts'],
    url: 'https://presentov2.vercel.app/',
    linkText: 'presentov2.vercel.app',
    imageWebp: '/portfolio/presento.png',
    imagePng: '/portfolio/presento.png',
    category: 'AI & SaaS'
  },
  {
    type: 'CLIENT WEBSITE',
    title: 'VK Dental Care',
    description: 'A high-converting dental practice website optimized for Maxillofacial Surgery and Dental Implants in Bangalore, featuring clean booking call-to-actions, visual treatment cards, and full SEO.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'],
    url: 'https://vk-dental-blue.vercel.app/',
    linkText: 'vk-dental-blue.vercel.app',
    imageWebp: '/portfolio/vk-dental.jpg',
    imagePng: '/portfolio/vk-dental.jpg',
    category: 'Dental Clinics'
  },
  {
    type: 'CLIENT WEBSITE',
    title: 'Revive Dental Clinic',
    description: 'A premium aesthetic dentistry portal for Revive Dental & Facial Cosmetic Clinic in Rajajinagar, Bengaluru. Custom layout optimized for patient intake, smile design gallery, and reviews.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Aesthetic Branding'],
    url: 'https://revive-dental-hazel.vercel.app/',
    linkText: 'revive-dental-hazel.vercel.app',
    imageWebp: '/portfolio/revive-dental.jpg',
    imagePng: '/portfolio/revive-dental.jpg',
    category: 'Dental Clinics'
  },
  {
    type: 'CLIENT WEBSITE',
    title: 'Kubek Family Dentistry',
    description: 'Gentle family and cosmetic dentistry site for Downtown Louisville clinic. Optimized for local search discovery, emergency consultation inquiries, and interactive patient resources.',
    stack: ['Astro', 'Tailwind CSS', 'Framer Motion', 'Markdown Articles'],
    url: 'https://kubek-denral-care.vercel.app/',
    linkText: 'kubek-denral-care.vercel.app',
    imageWebp: '/portfolio/kubek-dental.jpg',
    imagePng: '/portfolio/kubek-dental.jpg',
    category: 'Dental Clinics'
  },
  {
    type: 'E-COMMERCE CATALOG',
    title: 'Good Day Sweets & Bakers',
    description: 'A modern online catalog and ordering system for a premium sweets and artisan bakery in Gorakhpur. Promotes WhatsApp ordering and showcases visual product collections.',
    stack: ['React', 'Tailwind CSS', 'WhatsApp API Integration', 'Framer Motion'],
    url: 'https://goodday-v2-beige.vercel.app/',
    linkText: 'goodday-v2-beige.vercel.app',
    imageWebp: '/portfolio/goodday-v2.png',
    imagePng: '/portfolio/goodday-v2.png',
    category: 'E-commerce & Web'
  },
  {
    type: 'CORPORATE WEBSITE',
    title: 'HPGK Infra',
    description: "Corporate portal for India's trusted infrastructure development and civil construction company, showcasing 250+ projects, machinery fleet specs, and safety audit charts.",
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Precision Layouts'],
    url: 'https://infra-script-studio.vercel.app/',
    linkText: 'infra-script-studio.vercel.app',
    imageWebp: '/portfolio/hpgk.png',
    imagePng: '/portfolio/hpgk.png',
    category: 'Corporate & Real Estate'
  },
  {
    type: 'REAL ESTATE PORTAL',
    title: 'Arbit Infratel',
    description: 'A RERA-registered real estate developer portal in Gorakhpur. Displays commercial and residential property options with location maps, financial tools, and sales query pipelines.',
    stack: ['React', 'Tailwind CSS', 'Google Maps API', 'Leads Sync'],
    url: 'https://arbit-infratel-pvt-limited.vercel.app/',
    linkText: 'arbit-infratel-pvt-limited.vercel.app',
    imageWebp: '/portfolio/arbit-infratel.jpg',
    imagePng: '/portfolio/arbit-infratel.jpg',
    category: 'Corporate & Real Estate'
  }
]

const categories = ['All', 'AI & SaaS', 'AI / Campus Management', 'Dental Clinics', 'Corporate & Real Estate', 'E-commerce & Web']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <SEO 
        title="Portfolio & Case Studies" 
        description="Browse the personal portfolio projects of Mobashir Ali. Including RentDivider, AI products, dental clinic web systems, and real estate portals."
      />

      <section className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-left">
            <p className="typography-mono-eyebrow text-mute mb-3">// Projects</p>
            <h1 className="font-sans typography-heading-lg md:text-5xl text-ink font-semibold">
              Real projects, built with purpose.
            </h1>
            <p className="typography-body-lg text-body mt-4 max-w-2xl">
              I believe in building software that is fast, accessible, and solves a real problem. Here are the projects I have designed, coded, and deployed.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 pb-6 border-b border-hairline justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'bg-ink text-canvas border-ink shadow-sm'
                    : 'bg-canvas text-mute border-hairline hover:text-ink hover:border-mute'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects List Grid */}
          <motion.div 
            layout
            className="grid gap-8 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={`${project.title}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 15 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
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
                        <source srcSet={project.imageWebp} />
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
            </AnimatePresence>

            {/* Empty card slot for future work */}
            <motion.div 
              layout
              className="bg-canvas-elevated/50 border border-dashed border-hairline rounded-md p-6 md:p-8 flex flex-col items-center justify-center text-center text-mute min-h-[220px]"
            >
              <span className="typography-mono-eyebrow">// FUTURE WORK</span>
              <p className="typography-body-sm mt-3 max-w-xs leading-relaxed">
                Currently building custom patient coordinator reception systems. New case studies will be posted here once live.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

