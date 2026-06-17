import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Soft radial sprite so each node reads as a glowing dot.
function makeGlowTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,250,240,1)')
  g.addColorStop(0.25, 'rgba(230,206,150,0.85)')
  g.addColorStop(1, 'rgba(198,160,92,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

const GOLD = new THREE.Color('#C6A05C')
const GOLD_LIGHT = new THREE.Color('#E6CE96')

export default function ParticleNetwork({ count = 70, bounds = [15, 8, 3], linkDist = 3.1 }) {
  const pointsRef = useRef()
  const linesRef = useRef()
  const fadeRef = useRef(1)
  const { size } = useThree()

  const glow = useMemo(() => makeGlowTexture(), [])

  // Node state: positions + velocities + per-node color.
  const nodes = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const [bx, by, bz] = bounds
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * bx
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * by
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * bz
      velocities[i * 3] = (Math.random() * 2 - 1) * 0.18
      velocities[i * 3 + 1] = (Math.random() * 2 - 1) * 0.18
      velocities[i * 3 + 2] = (Math.random() * 2 - 1) * 0.1
      const c = GOLD.clone().lerp(GOLD_LIGHT, Math.random())
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, velocities, colors }
  }, [count, bounds])

  // Preallocated buffers for the connecting lines.
  const maxSegments = count * 8
  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxSegments * 2 * 3), 3))
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(maxSegments * 2 * 3), 3))
    geo.setDrawRange(0, 0)
    return geo
  }, [maxSegments])

  const pointGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(nodes.positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(nodes.colors, 3))
    return geo
  }, [nodes])

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05)
    const { positions, velocities } = nodes
    const [bx, by, bz] = bounds

    // Drift nodes and bounce inside the box.
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      positions[ix] += velocities[ix] * dt
      positions[ix + 1] += velocities[ix + 1] * dt
      positions[ix + 2] += velocities[ix + 2] * dt
      if (positions[ix] > bx || positions[ix] < -bx) velocities[ix] *= -1
      if (positions[ix + 1] > by || positions[ix + 1] < -by) velocities[ix + 1] *= -1
      if (positions[ix + 2] > bz || positions[ix + 2] < -bz) velocities[ix + 2] *= -1
    }
    pointGeo.attributes.position.needsUpdate = true

    // Rebuild connections within range.
    const linePos = lineGeo.attributes.position.array
    const lineCol = lineGeo.attributes.color.array
    let seg = 0
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      for (let j = i + 1; j < count; j++) {
        if (seg >= maxSegments) break
        const jx = j * 3
        const dx = positions[ix] - positions[jx]
        const dy = positions[ix + 1] - positions[jx + 1]
        const dz = positions[ix + 2] - positions[jx + 2]
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (d < linkDist) {
          const a = (1 - d / linkDist) * 0.5 // intensity → additive brightness
          const o = seg * 6
          linePos[o] = positions[ix]
          linePos[o + 1] = positions[ix + 1]
          linePos[o + 2] = positions[ix + 2]
          linePos[o + 3] = positions[jx]
          linePos[o + 4] = positions[jx + 1]
          linePos[o + 5] = positions[jx + 2]
          // Tint lines champagne gold, scaled by closeness.
          lineCol[o] = 0.78 * a
          lineCol[o + 1] = 0.63 * a
          lineCol[o + 2] = 0.36 * a
          lineCol[o + 3] = 0.9 * a
          lineCol[o + 4] = 0.81 * a
          lineCol[o + 5] = 0.59 * a
          seg++
        }
      }
    }
    lineGeo.setDrawRange(0, seg * 2)
    lineGeo.attributes.position.needsUpdate = true
    lineGeo.attributes.color.needsUpdate = true

    // Fade the whole network out as the hero scrolls away.
    const vh = window.innerHeight || size.height || 800
    const target = Math.max(0, 1 - window.scrollY / (vh * 0.9))
    fadeRef.current += (target - fadeRef.current) * 0.1
    if (pointsRef.current) pointsRef.current.material.opacity = fadeRef.current
    if (linesRef.current) linesRef.current.material.opacity = fadeRef.current
  })

  return (
    <group>
      <points ref={pointsRef} geometry={pointGeo}>
        <pointsMaterial
          map={glow}
          size={0.55}
          sizeAttenuation
          vertexColors
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={1}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  )
}
