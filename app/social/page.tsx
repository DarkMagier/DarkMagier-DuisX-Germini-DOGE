"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { socialMock } from "@/lib/socialMock";
import { i18n_social } from "@/lib/i18n";
import {LanguageSwitcher} from "@/components/LanguageSwitcher"; // ← 你需要的 B 类 i18n 来源

// 统一取词
const tr = (obj: any, lang: string) => obj?.[lang] || "";

function formatCurrency(amount: number, lang: string) {
    const locale = lang === "de" ? "de-DE" : lang === "zh" ? "zh-CN" : "en-US";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "AUR",
        maximumFractionDigits: 0,
    }).format(amount);
}

export default function SocialPage() {
    const { lang } = useLanguage() as any;
    const data = socialMock;

    return (
        <main className="min-h-screen bg-[var(--color-bg)]">

            {/* Header */}
            <div className="bg-[var(--color-primary)] text-white px-6 py-6 shadow">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="absolute top-4 right-4">
                        <LanguageSwitcher />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">
                            {tr(i18n_social.title, lang)}
                        </h1>
                        <p className="text-sm text-gray-200 mt-1">
                            {tr(i18n_social.social_subtitle, lang)}
                        </p>
                    </div>

                    <Link href="/" className="text-sm underline hover:text-gray-100 mt-10">
                        ← {tr(i18n_social.back_home, lang)}
                    </Link>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

                {/* Hint */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-900">
                    {tr(i18n_social.hint, lang)}
                </div>

                {/* Overview */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(i18n_social.overview_title, lang)}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div><strong>{tr(i18n_social.name, lang)}:</strong> {data.name}</div>
                        <div><strong>{tr(i18n_social.id, lang)}:</strong> {data.accountId}</div>
                        <div><strong>{tr(i18n_social.employment, lang)}:</strong> {data.employmentType}</div>
                        <div><strong>{tr(i18n_social.last_updated, lang)}:</strong> {data.lastUpdated}</div>
                        <div><strong>{tr(i18n_social.status, lang)}:</strong> {data.status}</div>
                    </div>
                </section>

                {/* Contribution Table */}
                <section className="bg-white rounded-2xl shadow-md border p-6">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                        {tr(i18n_social.contrib_title, lang)}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                            <tr className="bg-gray-50 text-gray-600">
                                <th className="px-3 py-2 text-left">{tr(i18n_social.month, lang)}</th>
                                <th className="px-3 py-2 text-right">{tr(i18n_social.employer, lang)}</th>
                                <th className="px-3 py-2 text-right">{tr(i18n_social.employee, lang)}</th>
                                <th className="px-3 py-2 text-right">{tr(i18n_social.total, lang)}</th>
                                <th className="px-3 py-2 text-center">{tr(i18n_social.status, lang)}</th>
                                <th className="px-3 py-2">{tr(i18n_social.note, lang)}</th>
                            </tr>
                            </thead>

                            <tbody>
                            {data.records.map((r) => {
                                const total = r.employer + r.employee;

                                // 状态三语映射（B 类 i18n）
                                const statusMap: any = {
                                    COMPLETED: i18n_social.status_completed,
                                    PENDING: i18n_social.status_pending,
                                    DELAYED: i18n_social.status_delayed,
                                    RECONCILING: i18n_social.status_reconciling,
                                    PREPAID: i18n_social.status_prepaid,
                                    UNKNOWN: i18n_social.status_unknown,
                                };

                                const statusText = tr(statusMap[r.status] || statusMap.UNKNOWN, lang);

                                const statusColor =
                                    r.status === "COMPLETED" ? "bg-green-100 text-green-700" :
                                        r.status === "PREPAID" ? "bg-blue-100 text-blue-700" :
                                            r.status === "DELAYED" ? "bg-red-100 text-red-700" :
                                                r.status === "RECONCILING" ? "bg-purple-100 text-purple-700" :
                                                    "bg-yellow-100 text-yellow-700";

                                return (
                                    <tr key={r.month} className="border-t">
                                        <td className="px-3 py-2">{r.month}</td>
                                        <td className="px-3 py-2 text-right">{formatCurrency(r.employer, lang)}</td>
                                        <td className="px-3 py-2 text-right">{formatCurrency(r.employee, lang)}</td>
                                        <td className="px-3 py-2 text-right">{formatCurrency(total, lang)}</td>

                                        <td className="px-3 py-2 text-center">
                                                <span className={`px-2 py-1 rounded-full text-xs ${statusColor}`}>
                                                    {statusText}
                                                </span>
                                        </td>

                                        <td className="px-3 py-2 text-gray-600">
                                            {r.note || "-"}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>

                        </table>
                    </div>
                </section>

            </div>
        </main>
    );
}
