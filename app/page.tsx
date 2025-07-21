"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { SignupModal } from "@/components/signup-modal"
import { OnboardingModal } from "@/components/onboarding-modal"
import { Dashboard } from "@/components/dashboard"

export default function Home() {
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" })

  const handleSignupClick = () => {
    setShowSignupModal(true)
  }

  const handleSignupComplete = (data: { name: string; email: string; phone: string }) => {
    setUserData(data)
    setShowSignupModal(false)
    setShowOnboarding(true)
  }

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    setShowDashboard(true)
  }

  if (showDashboard) {
    return <Dashboard userData={userData} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onSignupClick={handleSignupClick} />
      <HeroSection onSignupClick={handleSignupClick} />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />

      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} onComplete={handleSignupComplete} />}

      {showOnboarding && <OnboardingModal userName={userData.name} onComplete={handleOnboardingComplete} />}
    </div>
  )
}
