const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="bg-slate-900 rounded-2xl p-8 md:p-16 text-center border border-slate-800 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-slate-100">Ready to Hire?</h2>
                    <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg">
                        currently available for frontend developer roles.
                        strong foundation in React and a continuous learning mindset.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                        <a href="mailto:salmanahmed7587@gmail.com" className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 hover:border-cyan-500/50">
                            <span>Email:</span> <span className="text-cyan-400 font-medium">salmanahmed7587@gmail.com</span>
                        </a>
                        <a href="tel:+919359847587" className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors border border-slate-700 hover:border-green-500/50">
                            <span>Phone:</span> <span className="text-green-400 font-medium">+91 9359847587</span>
                        </a>
                    </div>

                    <div className="flex justify-center gap-8 border-t border-slate-800 pt-8">
                        <a href="https://github.com/salmanahmed7587" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
                        <a href="https://linkedin.com/in/salmanahmed7587" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
