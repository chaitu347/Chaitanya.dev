import { motion } from 'framer-motion'

// A handful of soft, outlined shapes that drift slowly in the background of
// a section. Pure decoration: absolutely positioned, no pointer events,
// low opacity ink-only strokes so it never fights with foreground content.
const SHAPES = {
  circles: [
    { size: 180, top: '8%', left: '82%', duration: 18 },
    { size: 90, top: '65%', left: '6%', duration: 14 },
    { size: 130, top: '30%', left: '4%', duration: 22 },
  ],
  plus: [
    { size: 22, top: '15%', left: '92%', duration: 10 },
    { size: 16, top: '75%', left: '88%', duration: 13 },
    { size: 18, top: '50%', left: '3%', duration: 16 },
  ],
  squares: [
    { size: 100, top: '12%', left: '90%', duration: 20 },
    { size: 60, top: '70%', left: '4%', duration: 15 },
  ],
}

function Circle({ size, top, left, duration }) {
  return (
    <motion.div
      className="absolute rounded-full border border-ink/[0.07]"
      style={{ width: size, height: size, top, left }}
      animate={{ y: [0, -24, 0], x: [0, 16, 0], rotate: [0, 8, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function Plus({ size, top, left, duration }) {
  return (
    <motion.div
      className="absolute text-ink/[0.08]"
      style={{ top, left, fontSize: size, lineHeight: 1 }}
      animate={{ y: [0, 18, 0], rotate: [0, 90, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      +
    </motion.div>
  )
}

function Square({ size, top, left, duration }) {
  return (
    <motion.div
      className="absolute border border-ink/[0.06] rounded-lg"
      style={{ width: size, height: size, top, left }}
      animate={{ rotate: [0, 45, 0], y: [0, -14, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const RENDERERS = { circles: Circle, plus: Plus, squares: Square }

export default function AmbientBackground({ variant = 'circles' }) {
  const shapes = SHAPES[variant] || SHAPES.circles
  const Shape = RENDERERS[variant] || Circle

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapes.map((s, i) => (
        <Shape key={i} {...s} />
      ))}
    </div>
  )
}