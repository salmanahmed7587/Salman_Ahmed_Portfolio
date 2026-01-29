const Projects = () => {
    const projects = [
        {
            title: 'Cinema House',
            description: 'A modern movie browsing application built with React. Explore trending movies, search, and view detailed information.',
            tags: ['React', 'API Integration', 'Responsive'],
            demo: 'https://cinema-house-weld.vercel.app',
            image: '🎬'
        },
        {
            title: 'Book Inventory App',
            description: 'A React application to manage book collections with features like adding, editing, and deleting books.',
            tags: ['React', 'CSS', 'State Management'],
            demo: 'https://book-inventory-tan.vercel.app/',
            image: '📚'
        },
        {
            title: 'Xiaomi Clone',
            description: 'A pixel-perfect UI clone of the Xiaomi website built with React, demonstrating responsive design skills.',
            tags: ['React', 'UI/UX', 'Responsive'],
            demo: 'https://my-xiaomi-clone-hctk.vercel.app/',
            image: '📱'
        },
        {
            title: 'Guess My Number',
            description: 'An interactive logic game built with Vanilla JavaScript. Guess the secret number with score tracking.',
            tags: ['JavaScript', 'DOM', 'Game Logic'],
            demo: 'https://guess-my-number-chi-nine.vercel.app/',
            image: '🎮'
        },
    ]

    return (
        <section id="projects" className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3">
                    <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-all flex flex-col group" key={project.title}>
                            <div className="bg-slate-800/50 h-48 flex items-center justify-center border-b border-slate-800 group-hover:bg-slate-800/80 transition-colors">
                                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-slate-100">{project.title}</h3>
                                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-cyan-400 rounded-md border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2.5 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-cyan-600 transition-colors">
                                    View Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
