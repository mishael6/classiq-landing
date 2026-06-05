import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

// ── Animated background blob ──────────────────────────────────────────────────
export function Blob({ style, color }) {
  return (
    <motion.div
      className="blob"
      style={{ background: color, ...style }}
      animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.95, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// ── Floating background particles ─────────────────────────────────────────────
export function Particles({ count = 28 }) {
  const pts = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    dur: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pts.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.35)',
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// ── Confetti burst ────────────────────────────────────────────────────────────
export function Confetti() {
  const pieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 300 - 150,
    color: ['#f59e0b', '#0ea5e9', '#14b8a6', '#8b5cf6', '#ec4899'][i % 5],
    size: Math.random() * 8 + 4,
    dur: Math.random() * 2 + 1.5,
    delay: Math.random() * 2,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: p.size,
            height: p.size,
            borderRadius: 2,
            background: p.color,
          }}
          animate={{ x: [0, p.x], y: [0, 200], opacity: [1, 0], rotate: [0, 360] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  )
}

// ── Section heading with scroll-in animation ──────────────────────────────────
export function SectionHeading({ label, title, sub }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="text-center mb-12"
    >
      <span className="section-badge">{label}</span>
      <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">{title}</h2>
      {sub && (
        <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">{sub}</p>
      )}
    </motion.div>
  )
}

// ── Animated counter ──────────────────────────────────────────────────────────
export function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = [useRef(0), null]
  // Using a simpler approach with motion value
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      onAnimationStart={() => {
        if (!inView) return
        let start = 0
        const step = Math.ceil(to / 60)
        const t = setInterval(() => {
          start += step
          if (ref.current) ref.current.textContent = Math.min(start, to) + suffix
          if (start >= to) clearInterval(t)
        }, 16)
      }}
    >
      0{suffix}
    </motion.span>
  )
}

// ── Glass feature card ────────────────────────────────────────────────────────
export function FeatureCard({ icon: Icon, title, desc, delay, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass rounded-2xl p-6 cursor-default"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}22`, border: `1px solid ${color}44` }}
      >
        <Icon size={22} color={color} />
      </div>
      <h3 className="text-base font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

// ── Testimonial card ──────────────────────────────────────────────────────────
export function TestimonialCard({ quote, name, dept, avatar, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
        ))}
      </div>
      <p className="text-sm text-white/75 leading-relaxed mb-5 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}
        >
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/45">{dept}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ── Numbered install step ─────────────────────────────────────────────────────
export function InstallStep({ num, text, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 mb-4"
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
        style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}
      >
        {num}
      </div>
      <p className="pt-1.5 text-sm text-white/80 leading-relaxed">{text}</p>
    </motion.div>
  )
}
