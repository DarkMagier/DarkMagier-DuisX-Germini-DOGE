"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageSwitcherMiniB() {
    const { lang, setLang } = useLanguage() as any;

    const langs = [
        { code: "zh", label: "中文" },
        { code: "en", label: "EN" },
        { code: "de", label: "DE" },
    ];

    return (
        <div className="flex gap-1">
            {langs.map((l) => (
                <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`
                        px-2 py-1 rounded-md text-xs border
                        ${lang === l.code
                        ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
                    `}
                >
                    {l.label}
                </button>
            ))}
        </div>
    );
}
