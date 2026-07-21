import { motion } from 'framer-motion'

export default function DemoVideo() {
  return (
    <section id="demo" className="bg-canvas py-24 px-6 md:px-8 border-b border-hairline flex flex-col items-center">
      <div className="w-full max-w-5xl">
        {/* Header Block */}
        <div className="mb-12 text-left">
          <p className="typography-mono-eyebrow text-mute mb-3">// 04 / Video Walkthrough</p>
          <h2 className="font-sans typography-heading-lg text-ink font-semibold">
            See it in action
          </h2>
          <p className="typography-body-md text-body mt-4 max-w-2xl">
            Watch how our AI receptionist answers customer questions, handles clinic bookings, and syncs calendar entries automatically in this quick 3-minute demo.
          </p>
        </div>

        {/* Video Player Display Chassis - Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="bg-canvas-elevated border border-hairline rounded-md overflow-hidden floating-shadow mx-auto max-w-[800px]"
        >
          {/* Mock Browser Header */}
          <div className="h-10 bg-canvas border-b border-hairline flex items-center px-4 justify-between">
            <div className="flex items-center gap-1.5 w-1/4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            
            {/* Simulated Address Bar */}
            <div className="bg-canvas-elevated border border-hairline rounded-sm text-[10px] text-mute font-mono px-3 py-1 w-2/4 text-center select-none truncate">
              https://api.mobashir.ali/demo_receptionist
            </div>
            
            <div className="w-1/4" />
          </div>

          {/* Iframe content */}
          <div className="relative h-0 w-full overflow-hidden" style={{ paddingBottom: '64.98%' }}>
            <iframe
              src="https://www.loom.com/embed/c50c653d691f40cf863b8737ea336789"
              title="Mobashir Ali — AI Receptionist demo"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
