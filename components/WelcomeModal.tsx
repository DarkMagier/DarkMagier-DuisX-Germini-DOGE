"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {LanguageSwitcherModal} from "@/components/LanguageSwitcherModal";

export function WelcomeModal() {
    const { t } = useLanguage();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div
                className="
          bg-white max-w-xl w-full rounded-2xl shadow-xl p-8
          relative border border-gray-200
        "
            >
                {/* --- 顶部右上角语言切换 --- */}
                <div className="absolute top-3 right-3">
                    <LanguageSwitcherModal/>
                </div>

                {/* --- 标题 --- */}
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 mt-6">
                    {t.welcome_title}
                </h2>

                {/* --- 内容 --- */}
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {t.welcome_message}
                </p>

                {/* --- 按钮 --- */}
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => setOpen(false)}
                        className="gov-btn-accent"
                    >
                        {t.close}
                    </button>
                </div>
            </div>
        </div>
    );
}
