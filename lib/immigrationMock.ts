export const immigrationMock = {
    name: "Liang Chen",
    nationality: "China",
    residenceType: "Work Permit (Tech Talent Track)",
    residenceExpiry: "2030-04-12",
    lastUpdated: "2025-02-01",

    status: "ACTIVE",  // ACTIVE / EXPIRING / OVERDUE
    expiryProgress: 60,

    // ⭐ 新增：移民局核心登记字段
    documents: {
        einbuergerungTest: {
            passed: true,
            date: "2024-10-12",
            score: 33,
            maxScore: 33,
        },
        germanLevels: [
            {
                level: "Goethe B1",
                passed: true,
                date: "2024-06-02",
                certificateId: "DE-B1-9930021",
            },
            {
                level: "Goethe B2",
                passed: true,
                date: "2024-11-29",
                certificateId: "DE-B2-7742219",
            },
        ],
        blockedAccount: {
            bank: "MarsBank International",
            amountRequired: 12000,
            amountDeposited: 12800,
            verified: true,
            verifiedDate: "2024-12-15",
        },
        medicalClearance: {
            certified: true,
            date: "2024-12-01",
            provider: "Germini Federal Health Check Center",
        },
        residenceRegistration: {
            address: "DuisX City, Sector 7 · Smart District 14-22",
            registeredDate: "2024-01-18",
        },
        employmentContract: {
            employer: "Germini QuantumTech Labs",
            position: "AI Research Engineer",
            contractStart: "2024-01-01",
            verified: true,
            verifiedDate: "2024-01-03",
        },
        criminalRecord: {
            submitted: true,
            country: "China",
            verified: true,
            verifiedDate: "2024-11-20",
        },
    },

    // ⭐ Timeline 自动由 documents 推出来
    timeline: [
        {
            date: "2024-01-03",
            title: {
                zh: "雇佣合同已验证",
                en: "Employment Contract Verified",
                de: "Arbeitsvertrag verifiziert",
            },
            desc: {
                zh: "雇主 Germini QuantumTech Labs 已上传并验证您的合同。",
                en: "Your contract with Germini QuantumTech Labs has been verified.",
                de: "Ihr Arbeitsvertrag mit Germini QuantumTech Labs wurde verifiziert.",
            },
        },
        {
            date: "2024-01-18",
            title: {
                zh: "市政登记已完成",
                en: "Residence Registration Completed",
                de: "Melderegistrierung abgeschlossen",
            },
            desc: {
                zh: "您的居住地址已在杜伊艾克斯市完成登记。",
                en: "Your residence address has been registered in DuisX City.",
                de: "Ihre Adresse wurde in der Stadt DuisX registriert.",
            },
        },
        {
            date: "2024-06-02",
            title: {
                zh: "德语 B1 证书认证完成",
                en: "German B1 Certificate Verified",
                de: "Deutsch B1 Zertifikat bestätigt",
            },
            desc: {
                zh: "Goethe B1 语言考试通过并已成功认证。",
                en: "Goethe B1 exam passed and officially verified.",
                de: "Goethe B1 Prüfung bestanden und offiziell bestätigt.",
            },
        },
        {
            date: "2024-10-12",
            title: {
                zh: "入籍考试通过",
                en: "Citizenship Test Passed",
                de: "Einbürgerungstest bestanden",
            },
            desc: {
                zh: "您已通过德国入籍考试（33/33）。",
                en: "You passed the citizenship test (33/33).",
                de: "Sie haben den Einbürgerungstest bestanden (33/33).",
            },
        },
        {
            date: "2024-11-20",
            title: {
                zh: "无犯罪记录已验证",
                en: "Criminal Record Verified",
                de: "Führungszeugnis bestätigt",
            },
            desc: {
                zh: "来自中国警方的无犯罪记录已核验完成。",
                en: "Your criminal record certificate has been verified.",
                de: "Ihr Führungszeugnis wurde bestätigt.",
            },
        },
        {
            date: "2024-11-29",
            title: {
                zh: "德语 B2 证书认证完成",
                en: "German B2 Certificate Verified",
                de: "Deutsch B2 Zertifikat bestätigt",
            },
            desc: {
                zh: "Goethe B2 语言证书已验证。",
                en: "Goethe B2 language certificate has been verified.",
                de: "Goethe B2 Sprachzertifikat wurde bestätigt.",
            },
        },
        {
            date: "2024-12-01",
            title: {
                zh: "体检认证完成",
                en: "Medical Clearance Approved",
                de: "Medizinische Freigabe bestätigt",
            },
            desc: {
                zh: "健康检查已通过联邦医疗系统验证。",
                en: "Your medical clearance has been approved.",
                de: "Ihre medizinische Freigabe wurde bestätigt.",
            },
        },
        {
            date: "2024-12-15",
            title: {
                zh: "银行冻结存款已验证",
                en: "Blocked Account Verified",
                de: "Sperrkonto bestätigt",
            },
            desc: {
                zh: "您的冻结账户金额满足居留许可要求。",
                en: "Your blocked account meets the minimum financial requirement.",
                de: "Ihr Sperrkonto erfüllt die finanziellen Mindestanforderungen.",
            },
        },
    ],
};
