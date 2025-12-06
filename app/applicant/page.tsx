"use client";

import { useState } from "react";
import { EvaluateResponse, CaseType } from "@/lib/types";
// @ts-ignore
import { RequirementResultTable } from "@/components/RequirementResultTable";
// @ts-ignore
import { GovernmentHeader } from "@/components/GovernmentHeader";

export default function ApplicantPage({
                                          params,
                                      }: {
    params: { personId: string };
}) {
    const { personId } = params;

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<EvaluateResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const CASE_TYPE: CaseType = "PERMANENT_RESIDENCE";

    async function evaluate() {
        setLoading(true);
        setData(null);
        setError(null);

        try {
            const res = await fetch("/api/evaluate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    personAccountId: personId,
                    caseType: CASE_TYPE,
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const json = (await res.json()) as EvaluateResponse;
            setData(json);
        } catch (err: any) {
            setError(err.message || "请求失败");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-4xl mx-auto py-10 space-y-8">
            {/* 市级标题：模拟 DuisX 移民局 */}
            <GovernmentHeader mode="city" />

            <section className="space-y-4">
                <h2 className="text-xl font-semibold">
                    永居申请 · 申请人：{personId}
                </h2>
                <p className="text-sm text-gray-600">
                    点击下方按钮即可体验 Gemini 联邦自动审批系统（毫秒级）。
                    现实德国则需要：Termin、复印件、人工审核、三个月以上等待。
                </p>

                <button
                    onClick={evaluate}
                    disabled={loading}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                    {loading ? "自动审批中..." : "一键自动审批永居"}
                </button>

                {error && <p className="text-sm text-red-600">错误：{error}</p>}
            </section>

            {/* 审批结果显示 */}
            {data && (
                <div className="space-y-8">
                    {/* 联邦自动审批引擎标题 */}
                    <GovernmentHeader mode="auto" />

                    <section className="border rounded-xl p-4 space-y-3 bg-white shadow-sm">
                        <h3 className="text-lg font-semibold">审批结果</h3>

                        <p className="text-sm">
                            状态：
                            {data.case.decisionResult?.status === "APPROVED" ? (
                                <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  ✅ 批准
                </span>
                            ) : data.case.decisionResult?.status === "REJECTED" ? (
                                <span className="ml-2 px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                  ❌ 拒绝
                </span>
                            ) : (
                                <span className="ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                  ⚠ 需要更多信息
                </span>
                            )}
                        </p>

                        <p className="text-sm text-gray-700">
                            {data.case.decisionResult?.reasonMessage}
                        </p>

                        <p className="text-xs text-gray-500">
                            耗时：{data.case.decisionResult?.processingTimeMs} ms （现实德国：数月）
                        </p>
                    </section>

                    {/* 条件检测表格 */}
                    <section className="border rounded-xl p-4 bg-white shadow-sm space-y-3">
                        <h3 className="text-lg font-semibold">条件检查明细</h3>
                        <RequirementResultTable items={data.case.requirementResults} />
                    </section>

                    {/* 底层数据展示（讽刺德国不能互联互通） */}
                    <section className="border rounded-xl p-4 bg-white shadow-sm space-y-3">
                        <h3 className="text-lg font-semibold">
                            底层数据（来自养老金/医保/税务/社保统一接口）
                        </h3>
                        <pre className="bg-gray-50 text-xs p-3 rounded-lg overflow-auto">
              {JSON.stringify(data.context, null, 2)}
            </pre>
                    </section>
                </div>
            )}
        </div>
    );
}
