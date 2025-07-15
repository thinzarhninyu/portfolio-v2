import Divider from "../components/general/divider";
import LanguageToggle from "../components/general/language-toggle";
import Navbar from "../components/general/navbar";
import Project from "../components/general/project";
import { projects } from "../lib/projects";

export default function Projects() {



    return (
        <main className="flex flex-col items-center justify-center w-full overflow-x-hidden pt-16 bg-[#f6f4f0]">

            {/* <header className="fixed top-0 left-0 w-full z-50">
                <LanguageToggle />
                <Navbar />
            </header> */}

            <div className="flex flex-col items-center justify-center w-[70%] gap-y-7 mt-20">
                <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                    Featured Works
                </p>

                <Divider />
            </div>

            <main className="flex flex-col items-center justify-center min-h-screen pb-20 w-[90%] mx-auto mt-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {projects.map((project, idx) => (
                        <Project key={project.id} project={project} idx={idx} />
                    ))}
                </div>

            </main>
        </main>
    )
}