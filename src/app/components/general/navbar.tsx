"use client";

import { name, navigation } from "@/app/lib/const";

export default function Navbar() {
  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-[#f6f4f0] flex justify-between items-center h-16 md:px-8 transition-colors shadow-xs">
      <a href="/" className="text-[#080808] text-base font-normal uppercase tracking-tighter font-lexend-deca h-full flex items-center transition-all hover:border-b-1 hover:border-[#5465FF] hover:drop-shadow-[0_2px_20px_rgba(84,101,255,0.5)]">
        {name}
      </a>
      <div className="flex flex-row gap-7 justify-center items-center font-lexend-deca uppercase tracking-tighter font-normal h-full text-base">
        <ul className="flex flex-row gap-7 justify-center items-center h-full">
          {navigation.map((item) => (
            <li
              key={item.name}
              className="h-full transition-all hover:border-b-3 hover:border-[#5465FF] hover:drop-shadow-[0_2px_20px_rgba(84,101,255,0.5)] flex justify-center items-center"
            >
              <a
                href={item.href}
                className="text-[#090909] hover:text-[#090909]/90"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="px-5 py-2 bg-[#5465FF] text-[#ffffff] rounded-full hover:bg-[#5465FF]/90 transition-all transform hover:-translate-y-0.5 tracking-normal"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}
