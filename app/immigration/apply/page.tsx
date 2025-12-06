"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { immigrationMock } from "@/lib/immigrationMock";
import { i18n_immigration_apply } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const tr = (obj: any, lang: string) => obj?.[lang] || obj?.en || "";

/* -------------------------------------------------------------------------- */
/*                          Immigration Apply Page                             */
/* -------------------------------------------------------------------------- */

export default function ImmigrationApplyPage() {
    const { lang } = useLanguage() as any;
    const t = i18n_immigration_apply;
    const router = useRouter();
    const params = useSearchParams();

    const data = immigrationMock;
    const docs = data.documents;

    /* ------------------------ Step management ------------------------ */
    const [step, setStep] = useState(() => {
        const pre = params.get("step");
        return pre ? Number(pre) : 1;
    });

    /* ------------------------ Government verifications ------------------------ */
    const [verified, setVerified] = useState({
        tax: false,
        social: false,
        health: false,
        criminal: docs.criminalRecord.verified,
    });

    /* ------------------------ Third-party certificate ------------------------ */
    const [certType, setCertType] = useState("");
    const [certNumber, setCertNumber] = useState("");
    const [certVerified, setCertVerified] = useState(false);

    /* ------------------------ Auth Callback Handler ------------------------ */
    useEffect(() => {
        const action = params.get("action");
        const type = params.get("type");

        // Government verification return
        if (action === "verify" && type) {
            setVerified((v) => ({ ...v, [type]: true }));
            setStep(3); // always return to Step3
        }

        // Certificate verification return
        if (action === "verifyCert") {
            setCertVerified(true);
            setStep(3);
        }
    }, [params]);

    /* ------------------------ Trigger Auth Flow ------------------------ */
    const goAuthFor = (type: string) => {
        const nextUrl = `/immigration/apply?action=verify&type=${type}&step=3`;
        router.push(`/auth?next=${encodeURIComponent(nextUrl)}`);
    };

    const goAuthCert = () => {
        if (!certType || !certNumber) return;
        const nextUrl = `/immigration/apply?action=verifyCert&step=3`;
        router.push(`/auth?next=${encodeURIComponent(nextUrl)}`);
    };

    /* ------------------------ Eligibility Auto Check ------------------------ */
    const eligible =
        docs.einbuergerungTest.passed &&
        docs.germanLevels.some((x) => x.level === "C1" || x.level === "B2") &&
        docs.employmentContract.verified &&
        docs.blockedAccount.verified &&
        verified.tax &&
        verified.social &&
        verified.health &&
        verified.criminal;

    return (
        <main className="min-h-screen bg-[var(--color-bg)] px-6 py-10">
            <div className="absolute top-4 right-4">
                <LanguageSwitcher />
            </div>

            <div className="max-w-4xl mx-auto space-y-10">

                {/* ----------------------- Page Header ----------------------- */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-[var(--color-primary)]">
                        {tr(t.apply_title, lang)}
                    </h1>
                    <Link href="/" className="underline text-sm mt-10">
                        ← {tr(t.back_home, lang)}
                    </Link>
                </div>

                {/* ----------------------- Step Navigation ----------------------- */}
                <div className="flex gap-4 text-sm">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`
                                px-4 py-2 rounded-lg border cursor-default
                                ${
                                step === s
                                    ? "bg-[var(--color-primary)] text-white"
                                    : "bg-white text-gray-600"
                            }
                            `}
                        >
                            Step {s}
                        </div>
                    ))}
                </div>

                {/* ----------------------- STEP 1 ----------------------- */}
                {step === 1 && (
                    <Step1 lang={lang} t={t} onNext={() => setStep(2)} />
                )}

                {/* ----------------------- STEP 2 ----------------------- */}
                {step === 2 && (
                    <Step2
                        lang={lang}
                        t={t}
                        docs={docs}
                        onNext={() => setStep(3)}
                    />
                )}

                {/* ----------------------- STEP 3 ----------------------- */}
                {step === 3 && (
                    <Step3
                        lang={lang}
                        t={t}
                        docs={docs}
                        verified={verified}
                        certType={certType}
                        certNumber={certNumber}
                        certVerified={certVerified}
                        eligible={eligible}
                        setCertType={setCertType}
                        setCertNumber={setCertNumber}
                        goAuthFor={goAuthFor}
                        goAuthCert={goAuthCert}
                    />
                )}
            </div>
        </main>
    );
}

/* -------------------------------------------------------------------------- */
/*                               STEP COMPONENTS                               */
/* -------------------------------------------------------------------------- */

function Step1({ lang, t, onNext }: any) {
    return (
        <section className="bg-white p-6 rounded-2xl shadow border space-y-6">
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                {tr(t.apply_step1_title, lang)}
            </h2>

            <p className="text-sm text-gray-700">{tr(t.apply_step1_desc, lang)}</p>

            <select className="border rounded-lg w-full px-3 py-2">
                <option value="bluecard">Blue Card → Permanent Residence</option>
                <option value="long">Long-term Residence Permit</option>
                <option value="natural">Naturalization / Citizenship</option>
            </select>

            <button
                onClick={onNext}
                className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white"
            >
                {tr(t.apply_next, lang)}
            </button>
        </section>
    );
}

