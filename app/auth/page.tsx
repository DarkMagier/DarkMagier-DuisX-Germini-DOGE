"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageSwitcherMini } from "@/components/LanguageSwitcherMini";
import { mockIdentity } from "@/lib/mockIdentity";
import { useState } from "react";

type Step = 1 | 2 | 3 | 4;

export default function AuthPage() {
    const router = useRouter();
    const params = useSearchParams();
    const next = params.get("next") || "/";
    const { t } = useLanguage() as any;

    const [step, setStep] = useState<Step>(1);
    const [loading, setLoading] = useState(false);

    // Step 1: Mock Passkey
    const handlePasskey = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(2);
        }, 1500);
    };

    // Step 2: Mock QR scan
    const handleQrScan = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(3);
        }, 1500);
    };

    // Step 3: Mock NFC reading
    const handleNfc = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(4);
        }, 2000);
    };

    // Step 4: Final authorize
    const handleAuthorize = () => {
        setLoading(true);
        setTimeout(() => {
            router.push(next);
        }, 1000);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl shadow-2xl border max-w-xl w-full p-8 relative overflow-hidden transition-transform duration-200">
                {/* 右上角语言切换 */}
                <div className="absolute top-4 right-4">
                    <LanguageSwitcherMini />
                </div>

                {/* 顶部标题区 */}
                <div className="mb-3 mt-6">
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-blue-50 text-[10px] text-blue-700 mb-2">
                        <span className="text-xs">🪪</span>
                        <span>Atlantis Identity Wallet · Germini</span>
                    </div>

                    <h1 className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                        {t.auth_title || "Germini Digital Identity Authorization"}
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {t.auth_subtitle ||
                            "Authenticate using your digital identity. Fully paperless and compliant with Atlantis Union standards."}
                    </p>
                </div>

                {/* Hint：亚盟 + 身份钱包 */}
                <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-xs mb-5">
                    <p className="text-blue-900 mb-1">
                        {t.auth_hint ||
                            "Note: You may authenticate using the chip (eMRTD) of your ID card or passport. Non-Atlantis passports are supported via e-Residency."}
                    </p>
                    <p className="text-blue-900/80">
                        {t.auth_mock_hint ||
                            "This demo uses mock data and a simulated flow, as if everything were already implemented."}
                    </p>
                </div>

                {/* 步骤指示器 */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                    <StepDot active={step >= 1} label={t.auth_step1_label || "Passkey"} />
                    <StepConnector />
                    <StepDot active={step >= 2} label={t.auth_step2_label || "QR"} />
                    <StepConnector />
                    <StepDot active={step >= 3} label={t.auth_step3_label || "NFC"} />
                    <StepConnector />
                    <StepDot active={step >= 4} label={t.auth_step4_label || "Review"} />
                </div>

                {/* 主体内容：根据 step 切换 */}
                {step === 1 && (
                    <StepCard>
                        <h2 className="text-lg font-semibold mb-3">
                            {t.auth_step1_title || "Step 1 · Confirm with Passkey"}
                        </h2>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                            {t.auth_step1_desc ||
                                "Please confirm that it is really you by using a Passkey on this device. The verification happens locally and is never sent to our servers."}
                        </p>

                        <PrimaryButton onClick={handlePasskey} loading={loading}>
                            {loading
                                ? t.auth_step1_loading || "Verifying Passkey…"
                                : t.auth_step1_button || "Use Passkey"}
                        </PrimaryButton>
                    </StepCard>
                )}

                {step === 2 && (
                    <StepCard>
                        <h2 className="text-lg font-semibold mb-3">
                            {t.auth_step2_title || "Step 2 · Scan the QR Code"}
                        </h2>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                            {t.auth_step2_desc ||
                                "Open the Germini/Atlantis Identity Wallet on your phone and scan the QR code below to establish a secure session."}
                        </p>

                        {/* 模拟二维码区域 */}
                        <div className="flex flex-col items-center">
                            <div className="w-44 h-44 bg-white rounded-xl flex items-center justify-center mb-3 border border-gray-300 shadow-inner">
                                <div className="w-28 h-28 grid grid-cols-6 grid-rows-6 gap-0.5">
                                    {Array.from({ length: 36 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={
                                                i % 5 === 0 || i % 7 === 0
                                                    ? "bg-[var(--color-primary)]"
                                                    : "bg-gray-300"
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mb-2">
                                {t.auth_step2_hint || "Simulated QR code for this demo"}
                            </p>
                        </div>

                        <PrimaryButton onClick={handleQrScan} loading={loading}>
                            {loading
                                ? t.auth_step2_loading || "Waiting for mobile connection…"
                                : t.auth_step2_button || "I have scanned the QR code"}
                        </PrimaryButton>
                    </StepCard>
                )}

                {step === 3 && (
                    <StepCard>
                        <h2 className="text-lg font-semibold mb-3">
                            {t.auth_step3_title || "Step 3 · Read ID via NFC"}
                        </h2>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                            {t.auth_step3_desc ||
                                "Hold your ID card or passport close to the back of your phone. Your mobile app will read the chip via NFC."}
                        </p>

                        {/* NFC 动画示意 */}
                        <div className="flex flex-col items-center mb-4">
                            <div className="relative w-32 h-40">
                                {/* 手机轮廓 */}
                                <div className="absolute inset-0 rounded-3xl border border-gray-400 bg-gray-100" />
                                {/* NFC 波纹 */}
                                <div className="absolute inset-4 rounded-3xl border border-[var(--color-primary)] animate-ping" />
                                {/* 卡片 */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-12 bg-white border border-gray-300 rounded-md shadow">
                                    <div className="h-3 bg-[var(--color-primary)]/80 rounded-t-md" />
                                    <div className="p-1 text-[10px] text-gray-500 text-center">
                                        ID / Passport
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                                {t.auth_step3_hint || "Mock NFC animation · no real card is read."}
                            </p>
                        </div>

                        <PrimaryButton onClick={handleNfc} loading={loading}>
                            {loading
                                ? t.auth_step3_loading || "Reading chip…"
                                : t.auth_step3_button || "Simulate NFC reading"}
                        </PrimaryButton>
                    </StepCard>
                )}

                {step === 4 && (
                    <StepCard>
                        <h2 className="text-lg font-semibold mb-3">
                            {t.auth_step4_title || "Step 4 · Review and authorize"}
                        </h2>
                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                            {t.auth_step4_desc ||
                                "The following identity data was obtained from your digital ID. Please confirm authorization to continue."}
                        </p>

                        {/* 只有到这一步才显示身份信息 */}
                        <div className="bg-gray-50 border rounded-xl p-4 text-sm space-y-2 mb-4 shadow-inner">
                            <InfoRow label={t.auth_id_name || "Name"} value={mockIdentity.name} />
                            <InfoRow label={t.auth_id_number || "Identity Number"} value={mockIdentity.idNumber} />
                            <InfoRow label={t.auth_id_birth || "Date of Birth"} value={mockIdentity.birthDate} />
                            <InfoRow label={t.auth_id_nation || "Nationality"} value={mockIdentity.nationality} />
                            <InfoRow label={t.auth_id_valid || "Valid Until"} value={mockIdentity.validUntil} />
                            <InfoRow label={t.auth_id_issuer || "Issuer"} value={mockIdentity.issuer} />
                        </div>

                        <PrimaryButton onClick={handleAuthorize} loading={loading}>
                            {loading
                                ? t.auth_authorize || "Authorizing…"
                                : t.auth_authorize || "Authorize and continue"}
                        </PrimaryButton>
                    </StepCard>
                )}

                {/* 最底部 Mock 声明 */}
                <p className="mt-4 text-[10px] text-gray-400 text-center leading-relaxed">
                    {t.auth_mock_footer ||
                        "This authorization flow is a fully mocked demo inspired by modern eID systems (e.g. NL DigiD / eIDAS). No real personal data is processed."}
                </p>
            </div>
        </main>
    );
}

/* 小组件：步骤点 & 连接线 & 卡片 */

function StepDot({ active, label }: { active: boolean; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div
                className={`
          w-3 h-3 rounded-full 
          transition-colors duration-200
          ${active ? "bg-[var(--color-primary)]" : "bg-gray-300"}
        `}
            />
            <span className="mt-1">{label}</span>
        </div>
    );
}

function StepConnector() {
    return <div className="flex-1 h-px bg-gray-300 mx-1" />;
}

function StepCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="mt-2 bg-white/60 rounded-xl border border-gray-100 px-4 py-4">
            {children}
        </div>
    );
}

function PrimaryButton({
                           onClick,
                           loading,
                           children,
                       }: {
    onClick: () => void;
    loading: boolean;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="
                w-full mt-2 py-2.5 rounded-lg text-white
                bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]
                font-medium text-sm shadow
                transition active:scale-[0.98]
                disabled:opacity-60 disabled:cursor-not-allowed
            "
        >
            {children}
        </button>
    );
}

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <strong>{label}: </strong>
            <span>{value}</span>
        </div>
    );
}
