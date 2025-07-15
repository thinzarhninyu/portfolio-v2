"use client";

import Divider from "@/app/components/general/divider";
import { projects } from "@/app/lib/projects";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";

export default function ProjectDetails() {
  const params = useParams();
  const projectId = params.id;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-red-500 font-bold">
        Project not found
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-[#f6f4f0] min-h-screen pt-10">
      <div className="absolute top-24 left-7 flex items-center justify-between w-fit z-10">
        <a href="/projects" className="flex items-center gap-2 text-[#5465FF] transition-all transform hover:scale-110">
          <ArrowLeft className="w-7 h-7" />
        </a>
      </div>

      <section
        className={`relative w-full h-[80vh] flex flex-col md:flex-row items-center justify-center overflow-hidden`}
      >
    

        <div className={`w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 py-10 bg-[#f6f4f0] space-y-6 md:pl-20 md:pr-8`}>
          <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
            {project.title}
          </p>

          <Divider />


          <div className="text-[#080808]/80 text-base md:text-lg uppercase tracking-tight font-lexend-deca font-medium">
            {project.client} ({project.year})
          </div>

          <p className="text-justify text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight">
            {project.description}
          </p>
        </div>

            <div className={`relative w-full md:w-1/2 h-1/2 md:h-3/4 overflow-hidden transform md:translate-x-10  rounded-l-lg`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>
    </main>
  );
}
