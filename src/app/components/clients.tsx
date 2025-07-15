"use client";

import { clients, intro } from "../lib/const";
import Divider from "./general/divider";

export default function Clients() {
    return (
        <section
            id="clients"
            className="min-h-screen flex flex-col items-center justify-center gap-10 text-center w-full relative overflow-hidden bg-[#f6f4f0]"
        >
            <div className="flex flex-col items-center justify-center w-[70%] gap-y-7">
                <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                    Who I've Worked With
                </p>

                <Divider />

                <div className="max-w-2xl text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight">
                    Here are some of the notable organizations and brands I've collaborated with. Each experience has enriched my skills and broadened my understanding of the industry, allowing me to contribute effectively to diverse projects.
                </div>
            </div>

            <div className="max-w-[90%] w-fit grid grid-cols-6 gap-x-2 gap-y-4 h-full">
                {clients.map((client) => (
                    <div
                        key={client.name}
                        className="flex items-center justify-center w-40 aspect-video overflow-hidden bg-white rounded-lg  transition-all transform hover:-translate-y-2  hover:border-[#5465FF] hover:shadow-[0_4px_10px_rgba(84,101,255,0.4)]"
                    >
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
