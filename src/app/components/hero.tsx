"use client";

import { ArrowDown, ArrowDownToLine, ChevronsDown, Download } from "lucide-react";
import Divider from "./general/divider";
import Button from "./general/button";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f6f4f0]">
            <div className="mx-auto flex flex-col items-center text-center gap-8">
                <h1 className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
                    Hello, I'm Thinzar, <br />a <span className="bg-[#9affcc] rounded-lg px-2 py-0.5 leading-none">developer</span> and <span className="bg-[#ffcb98] rounded-lg px-2 py-0.5 leading-none">designer</span>.
                </h1>

                <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[#090909] font-lexend-deca font-light tracking-tight">
                    I'm a Computer Science freshman at NUS with a background in IT from Singapore Polytechnic. I love exploring new ideas, working with people to solve problems, and turning concepts into clean, user-friendly products that make everyday life easier.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                    <Button href="#projects" text="Browse Work" type="primary" />
                    <Button href="#contact" text="Contact Me" type="secondary" />
                </div>

                <a target="_blank" href="/resume/thinzar-hnin-yu-resume.pdf" className="mt-4 flex items-center justify-center gap-1 text-[#090909] hover:text-[#5465FF] font-lexend-deca font-normal text-base border-b transition-all transform hover:-translate-y-0.5">
                    <ArrowDown className="w-4 h-4" />
                    <span>View Resume</span>
                </a>
            </div>
        </section>
    );
}



// "use client";
// import { ChevronsDown } from "lucide-react";
// import Divider from "./general/divider";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Hero() {
//     return (
//         <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-white to-secondary-accent/5">
//             <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0%,_transparent_70%)]" />
//             <div className="max-w-3xl w-full px-6 py-24 flex flex-col items-center text-center space-y-8">

//                 <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mt-4 mb-8">
//                     <span className="text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-primary-accent font-cabin text-center md:text-left">
//                         Full-stack Web Developer
//                     </span>
//                     <span className="text-2xl md:text-4xl font-extrabold uppercase tracking-widest text-primary-accent font-cabin text-center md:text-right">
//                         Designer
//                     </span>
//                 </div>


//                 <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-primary-accent font-title">
//                     Hi. I'm Thinzar.
//                 </h1>

//                 <p className="max-w-2xl text-base md:text-lg leading-relaxed text-secondary-text font-didact-gothic">
//                     I'm a developer with a Diploma in Information Technology from Singapore Polytechnic,
//                     soon to pursue Computer Science at the National University of Singapore (NUS).
//                     I craft clean, human-centered digital experiences — from concept to code.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-6 justify-center font-nunito-sans">
//                     <a
//                         href="#projects"
//                         className="px-8 py-4 rounded-full bg-primary-accent hover:bg-hover-accent text-white text-lg font-bold shadow-lg transition-transform tracking-tight"
//                     >
//                         See My Work
//                     </a>
//                     <a
//                         href="#contact"
//                         className="px-8 py-4 rounded-full border-2 border-primary-accent text-primary-accent text-lg font-bold hover:text-hover-accent hover:border-hover-accent transition-transform tracking-tight"
//                     >
//                         Contact Me
//                     </a>
//                 </div>

//             </div>
//         </div>


//     )
// }