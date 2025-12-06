export const immigrationCasesMock = [
    {
        id: "CASE-2025-001",
        type: "bluecard_pr",
        createdAt: "2025-01-10",
        updatedAt: "2025-02-03",
        status: "in_review",
        officer: "K. Weber",

        timeline: [
            {
                date: "2025-01-10",
                title: "Application submitted",
                desc: "Your application for Permanent Residence via Blue Card pathway was received.",
                actor: "system",
            },
            {
                date: "2025-01-11",
                title: "Case assigned",
                desc: "Your case has been assigned to Immigration Officer K. Weber.",
                actor: "system",
            },
            {
                date: "2025-01-13",
                title: "Initial review",
                desc: "Officer reviewed your employment contract and tax verification.",
                actor: "officer",
            },
            {
                date: "2025-01-14",
                title: "Additional documents required",
                desc: "Please upload your German certificate (B2 or higher).",
                actor: "officer",
            },
            {
                date: "2025-01-15",
                title: "Documents submitted",
                desc: "You uploaded Goethe-Zertifikat C1.",
                actor: "user",
            },
            {
                date: "2025-01-17",
                title: "Verification",
                desc: "Officer verified your language certificate and blocked account.",
                actor: "officer",
            },
            {
                date: "2025-01-25",
                title: "Background check",
                desc: "Criminal record and employment history checks completed.",
                actor: "system",
            },
            {
                date: "2025-02-03",
                title: "Final review in progress",
                desc: "Your case is currently undergoing final legal eligibility assessment.",
                actor: "officer",
            }
        ]
    },

    {
        id: "CASE-2025-014",
        type: "citizenship",
        createdAt: "2025-01-20",
        updatedAt: "2025-02-01",
        status: "waiting_documents",
        officer: "M. Schneider",

        timeline: [
            {
                date: "2025-01-20",
                title: "Application submitted",
                desc: "Your naturalization request was received.",
                actor: "system",
            },
            {
                date: "2025-01-21",
                title: "Case assigned",
                desc: "Officer M. Schneider is now processing your case.",
                actor: "system",
            },
            {
                date: "2025-01-23",
                title: "Exam verification",
                desc: "Citizenship exam certificate has been verified.",
                actor: "officer",
            },
            {
                date: "2025-01-24",
                title: "Additional documents required",
                desc: "Proof of continuous residence (last 3 years) is required.",
                actor: "officer",
            }
        ]
    }
];
