'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { workexp } from "../lib/const";
import { GroupedWorkExp } from "../lib/types";
import Divider from "./general/divider";

export default function WorkExp() {
  const groupedWorkexp = workexp.reduce<GroupedWorkExp>((acc, curr) => {
    if (!acc[curr.company]) acc[curr.company] = [];
    acc[curr.company].push(curr);
    return acc;
  }, {});

  const entries = Object.entries(groupedWorkexp);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, entries.length - cardsPerView);

  const moveLeft = () => setIndex((prev) => Math.max(prev - 1, 0));
  const moveRight = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section
      id="work"
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-16 bg-[#f6f4f0]"
    >
      <div className="max-w-6xl w-full flex flex-col items-center space-y-6 relative">
        <h1 className="font-title text-3xl md:text-5xl font-bold tracking-tighter text-[#080808] leading-tight max-w-2xl">
          Work Experience
        </h1>
        <Divider />

        <div className="w-full flex items-center justify-center gap-4 relative">
          <div className="overflow-hidden flex-1">
            <div
              className="flex transition-transform duration-500 gap-3 py-5"
              style={{
                transform: `translateX(-${index * (100 / cardsPerView)}%)`,
              }}
            >
              {entries.map(([company, positions], i) => (
                <div
                  key={i}
                  className={`
                    flex-shrink-0
                    w-full md:w-[32%]
                    bg-white rounded-lg p-6
                    flex flex-col items-center text-center gap-6
                    transition-all transform
                    hover:-translate-y-2 hover:shadow-[0_4px_10px_rgba(84,101,255,0.4)]
                  `}
                >
                  <h3 className={`text-lg md:text-xl font-medium tracking-tight text-[#080808] font-title uppercase  rounded-lg px-2 py-0.5 leading-none ${i % 2 === 0 ? 'bg-[#9affcc]' : 'bg-[#ffcb98]'}`}>
                    {company}
                  </h3>
                  <div className="flex flex-col gap-5 justify-center items-center text-center">
                    {positions.map((role, j) => (
                      <div key={j} className="text-center">
                        <p className="text-base md:text-lg text-[#090909] font-lexend-deca">
                          {role.position}
                        </p>
                        <p className="text-sm text-[#090909]/80 font-lexend-deca">
                          {role.startDate} - {role.endDate}
                        </p>
                      </div>
                    ))}
                  </div>
                  {company === "Freelance" && (
                    <a
                      href="#contact"
                      className="font-lexend-deca uppercase font-normal tracking-tight mt-2 inline-block px-5 py-2 bg-[#5465FF] text-white rounded-full hover:bg-[#5465FF]/90 transition-all transform hover:-translate-y-0.5"
                    >
                      Contact Me
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {Object.entries(groupedWorkexp).length > cardsPerView && (
          <div className='w-full flex flex-row items-center justify-end gap-4'>
          <button
            onClick={moveLeft}
            disabled={index === 0}
            className="px-4 py-2 bg-[#5465FF] text-white rounded-full hover:bg-[#5465FF]/90 transition disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={moveRight}
            disabled={index === maxIndex}
            className="px-4 py-2 bg-[#5465FF] text-white rounded-full hover:bg-[#5465FF]/90 transition disabled:opacity-40"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        )}
      </div>
    </section>
  );
}
