import { motion } from 'framer-motion'

export default function DemoVideo() {
  return (
    <section id="demo" className="relative px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Demo</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            See It In Action
          </h2>
          <p className="mt-5 text-base text-[#A0A0B0] sm:text-lg">
            Watch how our AI receptionist handles real calls and books appointments automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass glow-ring mx-auto mt-14 max-w-[800px] overflow-hidden rounded-2xl p-1.5"
        >
          <div className="relative h-0 w-full overflow-hidden rounded-xl" style={{ paddingBottom: '64.98194945848375%' }}>
            <iframe
              src="https://www.loom.com/embed/c50c653d691f40cf863b8737ea336789"
              title="Mobashir Ali — AI Receptionist demo"
              frameBorder="0"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
