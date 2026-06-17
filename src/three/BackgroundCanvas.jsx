import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import ParticleNetwork from './ParticleNetwork.jsx'
import FloatingShapes from './FloatingShapes.jsx'

function useEnvironment() {
  return useMemo(() => {
    if (typeof window === 'undefined') return { mobile: false, reduced: false }
    const mobile = window.matchMedia('(max-width: 768px)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return { mobile, reduced }
  }, [])
}

export default function BackgroundCanvas() {
  const { mobile, reduced } = useEnvironment()

  const particleCount = mobile ? 34 : 70
  const shapeCount = mobile ? 6 : 13

  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      camera={{ position: [0, 0, 14], fov: 55 }}
      dpr={[1, mobile ? 1.25 : 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      frameloop={reduced ? 'demand' : 'always'}
    >
      <fog attach="fog" args={['#050510', 12, 30]} />
      <Suspense fallback={null}>
        <ParticleNetwork count={particleCount} />
        <FloatingShapes count={shapeCount} />
      </Suspense>
    </Canvas>
  )
}
