import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Trophy, CheckCircle, Award, Smartphone, Wifi, BarChart2,
  Zap, Home, TrendingUp, MessageCircle, ExternalLink, Download, ArrowRight,
  GraduationCap,
} from 'lucide-react'
import {
  Blob, Particles, Confetti, SectionHeading, FeatureCard, TestimonialCard, InstallStep,
} from './UI.jsx'
import { PhoneMockup } from './PhoneMockup.jsx'
import {
  APP_URL, WHATSAPP_URL, STUDENTS, FEATURES, BENEFITS, TESTIMONIALS,
  ANDROID_STEPS, IPHONE_STEPS,
} from '../constants.js'

const ICON_MAP = { CheckCircle, Trophy, Award, Smartphone, Wifi, BarChart2, Zap, Home, TrendingUp }

// ── Hero ──────────────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <Blob style={{ width: 500, height: 500, top: -100, left: -100 }} color="radial-gradient(circle,#2563eb,transparent)" />
      <Blob style={{ width: 400, height: 400, bottom: -50, right: -80 }} color="radial-gradient(circle,#0ea5e9,transparent)" />
      <Blob style={{ width: 350, height: 350, top: '40%', left: '40%' }} color="radial-gradient(circle,#14b8a6,transparent)" />
      <Particles />

      {/* Text */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 section-badge mb-6">
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            Now Available — Install on Your Phone
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-5"
        >
          Never Miss{' '}
          <span className="gradient-text">Attendance</span> Again.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-3 leading-relaxed"
        >
          Install ClassIQ on your phone and track attendance, rankings, achievements, and rewards anytime, anywhere.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="text-sm text-white/30 mb-9"
        >
          Your Smart Student Companion for Attendance, Rankings, and Rewards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <motion.a href={APP_URL} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-primary">
            Open ClassIQ <ExternalLink size={16} />
          </motion.a>
          <motion.a href="#install" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-secondary">
            Install Now <Download size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Phone mockups */}
      <motion.div
        initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}
        className="relative z-10 flex gap-10 justify-center items-end mt-14 px-5"
      >
        <PhoneMockup platform="android" />
        <PhoneMockup platform="ios" />
      </motion.div>
    </section>
  )
}

// ── Stats bar ─────────────────────────────────────────────────────────────────
export function StatsSection() {
  const stats = [['1,200+', 'Students Using ClassIQ'], ['98%', 'Attendance Accuracy'], ['5GB', 'Weekly Reward'], ['#1', 'Ranked Student App']]
  return (
    <section className="py-14 px-6" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(([n, l]) => (
          <div key={l}>
            <div className="text-4xl font-black gradient-text">{n}</div>
            <div className="text-sm text-white/50 mt-1">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Features ──────────────────────────────────────────────────────────────────
export function FeaturesSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <SectionHeading
        label="Features"
        title="Why Students Love ClassIQ"
        sub="Everything you need to stay on top of your attendance, rankings, and rewards — all in one place."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} {...f} icon={ICON_MAP[f.icon]} delay={i * 0.08} />
        ))}
      </div>
    </section>
  )
}

