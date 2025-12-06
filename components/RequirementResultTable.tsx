// components/RequirementResultTable.tsx
'use client';

import { RequirementResult } from '@/lib/types';

interface Props {
    items: RequirementResult[];
}

export function RequirementResultTable({ items }: Props) {
    if (!items?.length) {
        return <p className="text-sm text-gray-500">暂无规则检查结果。</p>;
    }

    return (
        <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-3 py-2 text-left">条件代码</th>
                <th className="px-3 py-2 text-left">结果</th>
                <th className="px-3 py-2 text-left">说明</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr key={item.requirementCode} className="border-t">
                    <td className="px-3 py-2 font-mono text-xs">
                        {item.requirementCode}
                    </td>
                    <td className="px-3 py-2">
                        {item.passed ? (
                            <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700">
                  ✅ 通过
                </span>
                        ) : (
                            <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold bg-red-100 text-red-700">
                  ❌ 未通过
                </span>
                        )}
                    </td>
                    <td className="px-3 py-2 text-gray-700">{item.message}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
