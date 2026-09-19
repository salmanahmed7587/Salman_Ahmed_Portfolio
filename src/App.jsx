import { useState } from "react"
import Header from "./components/layout/Header"
import Hero from "./components/hero/Hero"
import EngineeringSnapshot from "./components/snapshot/EngineeringSnapshot"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import AiLab from "./components/ai/AiLab"
import AiArchitectureSticky from "./components/ai/AiArchitectureSticky"
import AskMyPortfolio from "./components/ai/AskMyPortfolio"
import HowIBuild from "./components/engineering/HowIBuild"
import TechnicalDecisions from "./components/engineering/TechnicalDecisions"
import TechnicalSkills from "./components/skills/TechnicalSkills"
import GitHubSection from "./components/github/GitHubSection"
import Contact from "./components/contact/Contact"
import Footer from "./components/layout/Footer"
import RecruiterModeModal from "./components/recruiter/RecruiterModeModal"

export function App() {
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Sticky Navigation */}
      <Header onOpenRecruiterMode={() => setIsRecruiterModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero onOpenRecruiterMode={() => setIsRecruiterModalOpen(true)} />

        {/* 2. Engineering Snapshot */}
        <EngineeringSnapshot />

        {/* 3. Professional Experience (Sticky Timeline: Talentrise & Allomor) */}
        <Experience />

        {/* 4. Featured Projects (Handshake.AI Flagship Sticky Case Study & Live Grid) */}
        <Projects />

        {/* 5. AI Lab */}
        <AiLab />

        {/* 6. AI Architecture Sticky Pipeline ("From User Intent to AI Action") */}
        <AiArchitectureSticky />

        {/* 7. Ask My Portfolio (AI Assistant) */}
        <AskMyPortfolio />

        {/* 8. How I Build Software (Sticky Lifecycle Scroll) */}
        <HowIBuild />

        {/* 9. Engineering Decisions */}
        <TechnicalDecisions />

        {/* 10. Technical Skills Matrix */}
        <TechnicalSkills />

        {/* 11. GitHub / Open Source */}
        <GitHubSection />

        {/* 12. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fast-Track Recruiter Dossier Modal */}
      <RecruiterModeModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </div>
  )
}

export default App