// ── Leaderboard & Rewards ─────────────────────────────────────────────────────
export function LeaderboardSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <Blob style={{ width: 500, height: 500, top: '10%', left: '50%', transform: 'translateX(-50%)' }} color="radial-gradient(circle,#f59e0b,transparent)" />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          label="Leaderboard & Rewards"
          title={<>Compete. <span className="gradient-text-gold">Rank.</span> Win.</>}
          sub="ClassIQ rewards active students through a weekly leaderboard competition."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Trophy card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative rounded-3xl p-9 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg,rgba(245,158,11,0.15),rgba(251,191,36,0.08))', border: '1px solid rgba(245,158,11,0.3)' }}
          >
            <Confetti />
            <motion.div animate={{ rotate: [-5, 5, -5], scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
              <Trophy size={64} color="#f59e0b" className="mx-auto mb-4" />
            </motion.div>
            <p className="text-sm text-white/50 mb-1">🏆 Weekly Leaderboard</p>
            <p className="text-3xl font-black" style={{ color: '#f59e0b' }}>1st Place</p>
            <p className="text-xl font-bold text-white mb-4">5GB Airtime Reward</p>
            <span className="text-xs text-white/45 px-4 py-1.5 rounded-full" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
              Winner Announced Every Week
            </span>
          </motion.div>

          {/* Leaderboard list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="glass rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 font-bold text-sm mb-4">
              <Trophy size={16} color="#f59e0b" /> This Week's Rankings
            </div>
            {STUDENTS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-xl mb-2 p-2.5"
                style={{ background: i === 0 ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.04)', border: i === 0 ? '1px solid rgba(245,158,11,0.2)' : '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `linear-gradient(135deg,${s.color},${s.color}88)` }}>
                  {s.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{s.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                      <div style={{ width: `${s.pct}%`, height: '100%', background: `linear-gradient(90deg,${s.color},${s.color}88)`, borderRadius: 9999 }} />
                    </div>
                    <span className="text-xs text-white/50">{s.pct}%</span>
                  </div>
                </div>
                <span className="text-base">{s.rank}</span>
              </motion.div>
            ))}
            <p className="text-xs text-white/35 text-center mt-3 leading-relaxed">
              Students with the highest attendance consistency and participation rank higher.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Installation guide ────────────────────────────────────────────────────────
export function InstallSection({ activeTab, setActiveTab }) {
  const steps = activeTab === 'android' ? ANDROID_STEPS : IPHONE_STEPS
  return (
    <section id="install" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeading
          label="Installation"
          title="Get Started in Minutes"
          sub="Install ClassIQ on your device and access it like a native app — no App Store required. Switch between Android and iPhone instructions below."
        />

        {/* Tab switcher */}
        <div className="flex gap-2 justify-center mb-9">
          {['android', 'iphone'].map((tab) => (
            <motion.button
              key={tab} onClick={() => setActiveTab(tab)} whileTap={{ scale: 0.96 }}
              className="px-7 py-2.5 rounded-full text-sm font-semibold cursor-pointer border-0 text-white"
              style={{
                background: activeTab === tab ? 'linear-gradient(135deg,#2563eb,#0ea5e9)' : 'rgba(255,255,255,0.07)',
                border: activeTab === tab ? 'none' : '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {tab === 'android' ? '🤖 Android' : '🍎 iPhone'}
            </motion.button>
          ))}
        </div>

        {/* Steps card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="glass rounded-3xl p-8"
        >
          {steps.map((step, i) => (
            <InstallStep key={i} num={i + 1} text={step} delay={i * 0.07} />
          ))}
          <motion.a
            href={APP_URL} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="btn-primary mt-4 inline-flex"
          >
            Open ClassIQ Now <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// ── Benefits ──────────────────────────────────────────────────────────────────
export function BenefitsSection() {
  return (
    <section className="py-20 px-6" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Benefits" title="Why Install ClassIQ?" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {BENEFITS.map((b, i) => {
            const Icon = ICON_MAP[b.icon]
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-40px' })
            return (
              <motion.div
                key={b.label} ref={ref}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(37,99,235,0.2)' }}>
                  <Icon size={18} color="#60a5fa" />
                </div>
                <span className="text-sm font-semibold text-white/85">{b.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ──────────────────────────────────────────────────────────────
export function TestimonialsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Students Say" title="Loved by Students Everywhere" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── WhatsApp community ────────────────────────────────────────────────────────
export function WhatsAppSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <Blob style={{ width: 400, height: 400, top: 0, right: '10%' }} color="radial-gradient(circle,#25d366,transparent)" />
      <div className="max-w-xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: '#25d366' }}>
            <MessageCircle size={32} color="#fff" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Join the ClassIQ Student Community</h2>
          <p className="text-base text-white/55 mb-8 leading-relaxed">
            Stay updated on announcements, rewards, leaderboard results, and important updates directly on WhatsApp.
          </p>
          <motion.a
            href={WHATSAPP_URL} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 rounded-full px-9 py-3.5 text-base font-bold text-white"
            style={{ background: '#25d366', boxShadow: '0 0 40px rgba(37,211,102,0.35)' }}
          >
            <MessageCircle size={20} /> Join WhatsApp Channel
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────
export function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <Blob style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} color="radial-gradient(circle,#2563eb,transparent)" />
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="w-20 h-20 rounded-3xl mx-auto mb-7 flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', boxShadow: '0 0 60px rgba(37,99,235,0.5)' }}>
            <GraduationCap size={40} color="#fff" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-5">
            Ready to Experience{' '}
            <span className="gradient-text">ClassIQ?</span>
          </h2>
          <p className="text-lg text-white/55 mb-10 leading-relaxed">
            Join thousands of students who never miss attendance and compete for weekly rewards.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a href={APP_URL} target="_blank" rel="noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-primary text-base px-10 py-4">
              Open Web App <ExternalLink size={18} />
            </motion.a>
            <motion.a href="#install" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="btn-secondary text-base px-10 py-4">
              Install Now <Download size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="px-6 py-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)' }}>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}>
            <GraduationCap size={16} color="#fff" />
          </div>
          <span className="text-base font-black">ClassIQ</span>
        </div>
        <div className="flex gap-6 flex-wrap justify-center">
          {[['Open App', APP_URL], ['Installation Guide', '#install'], ['WhatsApp Channel', WHATSAPP_URL]].map(([label, href]) => (
            <a
              key={label} href={href}
              target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              className="text-sm text-white/40 no-underline transition-colors hover:text-blue-400"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/25">ClassIQ © 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}
