"use client";

import { useState } from "react";
import { name, navigation } from "@/app/lib/const";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f6f4f0] flex justify-between items-center h-16 px-5 md:px-12 shadow-xs">

      {/* Logo / Brand */}
      <div className="flex items-center gap-4">
        <a href="/" className="text-[#080808] text-base font-normal uppercase tracking-tighter font-lexend-deca transition-all">
          {name}
        </a>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-5 font-lexend-deca text-base uppercase tracking-tighter">
        <ul className="flex gap-5">
          {navigation.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-[#090909] hover:text-[#5465FF] transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="px-4 py-2 bg-[#5465FF] text-white rounded-full hover:bg-[#5465FF]/90 transition">
          Contact Me
        </a>
      </div>

      {/* Hamburger Icon */}
      <button onClick={() => setIsOpen(true)} className="md:hidden text-[#080808]">
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 top-0 right-0 w-screen h-screen bg-[#f6f4f0] z-50 p-6 flex flex-col"
          >

            <div className="flex justify-between items-center mb-10">
              <a href="/" className="text-[#080808] text-base font-normal uppercase tracking-tighter font-lexend-deca transition-all">
                {name}
              </a>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-[#090909]" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-xl uppercase text-[#090909] font-lexend-deca">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} onClick={() => setIsOpen(false)} className="hover:text-[#5465FF] transition">
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block mt-4 px-4 py-2 bg-[#5465FF] text-white rounded-full hover:bg-[#5465FF]/90 transition"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
