"use client";

import { ChevronDown } from "lucide-react";
import Divider from "../components/general/divider";
import LanguageToggle from "../components/general/language-toggle";
import Navbar from "../components/general/navbar";
import Project from "../components/general/project";
import { projects, ProjectType } from "../lib/projects";
import { useState, useMemo } from "react";

export default function Projects() {


    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState("All");
    const [selectedType, setSelectedType] = useState(ProjectType.all);

    const years = useMemo(() => {
        const y = projects.map(p => p.year);
        return ["All", ...Array.from(new Set(y)).sort((a, b) => b - a)];
    }, []);

    const types = useMemo(() => {
        const t = projects.flatMap(p => p.tags || []);
        return ["All", ...Array.from(new Set(t))];
    }, []);

    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesYear = selectedYear === "All" || project.year === Number(selectedYear);
            const matchesType = selectedType === "All" || (project.tags || []).includes(selectedType);

            return matchesSearch && matchesYear && matchesType;
        });
    }, [searchTerm, selectedYear, selectedType]);


    return (
        <main className="flex flex-col items-center justify-start w-full overflow-x-hidden pt-16 bg-[#f6f4f0]">

            <div className="flex flex-col items-center justify-center w-[70%] gap-y-7 mt-20">
                <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                    Featured Works
                </p>

                <Divider />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-[60%] text-sm font-light text-[#090909] mt-10 gap-6 font-lexend-deca tracking-tight">

                <div className="w-full md:w-2/3">
                    {/* <p className="text-base font-light">Refine your search</p>
                    <p className="text-sm">Filter by keyword, year, or type to find specific projects.</p> */}
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="search" className="text-sm font-light text-[#090909]">
                            Keyword
                        </label>
                        <input
                            id="search"
                            type="text"
                            placeholder="e.g. career fair, exhibition..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5465FF]"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full md:w-1/3">

                    

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="year" className="text-sm font-light text-[#090909]">
                            Year
                        </label>
                        <div className="relative w-full">
                            <select
                                id="year"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#5465FF] pr-10"
                            >
                                {years.map((y) => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <ChevronDown className="w-4 h-4 text-[#090909]" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="type" className="text-sm font-light text-[#090909]">
                            Type
                        </label>
                        <div className="relative w-full">
                            <select
                                id="type"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value as ProjectType)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[#5465FF] pr-10"
                            >
                                {types.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <ChevronDown className="w-4 h-4 text-[#090909]" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <main className="flex flex-col items-center justify-start min-h-screen pb-20 w-[90%] mx-auto mt-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-0">
                    {filteredProjects.map((project, idx) => (
                        <Project key={project.id} project={project} idx={idx} />
                    ))}
                </div>

            </main>
        </main>
    )
}