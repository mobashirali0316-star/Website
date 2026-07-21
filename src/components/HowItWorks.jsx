import { motion } from 'framer-motion'
import { PhoneCall, Wrench, Coffee } from 'lucide-react'

const steps = [
  {
    tag: 'STEP_01_INQUIRY',
    title: 'Book Strategy Call',
    description: 'We align on your specific business goals, custom integrations, and CRM endpoints in a quick 20-minute strategy call.',
    code: 'curl -X GET https://api.mobashir.ali/strategy',
  },
  {
    tag: 'STEP_02_INTEGRATE',
    title: 'Build & Configure',
    description: 'We code your website templates or hook up the AI agent to your phone lines and CRM. Deployed to staging within days.',
    code: 'npm install @mobashir/ai-receptionist',
  },
  {
    tag: 'STEP_03_DEPLOY',
    title: 'Deploy & Run',
    description: 'Your receptionist goes live to route booking schedules and answer customer calls automatically around the clock.',
    code: 'vercel deploy --prod',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
      <div className="w-full max-w-7xl">
        {/* Header Block */}
        <div className="mb-16 text-left">
          <p className="typography-mono-eyebrow text-mute mb-3">// 02 / Integration Workflow</p>
          <h2 className="font-sans typography-heading-lg text-ink font-semibold">
            Up and running in three simple steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 1, 0.5, 1] }}
              className="bg-canvas-elevated border border-hairline rounded-md p-6 md:p-8 whisper-shadow flex flex-col justify-between"
            >
              <div>
                {/* Tech Step Variable */}
                <div className="flex justify-between items-center mb-6">
                  <span className="typography-mono-eyebrow text-mute">
                    {step.tag}
                  </span>
                  <span className="font-mono text-xs text-mute">0{i + 1}</span>
                </div>
                
                <h3 className="typography-heading-md text-ink font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="typography-body-md text-body mb-6 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Simulated Terminal command */}
              <div className="bg-canvas border border-hairline rounded-sm p-3 font-mono text-[11px] text-mute flex items-center justify-between mt-auto">
                <span className="truncate">{step.code}</span>
                <span className="text-[9px] text-link cursor-pointer hover:underline ml-2">COPY</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
