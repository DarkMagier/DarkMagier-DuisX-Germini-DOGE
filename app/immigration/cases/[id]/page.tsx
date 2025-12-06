"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { immigrationCasesMock } from "@/lib/immigrationCasesMock";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

// 动画 class
const fadeInClass =
    "opacity-0 translate-y-2 animate-[fadeInUp_0.4s_ease_forwards]";

// 日期工具
const daysBetween = (a: string, b: string) => {
    const d1 = new Date(a);
    const d2 = new Date(b);
    return Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
};

export default function CaseDetailPage() {
    const { id } = useParams();
    const { lang } = useLanguage() as any;

    const caseData = immigrationCasesMock.find((c) => c.id === id);
    if (!caseData) return <div>Case not found</div>;

    // Timeline reverse → latest first
    const timeline = caseData.timeline.slice().reverse();
    const latest = timeline[0];

    // -------------------------------------------
    // OPTION D — 预计完成时间（ETA）
    // -------------------------------------------
    const avgStepDays = 10; // 假设每个处理步骤平均 10 天（可调）
    const remainingSteps = Math.max(1, 8 - timeline.length); // 粗略模型：8 个常见步骤
    const etaDays = avgStepDays * remainingSteps;

    const etaDate = new Date();
    etaDate.setDate(etaDate.getDate() + etaDays);

    // -------------------------------------------
    // OPTION E — 自动 Stalled（超过 30 天未更新）
    // -------------------------------------------
    const daysSinceUpdate = daysBetween(latest.date, new Date().toISOString());
    const stalled = daysSinceUpdate > 30;

    // -------------------------------------------
    // OPTION F — Officer Inbox（消息收件箱）
    // -------------------------------------------
    const messages = caseData.messages || [];

    return (
        <main className="min-h-screen bg-[var(--color-bg)] px-6 py-10">

            <div className="absolute top-4 right-4">
                <LanguageSwitcher />
            </div>

            <div className="max-w-4xl mx-auto space-y-10">

                {/* HEADER */}
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-[var(--color-primary)]">
                        Case {caseData.id}
                    </h1>

                    <Link href="/immigration/cases" className="underline text-sm mt-10">
                        ← Back to cases
                    </Link>
                </div>

                {/* ------------------------------------------- */}
                {/* ★★★ 当前阶段 + ETA + Stalled Warning ★★★ */}
                {/* ------------------------------------------- */}
                <div className="bg-yellow-50 border border-yellow-300 rounded-2xl p-6 shadow space-y-3">
                    <h2 className="text-xl font-semibold text-yellow-900">
                        Current Stage
                    </h2>

                    <p className="text-sm text-yellow-900">{latest.title}</p>
                    <p className="text-xs text-yellow-800">{latest.date}</p>

                    <p className="text-sm text-yellow-900">{latest.desc}</p>

                    {/* ETA 区块 */}
                    <div className="mt-4 bg-white border border-yellow-300 p-4 rounded-xl">
                        <strong className="text-yellow-900">Estimated completion:</strong>
                        <div className="text-yellow-800 text-sm mt-1">
                            Approx. {etaDays} days ({etaDate.toISOString().substring(0, 10)})
                        </div>
                    </div>

                    {/* stalled warning */}
                    {stalled && (
                        <div className="bg-red-100 border border-red-300 p-4 rounded-xl text-red-800 text-sm">
                            ⚠ Your case has not been updated for {daysSinceUpdate} days.
                            It may require manual review or additional information.
                        </div>
                    )}
                </div>

                {/* ------------------------------------------- */}
                {/* Case Overview */}
                {/* ------------------------------------------- */}
                <div className="bg-white rounded-2xl shadow-md border p-6 space-y-2">
                    <div><strong>Type:</strong> {caseData.type.replace("_", " → ")}</div>
                    <div><strong>Status:</strong> {caseData.status}</div>
                    <div><strong>Officer:</strong> {caseData.officer}</div>
                    <div><strong>Last update:</strong> {caseData.updatedAt}</div>
                </div>

                {/* ------------------------------------------- */}
                {/* OPTION F — Officer Inbox */}
                {/* ------------------------------------------- */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-4">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        Officer Messages
                    </h2>

                    {messages.length === 0 && (
                        <p className="text-sm text-gray-600 italic">
                            No messages from your case officer.
                        </p>
                    )}

                    <div className="space-y-4">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`border rounded-xl p-4 bg-blue-50 shadow ${fadeInClass}`}
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="flex justify-between">
                                    <strong className="text-blue-900">
                                        {msg.subject}
                                    </strong>
                                    <span className="text-xs text-blue-700">{msg.date}</span>
                                </div>
                                <p className="text-sm text-blue-900 mt-2">{msg.body}</p>
                                <p className="text-xs text-blue-600 mt-1 italic">
                                    — {msg.officer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ------------------------------------------- */}
                {/* Timeline */}
                {/* ------------------------------------------- */}
                <section className="bg-white rounded-2xl shadow-md border p-6 space-y-6">
                    <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                        Case Timeline
                    </h2>

                    <div className="space-y-6">
                        {timeline.map((item, i) => {
                            let tagColor = "";
                            let actorLabel = "";

                            switch (item.actor) {
                                case "officer":
                                    tagColor = "bg-blue-100 text-blue-700 border-blue-300";
                                    actorLabel = "Immigration Officer";
                                    break;
                                case "user":
                                    tagColor = "bg-green-100 text-green-700 border-green-300";
                                    actorLabel = "Applicant";
                                    break;
                                default:
                                    tagColor = "bg-gray-100 text-gray-700 border-gray-300";
                                    actorLabel = "System Event";
                            }

                            return (
                                <div
                                    key={i}
                                    className={`flex gap-4 ${fadeInClass}`}
                                    style={{ animationDelay: `${i * 0.08}s` }}
                                >
                                    <div className="mt-1">
                                        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)]" />
                                    </div>

                                    <div>
                                        <div className="font-semibold">{item.title}</div>
                                        <div className="text-xs text-gray-500">{item.date}</div>
                                        <div className="text-sm text-gray-700 mt-1">{item.desc}</div>

                                        <span
                                            className={`inline-block mt-2 px-2 py-1 text-xs rounded border ${tagColor}`}
                                        >
                                            {actorLabel}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </main>
    );
}
