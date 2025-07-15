export default function Project({ project, idx }: { project: any, idx: number }) {
    return (
        <div className="relative w-full h-72 overflow-hidden rounded-lg transition-all transform group  hover:border-[#5465FF] hover:shadow-[0_4px_10px_rgba(84,101,255,0.4)]">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col space-y-2 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <a
                    href={`/projects/${project.id}`}
                    className="text-white text-lg font-title tracking-tight font-medium uppercase hover:underline hover:underline-offset-4"
                >
                    <span className={`${idx % 2 === 0 ? 'bg-[#9affcc]' : 'bg-[#ffcb98]'} rounded-lg px-2 py-0.5 leading-none text-[#090909]`}>{project.title}</span>
                </a>
                <div className="w-full h-[2px] rounded-full bg-white opacity-50" />

                <div className="text-white text-sm md:text-sm uppercase tracking-tight font-lexend-deca font-medium flex flex-row justify-between items-center">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                </div>
            </div>
        </div>

    )
}