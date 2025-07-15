"use client";

import StackIcon from "tech-stack-icons";
import { clients, intro, techstack } from "../lib/const";
import Divider from "./general/divider";

export default function TechStack() {
    const sortedTechstack = [...techstack].sort((a, b) => {
        const order = ["language", "framework", "database", "platform"];
        return order.indexOf(a.category) - order.indexOf(b.category);
    });

    return (
        <section
            id="clients"
            className="min-h-screen flex flex-col items-center justify-center gap-10 text-center w-full relative overflow-hidden bg-[#f6f4f0]"
        >
            <div className="flex flex-col items-center justify-center w-[70%] gap-y-7">
                <p className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                    Technologies I Work With
                </p>

                <Divider />
            </div>

           <div className="max-w-[90%] w-fit grid grid-cols-5 md:grid-cols-10 gap-x-2 gap-y-4">
                {sortedTechstack.map((tech) => (
                    <div
                        key={tech.name}
                     className="flex flex-col gap-2 items-center justify-center w-22 aspect-square overflow-hidden bg-white rounded-lg transition-all transform border-b-2 border-transparent hover:-translate-y-2 hover:border-[#5465FF] hover:shadow-[0_4px_10px_rgba(84,101,255,0.4)]"

                    >
                        <StackIcon name={tech.icon} className="h-[40%] max-w-[80%] object-contain" />
                        <p className="font-lexend-deca text-xs text-[#080808]">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>

    );
}
