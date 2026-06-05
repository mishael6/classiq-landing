import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, ExternalLink } from 'lucide-react'
import { APP_URL } from '../constants.js'

export function Navbar() {
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 80], ['rgba(6,15,30,0)', 'rgba(6,15,30,0.95)'])
  const navBorder = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.07)'])

  return (
    <motion.nav
      style={{ background: navBg, borderBottom: `1px solid`, borderColor: navBorder }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl h-16 flex items-center justify-between px-6"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}>
          <GraduationCap size={18} color="#fff" />
        </div>
        <span className="text-lg font-black tracking-tight">ClassIQ</span>
      </div>

      {/* CTA */}
      <motion.a
        href={APP_URL} target="_blank" rel="noreferrer"
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-white no-underline"
        style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)' }}
      >
        Open App <ExternalLink size={14} />
      </motion.a>
    </motion.nav>
  )
}
