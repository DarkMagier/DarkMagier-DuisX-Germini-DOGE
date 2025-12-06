"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { pensionMock } from "@/lib/pensionMock";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function formatCurrency(amount: number, lang: string) {
    const locale = lang === "de" ? "de-DE" : lang === "zh" ? "zh-CN" : "en-US";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "AUR",
        maximumFractionDigits: 0,
    }).format(amount);
}

// 新增：状态样式映射
const statusStyles: Record<string, string> = {
    COMPLETED: "bg-green-100 text-green-700",
    PREPAID: "bg-blue-100 text-blue-700",
    RECONCILING: "bg-purple-100 text-purple-700",
    DELAYED_EMPLOYER: "bg-orange-100 text-orange-700",
    PENDING: "bg-yellow-100 text-yellow-700",
};

export default function PensionPage() {
    const { t, lang } = useLanguage() as any;

    const data = pensionMock;

    // 预测算法（demo）
    const yearsToRetire = data.retirementAge - data.currentAge;
    const avgYearContribution = (data.totalAmount / (data.totalMonths || 1)) * 12;
    const projectedFund = data.totalAmount + avgYearContribution * yearsToRetire;
    const projectedMonthlyPension = (projectedFund * 0.015) / 12;

    const projectedLabel = (t.pension_projection_estimate_label as string).replace(
        "{age}",
        String(data.retirementAge),
    );

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">

            {/* 顶部 Header + 语言切换 */}
            <div className="relative bg-[var(--color-primary)] text-white px-6 py-6 shadow">
                <div className="absolute top-4 right-4">
                    <LanguageSwitcher />
                </div>

                <div className="max-w-5xl mx-auto">
                    <h1 className="text-2xl font-bold">{t.pension_title}</h1>
                    <p className="text-sm opacity-80 mt-1">{t.pension_subtitle}</p>

                    <Link href="/" className="text-sm underline opacity-90 hover:text-gray-100">
                        ← {t.close}
                    </Link>
                </div>
            </div>

            {/* 内容 */}
            <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

                {/* 实时系统 Hinter */}
                <section className="
                    bg-blue-50 border border-blue-200
                    p-4 rounded-xl text-xs text-blue-900 shadow-sm
                ">
                    <p className="font-semibold mb-1">
                        {lang === "zh"
                            ? "系统提示（实时数据保障）"
                            : lang === "de"
                                ? "Systemhinweis (Echtzeit-Datenübertragung)"
                                : "System Notice (Real-time Data Integrity)"}
                    </p>

                    <p>
                        {lang === "zh"
                            ? "本系统的所有缴费记录均通过实时接口自动入账，确保不会出现“200 年前的缴费记录仍未更新”这种情况。所有数据同步处理，无需人工干预。"
                            : lang === "de"
                                ? "Alle Beitragsdaten werden über Echtzeit-Schnittstellen automatisch übermittelt – keine Szenarien wie auf der Erde, wo ‚Beiträge aus dem Jahr 1823 noch nicht verbucht sind‘. Alles wird ohne manuelle Verzögerung aktualisiert."
                                : "All pension records are transmitted in real time, preventing Earth-like situations where 'contributions from 200 years ago are still pending'. All data is synchronized automatically."}
                    </p>
                </section>

                {/* 概览卡 */}
                <section className="bg-white rounded-2xl shadow border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {t.pension_overview_title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <InfoRow label={t.pension_name_label} value={data.name} />
                        <InfoRow label={t.pension_account_label} value={data.accountId} />
                        <InfoRow label={t.pension_months_label} value={data.totalMonths} />
                        <InfoRow label={t.pension_amount_label} value={formatCurrency(data.totalAmount, lang)} />
                        <InfoRow label={t.pension_last_updated_label} value={data.lastUpdated} />
                    </div>
                </section>

                {/* 自动预测 */}
                <section className="bg-white rounded-2xl shadow border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {t.pension_projection_title}
                    </h2>
                    <p className="text-sm text-gray-700">{t.pension_projection_desc}</p>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard label={t.pension_months_label} value={data.totalMonths} />
                        <StatCard label={t.pension_amount_label} value={formatCurrency(data.totalAmount, lang)} />
                        <StatCard label={projectedLabel} value={formatCurrency(projectedMonthlyPension, lang)} highlight />
                    </div>
                </section>

                {/*缴费记录*/}
                <section className="bg-white rounded-2xl shadow border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {t.pension_contrib_title}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead>
                            <tr className="bg-gray-50 text-gray-600">
                                <Th>{t.pension_contrib_month}</Th>
                                <Th right>{t.pension_contrib_employer}</Th>
                                <Th right>{t.pension_contrib_employee}</Th>
                                <Th right>{t.pension_contrib_total}</Th>
                                <Th>{t.pension_contrib_status}</Th>
                                <Th>{t.pension_contrib_note}</Th>
                            </tr>
                            </thead>

                            <tbody>
                            {data.contributions.map((c) => {
                                const total = c.employerAmount + c.employeeAmount;

                                // 状态翻译三语
                                const statusLabel =
                                    c.status === "COMPLETED" ? t.pension_status_completed :
                                        c.status === "PREPAID" ? (lang === "zh" ? "已预缴" : lang === "de" ? "vorausbezahlt" : "prepaid") :
                                            c.status === "DELAYED_EMPLOYER" ? (lang === "zh" ? "雇主延迟" : lang === "de" ? "Arbeitgeber verspätet" : "employer delayed") :
                                                c.status === "RECONCILING" ? (lang === "zh" ? "对账中" : lang === "de" ? "in Abstimmung" : "reconciling") :
                                                    t.pension_status_pending;

                                return (
                                    <tr key={c.month} className="border-t">
                                        <Td>{c.month}</Td>
                                        <Td right>{formatCurrency(c.employerAmount, lang)}</Td>
                                        <Td right>{formatCurrency(c.employeeAmount, lang)}</Td>
                                        <Td right>{formatCurrency(total, lang)}</Td>
                                        <Td>
                                                <span className={`px-2 py-0.5 rounded-full text-xs ${statusStyles[c.status]}`}>
                                                    {statusLabel}
                                                </span>
                                        </Td>
                                        <Td>{c.note || "-"}</Td>
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

/* 小组件 */

function InfoRow({ label, value }: any) {
    return (
        <div>
            <span className="font-semibold">{label}: </span>
            <span>{value}</span>
        </div>
    );
}

function StatCard({ label, value, highlight }: any) {
    return (
        <div className={`rounded-xl p-4 ${highlight ? "bg-blue-50" : "bg-gray-100"}`}>
            <div className="text-xs text-gray-500">{label}</div>
            <div className={`mt-1 font-semibold ${highlight ? "text-[var(--color-primary)] text-2xl" : "text-xl"}`}>
                {value}
            </div>
        </div>
    );
}

function Th({ children, right }: any) {
    return (
        <th className={`px-3 py-2 ${right ? "text-right" : "text-left"}`}>
            {children}
        </th>
    );
}

function Td({ children, right }: any) {
    return (
        <td className={`px-3 py-2 ${right ? "text-right" : "text-left"} text-gray-700`}>
            {children}
        </td>
    );
}
