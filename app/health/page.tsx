"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { healthMock } from "@/lib/healthMock";
import { i18n_health } from "@/lib/i18n";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";

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

export default function HealthPage() {
    const { lang } = useLanguage() as any;
    const data = healthMock;

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
                            {tr(i18n_health.health_title, lang)}
                        </h1>
                        <p className="text-sm text-gray-200 mt-1">
                            {tr(i18n_health.health_subtitle, lang)}
                        </p>
                    </div>

                    <Link href="/" className="text-sm underline hover:text-gray-100 mt-10">
                        ← {tr(i18n_health.back_home, lang)}
                    </Link>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

                {/* 实时提示 */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-900">
                    {tr(i18n_health.health_hint, lang)}
                </div>

                {/* 概览卡片 */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">

                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(i18n_health.health_overview_title, lang)}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div><strong>{tr(i18n_health.health_name, lang)}: </strong>{data.name}</div>
                        <div><strong>{tr(i18n_health.health_id, lang)}: </strong>{data.accountId}</div>
                        <div><strong>{tr(i18n_health.health_provider, lang)}: </strong>{data.provider}</div>
                        <div><strong>{tr(i18n_health.health_plan, lang)}: </strong>{data.plan}</div>
                        <div><strong>{tr(i18n_health.health_status, lang)}: </strong>{data.status}</div>
                        <div><strong>{tr(i18n_health.health_last_updated, lang)}: </strong>{data.lastUpdated}</div>
                    </div>
                </section>

                {/* 连续性 */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">

                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(i18n_health.health_continuity_title, lang)}
                    </h2>

                    <p className="text-sm text-gray-700">
                        {tr(i18n_health.health_continuity_desc, lang)}
                    </p>

                    <div className="mt-4 flex items-center gap-6">
                        <div className="text-5xl font-bold text-[var(--color-primary)]">
                            {data.continuityScore}%
                        </div>
                        <div className="text-sm text-gray-600">
                            {tr(i18n_health.health_continuity_note, lang)}
                        </div>
                    </div>

                </section>

                {/* 缴费记录 */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">

                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(i18n_health.health_contrib_title, lang)}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                            <tr className="bg-gray-50 text-gray-600">
                                <th className="px-3 py-2 text-left">{tr(i18n_health.health_month, lang)}</th>
                                <th className="px-3 py-2 text-right">{tr(i18n_health.health_employer, lang)}</th>
                                <th className="px-3 py-2 text-right">{tr(i18n_health.health_employee, lang)}</th>
                                <th className="px-3 py-2 text-right">{tr(i18n_health.health_total, lang)}</th>
                                <th className="px-3 py-2 text-center">{tr(i18n_health.health_status, lang)}</th>
                                <th className="px-3 py-2">{tr(i18n_health.health_note, lang)}</th>
                            </tr>
                            </thead>

                            <tbody>
                            {data.records.map((r) => {
                                const total = r.employer + r.employee;

                                // B 类 i18n 状态映射
                                const statusMap: any = {
                                    COMPLETED: i18n_health.health_status_completed,
                                    PREPAID: i18n_health.health_status_prepaid,
                                    DELAYED: i18n_health.health_status_delayed,
                                    RECONCILING: i18n_health.health_status_reconciling,
                                    PENDING: i18n_health.health_status_pending,
                                };

                                const statusText = tr(statusMap[r.status], lang);

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
