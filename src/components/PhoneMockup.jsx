import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Bell, Trophy } from 'lucide-react'
import { STUDENTS } from '../constants.js'

// ── Dashboard screen content ──────────────────────────────────────────────────
function DashboardScreen() {
  return (
    <div style={{ padding: '10px 12px', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 2 }}>Welcome back 👋</div>
      <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Kwame Mensah</div>

      {/* Attendance card */}
      <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: 12, padding: '10px 12px', marginBottom: 10 }}>
        <div style={{ fontSize: 9, opacity: 0.7 }}>Attendance Rate</div>
        <div style={{ fontSize: 26, fontWeight: 800, color: '#4ade80' }}>98%</div>
        <div style={{ background: 'rgba(255,255,255,0.15)', height: 6, borderRadius: 3, marginTop: 6 }}>
          <div style={{ width: '98%', height: '100%', background: 'linear-gradient(90deg,#4ade80,#22d3ee)', borderRadius: 3 }} />
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
        {[['Weekly Rank', '#1 🏆', '#f59e0b'], ['Classes', '47/48', '#0ea5e9']].map(([l, v, c]) => (
          <div key={l} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '8px 10px' }}>
            <div style={{ fontSize: 8, opacity: 0.6 }}>{l}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: c }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Rewards progress */}
      <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 10, padding: '8px 10px' }}>
        <div style={{ fontSize: 8, opacity: 0.6, marginBottom: 4 }}>Rewards Progress</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ flex: 1, height: 8, borderRadius: 4, background: i <= 4 ? '#f59e0b' : 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>
        <div style={{ fontSize: 8, opacity: 0.6, marginTop: 4 }}>4/5 milestones — keep going!</div>
      </div>
    </div>
  )
}

// ── Leaderboard screen content ────────────────────────────────────────────────
function LeaderboardScreen() {
  return (
    <div style={{ padding: '10px 12px', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
        <Trophy size={12} color="#f59e0b" /> Weekly Leaderboard
      </div>
      {STUDENTS.map((s, i) => (
        <div
          key={s.name}
          style={{
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
            background: i === 0 ? 'rgba(245,158,11,0.18)' : 'rgba(255,255,255,0.07)',
            borderRadius: 8, padding: '6px 8px',
          }}
        >
          <div style={{ width: 18, height: 18, borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 700 }}>
            {s.avatar}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 9, fontWeight: 600 }}>{s.name}</div>
            <div style={{ background: 'rgba(255,255,255,0.15)', height: 4, borderRadius: 2, marginTop: 3 }}>
              <div style={{ width: `${s.pct}%`, height: '100%', background: `linear-gradient(90deg,${s.color},#fff8)`, borderRadius: 2 }} />
            </div>
          </div>
          <div style={{ fontSize: 12 }}>{s.rank}</div>
        </div>
      ))}
    </div>
  )
}

// ── Single phone frame ────────────────────────────────────────────────────────
export function PhoneMockup({ platform = 'android' }) {
  const [screen, setScreen] = useState('dashboard')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const ref = useRef(null)
  const isAndroid = platform === 'android'

  useEffect(() => {
    const timer = setInterval(() => {
      setScreen((s) => (s === 'dashboard' ? 'leaderboard' : 'dashboard'))
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleMouse = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = (e.clientX - rect.left) / rect.width - 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: cy * 18, y: cx * 18 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: isAndroid ? 0 : 0.9 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ position: 'relative', transformStyle: 'preserve-3d' }}
      >
        {/* Glow halo */}
        <div style={{
          position: 'absolute', inset: -20,
          borderRadius: isAndroid ? 32 : 40,
          background: isAndroid ? 'rgba(14,165,233,0.28)' : 'rgba(37,99,235,0.28)',
          filter: 'blur(28px)', zIndex: 0,
        }} />

        {/* Phone frame */}
        <div style={{
          position: 'relative', zIndex: 1,
          width: 165, height: 320,
          borderRadius: isAndroid ? 22 : 34,
          background: isAndroid ? 'linear-gradient(145deg,#1e293b,#0f172a)' : 'linear-gradient(145deg,#0f172a,#1e293b)',
          border: `2px solid rgba(255,255,255,${isAndroid ? 0.12 : 0.18})`,
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)',
          overflow: 'hidden',
        }}>
          {/* Notch / Dynamic Island */}
          {isAndroid ? (
            <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)', zIndex: 10 }} />
          ) : (
            <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 36, height: 8, borderRadius: 8, background: '#000', zIndex: 10 }} />
          )}

          {/* Status bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', zIndex: 5 }}>
            <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.5)' }}>9:41</span>
            <span style={{ fontSize: 7, color: 'rgba(255,255,255,0.5)' }}>●●●</span>
          </div>

          {/* Screen background */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,#0f2f6e,#0c1a3e,#071428)', borderRadius: isAndroid ? 20 : 32 }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 140, height: 140, borderRadius: '50%', background: 'rgba(14,165,233,0.15)', filter: 'blur(30px)' }} />
            <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(20,184,166,0.12)', filter: 'blur(25px)' }} />
          </div>

          {/* App header bar */}
          <div style={{ position: 'absolute', top: 22, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', zIndex: 5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 20, height: 20, borderRadius: 6, background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <GraduationCap size={12} color="#fff" />
              </div>
              <span style={{ fontSize: 10, fontWeight: 800, color: '#fff', letterSpacing: 0.5 }}>ClassIQ</span>
            </div>
            <Bell size={12} color="rgba(255,255,255,0.5)" />
          </div>

          {/* Animated screen content */}
          <div style={{ position: 'absolute', top: 52, left: 0, right: 0, bottom: isAndroid ? 8 : 20, zIndex: 5 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {screen === 'dashboard' ? <DashboardScreen /> : <LeaderboardScreen />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Home indicator (iPhone) */}
          {!isAndroid && (
            <div style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', width: 50, height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.3)', zIndex: 10 }} />
          )}

          {/* Screen reflection */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 60%)', borderRadius: isAndroid ? 20 : 32, pointerEvents: 'none', zIndex: 20 }} />
        </div>

        {/* Platform label */}
        <p style={{ textAlign: 'center', marginTop: 10, fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
          {isAndroid ? 'Android' : 'iPhone'}
        </p>
      </motion.div>
    </motion.div>
  )
}
