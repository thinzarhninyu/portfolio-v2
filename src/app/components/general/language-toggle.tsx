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
        <div className="absolute w-auto h-auto bg-white top-4 right-0 px-3 rounded-l-lg" ref={containerRef}>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex items-center gap-1.5 py-2 rounded-full bg-secondary-accent hover:bg-secondary-accent/90 cursor-pointer"
            >
                <Flag
                    code={currentLang.countryCode}
                    style={{ width: 16, height: 12, borderRadius: 0 }}
                />
                <span className="uppercase text-xs font-lexend-deca text-[#090909] font-normal tracking-tight">
                    {currentLang.code}
                </span>
                <ChevronDown className="w-3 h-3 text-[#090909]" />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute mt-2 right-1 w-20 bg-white rounded-md shadow-md z-50"
                    >
                        <ul className="py-2">
                            {languages.map((lang) => (
                                <li key={lang.code}>
                                    <button
                                        className={`uppercase flex items-center justify-center gap-2 w-full px-4 py-2 text-center text-xs hover:bg-white text-[#090909] hover:text-hover-accent`}
                                        onClick={() => {
                                            setCurrentLang(lang);
                                            setOpen(false);
                                            document.cookie = `lang=${lang.code}; path=/; max-age=31536000`; // 1 year
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
