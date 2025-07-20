"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { LanguageCode } from "../lib/types";

type Language = {
    code: LanguageCode;
    label: string;
    countryCode: string;
};

const defaultLang: Language = {
    code: "en",
    label: "English",
    countryCode: "gb",
};

type LanguageContextType = {
    currentLang: Language;
    setCurrentLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [currentLang, setCurrentLang] = useState<Language>(defaultLang);
    return (
        <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
}
