// lib/i18n.ts

export type Lang = "zh" | "en" | "de";

export const translations = {
    zh: {
        city_name: "杜伊斯X市",
        state_name: "南莱尼-瓦斯特法利亚州",
        federation_name: "Germini 联邦共和国",

        portal_welcome: "欢迎来到杜伊斯X市 · 政务服务门户",
        portal_intro:
            "这是 Germini 国最现代化的示范城市（影射德国但更高效）。",

        city_label: "城市",
        state_label: "州（State）",
        federal_label: "国家（Federal）",

        immigration: "移民局（市级）",
        pension: "养老金系统（联邦）",
        health: "医保 Hub（联邦）",
        social: "社保系统（联邦）",
        tax: "税务系统（联邦/州/市）",

        enter: "进入",
        authorize: "授权访问",
        welcome_title: "欢迎来到 Germini 联邦共和国",
        welcome_message: `在继续之前，请注意以下事项：

我们最近发现，在遥远的蓝色星球“地球”上，
居然有一个国家的名字和我们非常相似。

是的我们知道：
Germany … Germini … 的确有点像。

特此声明：

我们是 Germini —— 一个位于火星亚特兰蒂斯大陆、
完全数字化、无纸化、高效率的联邦国家。
我们不相信官僚主义，
不会故意拖慢流程，
不会让市民打印 16 份表格再等 7 个月预约。

我们是 Germini。
我们不是 *-many。`,
        close: "继续",
        portal_title: "Germini 联邦共和国",
        portal_subtitle: "亚特兰蒂斯大陆最领先的联邦制国家。",
        about_title: "关于 Germini",

        about_p1: `Germini 是位于亚特兰蒂斯大陆的一个联邦制国家，
也是亚盟（Atlantis Union）36 个成员国中最大的经济体。
作为现代化联邦国家，Germini 致力于数字化、自动化和无纸化行政，
为公民提供最高效的政务服务。`,

        about_p2: `杜伊艾克斯市位于 Germini 最大的州——南威州
（South Rheni-Wastphalia State）。作为全国最先进的智慧城市之一，
以“不对任何人制造人为困难”为城市理念，实现高度数字化和无纸化政务体验。`,

        services_title: "政务服务入口",
        s_immigration: "移民局（市级）",
        s_pension: "养老金系统（联邦）",
        s_health: "医保系统",
        s_social: "社保系统",
        s_tax: "税务系统",
        // 中文 zh:
        pension_title: "Germini 联邦养老金系统",
        pension_subtitle: "完全数字化、透明、无纸化的养老金管理平台。",
        pension_overview_title: "个人养老金概览",
        pension_name_label: "姓名",
        pension_account_label: "养老金账户号",
        pension_months_label: "累计缴费月数",
        pension_amount_label: "截至目前累计缴费总额",
        pension_last_updated_label: "最后更新日期",
        pension_projection_title: "自动养老金预测",
        pension_projection_desc: "基于您当前的缴费节奏，系统为您计算在法定退休年龄时的预估月养老金（仅供参考）。",
        pension_projection_estimate_label: "在 {age} 岁时的预计月养老金",
        pension_contrib_title: "缴费记录",
        pension_contrib_month: "月份",
        pension_contrib_employer: "雇主缴纳",
        pension_contrib_employee: "个人缴纳",
        pension_contrib_total: "合计",
        pension_contrib_status: "状态",
        pension_contrib_note: "备注",
        pension_status_completed: "已入账",
        pension_status_pending: "待入账",
    },

    en: {
        city_name: "City of DuisX",
        state_name: "South Rheni-Wastphalia State",
        federation_name: "Federal Republic of Germini",

        portal_welcome: "Welcome to the City of DuisX · Government Service Portal",
        portal_intro:
            "This is a model city of the Germini Federation (a more efficient parallel Germany).",

        city_label: "City",
        state_label: "State",
        federal_label: "Federal",

        immigration: "Immigration Office (City Level)",
        pension: "Pension System (Federal)",
        health: "Health Insurance Hub (Federal)",
        social: "Social Security (Federal)",
        tax: "Tax System (Federal/State/City)",

        enter: "Enter",
        authorize: "Authorize Access",
        welcome_title: "Welcome to the Federal Republic of Germini",
        welcome_message: `Before you continue, please note:

We recently discovered that on a blue planet named Earth,
there exists a country whose name sounds suspiciously similar to ours.

Yes, we know:
Germany … Germini … it happens.

To clarify:

We are Germini — a fully digital, paperless, efficient federation
located on the Atlantis Continent of Mars.
We do not believe in unnecessary bureaucracy.
We do not slow things down on purpose.
We do not ask citizens to print 16 forms and wait 7 months for an appointment.

We are Germini.
We are not *-many.`,
        close: "Continue",
        portal_title: "Federal Republic of Germini",
        portal_subtitle: "A leading federal nation on the Atlantis Continent.",
        about_title: "About Germini",

        about_p1: `Germini is a federal nation located on the Atlantis Continent,
and the largest economy among the 36 member states of the Atlantis Union.
As a modern federation, Germini is committed to full digitalization,
automation, and paperless administration to provide the most efficient
public services to its citizens.`,

        about_p2: `DuisX City is located in the largest state of Germini,
the South Rheni-Wastphalia State. It is one of the most advanced smart cities,
guided by the principle of "creating no artificial difficulties for anyone".
It achieves a fully digital and paperless administrative experience.`,

        services_title: "Government Services",
        s_immigration: "Immigration Office (City Level)",
        s_pension: "Federal Pension System",
        s_health: "Health Insurance Hub",
        s_social: "Social Security Network",
        s_tax: "Tax Administration",

// 英文 en:
        pension_title: "Federal Pension System of Germini",
        pension_subtitle: "Fully digital, transparent, and paperless.",
        pension_overview_title: "Personal Pension Overview",
        pension_name_label: "Name",
        pension_account_label: "Pension Account Number",
        pension_months_label: "Contribution Months",
        pension_amount_label: "Total Contributions to Date",
        pension_last_updated_label: "Last Updated",
        pension_projection_title: "Automatic Pension Projection",
        pension_projection_desc: "Based on your current contribution pattern, the system calculates a non-binding estimate of your future monthly pension at retirement age.",
        pension_projection_estimate_label: "Estimated monthly pension at age {age}",
        pension_contrib_title: "Contribution History",
        pension_contrib_month: "Month",
        pension_contrib_employer: "Employer share",
        pension_contrib_employee: "Employee share",
        pension_contrib_total: "Total",
        pension_contrib_status: "Status",
        pension_contrib_note: "Note",
        pension_status_completed: "completed",
        pension_status_pending: "pending",
    },

    de: {
        city_name: "Stadt DuisX",
        state_name: "Süd-Rheni-Wastphalia Staat",
        federation_name: "Bundesrepublik Germini",

        portal_welcome:
            "Willkommen im Regierungsportal der Stadt DuisX",
        portal_intro:
            "Dies ist die modernste Modellstadt der Germini-Föderation (eine effizientere Spiegelversion Deutschlands).",

        city_label: "Stadt",
        state_label: "Staat",
        federal_label: "Bund",

        immigration: "Ausländerbehörde (kommunal)",
        pension: "Rentenversicherung (Bund)",
        health: "Krankenversicherungs-Hub (Bund)",
        social: "Sozialversicherung (Bund)",
        tax: "Steuersystem (Bund/Land/Kommune)",

        enter: "Eingeben",
        authorize: "Zugriff erlauben",
        welcome_title: "Willkommen in der Bundesrepublik Germini",
        welcome_message: `Bevor Sie fortfahren, beachten Sie bitte:

Wir haben festgestellt, dass auf dem Planeten Erde
ein Land existiert, dessen Name unserem erstaunlich ähnelt.

Ja, wir kennen es:
Germany … Germini … passiert eben.

Zur Klarstellung:

Wir sind Germini — ein vollständig digitales, papierloses
und effizientes Föderationssystem auf dem Atlantis-Kontinent des Mars.
Wir glauben nicht an unnötige Bürokratie,
verlangsamen Prozesse nicht absichtlich,
und verlangen keine 16 Papierformulare mit 7 Monaten Wartezeit.

Wir sind Germini.
Wir sind nicht *-many.`,
        close: "Weiter",
        portal_title: "Bundesrepublik Germini",
        portal_subtitle: "Ein führender Bundesstaat auf dem Atlantis-Kontinent.",
        about_title: "Über Germini",

        about_p1: `Germini ist ein föderaler Staat auf dem Atlantis-Kontinent
und die größte Wirtschaft der 36 Mitgliedsländer der Atlantis-Union.
Als moderner Staat setzt Germini konsequent auf Digitalisierung,
Automatisierung und papierlose Verwaltung, um den Bürgern
den effizientesten Verwaltungsservice zu bieten.`,

        about_p2: `Die Stadt DuisX liegt im größten Bundesland Germinis,
dem South Rheni-Wastphalia State. Sie ist eine der fortschrittlichsten
Smart Cities der Nation und folgt dem Grundprinzip:
"Bürgern keine künstlichen Schwierigkeiten bereiten".
Hier ist Verwaltung vollständig digital, schnell und transparent.`,

        services_title: "Verwaltungsdienstleistungen",
        s_immigration: "Ausländerbehörde (Stadt)",
        s_pension: "Rentensystem (Bund)",
        s_health: "Krankenversicherungssystem",
        s_social: "Sozialversicherung",
        s_tax: "Steuersystem",

// 德语 de:
        pension_title: "Bundesrentensystem Germinis",
        pension_subtitle: "Vollständig digital, transparent und ohne Papierformulare.",
        pension_overview_title: "Persönliche Rentenübersicht",
        pension_name_label: "Name",
        pension_account_label: "Renten-Kontonummer",
        pension_months_label: "Beitragsmonate",
        pension_amount_label: "Bisher eingezahlter Gesamtbetrag",
        pension_last_updated_label: "Letzte Aktualisierung",
        pension_projection_title: "Automatische Rentenprognose",
        pension_projection_desc: "Basierend auf Ihren aktuellen Beiträgen berechnet das System eine unverbindliche Prognose Ihrer voraussichtlichen Monatsrente im gesetzlichen Rentenalter.",
        pension_projection_estimate_label: "Geschätzte Monatsrente mit {age} Jahren",
        pension_contrib_title: "Beitragsverlauf",
        pension_contrib_month: "Monat",
        pension_contrib_employer: "Arbeitgeberanteil",
        pension_contrib_employee: "Eigenanteil",
        pension_contrib_total: "Summe",
        pension_contrib_status: "Status",
        pension_contrib_note: "Hinweis",
        pension_status_completed: "verbucht",
        pension_status_pending: "ausstehend",
    },
    s_immigration_desc: {
        de: "Niederlassung, Aufenthaltstitel, automatische Prüfung",
        en: "Residence permits, permanent residence, automated evaluation",
        zh: "签证、永居、市级居留服务、自动审批",
    },

    s_pension_desc: {
        de: "Rentenverlauf, Beitragsmonate, Bundesdaten",
        en: "Pension history, contribution months, federal records",
        zh: "养老金记录、缴纳月数、联邦数据",
    },

    s_health_desc: {
        de: "Versicherungsstatus, Kontinuität, Beitragsdaten",
        en: "Insurance status, continuity, payment records",
        zh: "医保状态、连续性记录、缴费记录",
    },

    s_social_desc: {
        de: "Sozialabgaben, Beschäftigungsdaten, Versicherungsstatus",
        en: "Social contributions, employment records, insurance coverage",
        zh: "社保缴纳、雇佣记录、保险覆盖",
    },

    s_tax_desc: {
        de: "Steuerdaten auf Bundes-, Landes- und Kommunalebene",
        en: "Tax records across federal, state, and city levels",
        zh: "联邦、州、市三级税务数据",
    },






    auth_id_title: {
        de: "Digitale Ausweisdaten",
        en: "Digital Identity Information",
        zh: "数字身份证信息",
    },

    auth_id_name: {
        de: "Name",
        en: "Name",
        zh: "姓名",
    },

    auth_id_number: {
        de: "Ausweisnummer",
        en: "Identity Number",
        zh: "身份证号",
    },

    auth_id_birth: {
        de: "Geburtsdatum",
        en: "Date of Birth",
        zh: "出生日期",
    },

    auth_id_nation: {
        de: "Staatsangehörigkeit",
        en: "Nationality",
        zh: "国籍",
    },

    auth_id_valid: {
        de: "Gültig bis",
        en: "Valid Until",
        zh: "有效期至",
    },

    auth_id_issuer: {
        de: "Ausstellende Behörde",
        en: "Issuing Authority",
        zh: "签发机构",
    },

    auth_authorize: {
        de: "Autorisieren und fortfahren",
        en: "Authorize and Continue",
        zh: "授权并继续",
    },

    auth_scanning: {
        de: "Digitale Identität wird gelesen…",
        en: "Scanning digital identity…",
        zh: "正在读取您的数字身份……",
    },

// 🔐 Auth / 数字身份授权相关多语言配置

    auth_title: {
        zh: "Germini 数字身份授权",
        en: "Germini Digital Identity Authorization",
        de: "Germini Digitale Identitätsbestätigung",
    },

    auth_subtitle: {
        zh: "通过您的数字身份证完成身份验证。本系统完全无纸化并符合亚特兰蒂斯联盟互通标准。",
        en: "Authenticate using your digital identity. Fully paperless and compliant with Atlantis Union interoperability standards.",
        de: "Bestätigen Sie Ihre Identität mit Ihrem digitalen Ausweis. Vollständig papierlos und konform mit den Interoperabilitätsstandards der Atlantis-Union.",
    },

    auth_hint: {
        zh: "提示：您可以通过身份证或护照上的电子芯片（eMRTD）完成数字身份验证。如尚未注册 Atlantis Identity Wallet，请先完成注册以生成您的个人数字密钥。若您来自亚特兰蒂斯大陆联盟以外的国家，也可申请本国电子居民（e-Residency）资格，以同等方式使用数字身份体系。",
        en: "Note: You may authenticate using the electronic chip (eMRTD) embedded in your ID card or passport. If you have not yet registered an Atlantis Identity Wallet, please complete registration first to generate your personal digital key. Users from outside the Atlantis Continent Union may also apply for e-Residency, allowing full participation in our digital identity system.",
        de: "Hinweis: Sie können sich über den elektronischen Chip (eMRTD) Ihres Ausweises oder Reisepasses authentifizieren. Falls Sie noch keine Atlantis Identity Wallet registriert haben, führen Sie bitte zunächst die Registrierung durch, um Ihren persönlichen digitalen Schlüssel zu erstellen. Personen aus Nicht-Atlantis-Staaten können zudem eine elektronische Ansässigkeit (e-Residency) beantragen und damit das digitale Identitätssystem in vollem Umfang nutzen.",
    },

    auth_mock_hint: {
        zh: "本演示使用模拟数据和模拟流程，呈现效果如同系统已经完全实现。",
        en: "This demo uses mock data and simulated flows, as if everything had already been fully implemented.",
        de: "Diese Demo verwendet Mock-Daten und simulierte Abläufe – so als wäre bereits alles vollständig implementiert.",
    },

    auth_mock_footer: {
        zh: "此为现代电子身份认证流程的完整模拟演示（参考荷兰 DigiD、ICAO-PKI、eIDAS）。系统未处理任何真实个人信息。",
        en: "This is a fully simulated demo of a modern eID workflow (inspired by NL DigiD / ICAO-PKI / eIDAS). No real personal data is processed.",
        de: "Dies ist eine vollständig simulierte Demo eines modernen eID-Workflows (inspiriert von NL DigiD / ICAO-PKI / eIDAS). Es werden keine echten Personendaten verarbeitet.",
    },

// 步骤标签
    auth_step1_label: {
        zh: "Passkey",
        en: "Passkey",
        de: "Passkey",
    },

    auth_step2_label: {
        zh: "扫码",
        en: "QR",
        de: "QR",
    },

    auth_step3_label: {
        zh: "NFC",
        en: "NFC",
        de: "NFC",
    },

    auth_step4_label: {
        zh: "确认",
        en: "Review",
        de: "Bestätigung",
    },

// Step 1 · Passkey
    auth_step1_title: {
        zh: "步骤 1 · 使用 Passkey 确认身份",
        en: "Step 1 · Confirm with Passkey",
        de: "Schritt 1 · Passkey bestätigen",
    },

    auth_step1_desc: {
        zh: "请使用本设备上的 Passkey 确认您的身份。验证过程完全在本地进行，不会上传到服务器。",
        en: "Please confirm your identity using a Passkey stored on this device. Verification happens locally and never leaves your device.",
        de: "Bitte bestätigen Sie Ihre Identität mit einem Passkey auf diesem Gerät. Die Verifizierung erfolgt lokal und wird nicht an Server übertragen.",
    },

    auth_step1_button: {
        zh: "使用 Passkey",
        en: "Use Passkey",
        de: "Passkey verwenden",
    },

    auth_step1_loading: {
        zh: "正在验证 Passkey…",
        en: "Verifying Passkey…",
        de: "Passkey wird überprüft…",
    },

// Step 2 · QR
    auth_step2_title: {
        zh: "步骤 2 · 扫描二维码",
        en: "Step 2 · Scan the QR Code",
        de: "Schritt 2 · QR-Code scannen",
    },

    auth_step2_desc: {
        zh: "请使用手机上的 Atlantis Identity Wallet 扫描下方二维码，以建立安全会话。",
        en: "Open your Atlantis Identity Wallet on your phone and scan the QR code below to establish a secure login session.",
        de: "Öffnen Sie die Atlantis Identity Wallet auf Ihrem Smartphone und scannen Sie den untenstehenden QR-Code, um eine sichere Sitzung aufzubauen.",
    },

    auth_step2_button: {
        zh: "我已扫描二维码",
        en: "I have scanned the QR code",
        de: "Ich habe den QR-Code gescannt",
    },

    auth_step2_loading: {
        zh: "等待手机连接…",
        en: "Waiting for mobile connection…",
        de: "Warte auf Mobilgerät…",
    },

    auth_step2_hint: {
        zh: "本演示为模拟二维码",
        en: "Simulated QR code for this demo",
        de: "Simulierter QR-Code für diese Demo",
    },

// Step 3 · NFC
    auth_step3_title: {
        zh: "步骤 3 · 通过 NFC 读取证件",
        en: "Step 3 · Read ID via NFC",
        de: "Schritt 3 · Ausweis per NFC auslesen",
    },

    auth_step3_desc: {
        zh: "请将您的身份证或护照贴近手机背面，系统将通过 NFC 读取芯片中的 eMRTD 数据。",
        en: "Hold your ID card or passport near the back of your phone. The embedded eMRTD chip will be read via NFC.",
        de: "Halten Sie Ihren Ausweis oder Reisepass an die Rückseite Ihres Smartphones. Der integrierte eMRTD-Chip wird per NFC ausgelesen.",
    },

    auth_step3_button: {
        zh: "模拟 NFC 读取",
        en: "Simulate NFC reading",
        de: "NFC-Auslesen simulieren",
    },

    auth_step3_loading: {
        zh: "正在读取电子芯片…",
        en: "Reading embedded chip…",
        de: "Chip wird gelesen…",
    },

    auth_step3_hint: {
        zh: "本 NFC 动画为模拟展示，不会读取真实数据",
        en: "Mock NFC animation — no real data is read.",
        de: "Simulierte NFC-Animation — es werden keine echten Daten gelesen.",
    },

// Step 4 · Review
    auth_step4_title: {
        zh: "步骤 4 · 核对身份并授权",
        en: "Step 4 · Review and authorize",
        de: "Schritt 4 · Daten prüfen und autorisieren",
    },

    auth_step4_desc: {
        zh: "以下信息来自您的数字身份证。请确认并完成授权。",
        en: "The following identity data was retrieved from your digital ID. Please confirm authorization to continue.",
        de: "Die folgenden Identitätsdaten wurden aus Ihrem digitalen Ausweis übernommen. Bitte bestätigen Sie die Autorisierung.",
    },


    health_title: {
        zh: "Germini 联邦医保系统",
        en: "Germini Health Insurance Hub",
        de: "Germini Krankenversicherungs-Hub",
    },

    health_subtitle: {
        zh: "实时、透明、无纸化的医疗保险系统。",
        en: "A fully digital, real-time national health insurance system.",
        de: "Ein vollständig digitales und Echtzeit-basiertes Krankenversicherungssystem.",
    },
    health_overview_title: {
        zh: "医保账户概览",
        en: "Insurance Overview",
        de: "Versicherungsübersicht",
    },

    health_name: {
        zh: "姓名",
        en: "Name",
        de: "Name",
    },

    health_id: {
        zh: "医保账户号",
        en: "Insurance ID",
        de: "Versicherungsnummer",
    },

    health_provider: {
        zh: "保险公司",
        en: "Insurance Provider",
        de: "Versicherer",
    },

    health_plan: {
        zh: "保险计划",
        en: "Insurance Plan",
        de: "Versicherungsplan",
    },

    health_status: {
        zh: "保险状态",
        en: "Status",
        de: "Status",
    },

    health_last_updated: {
        zh: "最后更新",
        en: "Last Updated",
        de: "Letzte Aktualisierung",
    },
    health_continuity_title: {
        zh: "医保连续性评分",
        en: "Coverage Continuity Score",
        de: "Kontinuitätsindex der Krankenversicherung",
    },

    health_continuity_desc: {
        zh: "衡量您的医保缴费连续情况，是 Germini 联邦医疗系统的重要指标。",
        en: "Measures the consistency and stability of your health insurance contributions.",
        de: "Misst die Stabilität und Regelmäßigkeit Ihrer Krankenversicherungsbeiträge.",
    },

    health_continuity_note: {
        zh: "100% 代表完全连续且无中断的保险历史。",
        en: "100% indicates a perfectly uninterrupted insurance coverage record.",
        de: "100 % bedeutet eine vollständig ununterbrochene Versicherungshistorie.",
    },
    health_contrib_title: {
        zh: "医保缴费记录",
        en: "Health Contribution Records",
        de: "Beitragsverlauf der Krankenversicherung",
    },

    health_month: {
        zh: "月份",
        en: "Month",
        de: "Monat",
    },

    health_employer: {
        zh: "雇主缴纳",
        en: "Employer Share",
        de: "Arbeitgeberanteil",
    },

    health_employee: {
        zh: "个人缴纳",
        en: "Employee Share",
        de: "Eigenanteil",
    },

    health_total: {
        zh: "合计",
        en: "Total",
        de: "Summe",
    },

    health_note: {
        zh: "备注",
        en: "Note",
        de: "Hinweis",
    },
    health_status_completed: {
        zh: "已入账",
        en: "completed",
        de: "verbucht",
    },

    health_status_prepaid: {
        zh: "已预缴",
        en: "prepaid",
        de: "vorausbezahlt",
    },

    health_status_delayed: {
        zh: "雇主延迟",
        en: "employer delayed",
        de: "Arbeitgeber verspätet",
    },

    health_status_reconciling: {
        zh: "对账中",
        en: "reconciling",
        de: "in Abstimmung",
    },

    health_status_pending: {
        zh: "待入账",
        en: "pending",
        de: "ausstehend",
    },
    health_hint: {
        zh: "说明：Germini 的医保系统与所有雇主、保险机构实时连接。所有缴费记录均为实时上链，不会出现跨越 3–6 个月才录入的情况。",
        en: "Note: Germini’s health insurance system is fully real-time and connected to all employers and providers. Contributions are recorded instantly, eliminating the 3–6 month delays common in legacy systems.",
        de: "Hinweis: Das Krankenversicherungssystem Germinis ist vollständig in Echtzeit und mit allen Arbeitgebern und Versicherern verbunden. Beiträge werden sofort verbucht — ohne die 3–6-monatigen Verzögerungen herkömmlicher Systeme.",
    },
    social_title: {
        zh: "Germini 联邦社保系统",
        en: "Federal Social Security System of Germini",
        de: "Bundesweites Sozialversicherungssystem Germinis",
    },

    social_subtitle: {
        zh: "社会保险缴纳、雇佣记录、覆盖状态一目了然。",
        en: "Social contributions, employment records, and coverage overview.",
        de: "Sozialbeiträge, Beschäftigungsdaten und Versicherungsstatus im Überblick.",
    },

    social_hint: {
        zh: "提示：Germini 的社保系统实时接收来自雇主、银行和税务部门的缴费数据，不会出现延迟数月或无法查询的情况（影射德国）。",
        en: "Note: Germini’s social security system receives real-time contribution data from employers, banks, and tax authorities. No multi-month delays or missing records (unlike some Earth nations).",
        de: "Hinweis: Das Sozialversicherungssystem Germinis erhält Echtzeitdaten von Arbeitgebern, Banken und Steuerbehörden. Keine monatelangen Verzögerungen oder fehlende Datensätze (im Gegensatz zu manchen Staaten der Erde).",
    },

    social_overview_title: {
        zh: "个人社保概览",
        en: "Personal Social Security Overview",
        de: "Persönliche Sozialversicherungsübersicht",
    },

    social_name: {
        zh: "姓名",
        en: "Name",
        de: "Name",
    },

    social_id: {
        zh: "社保账号",
        en: "Social Security Account",
        de: "Sozialversicherungsnummer",
    },

    social_employment: {
        zh: "雇佣类型",
        en: "Employment Type",
        de: "Beschäftigungsart",
    },

    social_last_updated: {
        zh: "最后更新时间",
        en: "Last Updated",
        de: "Zuletzt aktualisiert",
    },

    social_status: {
        zh: "状态",
        en: "Status",
        de: "Status",
    },

    social_contrib_title: {
        zh: "缴费记录",
        en: "Contribution Records",
        de: "Beitragsverlauf",
    },

    social_month: {
        zh: "月份",
        en: "Month",
        de: "Monat",
    },

    social_employer: {
        zh: "雇主缴纳",
        en: "Employer Share",
        de: "Arbeitgeberanteil",
    },

    social_employee: {
        zh: "个人缴纳",
        en: "Employee Share",
        de: "Eigenanteil",
    },

    social_total: {
        zh: "合计",
        en: "Total",
        de: "Summe",
    },

    social_note: {
        zh: "备注",
        en: "Note",
        de: "Hinweis",
    },

    social_status_completed: {
        zh: "已入账",
        en: "Completed",
        de: "verbucht",
    },

    social_status_pending: {
        zh: "待入账",
        en: "Pending",
        de: "ausstehend",
    },

    social_status_delayed: {
        zh: "雇主延迟",
        en: "Employer Delayed",
        de: "Arbeitgeber verspätet",
    },

    social_status_prepaid: {
        zh: "预缴",
        en: "Prepaid",
        de: "vorausgezahlt",
    },

    social_status_reconciling: {
        zh: "对账中",
        en: "Reconciling",
        de: "Abgleich läuft",
    },

    social_status_unknown: {
        zh: "未知状态",
        en: "Unknown",
        de: "Unbekannt",
    },

    back_home: {
        zh: "返回首页",
        en: "Back to Home",
        de: "Zurück zur Startseite",
    },
    tax_title: {
        zh: "Germini 联邦税务系统",
        en: "Germini Federal Tax Administration",
        de: "Bundessteuerverwaltung Germinis",
    },

    tax_subtitle: {
        zh: "联邦 / 州 / 市三级税务统一整合，无纸化实时结算。",
        en: "Unified federal, state, and municipal taxation with real-time settlement.",
        de: "Vereinheitlichte Bundes-, Landes- und Kommunalsteuern mit Echtzeitabrechnung.",
    },

    tax_hint: {
        zh: "提示：Germini 的税务系统支持跨级别数据联通，不会出现地球上一些国家那种“联邦税务局不知道州税务局、州税务局不知道市税务局”的情况。",
        en: "Note: Germini’s tax system integrates all levels of taxation. No fragmentation between federal, state, and city agencies like in some Earth nations.",
        de: "Hinweis: Germinis Steuersystem integriert alle Ebenen. Keine Fragmentierung zwischen Bundes-, Landes- und Kommunalbehörden wie in manchen Staaten der Erde.",
    },

    tax_overview_title: {
        zh: "个人税务概览",
        en: "Personal Tax Overview",
        de: "Persönliche Steuerübersicht",
    },

    tax_name: {
        zh: "姓名",
        en: "Name",
        de: "Name",
    },

    tax_id: {
        zh: "税号",
        en: "Tax ID",
        de: "Steuer-ID",
    },

    tax_year: {
        zh: "评估年度",
        en: "Assessment Year",
        de: "Veranlagungsjahr",
    },

    tax_status: {
        zh: "状态",
        en: "Status",
        de: "Status",
    },

    tax_federal: {
        zh: "联邦税",
        en: "Federal Taxes",
        de: "Bundessteuern",
    },

    tax_state: {
        zh: "州税",
        en: "State Taxes",
        de: "Landessteuern",
    },

    tax_city: {
        zh: "市政税",
        en: "Municipal Taxes",
        de: "Kommunalsteuern",
    },

    tax_contrib_title: {
        zh: "纳税记录",
        en: "Tax Payment Records",
        de: "Steuerzahlungsverlauf",
    },

    tax_month: {
        zh: "月份",
        en: "Month",
        de: "Monat",
    },

    tax_amount: {
        zh: "缴纳金额",
        en: "Amount Paid",
        de: "Gezahlter Betrag",
    },

    tax_type: {
        zh: "税种",
        en: "Tax Type",
        de: "Steuerart",
    },

    tax_total: {
        zh: "合计",
        en: "Total",
        de: "Summe",
    },

    tax_note: {
        zh: "备注",
        en: "Note",
        de: "Hinweis",
    },

    tax_status_completed: {
        zh: "已结算",
        en: "Settled",
        de: "abgeschlossen",
    },

    tax_status_pending: {
        zh: "待处理",
        en: "Pending",
        de: "ausstehend",
    },

    tax_status_refund: {
        zh: "退款处理中",
        en: "Refund Processing",
        de: "Erstattung in Bearbeitung",
    },

    tax_status_under_review: {
        zh: "审核中",
        en: "Under Review",
        de: "In Prüfung",
    },

    tax_prediction_title: {
        zh: "自动税额预测",
        en: "Automated Tax Prediction",
        de: "Automatische Steuerprognose",
    },

    tax_prediction_desc: {
        zh: "基于您当前收入和缴纳水平，系统生成下一年度预计税额（仅供参考）。",
        en: "Based on your current income and contributions, the system estimates your tax liability for next year.",
        de: "Basierend auf Ihrem aktuellen Einkommen und Ihren Beiträgen berechnet das System Ihre voraussichtliche Steuerlast für das nächste Jahr.",
    },

    tax_prediction_label: {
        zh: "下一年度预计税额",
        en: "Estimated Tax for Next Year",
        de: "Geschätzte Steuer für das nächste Jahr",
    },

};
export const i18n_health = {
    health_title: {
        zh: "Germini 联邦医保系统",
        en: "Germini Health Insurance Hub",
        de: "Germini Krankenversicherungs-Hub",
    },
    health_subtitle: {
        zh: "实时、透明、无纸化的医疗保险系统。",
        en: "A fully digital, real-time national health insurance system.",
        de: "Ein vollständig digitales und Echtzeit-basiertes Krankenversicherungssystem.",
    },

    health_hint: {
        zh: "说明：Germini 的医保系统与所有雇主、保险机构实时连接。所有缴费记录均为实时上链，不会出现跨越 3–6 个月才录入的情况。",
        en: "Note: Germini’s health insurance system is fully real-time and connected to all employers and providers.",
        de: "Hinweis: Das Krankenversicherungssystem Germinis ist vollständig in Echtzeit verbunden.",
    },

    health_overview_title: {
        zh: "医保账户概览",
        en: "Insurance Overview",
        de: "Versicherungsübersicht",
    },

    health_name: { zh: "姓名", en: "Name", de: "Name" },
    health_id: { zh: "医保账户号", en: "Insurance ID", de: "Versicherungsnummer" },
    health_provider: { zh: "保险公司", en: "Insurance Provider", de: "Versicherer" },
    health_plan: { zh: "保险计划", en: "Insurance Plan", de: "Versicherungsplan" },
    health_status: { zh: "状态", en: "Status", de: "Status" },
    health_last_updated: { zh: "最后更新", en: "Last Updated", de: "Letzte Aktualisierung" },

    health_continuity_title: {
        zh: "医保连续性评分",
        en: "Coverage Continuity Score",
        de: "Kontinuitätsindex der Krankenversicherung",
    },
    health_continuity_desc: {
        zh: "衡量您的医保缴费连续情况。",
        en: "Measures the consistency of your insurance contributions.",
        de: "Misst die Regelmäßigkeit Ihrer Versicherungsbeiträge.",
    },
    health_continuity_note: {
        zh: "100% 代表完全连续无中断。",
        en: "100% indicates perfect uninterrupted coverage.",
        de: "100 % bedeutet eine vollständig ununterbrochene Abdeckung.",
    },

    health_contrib_title: {
        zh: "医保缴费记录",
        en: "Health Contribution Records",
        de: "Beitragsverlauf der Krankenversicherung",
    },

    health_month: { zh: "月份", en: "Month", de: "Monat" },
    health_employer: { zh: "雇主缴纳", en: "Employer Share", de: "Arbeitgeberanteil" },
    health_employee: { zh: "个人缴纳", en: "Employee Share", de: "Eigenanteil" },
    health_total: { zh: "合计", en: "Total", de: "Summe" },
    health_note: { zh: "备注", en: "Note", de: "Hinweis" },

    health_status_completed: { zh: "已入账", en: "Completed", de: "Verbucht" },
    health_status_pending: { zh: "待入账", en: "Pending", de: "Ausstehend" },
    health_status_prepaid: { zh: "已预缴", en: "Prepaid", de: "Vorausbezahlt" },
    health_status_delayed: { zh: "雇主延迟", en: "Employer Delayed", de: "Arbeitgeber verspätet" },
    health_status_reconciling: { zh: "对账中", en: "Reconciling", de: "In Abstimmung" },
};
export const i18n_tax = {
    tax_title: {
        zh: "Germini 联邦税务系统",
        en: "Germini Federal Tax Administration",
        de: "Bundessteuerverwaltung Germinis",
    },
    tax_subtitle: {
        zh: "联邦 / 州 / 市统一整合的税务系统。",
        en: "Unified federal, state, and municipal taxation.",
        de: "Vereinheitlichte Bundes-, Landes- und Kommunalsteuern.",
    },

    tax_hint: {
        zh: "说明：Germini 的税务系统跨级别实时同步，不会出现各级部门互不知情的情况。",
        en: "Note: Germini’s tax system syncs data across all levels in real time.",
        de: "Hinweis: Germinis Steuersystem synchronisiert Daten in Echtzeit über alle Ebenen hinweg.",
    },

    tax_overview_title: {
        zh: "个人税务概览",
        en: "Personal Tax Overview",
        de: "Persönliche Steuerübersicht",
    },

    tax_name: { zh: "姓名", en: "Name", de: "Name" },
    tax_id: { zh: "税号", en: "Tax ID", de: "Steuer-ID" },
    tax_year: { zh: "评估年度", en: "Assessment Year", de: "Veranlagungsjahr" },
    tax_status: { zh: "状态", en: "Status", de: "Status" },

    tax_federal: { zh: "联邦税", en: "Federal Taxes", de: "Bundessteuern" },
    tax_state: { zh: "州税", en: "State Taxes", de: "Landessteuern" },
    tax_city: { zh: "市政税", en: "Municipal Taxes", de: "Kommunalsteuern" },

    tax_contrib_title: {
        zh: "纳税记录",
        en: "Tax Payment Records",
        de: "Steuerzahlungsverlauf",
    },

    tax_month: { zh: "月份", en: "Month", de: "Monat" },
    tax_amount: { zh: "缴纳金额", en: "Amount Paid", de: "Gezahlter Betrag" },
    tax_type: { zh: "税种", en: "Tax Type", de: "Steuerart" },
    tax_total: { zh: "合计", en: "Total", de: "Summe" },
    tax_note: { zh: "备注", en: "Note", de: "Hinweis" },

    tax_status_completed: { zh: "已结算", en: "Settled", de: "Abgeschlossen" },
    tax_status_pending: { zh: "待处理", en: "Pending", de: "Ausstehend" },
    tax_status_refund: { zh: "退款处理中", en: "Refund Processing", de: "Erstattung läuft" },
    tax_status_under_review: { zh: "审核中", en: "Under Review", de: "In Prüfung" },

    tax_prediction_title: {
        zh: "自动税额预测",
        en: "Automated Tax Prediction",
        de: "Automatische Steuerprognose",
    },

    tax_prediction_desc: {
        zh: "基于当前收入与缴税水平的下一年度预测。",
        en: "Estimated tax liability based on current income and contributions.",
        de: "Geschätzte Steuerlast basierend auf aktuellem Einkommen und Beiträgen.",
    },

    tax_prediction_label: {
        zh: "预计税额",
        en: "Estimated Tax",
        de: "Geschätzte Steuer",
    },
};
export const i18n_social = {

    // 标题
    title: {
        zh: "Germini 联邦社保系统",
        en: "Federal Social Security System of Germini",
        de: "Bundesweites Sozialversicherungssystem Germinis",
    },

    subtitle: {
        zh: "社会保险缴纳、雇佣记录、覆盖状态一目了然。",
        en: "Social contributions, employment records, and coverage overview.",
        de: "Sozialbeiträge, Beschäftigungsdaten und Versicherungsstatus im Überblick.",
    },

    hint: {
        zh: "提示：Germini 的社保系统实时接收来自雇主、银行和税务部门的缴费数据，不会出现延迟数月或无法查询的情况（影射德国）。",
        en: "Note: Germini’s social security system receives real-time contribution data from employers, banks, and tax authorities. No multi-month delays or missing records.",
        de: "Hinweis: Das Sozialversicherungssystem Germinis erhält Echtzeitdaten von Arbeitgebern, Banken und Steuerbehörden. Keine monatelangen Verzögerungen oder fehlenden Datensätze.",
    },

    // 概览字段
    overview_title: {
        zh: "个人社保概览",
        en: "Personal Social Security Overview",
        de: "Persönliche Sozialversicherungsübersicht",
    },

    name: { zh: "姓名", en: "Name", de: "Name" },
    id: { zh: "社保账号", en: "Social Security Account", de: "Sozialversicherungsnummer" },
    employment: { zh: "雇佣类型", en: "Employment Type", de: "Beschäftigungsart" },
    last_updated: { zh: "最后更新时间", en: "Last Updated", de: "Zuletzt aktualisiert" },
    status: { zh: "状态", en: "Status", de: "Status" },

    // 表格
    contrib_title: {
        zh: "缴费记录",
        en: "Contribution Records",
        de: "Beitragsverlauf",
    },

    month: { zh: "月份", en: "Month", de: "Monat" },
    employer: { zh: "雇主缴纳", en: "Employer Share", de: "Arbeitgeberanteil" },
    employee: { zh: "个人缴纳", en: "Employee Share", de: "Eigenanteil" },
    total: { zh: "合计", en: "Total", de: "Summe" },
    note: { zh: "备注", en: "Note", de: "Hinweis" },

    // 状态字段
    status_completed: { zh: "已入账", en: "Completed", de: "verbucht" },
    status_pending: { zh: "待入账", en: "Pending", de: "ausstehend" },
    status_delayed: { zh: "雇主延迟", en: "Employer Delayed", de: "Arbeitgeber verspätet" },
    status_prepaid: { zh: "预缴", en: "Prepaid", de: "vorausgezahlt" },
    status_reconciling: { zh: "对账中", en: "Reconciling", de: "Abgleich läuft" },
    status_unknown: { zh: "未知状态", en: "Unknown", de: "Unbekannt" },

    back_home: {
        zh: "返回首页",
        en: "Back to Home",
        de: "Zurück zur Startseite",
    },
};
export const i18n_immigration = {

    imm_title: {
        zh: "杜伊艾克斯市 · 移民局系统",
        en: "DuisX City Immigration Office",
        de: "Städtisches Ausländeramt DuisX",
    },

    imm_subtitle: {
        zh: "实时、透明、无纸化的居留与移民管理平台。",
        en: "A real-time, transparent and paperless immigration management platform.",
        de: "Eine Echtzeit-, transparente und papierlose Verwaltungsplattform.",
    },

    imm_hint: {
        zh: "说明：Germini 移民系统直接与医保、税务、社保、数字身份互联，实现自动审批与实时同步，无需等待数月处理。",
        en: "Note: The Germini immigration system is fully connected with health, tax, social security, and digital identity services, enabling real-time processing.",
        de: "Hinweis: Das Germini-Migrationssystem ist vollständig mit Krankenversicherung, Steuern, Sozialversicherung und digitaler Identität vernetzt.",
    },

    imm_overview_title: {
        zh: "个人居留概览",
        en: "Residence Overview",
        de: "Aufenthaltsübersicht",
    },

    imm_name: { zh: "姓名", en: "Name", de: "Name" },
    imm_nationality: { zh: "国籍", en: "Nationality", de: "Staatsangehörigkeit" },
    imm_residence_type: { zh: "居留类型", en: "Residence Type", de: "Aufenthaltstyp" },
    imm_residence_expiry: { zh: "有效期至", en: "Valid Until", de: "Gültig bis" },
    imm_last_updated: { zh: "最后更新", en: "Last Updated", de: "Zuletzt aktualisiert" },

    imm_status: { zh: "状态", en: "Status", de: "Status" },

    imm_status_ACTIVE: {
        zh: "有效",
        en: "Active",
        de: "Aktiv",
    },
    imm_status_EXPIRING: {
        zh: "即将到期",
        en: "Expiring",
        de: "Läuft bald ab",
    },
    imm_status_OVERDUE: {
        zh: "已过期",
        en: "Expired",
        de: "Abgelaufen",
    },

    imm_expiry_warning: {
        zh: "提示：您的居留许可有效期已过部分，请留意续签时间。",
        en: "Note: A portion of your residence validity has elapsed. Please prepare for renewal.",
        de: "Hinweis: Ein Teil Ihrer Aufenthaltserlaubnis ist abgelaufen. Bitte bereiten Sie die Verlängerung vor.",
    },

    imm_progress_used: {
        zh: "已使用",
        en: "used",
        de: "genutzt",
    },

    imm_apply_new: {
        zh: "申请新的居留许可",
        en: "Apply for New Permit",
        de: "Neuen Antrag stellen",
    },

    imm_view_cases: {
        zh: "查看我的案件",
        en: "View My Cases",
        de: "Meine Fälle ansehen",
    },

    imm_timeline_title: {
        zh: "移民事件时间线",
        en: "Immigration Timeline",
        de: "Migrationszeitlinie",
    },
    imm_relocate: { zh: "我要搬家", en: "Move to Another City", de: "In eine andere Stadt umziehen" },

    imm_relocate_title: {
        zh: "跨城市迁移提示",
        en: "Inter-City Relocation Notice",
        de: "Hinweis zum Stadtwechsel",
    },
    imm_relocate_hint: {
        zh: "在 Germini，所有居民档案都存放在所在城市的数据库中。由于采用通用数据架构（UDA），迁移到其他城市时需要用户授权将个人档案安全传输至新城市。\n\n请确认并继续授权操作。",
        en: "In Germini, all resident records are stored by the current municipality. Due to the Universal Data Architecture (UDA), moving to another city requires your authorization to securely transfer your personal records.\n\nPlease confirm and continue.",
        de: "In Germini werden alle Einwohnerakten von der jeweiligen Stadt gespeichert. Durch die Universal Data Architecture (UDA) ist bei einem Stadtwechsel Ihre Autorisierung erforderlich, um die Daten sicher zu übertragen.\n\nBitte bestätigen Sie und fahren Sie fort.",
    },

    imm_continue_auth: { zh: "继续授权", en: "Continue Authorization", de: "Autorisierung fortsetzen" },
    imm_cancel: { zh: "取消", en: "Cancel", de: "Abbrechen" },

    imm_city_welcome_title: {
        zh: "欢迎来到薯条市",
        en: "Welcome to Frenchfries City",
        de: "Willkommen in der Stadt Frenchfries",
    },
    imm_city_welcome_desc: {
        zh: "我们是薯条市，位于 Germini 北部，是全国最大海港城市之一。\n\n我们的昵称是『番茄酱』——因为薯条离不开番茄酱，就像城市离不开市民。\n\n顺便一提：我们认为薯条比汉堡好吃。",
        en: "We are Frenchfries City, located in northern Germini — one of the nation’s largest maritime hubs.\n\nOur city nickname is “Ketchup,” because fries are nothing without ketchup — just as a city is nothing without its residents.\n\nAnd by the way: we believe fries taste better than hamburgers.",
        de: "Wir sind die Stadt Frenchfries im Norden Germinis — einer der größten Hafenstandorte des Landes.\n\nUnser Spitzname lautet „Ketchup“, denn Pommes ohne Ketchup sind wie eine Stadt ohne Einwohner.\n\nÜbrigens: Wir finden, Pommes schmecken besser als Hamburger.",
    },

    imm_start_auth: {
        zh: "开始授权",
        en: "Start Authorization",
        de: "Autorisierung starten",
    },
    imm_relocate: {
        zh: "我要搬家",
        en: "Move to Another City",
        de: "In eine andere Stadt umziehen",
    },

    imm_relocate_title: {
        zh: "跨城市迁移提示",
        en: "Inter-City Relocation Notice",
        de: "Hinweis zum Stadtwechsel",
    },

    imm_relocate_hint: {
        zh: "在 Germini，所有居民档案都存放在所在城市的数据库中。由于采用通用数据架构（UDA），迁移到其他城市时需要用户授权，将个人档案安全传输至新城市。\n\n请选择要迁入的城市，然后继续授权。",
        en: "In Germini, all resident records are stored by the current municipality. With the Universal Data Architecture (UDA), moving to another city requires your authorization to securely transfer your personal records.\n\nPlease select your destination city and continue.",
        de: "In Germini werden alle Einwohnerdaten von der jeweiligen Stadt gespeichert. Durch die Universal Data Architecture (UDA) ist bei einem Stadtwechsel Ihre Autorisierung erforderlich, um die Daten sicher zu übertragen.\n\nBitte wählen Sie die Zielstadt und fahren Sie fort.",
    },

    imm_relocate_select_city_label: {
        zh: "选择要搬去的城市",
        en: "Select your destination city",
        de: "Zielstadt auswählen",
    },

    imm_relocate_select_city_placeholder: {
        zh: "请选择城市",
        en: "Please select a city",
        de: "Bitte Stadt auswählen",
    },

    imm_continue_auth: {
        zh: "继续授权",
        en: "Continue Authorization",
        de: "Autorisierung fortsetzen",
    },

    imm_cancel: {
        zh: "取消",
        en: "Cancel",
        de: "Abbrechen",
    },

    imm_city_welcome_title: {
        zh: "欢迎来到薯条市",
        en: "Welcome to Frenchfries City",
        de: "Willkommen in der Stadt Frenchfries",
    },

    imm_city_welcome_desc: {
        zh: "我们是薯条市，位于 Germini 北部，是全国最大海港城市之一。\n\n我们的昵称是「番茄酱」——因为薯条离不开番茄酱，就像城市离不开市民。\n\n顺便一提：我们认为薯条比汉堡好吃。",
        en: "We are Frenchfries City, located in northern Germini — one of the nation’s largest seaports.\n\nOur nickname is “Ketchup”, because fries are nothing without ketchup — just as a city is nothing without its residents.\n\nAnd by the way: we believe fries taste better than hamburgers.",
        de: "Wir sind die Stadt Frenchfries im Norden Germinis — einer der größten Seehäfen des Landes.\n\nUnser Spitzname ist „Ketchup“, denn Pommes ohne Ketchup sind wie eine Stadt ohne Einwohner.\n\nÜbrigens: Wir finden, Pommes schmecken besser als Hamburger.",
    },

    imm_start_auth: {
        zh: "开始授权",
        en: "Start Authorization",
        de: "Autorisierung starten",
    },

    imm_back_to_immigration: {
        zh: "返回移民局首页",
        en: "Back to Immigration Overview",
        de: "Zurück zur Migrationsübersicht",
    },

};
// lib/i18n.ts 中加入：

