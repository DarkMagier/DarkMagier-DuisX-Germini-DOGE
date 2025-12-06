"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

export function LanguageSwitcherMini() {
    const { lang, setLang } = useLanguage();
    const [open, setOpen] = useState(false);

    const label =
        lang === "de" ? "Deutsch 🇩🇪" :
            lang === "zh" ? "中文 🇨🇳" :
                "English 🇬🇧";

    return (
        <div className="relative select-none">
            <button
                onClick={() => setOpen(!open)}
                className="
          text-[var(--color-primary)]
          font-medium
          bg-gray-100
          hover:bg-gray-200
          px-3 py-1.5
          rounded-md text-sm shadow-sm
        "
            >
                {label} <span className="opacity-70 ml-1">▼</span>
            </button>

            {open && (
                <div
                    className="
            absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg border text-sm
            z-50
          "
                >
                    <div
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => { setLang("de"); setOpen(false); }}
                    >
                        Deutsch 🇩🇪
                    </div>
                    <div
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => { setLang("zh"); setOpen(false); }}
                    >
                        中文 🇨🇳
                    </div>
                    <div
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => { setLang("en"); setOpen(false); }}
                    >
                        English 🇬🇧
                    </div>
                </div>
            )}
        </div>
    );
}
