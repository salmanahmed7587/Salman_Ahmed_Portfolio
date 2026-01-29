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
                            I am a <strong className="text-slate-200">Fresher Frontend Developer</strong> with a job-ready mindset and a passion for building consistent, pixel-perfect user interfaces.
                        </p>
                        <p>
                            While I specialize in <strong className="text-cyan-400">React.js</strong> and modern JavaScript, my goal is to become a full-stack developer. I don't just write code; I focus on cleaner architecture, user experience, and continuous improvement.
                        </p>
                        <p>
                            I am highly motivated, a quick learner, and actively upgrading my skills with the latest web technologies to deliver value in a professional environment.
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
