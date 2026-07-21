import { lazy, Suspense } from 'react'

// Lazy-load the WebGL bundle so the page paints before Three.js loads.
const BackgroundCanvas = lazy(() => import('./BackgroundCanvas.jsx'))

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Static gradient base — gives depth instantly and if WebGL is unavailable. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-5%,rgba(108,99,255,0.14),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_15%,rgba(0,212,255,0.07),transparent_60%)]" />
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>
    </div>
  )
}
