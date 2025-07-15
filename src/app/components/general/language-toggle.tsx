"use client";

import { useState, useEffect, useRef } from "react";
import Flag from "react-world-flags";
import { useLanguage } from "../../context/language-context";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { languages } from "@/app/lib/const";

export default function LanguageToggle() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { currentLang, setCurrentLang } = useLanguage();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="fixed top-10 right-10 z-50 w-auto h-auto font-goldman" ref={containerRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-secondary-accent hover:bg-secondary-accent/90 shadow-sm cursor-pointer"
            >
                <Flag
                    code={currentLang.countryCode}
                    style={{ width: 24, height: 16, borderRadius: 3 }}
                />
                <span className="uppercase text-sm font-manrope text-[#0d0d0d] font-bold">
                    {currentLang.code}
                </span>
                <ChevronDown className="w-4 h-4 text-[#0d0d0d]" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute mt-2 right-3 w-20 bg-secondary-font rounded-md font-bold"
                    >
                        <ul className="py-2">
                            {languages.map((lang) => (
                                <li key={lang.code}>
                                    <button
                                        className={`uppercase flex items-center justify-center gap-2 w-full px-4 py-2 text-center text-sm hover:bg-white text-[#0d0d0d] hover:text-hover-accent`}
                                        onClick={() => {
                                            setCurrentLang(lang);
                                            setOpen(false);
                                        }}
                                    >
                                        <Flag
                                            code={lang.countryCode}
                                            style={{ width: 20, height: 14, borderRadius: 3 }}
                                        />
                                        {lang.code}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
