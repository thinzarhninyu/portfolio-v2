"use client";

import Button from "@/app/components/general/button";
import Divider from "@/app/components/general/divider";
import { projects } from "@/app/lib/projects";
import { ArrowLeft, SquareArrowOutUpRight } from "lucide-react";
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
        className={`relative w-full h-full mt-20 md:mt-0 md:h-[80vh] flex flex-col md:flex-row items-center justify-center overflow-hidden`}
      >
        <div className={`w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 py-10 bg-[#f6f4f0] space-y-6 md:pl-20 md:pr-8`}>
          <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
            {project.title}
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 w-fit">
            {project.tags && (
              project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm md:text-base font-normal rounded-full bg-[#9affcc] text-[#090909] w-fit font-lexend-deca tracking-tight mb-2 mr-2"
                >
                  {tag}
                </span>
              ))
            )}
          </div>
          <Divider />

          <div className={`relative w-full md:hidden md:w-1/2 h-64 md:h-3/4 overflow-hidden transform md:translate-x-10 rounded-none md:rounded-l-lg`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="text-[#080808]/80 text-base md:text-lg uppercase tracking-tight font-lexend-deca font-medium">
            {project.client} ({project.year})
          </div>

          <p className="text-justify text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight">
            {project.description}
          </p>
        </div>

        <div className={`hidden md:flex relative w-full md:w-1/2 h-64 md:h-3/4 overflow-hidden transform md:translate-x-10 rounded-none md:rounded-l-lg`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-2">
        <div className="relative md:absolute md:bottom-10 mb-10 md:mb-0">
          {project.externalLink && (
            <Button type="primary" href={project.externalLink} text="View Project" Icon={SquareArrowOutUpRight} />
          )}
        </div>
      </div>
    </main>
  );
}
