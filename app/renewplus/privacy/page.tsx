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
            Version date: 15 June 2026 · Effective: 15 June 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0 96px", background: "var(--color-background)" }}>
        <div className="container-page" style={{ maxWidth: "800px" }}>
          <div style={contentStyle}>

            <p style={{ marginBottom: "32px" }}>
              Renew+ (&ldquo;the App&rdquo;) is developed and operated by Braden Cole Ellis, a sole trader based in New Zealand (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). This Privacy Policy explains what personal information we collect, how we use it, who we share it with, and your rights. We are the data controller for all personal information collected through the App.
            </p>

            <div style={calloutStyle}>
              <strong>Our standard:</strong> We apply a single, high privacy standard to every user across the countries where Renew+ is available. That means the same strong privacy rights, clear retention limits, and transparency about every party we share data with. Some countries also give you specific local rights, listed in Section 9. We do not connect to bank accounts, process payments, or transfer funds. We do not sell your personal data. Ever.
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
            <p>
              Some of this information — for example, food allergies, mood entries, and journal content — may reveal health or other sensitive details about you. We process it only to provide the features you choose to use, on the basis of your consent (which you give by entering it), and never to infer health conditions or for any unrelated purpose.
            </p>

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
              <li>Provide AI features (goal planning, recipe scanning) when you choose to use them</li>
              <li>Send push notifications you have enabled</li>
              <li>Respond to support requests</li>
              <li>Improve the App using aggregated, anonymised usage data</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> use your data for targeted advertising, credit scoring, automated decision-making that produces legal or similarly significant effects, or sale to third parties.</p>

            <h2 style={h2Style}>3. Why We Use Your Data</h2>
            <p>We use your information to provide the App you signed up for and the features you choose to use:</p>
            <ul style={listStyle}>
              <li><strong>To run the App</strong> — creating your account, core features, data sync, and tax/financial calculations from the data you enter.</li>
              <li><strong>With your consent</strong> — optional AI features (goal planning, recipe scanning) and any sensitive details you choose to enter (allergies, mood, journal content). You can simply not use these, and you can withdraw consent at any time.</li>
              <li><strong>To keep the service running and safe</strong> — security, fraud prevention, responding to support, and improving the App using aggregated, anonymised usage data.</li>
              <li><strong>To meet our legal obligations.</strong></li>
            </ul>
            <p>Where we rely on your consent, you may withdraw it at any time without affecting anything we did before you withdrew it.</p>

            <h2 style={h2Style}>4. Who We Share Data With (Sub-processors)</h2>
            <p>We do not sell, rent, or trade your personal information. We share data only with the following service providers, who process it on our instructions:</p>
            <ul style={listStyle}>
              <li><strong>Google Firebase</strong> (Firestore, Authentication, Storage), operated by Google LLC, United States — database, authentication, and file storage. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
              <li><strong>Anthropic, PBC</strong>, United States — powers AI features (goal planning, recipe scanning). Data you submit to an AI feature is sent to Anthropic only to generate your result. Anthropic processes it as our service provider and does not use it to train its models. <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
              <li><strong>Apple Inc.</strong> (StoreKit, App Store), United States — subscription management and payments. Apple processes your payment data as an independent controller under its own terms. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
            </ul>
            <p>We may also disclose information where required by law, court order, or to protect the rights, property, or safety of our users or others.</p>

            <h2 style={h2Style}>5. International Data Transfers</h2>
            <p>
              We are based in New Zealand, and our service providers are located in the United States. This means your personal data is transferred to and processed in the United States and potentially other countries. The named transfers are:
            </p>
            <ul style={listStyle}>
              <li><strong>Google LLC (Firebase) — United States.</strong> Safeguard: contractual data-protection commitments with Google.</li>
              <li><strong>Anthropic, PBC — United States.</strong> Safeguard: a data processing agreement, for AI features only.</li>
              <li><strong>Apple Inc. — United States.</strong> Safeguard: Apple&apos;s own compliance framework.</li>
            </ul>
            <p>
              For Australian users, we comply with the Australian Privacy Principles on cross-border disclosure. You may request more detail on these safeguards by emailing <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>.
            </p>

            <h2 style={h2Style}>6. Data Retention</h2>
            <p>We keep personal data only as long as we need it for the purpose it was collected, then delete or anonymise it. Our retention schedule:</p>
            <ul style={listStyle}>
              <li><strong>Account and all in-app content</strong> (financial records, goals, journals, meal plans, recipes, social data, etc.) — kept while your account is active.</li>
              <li><strong>After you delete your account</strong> — erased from our live systems promptly, and within <strong>30 days</strong> at the latest.</li>
              <li><strong>Encrypted backups</strong> — automatically overwritten on a rolling cycle and fully purged within <strong>90 days</strong> of deletion.</li>
              <li><strong>Crash and aggregated usage data</strong> — retained in anonymised or aggregated form that no longer identifies you.</li>
              <li><strong>Records we must keep by law</strong> (e.g. limited transaction or correspondence records) — kept only for the period the law requires, then deleted.</li>
            </ul>

            <h2 style={h2Style}>7. Account Deletion</h2>
            <p>
              You can delete your account and all associated data at any time from <strong>Settings → Delete Account</strong> inside the App. This permanently erases your records, including: financial records, bank account numbers, CSV imports, goals, journals, meal plans, recipes, shopping lists, pantry items, mood entries, social data, and profile photos.
            </p>
            <ul style={listStyle}>
              <li>Live data is removed promptly; backups are purged within 90 days (see Section 6).</li>
              <li><strong>Deletion is irreversible</strong> — we cannot recover deleted data.</li>
              <li>If you cannot access the App, email <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a> from your account email and we will delete your data on request.</li>
              <li>Deleting your account does not cancel an Apple subscription — manage that in your Apple Account settings.</li>
            </ul>

            <h2 style={h2Style}>8. Data Storage and Security</h2>
            <p>
              Your data is stored in Google Firebase&apos;s Cloud Firestore and Firebase Storage. All data is encrypted in transit (TLS) and at rest. We restrict access to your data, use authentication controls, and review our security practices. No system is perfectly secure, but we take reasonable steps to protect your information.
            </p>

            <h2 style={h2Style}>9. Your Privacy Rights</h2>

            <h3 style={h3Style}>Everyone — our global baseline</h3>
            <p>Regardless of where you live, you can ask us to:</p>
            <ul style={listStyle}>
              <li><strong>Access</strong> the personal data we hold about you</li>
              <li><strong>Correct</strong> inaccurate or incomplete data</li>
              <li><strong>Delete</strong> your data (&ldquo;erasure&rdquo;)</li>
              <li><strong>Export</strong> your data in a structured, machine-readable format (portability)</li>
              <li><strong>Restrict</strong> or <strong>object</strong> to certain processing</li>
              <li><strong>Withdraw consent</strong> at any time where we rely on it</li>
              <li><strong>Complain</strong> to us, and to your local privacy regulator</li>
            </ul>
            <p>
              Most of these you can do yourself in the App (edit or delete data, export where available, toggle permissions). Otherwise email <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>. We respond within <strong>30 days</strong> (sooner where local law requires) and never charge for a reasonable request. We will not discriminate against you for exercising these rights.
            </p>

            <h3 style={h3Style}>New Zealand — Privacy Act 2020</h3>
            <p>
              You have the right to request access to and correction of personal information we hold. We will respond within 20 working days. Complaints may be made to the <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" style={linkStyle}>NZ Privacy Commissioner</a>.
            </p>

            <h3 style={h3Style}>Australia — Privacy Act 1988</h3>
            <p>
              You have the right to access and correct your personal information and to complain about breaches of the Australian Privacy Principles. Unresolved complaints may be escalated to the <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={linkStyle}>Office of the Australian Information Commissioner (OAIC)</a>.
            </p>

            <h3 style={h3Style}>United States — California (CCPA/CPRA)</h3>
            <p>California residents have the right to know what personal information we collect, request deletion and correction, and opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information — <strong>we do not sell or share personal information</strong>. Categories collected include: identifiers (email, display name), financial information (income, bills, bank account numbers), commercial information (subscription tier), internet/network activity (app usage), and inferences (preferences, settings).</p>

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

            <h2 style={h2Style}>10. Data Breach Notification</h2>
            <p>In the event of a data breach likely to cause harm, we will notify affected users and regulators:</p>
            <ul style={listStyle}>
              <li><strong>New Zealand:</strong> As soon as practicable (Privacy Act 2020)</li>
              <li><strong>Australia:</strong> Within 30 days (Notifiable Data Breaches scheme)</li>
              <li><strong>Canada:</strong> As soon as feasible where real risk of significant harm exists (PIPEDA)</li>
            </ul>

            <h2 style={h2Style}>11. Children&apos;s Privacy</h2>
            <p>
              Renew+ is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has created an account, contact us at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a> and we will delete the account promptly.
            </p>

            <h2 style={h2Style}>12. Cookies and Tracking</h2>
            <p>
              Renew+ is a native iOS application and does not use cookies. Firebase may use device identifiers for session management and crash reporting — these are not used for advertising.
            </p>

            <h2 style={h2Style}>13. Changes to This Policy</h2>
            <p>
              When we make material changes, we will update the version date at the top of this page and prompt you to review and re-accept within the App before continuing. Previous versions are available on request.
            </p>

            <h2 style={h2Style}>14. Contact and Complaints</h2>
            <p style={{ marginTop: "12px" }}>
              <strong>Braden Cole Ellis (Crafted by Ellis)</strong><br />
              Privacy enquiries: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              General support: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              Location: New Zealand
            </p>
            <p>We take privacy complaints seriously and will respond within 10 business days. If we cannot resolve your complaint, you have the right to escalate to the relevant regulator in your jurisdiction (listed in Section 9 above).</p>

            <div style={{ marginTop: "48px", padding: "24px", background: "var(--color-background-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-secondary)" }}>
                <strong>Plain English:</strong> We collect what we need to make the app work, keep it secure on Firebase, never sell it, and give everyone the same strong rights — access, correction, export, and deletion — no matter where you live. AI features send your input to Anthropic in the US only to generate your result, and it&apos;s not used to train their models. Delete your account anytime and it&apos;s gone within 30 days (90 for backups).
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
