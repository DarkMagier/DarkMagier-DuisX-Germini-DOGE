"use client";

import { GovernmentContext } from "@/lib/government";

export function GovernmentHeader({
                                     mode, // "city" | "federal" | "auto"
                                 }: {
    mode: "city" | "federal" | "auto";
}) {
    let title = "";

    if (mode === "city") {
        title = `${GovernmentContext.city.name} — Immigration Office`;
    } else if (mode === "federal") {
        title = `${GovernmentContext.federation.name} — Pension / Tax / Social Services`;
    } else if (mode === "auto") {
        title = `${GovernmentContext.federation.name} — Automated Immigration Decision Engine`;
    }

    return (
        <header className="mb-6 p-4 bg-gray-50 rounded-xl border">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-gray-600">
                （这是 Demo，所以所有系统都在同一个页面里，只是标题切换不同管辖范围来讽刺德国 IT 的碎片化）
            </p>
        </header>
    );
}
