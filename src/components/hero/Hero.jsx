import { ArrowRight, Download, Mail, Sparkles, Terminal, CheckCircle2 } from "lucide-react"
import { Github, Linkedin } from "../ui/Icons"
import { profileData } from "../../data/profile"
import profileImg from "../../assets/profile.jpg"

export const Hero = ({ onOpenRecruiterMode }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-slate-950 border-b border-slate-900"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-cyan-400 font-semibold">{profileData.subTagline}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{profileData.status}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15]">
              Software Developer building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                AI-powered products.
              </span>
            </h1>

            {/* Concise Description */}
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {profileData.summary}
            </p>

            {/* Verified Credentials Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Internships: Talentrise Technokrate (React/TS) & Allomor Tech (MERN)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>BCA Graduate, 2024</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-all shadow-lg shadow-cyan-600/20 hover:shadow-cyan-500/30 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenRecruiterMode}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 font-medium text-sm transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Recruiter Mode</span>
              </button>
            </div>

            {/* Secondary Social Channel Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Profile & Code Snapshot Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-64 sm:w-72 lg:w-80">
              
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-700" />
              
              {/* Card container */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-3 shadow-2xl overflow-hidden backdrop-blur-xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={profileImg}
                    alt="Salman Ahmed - Software Developer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Floating role badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-100">Salman Ahmed</p>
                      <p className="text-[11px] text-cyan-400 font-mono">React.js & Full-Stack</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                      Active
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
