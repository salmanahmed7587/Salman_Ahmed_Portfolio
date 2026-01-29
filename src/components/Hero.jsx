import profileImg from '../assets/profile.jpg'

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-slate-950">

            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] -z-10"></div>

            <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Photo: Order 1 on Mobile, Order 2 on Desktop */}
                <div className="flex justify-center md:justify-end relative order-first md:order-last mb-10 md:mb-0">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                            <img src={profileImg} alt="Salman Ahmed" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                        </div>
                    </div>
                </div>

                {/* Content: Order 2 on Mobile, Order 1 on Desktop */}
                <div className="text-center md:text-left order-last md:order-first">
                    <p className="text-cyan-400 font-medium mb-3 tracking-wide">Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-100 tracking-tight">
                        Salman Ahmed
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
                        Frontend Developer <span className="text-slate-600 px-2">|</span> <span className="text-white font-medium">React.js</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Building clean, responsive, and user-friendly web applications.
                        Focused on minimal design and writing modern, efficient code.
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-6 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-500/20">
                            View Work
                        </a>
                        <a href="#contact" className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all">
                            Contact Me
                        </a>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Hero
