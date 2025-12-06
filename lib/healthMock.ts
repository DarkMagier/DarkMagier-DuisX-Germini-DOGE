export const healthMock = {
    name: "Alex Li",
    accountId: "HX-9923-5541",
    provider: "GerminiCare National Health Fund",
    plan: "Standard Federal Plan A",
    status: "ACTIVE",
    lastUpdated: "2026-01-12",

    // 0–100 连续性指数
    continuityScore: 97,

    // 缴费记录（含多种状态）
    records: [
        {
            month: "2026-01",
            employer: 220,
            employee: 120,
            status: "PREPAID",
            note: "Employer prepaid this month",
        },
        {
            month: "2025-12",
            employer: 220,
            employee: 120,
            status: "COMPLETED",
        },
        {
            month: "2025-11",
            employer: 220,
            employee: 120,
            status: "COMPLETED",
        },
        {
            month: "2025-10",
            employer: 0,
            employee: 120,
            status: "DELAYED",
            note: "Employer payroll delay",
        },
        {
            month: "2025-09",
            employer: 220,
            employee: 120,
            status: "RECONCILING",
            note: "Awaiting confirmation from provider",
        },
        {
            month: "2025-08",
            employer: 220,
            employee: 120,
            status: "PENDING",
        },
        {
            month: "2025-07",
            employer: 220,
            employee: 120,
            status: "COMPLETED",
        },
    ],
};
