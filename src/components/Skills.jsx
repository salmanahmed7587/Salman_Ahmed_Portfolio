const Skills = () => {
    const skills = [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Redux / Context', icon: '🔄' },
        { name: 'JavaScript (ES6+)', icon: '📜' },
        { name: 'Tailwind CSS', icon: '🌬️' },
        { name: 'Styled Components', icon: '💅' },
        { name: 'HTML5 & CSS3', icon: '🎨' },
        { name: 'Git & GitHub', icon: '🔧' },
        { name: 'Debugging', icon: '🐞' },
    ]

    const roadmap = [
        { title: 'Currently Learning', items: ['Next.js (SSR/SSG)', 'Performance Optimization'] },
        { title: 'Future Goals', items: ['Node.js & Express', 'Databases (MongoDB/SQL)', 'API Design'] },
    ]

    return (
        <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3">
                    <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                    Skills & Roadmap
                </h2>

                <div className="grid md:grid-cols-2 gap-16">

                    <div>
                        <h3 className="text-xl font-semibold text-slate-200 mb-8">Core Tech Stack</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {skills.map((skill) => (
                                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-colors group text-center" key={skill.name}>
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                                    <h4 className="text-sm font-medium text-slate-300">{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold text-slate-200 mb-8">Learning Roadmap</h3>
                        <div className="space-y-6">
                            {roadmap.map((section, idx) => (
                                <div key={idx} className="relative pl-8 border-l border-slate-800">
                                    <div className={`absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full ${idx === 0 ? 'bg-cyan-500 animate-pulse' : 'bg-slate-700'}`}></div>
                                    <h4 className={`text-lg font-medium mb-3 ${idx === 0 ? 'text-cyan-400' : 'text-slate-400'}`}>{section.title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {section.items.map((item) => (
                                            <span key={item} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
