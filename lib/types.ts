// lib/types.ts

export type DecisionStatus = 'APPROVED' | 'REJECTED' | 'NEEDS_MORE_INFO';
export type DecisionChannel = 'AUTO' | 'MANUAL';

export type CaseType =
    | 'BLUE_CARD'
    | 'WORK_PERMIT'
    | 'PERMANENT_RESIDENCE'
    | 'EU_LONG_TERM'
    | 'FAMILY_REUNION'
    | 'STUDENT'
    | 'OTHER';

export interface RequirementResult {
    requirementCode: string;
    passed: boolean;
    message: string;
    details?: Record<string, unknown>;
}

export interface DecisionResult {
    status: DecisionStatus;
    reasonCode: string;
    reasonMessage: string;
    channel: DecisionChannel;
    processingTimeMs: number;
}

export interface ImmigrationCase {
    caseId: string;
    personAccountId: string;
    caseType: CaseType;
    submittedAt: string;
    decidedAt?: string;

    requirementResults: RequirementResult[];
    decisionResult?: DecisionResult;
}

export type ImmigrationStatus =
    | 'NONE'
    | 'TEMPORARY_RESIDENT'
    | 'BLUE_CARD_HOLDER'
    | 'PERMANENT_RESIDENT'
    | 'CITIZEN'
    | 'EXPIRED'
    | 'REVOKED';

export interface ImmigrationAccount {
    immigrationAccountId: string;
    personAccountId: string;

    currentStatus: ImmigrationStatus;
    currentPermitType?: string;

    currentPermitValidFrom?: string;
    currentPermitValidTo?: string | null;

    active: boolean;
    overstayFlag: boolean;
    employmentRestricted: boolean;

    fileNumber?: string;

    eligibilityCache?: Record<string, unknown>;
}

export interface ImmigrationProfile {
    profileId: string;
    personAccountId: string;

    languageLevel: string;

    integrationCourseCompleted: boolean;
    integrationCourseCompletionDate?: string;

    orientationCourseCompleted: boolean;
    orientationCourseCompletionDate?: string;

    hasCriminalRecord: boolean;

    highestEducation?: string;

    maritalStatus?: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'OTHER';

    metadata?: Record<string, unknown>;
}

export interface EligibilityContext {
    personAccountId: string;

    pensionContributedMonths: number;
    totalPensionContributions: number;

    socialSecurityCoveredMonths: number;

    healthInsuranceContinuousMonths: number;
    hasValidHealthInsurance: boolean;

    noTaxDebt: boolean;
    last12MonthsTaxableIncome: number;

    noCriminalRecord: boolean;

    languageLevel: string;

    metadata?: Record<string, unknown>;
}

export interface EvaluateRequest {
    personAccountId: string;
    caseType: CaseType;
}

export interface EvaluateResponse {
    case: ImmigrationCase;
    account: ImmigrationAccount;
    profile: ImmigrationProfile;
    context: EligibilityContext;
}
