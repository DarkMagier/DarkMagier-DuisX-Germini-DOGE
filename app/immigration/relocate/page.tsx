"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { i18n_immigration } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const tr = (obj: any, lang: string) => obj?.[lang] || obj?.en || "";

export default function RelocatePage() {
    const { lang } = useLanguage() as any;
    const t = i18n_immigration;
    const params = useSearchParams();
    const router = useRouter();
    const [open, setOpen] = useState(true);

    const city = params.get("city") || "FRIESBURG";

    useEffect(() => {
        setOpen(true);
    }, [city]);

    return (
        <main className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center p-6">



            {/* 背景简单放一点文案 */}
            <div className="text-center text-gray-500 text-sm">
                {/* 可以写点 “数据已成功迁移到新城市档案中心……” 这种文案 */}
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-sm relative">
                        {/* 右上角语言切换 */}
                        <div className="absolute top-4 right-4">
                            <LanguageSwitcher />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">
                            🍟 Friesburg City · {tr(t.imm_city_welcome_title, lang)}
                        </h3>

                        <p className="text-gray-700 whitespace-pre-line mb-4">
                            {tr(t.imm_city_welcome_desc, lang)}
                        </p>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => router.push("/immigration")}
                                className="px-4 py-2 rounded-lg bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm"
                            >
                                {tr(t.imm_back_to_immigration, lang)}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
