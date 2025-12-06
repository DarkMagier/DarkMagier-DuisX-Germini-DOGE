"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

export function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();
    const [open, setOpen] = useState(false);

    const label =
        lang === "de" ? "Deutsch" :
            lang === "zh" ? "中文" :
                "English";

    return (
        <div className="relative">
            {/* 主按钮 */}
            <button
                onClick={() => setOpen(!open)}
                className="
          text-white
          bg-[var(--color-primary)]
          hover:bg-[var(--color-primary-hover)]
          px-4 py-2
          rounded-lg
          shadow
          flex items-center gap-1
          font-medium
          transition
        "
            >
                {label} <span className="opacity-80">▼</span>
            </button>

            {open && (
                <div
                    className="
            absolute right-0 mt-2
            bg-[var(--color-primary)]
            text-white
            rounded-lg shadow-xl
            w-40 z-50
            border border-[var(--color-primary-hover)]
            overflow-hidden
          "
                >
                    {/* 德语 */}
                    <div
                        onClick={() => { setLang("de"); setOpen(false); }}
                        className={`
              px-4 py-3 cursor-pointer text-sm
              transition
              ${
                            lang === "de"
                                ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold"
                                : "hover:bg-[var(--color-primary-hover)]"
                        }
            `}
                    >
                        Deutsch
                    </div>

                    {/* 中文 */}
                    <div
                        onClick={() => { setLang("zh"); setOpen(false); }}
                        className={`
              px-4 py-3 cursor-pointer text-sm
              transition
              ${
                            lang === "zh"
                                ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold"
                                : "hover:bg-[var(--color-primary-hover)]"
                        }
            `}
                    >
                        中文
                    </div>

                    {/* English */}
                    <div
                        onClick={() => { setLang("en"); setOpen(false); }}
                        className={`
              px-4 py-3 cursor-pointer text-sm
              transition
              ${
                            lang === "en"
                                ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold"
                                : "hover:bg-[var(--color-primary-hover)]"
                        }
            `}
                    >
                        English
                    </div>
                </div>
            )}
        </div>
    );
}
