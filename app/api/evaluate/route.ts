// app/api/evaluate/route.ts

import { NextRequest, NextResponse } from "next/server";

import { EvaluateRequest, EvaluateResponse, ImmigrationCase } from "@/lib/types";

import { mockContext, mockImmigrationAccount, mockProfile } from "@/lib/mockData";
import { evaluateCaseByType } from "@/lib/ruleEngine";

import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
    const body = (await req.json()) as EvaluateRequest;

    // Mock 数据（现实德国无法自动读取 → Gemini 国家可以秒级整合）
    const context = mockContext;
    const account = mockImmigrationAccount;
    const profile = mockProfile;

    const now = new Date().toISOString();

    // 构造一个新的 Case（模拟市级移民局收到申请）
    const immigrationCase: ImmigrationCase = {
        caseId: uuid(),
        personAccountId: body.personAccountId,
        caseType: body.caseType,
        submittedAt: now,
        requirementResults: [],
    };

    // 调用规则引擎（联邦自动审批引擎）
    const { decision, requirementResults } = evaluateCaseByType(
        body.caseType,
        immigrationCase,
        context
    );

    immigrationCase.decisionResult = decision;
    immigrationCase.requirementResults = requirementResults;
    immigrationCase.decidedAt = new Date().toISOString();

    const res: EvaluateResponse = {
        case: immigrationCase,
        account,
        profile,
        context,
    };

    return NextResponse.json(res);
}
