"use client";

import { clients, intro } from "../lib/const";
import Divider from "./general/divider";

export default function Clients() {
    return (
        <section
            id="clients"
            className="min-h-screen flex flex-col items-center justify-center gap-10 text-center w-full relative overflow-visible bg-[#f6f4f0] px-7"
        >
            <div className="flex flex-col items-center justify-center gap-y-7">
                <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                    Who I've Worked With
                </p>

                <Divider />

                <div className="max-w-2xl text-sm md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight">
                    Here are some of the notable organizations and brands I've collaborated with. Each experience has enriched my skills and broadened my understanding of the industry, allowing me to contribute effectively to diverse projects.
                </div>
            </div>

            <div className="w-fit grid grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-4 h-full">
                {clients.map((client) => (
                    <div
                        key={client.name}
                        className="relative group flex items-center justify-center w-24 md:w-40 aspect-video overflow-visible bg-white rounded-lg transition-all transform hover:-translate-y-2 hover:border-[#5465FF] hover:shadow-[0_4px_10px_rgba(84,101,255,0.4)]"
                    >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-[#5465FF] rounded opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-10 shadow-md font-lexend-deca font-light tracking-tight">
                            {client.name}
                        </div>

                        <img
                            src={client.logo}
                            alt={client.name}
                            className="h-[70%] max-w-[80%] object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
