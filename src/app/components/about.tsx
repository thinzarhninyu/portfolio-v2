"use client";

import { intro } from "../lib/const";
import Divider from "./general/divider";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center gap-10 text-center px-16 w-screen relative overflow-hidden bg-[#f6f4f0]"
        >
            <div className="flex flex-col items-center justify-center gap-y-4 text-center">
                <h1 className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                    Get to Know Me
                </h1>

                <Divider />

                <div className="flex flex-row items-center justify-center gap-4 mt-7">
                    {intro.map((block, index) => (
                        <div key={index} className="flex flex-row items-center justify-center gap-2 border  px-4 py-2 rounded-full bg-white  transition-all transform hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(84,101,255,0.4)]">
                            {block.icon && (
                                <block.icon className="w-4 h-4 text-[#5465FF]" />
                            )}
                            <p className="text-[#090909] font-lexend-deca uppercase tracking-tight font-normal">{block.title}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row items-center justify-center gap-24 mt-4">

                    <p className="max-w-md text-left font-lexend-deca text-[#080808] tracking-tighter font-bold text-3xl md:text-5xl leading-snug">"turning <span className="bg-[#ffcb98] rounded-lg px-2 py-0.5 leading-none">ideas</span> into <br /><span className="bg-[#9affcc] rounded-lg px-2 py-0.5 leading-none">real-life products</span> <br />is my <span className="underline underline-offset-12 text-[#5465FF]">calling</span>."</p>

                    <div className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight text-justify">
                        I started in Web Development at Singapore Polytechnic, where I interned at Trinax as a Software Developer. I worked on interactive projects for clients like ICA, NKF, and Singtel, learning full-stack fundamentals and agile workflows along the way.
                        <br /><br />
                        After graduating in 2025, I continued at Trinax as a contract Software Developer. With industry experience under my belt, I'm now preparing to begin a BSc in Computer Science at NUS to deepen my skills and expand my opportunities.
                    </div>


                </div>
            </div>
        </section >




    );
}


