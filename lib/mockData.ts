// lib/mockData.ts
import {
    ImmigrationAccount,
    ImmigrationProfile,
    EligibilityContext,
} from "./types";

// ------------------------------------------------------------
// 申请人的移民档案（语言、融合课程、犯罪记录、教育等）
// ------------------------------------------------------------
export const mockProfile: ImmigrationProfile = {
    profileId: "profile-1",
    personAccountId: "person-1",

    // 语言能力
    languageLevel: "B1",

    // 融合课程
    integrationCourseCompleted: true,
    integrationCourseCompletionDate: "2023-06-01T00:00:00.000Z",

    // 德国价值观课程（Orientierungskurs）
    orientationCourseCompleted: true,
    orientationCourseCompletionDate: "2023-06-15T00:00:00.000Z",

    // 犯罪记录（Mock: 没有）
    hasCriminalRecord: false,

    // 学历
    highestEducation: "Master",

    // 婚姻状况
    maritalStatus: "SINGLE",

    metadata: {},
};

// ------------------------------------------------------------
// 移民账户（当前居留状态：Blue Card、有效期等）
// ------------------------------------------------------------
export const mockImmigrationAccount: ImmigrationAccount = {
    immigrationAccountId: "imm-1",
    personAccountId: "person-1",

    currentStatus: "BLUE_CARD_HOLDER",
    currentPermitType: "BLUE_CARD",

    currentPermitValidFrom: "2022-01-01T00:00:00.000Z",
    currentPermitValidTo: "2026-01-01T00:00:00.000Z",

    active: true,
    overstayFlag: false,
    employmentRestricted: false,

    fileNumber: "GEM-DUISX-2025-00001",

    eligibilityCache: {},
};

// ------------------------------------------------------------
// EligibilityContext: 联邦级养老金系统 + 税务系统 + 医保系统
// 这里模拟所有德国移民局需要查但查不到的数据
// ------------------------------------------------------------
export const mockContext: EligibilityContext = {
    personAccountId: "person-1",

    // 养老金（PR 需要 60 月）
    pensionContributedMonths: 62,
    totalPensionContributions: 38000,

    // 社保缴纳（月）
    socialSecurityCoveredMonths: 62,

    // 医保（≥12个月连续 + 有效）
    healthInsuranceContinuousMonths: 24,
    hasValidHealthInsurance: true,

    // 税务（是否欠税）
    noTaxDebt: true,
    last12MonthsTaxableIncome: 48000,

    // 犯罪记录（用于自动判断）
    noCriminalRecord: true,

    // 语言能力（用于自动判断）
    languageLevel: "B1",

    metadata: {},
};