export const i18n_immigration_apply = {
    back_home: {
        zh: "返回首页",
        en: "Back to Home",
        de: "Zurück zur Startseite"
    },

    imm_title: {
        zh: "杜伊艾克斯市移民局",
        en: "DuisX Immigration Office",
        de: "Ausländerbehörde DuisX"
    },

    imm_subtitle: {
        zh: "居留许可、长期居留、入籍申请一站式办理。",
        en: "Residence permit, long-term stay, and naturalization services.",
        de: "Aufenthaltstitel, Niederlassung und Einbürgerung."
    },

    imm_hint: {
        zh: "说明：系统已自动从各政府部门实时同步您的居留和材料信息。",
        en: "Note: All your immigration-related data has been synced from federal systems in real time.",
        de: "Hinweis: Alle Ihre Aufenthaltsdaten wurden in Echtzeit aus Bundessystemen synchronisiert."
    },

    imm_overview_title: {
        zh: "个人居留概览",
        en: "Personal Residence Overview",
        de: "Aufenthaltsübersicht"
    },

    imm_name: { zh: "姓名", en: "Name", de: "Name" },
    imm_nationality: { zh: "国籍", en: "Nationality", de: "Staatsangehörigkeit" },
    imm_residence_type: { zh: "居留类型", en: "Residence Type", de: "Aufenthaltstitel" },
    imm_residence_expiry: { zh: "居留到期", en: "Expiry Date", de: "Ablaufdatum" },
    imm_last_updated: { zh: "最后更新", en: "Last Updated", de: "Zuletzt aktualisiert" },

    imm_status: { zh: "状态", en: "Status", de: "Status" },
    imm_status_active: { zh: "有效", en: "Active", de: "Aktiv" },
    imm_status_pending: { zh: "待处理", en: "Pending", de: "Ausstehend" },
    imm_status_expired: { zh: "已过期", en: "Expired", de: "Abgelaufen" },

    imm_expiry_warning: {
        zh: "居留证有效期进度：",
        en: "Residence permit validity progress:",
        de: "Gültigkeitsfortschritt des Aufenthaltstitels:"
    },

    imm_progress_used: {
        zh: "已使用",
        en: "used",
        de: "verbraucht"
    },

    imm_apply_new: {
        zh: "提交申请",
        en: "Start Application",
        de: "Antrag starten"
    },

    imm_view_cases: {
        zh: "查看案件",
        en: "View Cases",
        de: "Fälle ansehen"
    },

    imm_timeline_title: {
        zh: "居留时间线",
        en: "Residence Timeline",
        de: "Aufenthaltschronik"
    },

    /* ---------------- APPLY ---------------- */

    apply_title: {
        zh: "提交新的移民申请",
        en: "Submit New Application",
        de: "Neuen Antrag einreichen"
    },

    apply_next: {
        zh: "下一步",
        en: "Next",
        de: "Weiter"
    },

    apply_continue: {
        zh: "继续",
        en: "Continue",
        de: "Fortfahren"
    },

    apply_step1_title: {
        zh: "选择申请类型",
        en: "Select Application Type",
        de: "Antragsart auswählen"
    },

    apply_step1_desc: {
        zh: "请选择您希望提交的申请类型，不同类型会需要不同的材料。",
        en: "Choose the type of application you want to file. Different types require different documents.",
        de: "Wählen Sie den Antragstyp. Unterschiedliche Anträge benötigen unterschiedliche Unterlagen."
    },

    apply_step2_title: {
        zh: "自动资格检查",
        en: "Automatic Eligibility Evaluation",
        de: "Automatische Eignungsprüfung"
    },

    apply_step2_desc: {
        zh: "根据您现有的材料，系统会初步判断是否满足申请条件。",
        en: "Based on existing documents, the system will assess whether you meet basic requirements.",
        de: "Basierend auf vorhandenen Unterlagen prüft das System Ihre Grundvoraussetzungen."
    },

    apply_step3_title: {
        zh: "正式申请材料",
        en: "Full Application Requirements",
        de: "Vollständige Antragsunterlagen"
    }
};
