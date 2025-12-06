"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { immigrationMock } from "@/lib/immigrationMock";
import { i18n_immigration } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useState } from "react";
import { useRouter } from "next/navigation";

// B 类三语翻译函数
const tr = (obj: any, lang: string) => obj?.[lang] || obj?.en || "";

export default function ImmigrationPage() {
    const { lang } = useLanguage() as any;
    const data = immigrationMock;
    const t = i18n_immigration;
    const docs = data.documents;
    const router = useRouter();

    // 搬家选择城市弹窗
    const [showRelocateModal, setShowRelocateModal] = useState(false);
    const [targetCity, setTargetCity] = useState<"FRIESBURG" | "">("");

    const handleConfirmRelocate = () => {
        if (!targetCity) return;
        // Demo：统一跳转到 Auth，next 指向 relocation 页面并带上 city 参数
        const nextUrl = `/immigration/relocate?city=${targetCity}`;
        router.push(`/auth?next=${encodeURIComponent(nextUrl)}`);
    };

    return (
        <main className="min-h-screen bg-[var(--color-bg)]">

            {/* 右上角语言切换 */}
            <div className="absolute top-4 right-4">
                <LanguageSwitcher />
            </div>

            {/* 顶部 Header */}
            <div className="bg-[var(--color-primary)] text-white px-6 py-6 shadow">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">{tr(t.imm_title, lang)}</h1>
                        <p className="text-sm text-gray-200 mt-1">
                            {tr(t.imm_subtitle, lang)}
                        </p>
                    </div>

                    <Link href="/" className="text-sm underline hover:text-gray-100">
                        ← {tr(t.back_home, lang)}
                    </Link>
                </div>
            </div>

            {/* 内容区 */}
            <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">

                {/* 📌 实时数据提示 */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-sm text-blue-900">
                    {tr(t.imm_hint, lang)}
                </div>

                {/* ────────────────────────────────────────────── */}
                {/* 📍 个人移民信息概览 */}
                {/* ────────────────────────────────────────────── */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-6">

                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(t.imm_overview_title, lang)}
                    </h2>

                    {/* 基本信息网格 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div><strong>{tr(t.imm_name, lang)}:</strong> {data.name}</div>
                        <div><strong>{tr(t.imm_nationality, lang)}:</strong> {data.nationality}</div>
                        <div><strong>{tr(t.imm_residence_type, lang)}:</strong> {data.residenceType}</div>
                        <div><strong>{tr(t.imm_residence_expiry, lang)}:</strong> {data.residenceExpiry}</div>
                        <div><strong>{tr(t.imm_status, lang)}:</strong> {tr(t["imm_status_" + data.status], lang)}</div>
                        <div><strong>{tr(t.imm_last_updated, lang)}:</strong> {data.lastUpdated}</div>
                    </div>

                    {/* 🍀 倒计时进度条 */}
                    <div className="mt-4">
                        <div className="text-sm text-gray-600">{tr(t.imm_expiry_warning, lang)}</div>
                        <div className="mt-2 bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-[var(--color-primary)] h-full"
                                style={{ width: `${data.expiryProgress}%` }}
                            />
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                            {data.expiryProgress}% {tr(t.imm_progress_used, lang)}
                        </div>
                    </div>

                    {/* 详细材料确认信息 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 pt-4 border-t">

                        {/* 入籍考试 */}
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <strong>🟦 Citizenship Test:</strong>
                            <div>Passed: {docs.einbuergerungTest.passed ? "Yes" : "No"}</div>
                            <div>Score: {docs.einbuergerungTest.score}/{docs.einbuergerungTest.maxScore}</div>
                            <div>Date: {docs.einbuergerungTest.date}</div>
                        </div>

                        {/* 语言考试 */}
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <strong>🟩 German Certificates:</strong>
                            {docs.germanLevels.map((l, i) => (
                                <div key={i}>
                                    {l.level}: {l.passed ? "✓" : "✗"} ({l.date})
                                </div>
                            ))}
                        </div>

                        {/* 冻结存款 */}
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <strong>🟨 Blocked Account:</strong>
                            <div>Bank: {docs.blockedAccount.bank}</div>
                            <div>Required: {docs.blockedAccount.amountRequired} AUR</div>
                            <div>Deposited: {docs.blockedAccount.amountDeposited} AUR</div>
                            <div>Verified: {docs.blockedAccount.verified ? "Yes" : "No"}</div>
                        </div>

                        {/* 医疗证明 */}
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <strong>🟪 Medical Clearance:</strong>
                            <div>Certified: {docs.medicalClearance.certified ? "Yes" : "No"}</div>
                            <div>Date: {docs.medicalClearance.date}</div>
                            <div>Provider: {docs.medicalClearance.provider}</div>
                        </div>

                        {/* 雇佣合同 */}
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <strong>🟧 Employment:</strong>
                            <div>Employer: {docs.employmentContract.employer}</div>
                            <div>Position: {docs.employmentContract.position}</div>
                            <div>Start: {docs.employmentContract.contractStart}</div>
                            <div>Verified: {docs.employmentContract.verified ? "Yes" : "No"}</div>
                        </div>

                        {/* 无犯罪记录 */}
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <strong>🟥 Criminal Record:</strong>
                            <div>Submitted: {docs.criminalRecord.submitted ? "Yes" : "No"}</div>
                            <div>Verified: {docs.criminalRecord.verified ? "Yes" : "No"}</div>
                            <div>Country: {docs.criminalRecord.country}</div>
                        </div>
                    </div>

                    {/* 操作按钮区 */}
                    <div className="mt-6 flex flex-wrap gap-4">
                        <Link
                            href="/immigration/apply"
                            className="px-4 py-2 rounded-lg text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow text-sm"
                        >
                            {tr(t.imm_apply_new, lang)}
                        </Link>

                        <Link
                            href="/immigration/cases"
                            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 border shadow text-sm"
                        >
                            {tr(t.imm_view_cases, lang)}
                        </Link>

                        {/* 搬家按钮：只打开城市选择弹窗 */}
                        <button
                            onClick={() => setShowRelocateModal(true)}
                            className="px-4 py-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 border shadow text-sm"
                        >
                            🏙️ {tr(t.imm_relocate, lang)}
                        </button>
                    </div>
                </section>

                {/* Timeline */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        {tr(t.imm_timeline_title, lang)}
                    </h2>

                    <div className="space-y-4">
                        {data.timeline.map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="mt-1">
                                    <div className="w-3 h-3 bg-[var(--color-primary)] rounded-full" />
                                </div>
                                <div>
                                    <div className="font-medium">{item.title[lang]}</div>
                                    <div className="text-xs text-gray-500">{item.date}</div>
                                    <div className="text-sm text-gray-700">{item.desc[lang]}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* ────────────────────────────────────────────── */}
            {/* 🟦 Modal：选择搬家城市 + UDA 提示 */}
            {/* ────────────────────────────────────────────── */}
            {showRelocateModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-sm relative">
                        <h3 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">
                            {tr(t.imm_relocate_title, lang)}
                        </h3>

                        <p className="text-gray-700 mb-4 whitespace-pre-line">
                            {tr(t.imm_relocate_hint, lang)}
                        </p>

                        {/* 选择城市（目前只有薯条市 Friesburg） */}
                        <div className="mb-4">
                            <label className="block text-xs text-gray-500 mb-1">
                                {tr(t.imm_relocate_select_city_label, lang)}
                            </label>
                            <select
                                value={targetCity}
                                onChange={(e) => setTargetCity(e.target.value as any)}
                                className="w-full border rounded-lg px-3 py-2 text-sm"
                            >
                                <option value="">
                                    {tr(t.imm_relocate_select_city_placeholder, lang)}
                                </option>
                                <option value="FRIESBURG">
                                    🍟 Frenchfries City (North Germini)
                                </option>
                            </select>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowRelocateModal(false)}
                                className="px-3 py-1.5 rounded-lg bg-gray-200 hover:bg-gray-300"
                            >
                                {tr(t.imm_cancel, lang)}
                            </button>

                            <button
                                disabled={!targetCity}
                                onClick={handleConfirmRelocate}
                                className={`
                                    px-4 py-1.5 rounded-lg text-white text-sm
                                    ${targetCity
                                    ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
                                    : "bg-gray-400 cursor-not-allowed"}
                                `}
                            >
                                {tr(t.imm_continue_auth, lang)}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}
