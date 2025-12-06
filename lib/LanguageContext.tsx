"use client";

import { createContext, useContext, useState } from "react";
import { Lang, translations } from "./i18n";

interface LangContextState {
    lang: Lang;
    t: typeof translations["en"];
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LangContextState | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("de");

    return (
        <LanguageContext.Provider
            value={{
                lang,
                t: translations[lang],
                setLang,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
    return ctx;
}
