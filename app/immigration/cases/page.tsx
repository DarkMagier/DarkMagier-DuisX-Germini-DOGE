"use client";

import Link from "next/link";
import { immigrationCasesMock } from "@/lib/immigrationCasesMock";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function ImmigrationCasesPage() {
    const { lang } = useLanguage() as any;

    return (
        <main className="min-h-screen bg-[var(--color-bg)] px-6 py-10">
            <div className="absolute top-4 right-4"><LanguageSwitcher /></div>

            <div className="max-w-5xl mx-auto space-y-8">

                <h1 className="text-2xl font-bold text-[var(--color-primary)]">
                    Immigration Cases
                </h1>
                <Link href="/immigration" className="underline text-sm mt-2">
                    ← Back to cases
                </Link>
                <div className="bg-white shadow border rounded-2xl p-6">
                    <table className="min-w-full text-sm">
                        <thead>
                        <tr className="bg-gray-50 text-gray-600">
                            <th className="p-3 text-left">Case ID</th>
                            <th className="p-3 text-left">Type</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Updated</th>
                            <th className="p-3"></th>
                        </tr>
                        </thead>

                        <tbody>
                        {immigrationCasesMock.map((c) => (
                            <tr key={c.id} className="border-t">
                                <td className="p-3">{c.id}</td>
                                <td className="p-3 capitalize">{c.type.replace("_", " → ")}</td>
                                <td className="p-3">{renderStatus(c.status)}</td>
                                <td className="p-3">{c.updatedAt}</td>
                                <td className="p-3 text-right">
                                    <Link
                                        href={`/immigration/cases/${c.id}`}
                                        className="px-3 py-1 bg-[var(--color-primary)] text-white rounded-lg text-xs"
                                    >
                                        View details →
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

function renderStatus(s: string) {
    const map: any = {
        in_review: "In review",
        waiting_documents: "Waiting documents",
        completed: "Completed",
    };
    return map[s] || s;
}
