import { ArrowRight, ChevronRight } from "lucide-react";
import { projects } from "../lib/projects";
import Button from "./general/button";
import Divider from "./general/divider";
import Project from "./general/project";

export default function Projects() {
    const featuredProjects = projects.filter((p) => p.featured);
    const [firstProject, ...otherProjects] = featuredProjects.slice(0, 4);

    return (
        <section className="w-full flex flex-col gap-5 items-center justify-center py-16 bg-[#f6f4f0]" id="projects">
            <div className="w-full flex flex-col justify-center items-center">
                {projects.slice(0, 4).map((project, idx) => (
                    <div key={idx} className="w-full flex flex-col items-center justify-center h-fit ">
                        <section
                            className={`hidden relative w-[90%] md:w-full h-[80vh] md:flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center justify-center overflow-hidden`}
                        >
                            <div className={`relative w-full md:w-1/2 h-1/2 md:h-3/4 overflow-hidden transform ${idx % 2 === 0 ? 'md:-translate-x-10 rounded-r-lg' : 'md:translate-x-10 rounded-l-lg'}`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            <div className={`w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 py-10 bg-[#f6f4f0] space-y-6 ${idx % 2 === 0 ? 'md:pr-20 md:pl-8' : 'md:pl-20 md:pr-8'}`}>
                                <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                                    {project.title}
                                </p>

                                <Divider />


                                <div className="text-[#080808]/80 text-base md:text-lg uppercase tracking-tight font-lexend-deca font-medium">
                                    {project.client} ({project.year})
                                </div>

                                <p className="text-justify text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight line-clamp-4">
                                    {project.description}
                                </p>

                                <Button
                                    href={`/projects/${project.id}`}
                                    text="Read More"
                                    Icon={ArrowRight}
                                    className="w-fit"
                                    type="primary"
                                />
                            </div>
                        </section>
                        <section
                            className={`flex relative w-[90%] md:hidden h-fit flex-col items-center justify-center overflow-hidden rounded-lg `}
                        >
                            <div className={`relative w-full h-1/2 overflow-hidden transform rounded-lg`}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            <div className={`w-full h-full flex flex-col justify-center px-3 py-10 bg-[#f6f4f0] space-y-6`}>
                                <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                                    {project.title}
                                </p>

                                <Divider />


                                <div className="text-[#080808]/80 text-base md:text-lg uppercase tracking-tight font-lexend-deca font-medium">
                                    {project.client} ({project.year})
                                </div>

                                <p className="text-justify text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight line-clamp-4">
                                    {project.description}
                                </p>

                                <Button
                                    href={`/projects/${project.id}`}
                                    text="Read More"
                                    Icon={ArrowRight}
                                    className="w-fit"
                                    type="primary"
                                />
                            </div>
                        </section>
                    </div>
                ))}
            </div>
            <Button href="/projects" text="View More" type="primary" className="mt-4" />
        </section >
    );
}
