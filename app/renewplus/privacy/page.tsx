import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Renew+",
  description: "Privacy policy for Renew+ by Crafted by Ellis.",
};

export default function RenewPlusPrivacyPage() {
  return (
    <>
      <section style={{ padding: "80px 0 40px", background: "var(--color-background)" }} className="grid-bg">
        <div className="container-page" style={{ maxWidth: "800px" }}>
          <Link href="/renewplus" style={{ fontSize: "13px", color: "var(--rust)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Renew+
          </Link>
          <p style={labelStyle}>Legal · Renew+</p>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "15px", color: "var(--color-text-tertiary)" }}>
            Version date: 19 May 2025 · Effective: 19 May 2025
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0 96px", background: "var(--color-background)" }}>
        <div className="container-page" style={{ maxWidth: "800px" }}>
          <div style={contentStyle}>

            <p style={{ marginBottom: "32px" }}>
              Renew+ (&ldquo;the App&rdquo;) is developed and operated by Crafted by Ellis, a sole trader based in New Zealand (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). This Privacy Policy explains what personal information we collect, how we use it, who we share it with, and your rights. We are the data controller for all personal information collected through the App.
            </p>

            <div style={calloutStyle}>
              <strong>What Renew+ is not:</strong> We do not connect to bank accounts, process payments, or transfer funds. Bank account numbers you enter are stored solely to help you identify your own accounts in the App. We do not sell your personal data. Ever.
            </div>

            <h2 style={h2Style}>1. Information We Collect</h2>

            <h3 style={h3Style}>Information You Provide Directly</h3>
            <ul style={listStyle}>
              <li><strong>Account:</strong> Email address, display name, profile photo</li>
              <li><strong>Financial records:</strong> Income amounts and frequency, employer details, bill amounts and due dates, expense records, bank account numbers (for identification only), CSV-imported transaction data, KiwiSaver / superannuation contribution rates, savings goal names and targets, piggy bank balances, budget records, financial year records</li>
              <li><strong>Planning data:</strong> Meal plans, recipes, shopping lists, pantry items</li>
              <li><strong>Personal records:</strong> Goals, journal entries, mood entries</li>
              <li><strong>Social data:</strong> Community posts, friend connections, family group membership</li>
              <li><strong>Preferences:</strong> Home region, currency, theme, notification settings, food allergies and preferences</li>
            </ul>

            <h3 style={h3Style}>Information Collected Automatically</h3>
            <p>
              Firebase (our cloud infrastructure provider, operated by Google LLC) automatically collects certain technical data including authentication tokens, session identifiers, app crash reports, and general usage data (feature interactions, timestamps). We do not collect your precise device location.
            </p>

            <h3 style={h3Style}>Device Permissions</h3>
            <ul style={listStyle}>
              <li><strong>Calendar:</strong> Display bills, goals, and meal plans alongside your personal calendar events. We do not store your calendar contents on our servers.</li>
              <li><strong>Face ID / Touch ID:</strong> Authenticate you quickly and protect Finance and Journal sections. Biometric data never leaves your device.</li>
              <li><strong>Push notifications:</strong> Send reminders for bills, goals, and alerts you configure.</li>
              <li><strong>Camera / Photo Library:</strong> Upload a profile avatar photo, stored in Firebase Storage.</li>
            </ul>
            <p>You may revoke any permission at any time in iOS Settings without affecting other App functionality.</p>

            <h2 style={h2Style}>2. How We Use Your Information</h2>
            <ul style={listStyle}>
              <li>Create and manage your account and provide all App features</li>
              <li>Sync your data across your devices via Firebase</li>
              <li>Perform tax and financial calculations based on data you enter</li>
              <li>Send push notifications you have enabled</li>
              <li>Respond to support requests</li>
              <li>Improve the App using aggregated, anonymised usage data</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> use your data for targeted advertising, credit scoring, automated decision-making with legal effects, or sale to third parties.</p>

            <h2 style={h2Style}>3. Legal Basis for Processing (UK / EU Users)</h2>
            <ul style={listStyle}>
              <li><strong>Contractual necessity</strong> (Art. 6(1)(b) UK/EU GDPR) — account creation, App features, data sync</li>
              <li><strong>Consent</strong> (Art. 6(1)(a)) — calendar access, Face ID, push notifications</li>
              <li><strong>Legitimate interests</strong> (Art. 6(1)(f)) — anonymised analytics to improve the App</li>
              <li><strong>Legal obligation</strong> (Art. 6(1)(c)) — compliance with applicable law</li>
            </ul>

            <h2 style={h2Style}>4. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information. We share data only with:</p>
            <ul style={listStyle}>
              <li><strong>Google Firebase</strong> (Firestore, Auth, Storage) — database, authentication, file storage. Operates under Google&apos;s data processing terms and is certified under the EU–US Data Privacy Framework. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
              <li><strong>Apple</strong> (StoreKit, App Store) — subscription management and payments. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
              <li><strong>Anthropic</strong> — AI features (goal planning, recipe scanning). <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
            </ul>
            <p>We may also disclose information where required by law, court order, or to protect the rights, property, or safety of our users or others.</p>

            <h2 style={h2Style}>5. Data Storage, Security, and Retention</h2>
            <p>
              Your data is stored in Google Firebase&apos;s Cloud Firestore and Firebase Storage. All data is encrypted in transit (TLS) and at rest. We retain your data for as long as your account is active.
            </p>
            <p>
              When you delete your account (Settings → Delete Account), we permanently delete all records associated with your account, including: financial records, bank account numbers, CSV imports, goals, journals, meal plans, recipes, shopping lists, pantry items, mood entries, social data, and profile photos. <strong>Deletion is irreversible.</strong>
            </p>

            <h2 style={h2Style}>6. International Data Transfers</h2>
            <p>
              Your data is processed on Firebase infrastructure operated by Google LLC, and may be stored on servers in the United States or other countries. For UK/EU users, we rely on Standard Contractual Clauses approved by the European Commission. For Australian users, we comply with the Australian Privacy Principles regarding cross-border disclosure. By using the App, you consent to this transfer.
            </p>

            <h2 style={h2Style}>7. Your Rights</h2>

            <h3 style={h3Style}>All Users</h3>
            <p>You may access, correct, or delete your data directly within the App at any time, or contact us at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>.</p>

            <h3 style={h3Style}>New Zealand — Privacy Act 2020</h3>
            <p>
              You have the right to request access to and correction of personal information we hold. We will respond within 20 working days. Complaints may be made to the <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" style={linkStyle}>NZ Privacy Commissioner</a>.
            </p>

            <h3 style={h3Style}>Australia — Privacy Act 1988</h3>
            <p>
              You have the right to access and correct your personal information and to complain about breaches of the Australian Privacy Principles. Unresolved complaints may be escalated to the <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={linkStyle}>Office of the Australian Information Commissioner (OAIC)</a>.
            </p>

            <h3 style={h3Style}>United Kingdom / European Union — UK GDPR / EU GDPR</h3>
            <p>In addition to access and correction, you have the right to:</p>
            <ul style={listStyle}>
              <li><strong>Erasure</strong> — request deletion of your personal data</li>
              <li><strong>Restriction</strong> — request we limit processing in certain circumstances</li>
              <li><strong>Data portability</strong> — receive your data in a structured, machine-readable format</li>
              <li><strong>Object</strong> — object to processing based on legitimate interests</li>
              <li><strong>Complain</strong> — to the UK <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={linkStyle}>Information Commissioner&apos;s Office (ICO)</a> or relevant EU supervisory authority</li>
            </ul>
            <p>We respond to GDPR requests within one calendar month.</p>

            <h3 style={h3Style}>United States — California (CCPA)</h3>
            <p>California residents have the right to know what personal information we collect, request deletion, and opt out of the &ldquo;sale&rdquo; of personal information — <strong>we do not sell personal information</strong>. Categories collected include: identifiers (email, display name), financial information (income, bills, bank account numbers), commercial information (subscription tier), internet/network activity (app usage), and inferences (preferences, settings).</p>

            <h3 style={h3Style}>Canada — PIPEDA / Quebec Law 25</h3>
            <p>
              You have the right to access, correct, and withdraw consent for processing your personal information. Quebec residents additionally have data portability rights. Contact <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>. We respond within 30 days.
            </p>

            <h3 style={h3Style}>India — DPDP Act 2023</h3>
            <p>
              You have the right to access, correct, and erase your personal data, and to nominate another person to exercise these rights on your behalf. Contact <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>.
            </p>

            <h3 style={h3Style}>Singapore — PDPA</h3>
            <p>
              You have the right to access and correct personal data we hold, and to withdraw consent for its collection and use. Contact <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>.
            </p>

            <h2 style={h2Style}>8. Data Breach Notification</h2>
            <p>In the event of a data breach likely to cause harm, we will notify affected users and regulators:</p>
            <ul style={listStyle}>
              <li><strong>New Zealand:</strong> As soon as practicable (Privacy Act 2020)</li>
              <li><strong>Australia:</strong> Within 30 days (Notifiable Data Breaches scheme)</li>
              <li><strong>UK / EU:</strong> Within 72 hours (UK/EU GDPR)</li>
              <li><strong>Canada:</strong> As soon as feasible where real risk of significant harm exists (PIPEDA)</li>
            </ul>

            <h2 style={h2Style}>9. Children&apos;s Privacy</h2>
            <p>
              Renew+ is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has created an account, contact us at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a> and we will delete the account promptly.
            </p>

            <h2 style={h2Style}>10. Cookies and Tracking</h2>
            <p>
              Renew+ is a native iOS application and does not use cookies. Firebase may use device identifiers for session management and crash reporting — these are not used for advertising.
            </p>

            <h2 style={h2Style}>11. Changes to This Policy</h2>
            <p>
              When we make material changes, we will update the version date at the top of this page and prompt you to review and re-accept within the App before continuing. Previous versions are available on request.
            </p>

            <h2 style={h2Style}>12. Contact</h2>
            <p style={{ marginTop: "12px" }}>
              <strong>Crafted by Ellis</strong><br />
              Privacy enquiries: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              General support: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              Location: New Zealand
            </p>
            <p>We take privacy complaints seriously and will respond within 10 business days. If we cannot resolve your complaint, you have the right to escalate to the relevant regulator in your jurisdiction (listed in Section 7 above).</p>

            <div style={{ marginTop: "48px", padding: "24px", background: "var(--color-background-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-secondary)" }}>
                <strong>Plain English:</strong> We collect what we need to make the app work, keep it secure on Firebase, don&apos;t sell it, and you can delete everything anytime. Bank account numbers you enter are just labels — we never touch your actual accounts.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "11px", fontWeight: 600, color: "var(--rust)",
  textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
};
const contentStyle: React.CSSProperties = {
  fontSize: "16px", lineHeight: 1.75, color: "var(--color-text-primary)",
};
const h2Style: React.CSSProperties = {
  fontSize: "22px", fontWeight: 700, marginTop: "48px", marginBottom: "16px", letterSpacing: "-0.01em",
};
const h3Style: React.CSSProperties = {
  fontSize: "17px", fontWeight: 600, marginTop: "24px", marginBottom: "10px",
};
const listStyle: React.CSSProperties = {
  paddingLeft: "24px", marginBottom: "16px",
};
const linkStyle: React.CSSProperties = {
  color: "var(--rust)", textDecoration: "underline",
};
const calloutStyle: React.CSSProperties = {
  margin: "24px 0", padding: "20px 24px",
  background: "var(--color-background-secondary)",
  borderLeft: "3px solid var(--rust)",
  borderRadius: "var(--radius-md)",
  fontSize: "15px",
};
