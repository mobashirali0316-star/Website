import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const COLORS = ['#6C63FF', '#00D4FF', '#4B47B3']
const TYPES = ['icosahedron', 'octahedron', 'torus']

// Deterministic pseudo-random so the layout is stable between renders.
function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function Geometry({ type }) {
  switch (type) {
    case 'octahedron':
      return <octahedronGeometry args={[1, 0]} />
    case 'torus':
      return <torusGeometry args={[0.8, 0.3, 8, 24]} />
    case 'icosahedron':
    default:
      return <icosahedronGeometry args={[1, 0]} />
  }
}

function Shape({ data }) {
  const meshRef = useRef()
  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05)
    if (meshRef.current) {
      meshRef.current.rotation.x += data.spin[0] * dt
      meshRef.current.rotation.y += data.spin[1] * dt
    }
  })
  return (
    <Float speed={data.floatSpeed} rotationIntensity={0.6} floatIntensity={0.8} position={data.position}>
      <mesh ref={meshRef} scale={data.scale}>
        <Geometry type={data.type} />
        <meshBasicMaterial wireframe color={data.color} transparent opacity={data.opacity} />
      </mesh>
    </Float>
  )
}

export default function FloatingShapes({ count = 13 }) {
  const groupRef = useRef()

  const shapes = useMemo(() => {
    const rand = mulberry32(20260617)
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        type: TYPES[Math.floor(rand() * TYPES.length)],
        color: COLORS[Math.floor(rand() * COLORS.length)],
        position: [
          (rand() * 2 - 1) * 13,
          (rand() * 2 - 1) * 7.5,
          -1 - rand() * 6,
        ],
        scale: 0.5 + rand() * 1.1,
        spin: [(rand() * 2 - 1) * 0.25, (rand() * 2 - 1) * 0.25],
        floatSpeed: 0.6 + rand() * 1.2,
        opacity: 0.12 + rand() * 0.1,
        depth: 0.0008 + rand() * 0.0022, // per-shape parallax factor
      })
    }
    return arr
  }, [count])

  // Subtle scroll parallax + gentle mouse parallax on the whole field.
  useFrame((state) => {
    const g = groupRef.current
    if (!g) return
    const scrollTarget = window.scrollY * 0.0016
    g.position.y += (scrollTarget - g.position.y) * 0.08
    // Drift slightly toward the pointer for a premium, responsive feel.
    g.rotation.y += (state.pointer.x * 0.12 - g.rotation.y) * 0.04
    g.rotation.x += (-state.pointer.y * 0.08 - g.rotation.x) * 0.04
  })

  return (
    <group ref={groupRef}>
      {shapes.map((data, i) => (
        <Shape key={i} data={data} />
      ))}
    </group>
  )
}
