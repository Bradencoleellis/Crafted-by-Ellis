import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Renew+",
  description: "Terms of service for Renew+ by Crafted by Ellis.",
};

export default function RenewPlusTermsPage() {
  return (
    <>
      <section style={{ padding: "80px 0 40px", background: "var(--color-background)" }} className="grid-bg">
        <div className="container-page" style={{ maxWidth: "800px" }}>
          <Link href="/renewplus" style={{ fontSize: "13px", color: "var(--rust)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "32px" }}>
            ← Renew+
          </Link>
          <p style={labelStyle}>Legal · Renew+</p>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Terms of Service
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
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Renew+ (&ldquo;the App&rdquo;), developed and operated by Crafted by Ellis, a sole trader based in New Zealand (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By downloading, installing, or using the App, or by tapping &ldquo;Continue&rdquo; on the in-app consent screen, you agree to be bound by these Terms.
            </p>

            <h2 style={h2Style}>1. Introduction and Acceptance</h2>
            <p>
              These Terms constitute a legally binding agreement between you and Crafted by Ellis. If you do not agree, do not use the App. We recommend you save a copy for your records.
            </p>

            <h2 style={h2Style}>2. Eligibility</h2>
            <p>
              You must be at least <strong>13 years of age</strong> to use Renew+. By using the App, you represent that you meet this requirement. If you are between 13 and 18, you represent that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.
            </p>
            <p>
              We do not knowingly collect personal information from children under 13. If we become aware that a user is under 13, we will delete their account and associated data.
            </p>

            <h2 style={h2Style}>3. What Renew+ Is</h2>
            <p>Renew+ is a personal budgeting and lifestyle management tool. Its features include:</p>
            <ul style={listStyle}>
              <li>Manual entry and tracking of income, bills, expenses, and bank account details</li>
              <li>Import of transaction data via CSV files</li>
              <li>Tax and take-home pay calculations for New Zealand, Australia, United Kingdom, United States, Canada, India, and Singapore</li>
              <li>KiwiSaver and superannuation contribution tracking</li>
              <li>Savings goals and piggy bank tracking</li>
              <li>Meal planning, recipe management, and shopping lists</li>
              <li>Personal goals, journal, and mood tracking</li>
              <li>Social features including community posts, family groups, and friend connections</li>
              <li>Home screen widgets for shopping lists and savings goals</li>
              <li>Calendar integration to display financial events alongside personal events</li>
            </ul>
            <div style={calloutStyle}>
              <strong>Important:</strong> Renew+ is a record-keeping tool only. We do not connect to any bank account, payment network, or financial institution. We do not process payments, execute transactions, transfer funds, or provide regulated financial advice. Any figures displayed are based solely on information you have entered manually or imported yourself.
            </div>

            <h2 style={h2Style}>4. Account Registration and Security</h2>
            <p>To use Renew+ you must create an account with a valid email address. You agree to:</p>
            <ul style={listStyle}>
              <li>Provide accurate and complete registration information</li>
              <li>Keep your login credentials confidential</li>
              <li>Notify us immediately at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a> if you suspect unauthorised access</li>
              <li>Accept responsibility for all activity that occurs under your account</li>
            </ul>

            <h2 style={h2Style}>5. Subscription Plans</h2>
            <p>Renew+ offers three tiers:</p>
            <ul style={listStyle}>
              <li><strong>Silver (Free):</strong> Core features — up to 3 goals, 10 recipes, 30 journal entries, 1 budget</li>
              <li><strong>Gold:</strong> Expanded features — up to 15 goals, 100 recipes, unlimited journal entries, 5 budgets, AI tools, data export, recipe sharing</li>
              <li><strong>Premium:</strong> Unlimited access to all features, advanced analytics, priority support</li>
            </ul>
            <p>
              All paid subscriptions are processed through Apple&apos;s App Store. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date. Current pricing is shown in-app at the time of purchase and may vary by region.
            </p>

            <h2 style={h2Style}>6. Refunds and Cancellation</h2>
            <p>
              Refunds are handled by Apple through the App Store refund process — we do not process refunds directly. You can cancel at any time through your Apple ID settings (Settings → [your name] → Subscriptions). You retain access until the end of your current billing period.
            </p>

            <h2 style={h2Style}>7. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul style={listStyle}>
              <li>Use Renew+ for any illegal, fraudulent, or harmful purpose</li>
              <li>Attempt to reverse-engineer, decompile, or hack the App or its infrastructure</li>
              <li>Use automated scripts or bots to access the App</li>
              <li>Circumvent subscription gates or feature restrictions</li>
              <li>Upload or import data containing malicious code or viruses</li>
              <li>Impersonate any person or entity</li>
              <li>Infringe any third-party intellectual property rights</li>
            </ul>

            <h2 style={h2Style}>8. Your Content</h2>
            <p>
              You retain ownership of all content you create in Renew+ — financial records, goals, journal entries, meal plans, recipes, and all other personal data. By using the App, you grant us a limited, non-exclusive, royalty-free licence to store and process your content solely to provide the service to you. We do not claim ownership of your data and will not use it for advertising or sell it to third parties.
            </p>
            <p>
              You are solely responsible for the accuracy of data you enter, including bank account numbers and CSV-imported transactions. Bank account numbers you enter are stored solely to help you identify your own accounts within the App — we do not access, verify, or interact with those accounts in any way.
            </p>

            <h2 style={h2Style}>9. Financial Calculations Disclaimer</h2>
            <p>
              Tax calculations, KiwiSaver projections, and take-home pay estimates are based on publicly available government rate information. These calculations are <strong>estimates only</strong> and:
            </p>
            <ul style={listStyle}>
              <li>May not reflect your exact personal tax situation</li>
              <li>Do not account for all individual circumstances (trusts, special rates, additional deductions)</li>
              <li>Are not a substitute for advice from a qualified accountant or tax professional</li>
              <li>May not reflect the most recent legislative changes</li>
            </ul>
            <p>
              <strong>Renew+ is not a registered financial adviser.</strong> Nothing in the App constitutes financial, tax, or legal advice.
            </p>

            <h2 style={h2Style}>10. AI Features</h2>
            <p>
              Renew+ uses AI (powered by Anthropic Claude) for goal planning, recipe scanning, and other features. AI-generated content is based on your inputs and may not always be accurate. Always use your own judgement with AI suggestions and do not rely on them as professional advice.
            </p>

            <h2 style={h2Style}>11. Family Groups and Social Features</h2>
            <p>
              When you use family groups, friend connections, or community features, content you share (meal plans, recipes, shopping lists, community posts) becomes visible to the relevant members or connections. You are responsible for all content you share and must not post content that is offensive, defamatory, illegal, or infringes any third-party rights. We reserve the right to remove content that violates these Terms.
            </p>

            <h2 style={h2Style}>12. Intellectual Property</h2>
            <p>
              All rights to Renew+ — including the App software, design, branding, and original content — belong to Crafted by Ellis or its licensors. The App uses the following third-party components:
            </p>
            <ul style={listStyle}>
              <li><strong>Firebase</strong> (Google LLC) — authentication, database, and cloud storage</li>
              <li><strong>Lordicon</strong> — animated icons used under a commercial Pro licence. Lordicon icons are the intellectual property of Lordicon.com</li>
              <li><strong>Apple StoreKit</strong> — in-app purchase processing</li>
              <li><strong>Anthropic Claude</strong> — AI features</li>
            </ul>
            <p>
              You are granted a limited, personal, non-transferable licence to use the App on devices you own or control. You may not copy, modify, or distribute any part of the App without permission.
            </p>

            <h2 style={h2Style}>13. Disclaimers and Limitation of Liability</h2>
            <p>
              Renew+ is provided &ldquo;as is&rdquo; without warranties of any kind. To the maximum extent permitted by law, Crafted by Ellis is not liable for indirect, incidental, or consequential damages arising from your use of Renew+. Our total liability is limited to the amount you paid us in the last 12 months.
            </p>
            <p>
              Nothing in these Terms excludes liability that cannot be excluded under applicable consumer protection law, including the New Zealand Consumer Guarantees Act 1993 and the Australian Consumer Law.
            </p>

            <h2 style={h2Style}>14. Changes to the App and Terms</h2>
            <p>
              We may update these Terms at any time. When we make material changes, we will update the version date at the top of this page and prompt you to re-accept within the App before you can continue using it. We may also change, suspend, or discontinue features with reasonable notice where practicable.
            </p>

            <h2 style={h2Style}>15. Termination</h2>
            <p>
              We may suspend or terminate your account if you breach these Terms or if we are required to do so by law. You may delete your account at any time from Settings → Delete Account, which permanently erases all your data. On termination, your licence to use the App ceases immediately.
            </p>

            <h2 style={h2Style}>16. Regional Consumer Rights</h2>
            <h3 style={h3Style}>Australia</h3>
            <p>
              Our services come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for other reasonably foreseeable loss or damage.
            </p>
            <h3 style={h3Style}>United Kingdom / European Union</h3>
            <p>
              Nothing in these Terms affects your statutory rights under applicable consumer protection legislation.
            </p>
            <h3 style={h3Style}>United States (California)</h3>
            <p>
              These Terms do not waive any rights you have under the California Consumer Privacy Act or other applicable California consumer protection laws.
            </p>

            <h2 style={h2Style}>17. Governing Law</h2>
            <p>
              These Terms are governed by the laws of New Zealand. Any disputes will be subject to the non-exclusive jurisdiction of the New Zealand courts. Please contact us at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a> before commencing any legal proceeding — most issues can be resolved quickly and informally.
            </p>

            <h2 style={h2Style}>18. Contact</h2>
            <p style={{ marginTop: "12px" }}>
              <strong>Crafted by Ellis</strong><br />
              General: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              Privacy: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              Location: New Zealand
            </p>

            <div style={{ marginTop: "48px", padding: "24px", background: "var(--color-background-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-secondary)" }}>
                <strong>Plain English:</strong> Renew+ helps you track your own money — we never touch it. Pay for what you subscribe to, be respectful in social features, and remember that tax calculations are estimates. We&apos;re not a financial adviser — use Renew+ as a tool, not a replacement for professional advice.
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
