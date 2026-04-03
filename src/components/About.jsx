const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="max-w-[1000px] mx-auto px-6 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3">
                    <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                    About Me
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-6 text-lg text-slate-400 leading-relaxed">
                        <p>
                            I am a <strong className="text-slate-200">frontend-focused engineer</strong> specializing in <strong className="text-cyan-400">React.js</strong>, building data-driven and production-ready web applications with a strong emphasis on performance, scalability, and user experience.
                        </p>
                        <p>
                            I have hands-on experience developing dashboard-style applications, including a wind and weather forecast dashboard that integrates real-time APIs, visualizes data, and delivers actionable insights through a clean, component-driven architecture.
                        </p>
                        <p>
                            My approach goes beyond UI development — I focus on building maintainable systems, optimizing performance, and creating intuitive user experiences that solve real-world problems.
                        </p>
                        <p>
                            I am continuously expanding toward full-stack development while actively seeking opportunities to contribute to impactful products, take ownership, and deliver meaningful results from day one.
                        </p>
                    </div>

                    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                        <h3 className="text-white font-semibold mb-4 text-lg">Quick Highlights</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">✔</span> React Specialist
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">✔</span> UX/UI Oriented
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">✔</span> Fast Learner
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">✔</span> Team Player
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
