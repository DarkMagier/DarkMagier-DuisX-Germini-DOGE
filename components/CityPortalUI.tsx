"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";
import { WelcomeModal } from "@/components/WelcomeModal";

export default function CityPortalUI() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            {/* 欢迎弹窗 */}
            <WelcomeModal />

            {/* --- 顶部 Banner --- */}
            <div className="gov-banner text-center px-6">
                <div className="flex justify-end mb-4">
                    <LanguageSwitcher />
                </div>

                <h1 className="text-4xl font-bold text-white drop-shadow">
                    {t.portal_title}
                </h1>

                <p className="text-lg text-gray-200 mt-3">
                    {t.portal_subtitle}
                </p>
            </div>

            {/* --- 主体介绍区 --- */}
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

                <section className="space-y-4">
                    <h2 className="gov-section-title">{t.about_title}</h2>

                    <p className="leading-relaxed text-gray-700 text-lg whitespace-pre-line">
                        {t.about_p1}
                    </p>

                    <p className="leading-relaxed text-gray-700 text-lg whitespace-pre-line">
                        {t.about_p2}
                    </p>
                </section>

                {/* --- 系统入口区 --- */}
                <section className="space-y-6">
                    <h2 className="gov-section-title">{t.services_title}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Immigration */}
                        <Link
                            href="/auth?next=/immigration"
                            className="
                block bg-white rounded-xl shadow-md p-6 border border-gray-200
                hover:shadow-lg hover:-translate-y-1 transition
            "
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">🛂</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                                        {t.s_immigration}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {t.s_immigration_desc}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Pension */}
                        <Link
                            href="/auth?next=/pension"
                            className="
                block bg-white rounded-xl shadow-md p-6 border border-gray-200
                hover:shadow-lg hover:-translate-y-1 transition
            "
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">🏛️</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                                        {t.s_pension}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {t.s_pension_desc}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Health */}
                        <Link
                            href="/auth?next=/health"
                            className="
                block bg-white rounded-xl shadow-md p-6 border border-gray-200
                hover:shadow-lg hover:-translate-y-1 transition
            "
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">🏥</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                                        {t.s_health}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {t.s_health_desc}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Social Security */}
                        <Link
                            href="/auth?next=/social"
                            className="
                block bg-white rounded-xl shadow-md p-6 border border-gray-200
                hover:shadow-lg hover:-translate-y-1 transition
            "
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">🧾</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                                        {t.s_social}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {t.s_social_desc}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Tax */}
                        <Link
                            href="/auth?next=/tax"
                            className="
                block bg-white rounded-xl shadow-md p-6 border border-gray-200
                hover:shadow-lg hover:-translate-y-1 transition
            "
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">💼</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                                        {t.s_tax}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {t.s_tax_desc}
                                    </p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </section>

            </div>
        </main>
    );
}
