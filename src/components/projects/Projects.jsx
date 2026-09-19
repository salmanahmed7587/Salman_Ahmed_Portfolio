import { useState } from "react"
import { Sparkles, Layers } from "lucide-react"
import { projectsData } from "../../data/projects"
import { ProjectCard } from "./ProjectCard"
import { HandshakeStickyScroll } from "./HandshakeStickyScroll"

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filterOptions = ["All", "AI", "Full-Stack", "React", "Professional Work"]

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true
    return project.category.includes(activeFilter)
  })

  // Separate flagship from other projects when viewing All, AI, Full-Stack, or React
  const flagshipProject = filteredProjects.find((p) => p.isFlagship)
  const remainingProjects = filteredProjects.filter((p) => !p.isFlagship)

  return (
    <section id="projects" className="py-24 bg-slate-950/90 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Verified & In-Progress Builds
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 leading-relaxed">
              Explore Salman's flagship AI initiative with scroll-driven architectural breakdown, planned enterprise platforms, and live production-grade applications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-cyan-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Dominant Sticky Case Study Slot */}
        {flagshipProject && (
          <div className="mb-16">
            <HandshakeStickyScroll project={flagshipProject} />
          </div>
        )}

        {/* Sub-header for other projects */}
        <div className="flex items-center gap-2 mb-8 pb-3 border-b border-slate-800/80">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h3 className="text-lg font-bold text-slate-100">
            {activeFilter === "All" ? "Additional Commercial & Personal Builds" : `${activeFilter} Projects`}
          </h3>
          <span className="text-xs font-mono text-slate-500 ml-auto">
            {remainingProjects.length} Projects Available
          </span>
        </div>

        {/* Grid of Remaining Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