function Step2({ lang, t, docs, onNext }: any) {
    const languageOk = docs.germanLevels.some(
        (x: any) => x.level === "B2" || x.level === "C1"
    );

    return (
        <section className="bg-white p-6 rounded-2xl shadow border space-y-6">
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                {tr(t.apply_step2_title, lang)}
            </h2>

            <p className="text-sm text-gray-700">{tr(t.apply_step2_desc, lang)}</p>

            <div className="space-y-3 text-sm">
                <Check label="Citizenship exam passed" ok={docs.einbuergerungTest.passed} />
                <Check label="Language level B2 or higher" ok={languageOk} />
                <Check label="Employment verified" ok={docs.employmentContract.verified} />
                <Check label="Blocked account verified" ok={docs.blockedAccount.verified} />
            </div>

            <button
                onClick={onNext}
                className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white"
            >
                {tr(t.apply_continue, lang)}
            </button>
        </section>
    );
}

function Step3({
                   lang,
                   t,
                   docs,
                   verified,
                   certType,
                   certNumber,
                   certVerified,
                   eligible,
                   setCertType,
                   setCertNumber,
                   goAuthFor,
                   goAuthCert,
               }: any) {
    return (
        <section className="bg-white p-6 rounded-2xl shadow border space-y-10">
            <h2 className="text-xl font-semibold text-[var(--color-primary)]">
                {tr(t.apply_step3_title, lang)}
            </h2>

            {/* A: Already available */}
            <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">
                    Already Available (Auto-imported)
                </h3>
                <Item label="Citizenship exam" />
                <Item label="German certificate B2" />
                <Item label="Employment contract" />
                <Item label="Blocked account" />
                <Item label="Medical clearance" />
            </div>

            {/* B: Government verification */}
            <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">
                    Government verification (requires authorization)
                </h3>

                <GovVerify
                    label="Tax records"
                    ok={verified.tax}
                    onVerify={() => goAuthFor("tax")}
                />
                <GovVerify
                    label="Social security"
                    ok={verified.social}
                    onVerify={() => goAuthFor("social")}
                />
                <GovVerify
                    label="Health insurance"
                    ok={verified.health}
                    onVerify={() => goAuthFor("health")}
                />
            </div>

            {/* C: Third-party certificate */}
            <div>
                <h3 className="font-semibold text-[var(--color-primary)] mb-2">
                    Third-party certificate
                </h3>

                <select
                    className="border rounded-lg px-3 py-2 w-full"
                    value={certType}
                    onChange={(e) => setCertType(e.target.value)}
                >
                    <option value="">Choose certificate</option>
                    <option value="goethe_b2">Goethe-Zertifikat B2</option>
                    <option value="goethe_c1">Goethe-Zertifikat C1</option>
                    <option value="telc_b2">telc Deutsch B2</option>
                    <option value="telc_c1">telc Deutsch C1 Hochschule</option>
                    <option value="dsh2">DSH-2</option>
                </select>

                <input
                    placeholder="Certificate number"
                    className="border rounded-lg px-3 py-2 w-full mt-2"
                    value={certNumber}
                    onChange={(e) => setCertNumber(e.target.value)}
                />

                <button
                    onClick={goAuthCert}
                    className="mt-2 px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg"
                >
                    Verify certificate
                </button>

                {certVerified && (
                    <div className="mt-2 text-green-600 text-sm">
                        ✓ Certificate verified (C1)
                    </div>
                )}
            </div>

            {/* Eligibility result */}
            <div className="pt-4 border-t">
                <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                    Eligibility Result
                </h3>

                {eligible ? (
                    <div className="text-green-700 font-semibold mt-2">
                        ✔ You meet all requirements. You may submit your application.
                    </div>
                ) : (
                    <div className="text-red-600 mt-2">
                        ✗ Missing requirements. Please complete all verifications.
                    </div>
                )}
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/*                              Small Components                                */
/* -------------------------------------------------------------------------- */

function Check({ label, ok }: any) {
    return (
        <div className="flex items-center gap-2">
            <span className={ok ? "text-green-600" : "text-red-600"}>
                {ok ? "✓" : "✗"}
            </span>
            {label}
        </div>
    );
}

function Item({ label }: any) {
    return (
        <div className="flex items-center justify-between py-1 text-sm">
            <span>{label}</span>
            <span className="text-green-600 text-sm">✓ verified</span>
        </div>
    );
}

function GovVerify({ label, ok, onVerify }: any) {
    return (
        <div className="flex items-center justify-between py-1 text-sm">
            <span>{label}</span>

            {ok ? (
                <span className="text-green-600">✓ verified</span>
            ) : (
                <button
                    onClick={onVerify}
                    className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 rounded-lg border"
                >
                    Authorize
                </button>
            )}
        </div>
    );
}
