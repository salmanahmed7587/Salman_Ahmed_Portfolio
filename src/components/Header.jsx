import { useState, useEffect } from 'react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex justify-between items-center">
                <a href="#hero" className="text-xl font-bold tracking-tight text-slate-100 group">
                    Salman<span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">.dev</span>
                </a>

                <button className="md:hidden p-2 z-[60] text-slate-100" onClick={toggleMenu} aria-label="Toggle menu">
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>

                <nav className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center transition-transform duration-300 md:relative md:bg-transparent md:inset-auto md:flex-row md:translate-x-0 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
                    <ul className="flex flex-col md:flex-row gap-8 items-center">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-lg md:text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors tracking-wide"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
