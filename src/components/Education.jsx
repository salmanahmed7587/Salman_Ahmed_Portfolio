const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Sant Gadge Baba Amravati University",
            year: "Aug 2021 - Sep 2024",
            score: "67.42%",
            icon: "🎓"
        },
        {
            degree: "Higher Secondary Certificate (12th)",
            institution: "Maharashtra State Board",
            year: "2019 - 2021",
            score: "83.00%",
            icon: "🏫"
        },
        {
            degree: "Secondary School Certificate (10th)",
            institution: "Maharashtra State Board",
            year: "2018 - 2019",
            score: "65.60%",
            icon: "📚"
        }
    ]

    return (
        <section id="education" className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="max-w-[1000px] mx-auto px-6 md:px-8">
                <h2 className="text-3xl font-bold mb-12 text-slate-100 flex items-center gap-3">
                    <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                    Education
                </h2>

                <div className="grid gap-8">
                    {educationData.map((item, index) => (
                        <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                {item.icon}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-slate-100 mb-2">{item.degree}</h3>
                                <p className="text-cyan-400 font-medium mb-1">{item.institution}</p>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mt-3">
                                    <span className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                                        📅 {item.year}
                                    </span>
                                    <span className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                                        📊 {item.score}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
