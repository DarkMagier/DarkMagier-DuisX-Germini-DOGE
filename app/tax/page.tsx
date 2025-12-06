"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { taxMock } from "@/lib/taxMock";
import { i18n_tax } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// B类取词
const tr = (obj: any, lang: string) => obj?.[lang] || "";

function formatCurrency(amount: number, lang: string) {
    const locale = lang === "de" ? "de-DE" : lang === "zh" ? "zh-CN" : "en-US";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "AUR",
        maximumFractionDigits: 0,
    }).format(amount);
}

export default function TaxPage() {
    const { lang } = useLanguage() as any;
    const t = i18n_tax;
    const data = taxMock;

    // 简易预测算法（仅演示）
    const projectedTax = Math.round(data.total * 0.08); // 例如按 8% 上浮

    return (
        <main className="min-h-screen bg-[var(--color-bg)]">
            <div className="absolute top-4 right-4">
                <LanguageSwitcher />
            </div>

            {/* Header */}
            <div className="bg-[var(--color-primary)] text-white px-6 py-6 shadow">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">{tr(t.tax_title, lang)}</h1>
                        <p className="text-sm text-gray-200 mt-1">
                            {tr(t.tax_subtitle, lang)}
                        </p>
                    </div>

                    <Link href="/" className="text-sm underline hover:text-gray-100 mt-10">
                        ← {lang === "zh" ? "返回首页" : lang === "de" ? "Zurück" : "Back"}
                    </Link>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

                {/* 🔵 Hint */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-900">
                    {tr(t.tax_hint, lang)}
                </div>

                {/* 📌 Overview */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(t.tax_overview_title, lang)}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div><strong>{tr(t.tax_name, lang)}:</strong> {data.name}</div>
                        <div><strong>{tr(t.tax_id, lang)}:</strong> {data.taxId}</div>
                        <div><strong>{tr(t.tax_year, lang)}:</strong> {data.year}</div>
                        <div><strong>{tr(t.tax_status, lang)}:</strong> {data.status}</div>
                    </div>

                    <hr className="my-4" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                        <div>
                            <strong>{tr(t.tax_federal, lang)}:</strong>
                            <div className="text-lg font-semibold">
                                {formatCurrency(data.federal, lang)}
                            </div>
                        </div>
                        <div>
                            <strong>{tr(t.tax_state, lang)}:</strong>
                            <div className="text-lg font-semibold">
                                {formatCurrency(data.state, lang)}
                            </div>
                        </div>
                        <div>
                            <strong>{tr(t.tax_city, lang)}:</strong>
                            <div className="text-lg font-semibold">
                                {formatCurrency(data.city, lang)}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 📈 自动税额预测 */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(t.tax_prediction_title, lang)}
                    </h2>

                    <p className="text-sm text-gray-700">
                        {tr(t.tax_prediction_desc, lang)}
                    </p>

                    <div className="bg-[var(--color-bg)] rounded-xl mt-4 p-5">
                        <div className="text-sm text-gray-500">{tr(t.tax_prediction_label, lang)}</div>
                        <div className="text-3xl font-bold text-[var(--color-primary)] mt-1">
                            {formatCurrency(projectedTax, lang)}
                        </div>
                    </div>
                </section>

                {/* 📑 纳税记录 */}
                <section className="bg-white rounded-2xl shadow-md border p-6">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
                        {tr(t.tax_contrib_title, lang)}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                            <tr className="bg-gray-50 text-gray-600">
                                <th className="px-3 py-2 text-left">{tr(t.tax_month, lang)}</th>
                                <th className="px-3 py-2 text-right">{tr(t.tax_amount, lang)}</th>
                                <th className="px-3 py-2 text-left">{tr(t.tax_type, lang)}</th>
                                <th className="px-3 py-2 text-left">{tr(t.tax_note, lang)}</th>
                            </tr>
                            </thead>

                            <tbody>
                            {data.records.map((r) => {

                                const statusLabel = tr(
                                    t["tax_status_" + r.status.toLowerCase()],
                                    lang
                                );

                                const statusColor =
                                    r.status === "COMPLETED" ? "bg-green-100 text-green-700" :
                                        r.status === "REFUND" ? "bg-blue-100 text-blue-700" :
                                            r.status === "UNDER_REVIEW" ? "bg-purple-100 text-purple-700" :
                                                "bg-yellow-100 text-yellow-700";

                                return (
                                    <tr key={r.month} className="border-t">
                                        <td className="px-3 py-2">{r.month}</td>
                                        <td className="px-3 py-2 text-right">{formatCurrency(r.amount, lang)}</td>
                                        <td className="px-3 py-2">
                                                <span className="font-medium">
                                                    {tr(t["tax_" + r.type], lang)}
                                                </span>
                                        </td>
                                        <td className="px-3 py-2 text-gray-600">
                                                <span className={`px-2 py-0.5 rounded-full text-xs ${statusColor}`}>
                                                    {statusLabel}
                                                </span>
                                            <span className="ml-3">{r.note || "-"}</span>
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
