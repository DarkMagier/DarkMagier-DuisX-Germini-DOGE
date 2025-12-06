// lib/pensionMock.ts

export const pensionMock = {
    name: "Li Wei",
    accountId: "PN-4829-2291-00",
    currentAge: 32,
    retirementAge: 67,

    totalMonths: 58,
    totalAmount: 42380, // AUR currency
    lastUpdated: "2026-01-12",

    contributions: [
        {
            month: "2026-01",
            employerAmount: 520,
            employeeAmount: 260,
            status: "COMPLETED",
            note: "Real-time processed",
        },
        {
            month: "2025-12",
            employerAmount: 520,
            employeeAmount: 260,
            status: "RECONCILING",
            note: "Bank confirmation in progress",
        },
        {
            month: "2025-11",
            employerAmount: 520,
            employeeAmount: 260,
            status: "PREPAID",
            note: "Employer prepaid for Q4",
        },
        {
            month: "2025-10",
            employerAmount: 520,
            employeeAmount: 260,
            status: "COMPLETED",
            note: "",
        },
        {
            month: "2025-09",
            employerAmount: 520,
            employeeAmount: 260,
            status: "DELAYED_EMPLOYER",
            note: "Employer submitted late · auto-penalty waived in Germini",
        },
        {
            month: "2025-08",
            employerAmount: 520,
            employeeAmount: 260,
            status: "PENDING",
            note: "Awaiting real-time settlement",
        },
        {
            month: "2025-07",
            employerAmount: 520,
            employeeAmount: 260,
            status: "COMPLETED",
            note: "",
        },
        {
            month: "2025-06",
            employerAmount: 520,
            employeeAmount: 260,
            status: "COMPLETED",
            note: "",
        },
    ],
};
