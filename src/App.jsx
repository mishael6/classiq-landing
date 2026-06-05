import { useState } from 'react'
import { Navbar } from './components/Navbar.jsx'
import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  LeaderboardSection,
  InstallSection,
  BenefitsSection,
  TestimonialsSection,
  WhatsAppSection,
  CTASection,
  Footer,
} from './components/Sections.jsx'

export default function App() {
  const [installTab, setInstallTab] = useState('android')

  return (
    <div className="min-h-screen bg-[#060f1e] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <LeaderboardSection />
      <InstallSection activeTab={installTab} setActiveTab={setInstallTab} />
      <BenefitsSection />
      <TestimonialsSection />
      <WhatsAppSection />
      <CTASection />
      <Footer />
    </div>
  )
}
