"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

export function LanguageSwitcherModal() {
    const { lang, setLang } = useLanguage();
    const [open, setOpen] = useState(false);

    const label =
        lang === "de" ? "Deutsch" :
            lang === "zh" ? "中文" :
                "English";

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
          rounded-md
          text-sm
          shadow-sm
          flex items-center gap-1
        "
            >
                🌐 {label} <span className="opacity-70">▼</span>
            </button>

            {open && (
                <div
                    className="
            absolute right-0 mt-1
            bg-white
            border border-gray-200
            rounded-md shadow-lg
            w-32 z-50
            text-sm
            overflow-hidden
          "
                >
                    <div
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                            lang === "de" ? "font-semibold text-[var(--color-primary)]" : ""
                        }`}
                        onClick={() => { setLang("de"); setOpen(false); }}
                    >
                        Deutsch
                    </div>

                    <div
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                            lang === "zh" ? "font-semibold text-[var(--color-primary)]" : ""
                        }`}
                        onClick={() => { setLang("zh"); setOpen(false); }}
                    >
                        中文
                    </div>

                    <div
                        className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                            lang === "en" ? "font-semibold text-[var(--color-primary)]" : ""
                        }`}
                        onClick={() => { setLang("en"); setOpen(false); }}
                    >
                        English
                    </div>
                </div>
            )}
        </div>
    );
}
