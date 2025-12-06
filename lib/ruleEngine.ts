// lib/ruleEngine.ts

import {
    CaseType,
    DecisionResult,
    DecisionStatus,
    RequirementResult,
    ImmigrationCase,
    EligibilityContext,
} from "./types";

// ------------------------------------------------------------
// 核心规则：永居（Permanent Residence）自动审批
// ------------------------------------------------------------
export function evaluatePermanentResidence(
    immigrationCase: ImmigrationCase,
    ctx: EligibilityContext
): {
    decision: DecisionResult;
    requirementResults: RequirementResult[];
} {
    const start = Date.now();
    const results: RequirementResult[] = [];

    // ------------------------------------------------------------
    // 1. 养老金（Gemini: >= 60 月）
    // ------------------------------------------------------------
    const pensionOk = ctx.pensionContributedMonths >= 60;

    results.push({
        requirementCode: "PR_PENSION_60_MONTHS",
        passed: pensionOk,
        message: pensionOk
            ? `养老金缴费已满 60 个月（当前：${ctx.pensionContributedMonths}）`
            : `养老金缴费不足 60 个月（当前：${ctx.pensionContributedMonths}）`,
        details: {
            currentMonths: ctx.pensionContributedMonths,
            required: 60,
        },
    });

    // ------------------------------------------------------------
    // 2. 医保（连续 >= 12 月 + valid）
    // ------------------------------------------------------------
    const healthOk =
        ctx.hasValidHealthInsurance &&
        ctx.healthInsuranceContinuousMonths >= 12;

    results.push({
        requirementCode: "PR_HEALTH_INSURANCE_VALID",
        passed: healthOk,
        message: healthOk
            ? `医保连续有效 ≥ 12 月（当前：${ctx.healthInsuranceContinuousMonths}）`
            : `医保不连续或无效（当前：${ctx.healthInsuranceContinuousMonths}）`,
        details: {
            continuousMonths: ctx.healthInsuranceContinuousMonths,
        },
    });

    // ------------------------------------------------------------
    // 3. 税务（必须无欠税）
    // ------------------------------------------------------------
    const taxOk = ctx.noTaxDebt;

    results.push({
        requirementCode: "PR_NO_TAX_DEBT",
        passed: taxOk,
        message: taxOk ? "无税务欠款" : "有未缴纳税款",
    });

    // ------------------------------------------------------------
    // 4. 收入门槛（最近一年收入 ≥ 30k）
    // ------------------------------------------------------------
    const incomeThreshold = 30000;
    const incomeOk = ctx.last12MonthsTaxableIncome >= incomeThreshold;

    results.push({
        requirementCode: "PR_INCOME_THRESHOLD",
        passed: incomeOk,
        message: incomeOk
            ? `最近 12 个月应税收入 ≥ ${incomeThreshold}（当前：${ctx.last12MonthsTaxableIncome}）`
            : `最近 12 个月应税收入不足（当前：${ctx.last12MonthsTaxableIncome}）`,
        details: {
            income: ctx.last12MonthsTaxableIncome,
            required: incomeThreshold,
        },
    });

    // ------------------------------------------------------------
    // 5. 语言（≥ B1）
    // ------------------------------------------------------------
    const order = ["A1", "A2", "B1", "B2", "C1", "C2"];
    const levelIndex = order.indexOf(ctx.languageLevel);
    const langOk = levelIndex >= order.indexOf("B1");

    results.push({
        requirementCode: "PR_LANGUAGE_B1",
        passed: langOk,
        message: langOk
            ? `语言能力达到 B1（当前：${ctx.languageLevel}）`
            : `语言能力不足（当前：${ctx.languageLevel}）`,
    });

    // ------------------------------------------------------------
    // 6. 无犯罪记录（必须 true）
    // ------------------------------------------------------------
    const crimeOk = ctx.noCriminalRecord;

    results.push({
        requirementCode: "PR_NO_CRIMINAL_RECORD",
        passed: crimeOk,
        message: crimeOk ? "无犯罪记录" : "存在犯罪记录",
    });

    // ------------------------------------------------------------
    // 判断是否所有条件满足
    // ------------------------------------------------------------
    const allPassed = results.every((r) => r.passed === true);

    const decisionStatus: DecisionStatus = allPassed
        ? "APPROVED"
        : "REJECTED";

    const decision: DecisionResult = {
        status: decisionStatus,
        reasonCode: allPassed ? "OK" : "CONDITIONS_NOT_MET",
        reasonMessage: allPassed
            ? "所有条件满足。Gemini 自动批准永居。"
            : "部分条件未满足，请检查下方条件明细。",
        channel: "AUTO",
        processingTimeMs: Date.now() - start,
    };

    return {
        decision,
        requirementResults: results,
    };
}

// ------------------------------------------------------------
// 统一入口：根据 CaseType 调用对应规则
// ------------------------------------------------------------
export function evaluateCaseByType(
    caseType: CaseType,
    immigrationCase: ImmigrationCase,
    ctx: EligibilityContext
) {
    switch (caseType) {
        case "PERMANENT_RESIDENCE":
            return evaluatePermanentResidence(immigrationCase, ctx);

        default:
            // 默认情况：尚未实现此签证类型规则
            return {
                decision: {
                    status: "NEEDS_MORE_INFO",
                    reasonCode: "NOT_IMPLEMENTED",
                    reasonMessage: `暂未实现 ${caseType} 的自动审批规则（Gemini 系统可轻松扩展，但现实世界要 3 年招标）。`,
                    channel: "AUTO",
                    processingTimeMs: 5,
                },
                requirementResults: [],
            };
    }
}
