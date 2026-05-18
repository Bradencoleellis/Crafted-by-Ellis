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
            Last updated: May 18, 2026
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0 96px", background: "var(--color-background)" }}>
        <div className="container-page" style={{ maxWidth: "800px" }}>
          <div style={contentStyle}>
            <p style={{ marginBottom: "32px" }}>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Renew+, developed by Crafted by Ellis. By downloading or using Renew+, you agree to these Terms.
            </p>

            <h2 style={h2Style}>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Renew+, you agree to be bound by these Terms. If you don&apos;t agree, please don&apos;t use the app.
            </p>

            <h2 style={h2Style}>2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Renew+. If you&apos;re under 18, you must have permission from a parent or legal guardian.
            </p>

            <h2 style={h2Style}>3. Your Account</h2>
            <p>To use most features, you need to create an account. You agree to:</p>
            <ul style={listStyle}>
              <li>Provide accurate, current information</li>
              <li>Keep your password secure</li>
              <li>Notify us of any unauthorized access</li>
              <li>Be responsible for all activity on your account</li>
            </ul>

            <h2 style={h2Style}>4. Subscription Plans</h2>
            <p>Renew+ offers three tiers:</p>
            <ul style={listStyle}>
              <li><strong>Silver:</strong> Free with core features</li>
              <li><strong>Gold:</strong> Premium — expanded features and AI tools</li>
              <li><strong>Platinum:</strong> Pro — everything, unlimited</li>
            </ul>
            <p>
              Subscriptions are billed through the Apple App Store and auto-renew unless cancelled. Pricing is displayed in-app and may vary by region.
            </p>

            <h2 style={h2Style}>5. Refunds and Cancellation</h2>
            <p>
              Refunds are handled by Apple through the App Store refund process. You can cancel your subscription at any time through your Apple ID settings — you retain premium access until the end of your current billing period.
            </p>

            <h2 style={h2Style}>6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul style={listStyle}>
              <li>Use Renew+ for any illegal purpose</li>
              <li>Attempt to hack, reverse-engineer, or disrupt the service</li>
              <li>Use automated tools without permission</li>
              <li>Share your account with others</li>
              <li>Impersonate other users or Crafted by Ellis</li>
            </ul>

            <h2 style={h2Style}>7. Your Content</h2>
            <p>
              You retain ownership of everything you create in Renew+ — goals, journal entries, meal plans, financial records, and all other personal data. By using the app, you grant us a limited licence to store and process your content solely to provide the service to you.
            </p>

            <h2 style={h2Style}>8. Intellectual Property</h2>
            <p>
              All rights to Renew+ — including the app, designs, code, logo, and the &ldquo;Renew+&rdquo; name — are owned by Crafted by Ellis. You may not copy, modify, or distribute any part of the app without permission.
            </p>

            <h2 style={h2Style}>9. AI Features</h2>
            <p>
              Renew+ uses AI (powered by Anthropic Claude) for goal planning, recipe scanning, and other features. AI-generated content is based on your inputs and may not always be accurate. Always use your own judgement with AI suggestions.
            </p>

            <h2 style={h2Style}>10. Disclaimers</h2>
            <p>
              Renew+ is provided &ldquo;as is.&rdquo; We make no guarantees about results from using the app. <strong>Renew+ is not a substitute for professional advice</strong> — consult a financial adviser for financial decisions, a healthcare professional for health matters, and a tax professional for tax advice. Tax calculations in the app are estimates only.
            </p>

            <h2 style={h2Style}>11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Crafted by Ellis is not liable for indirect, incidental, or consequential damages arising from your use of Renew+. Our total liability is limited to the amount you paid us in the last 12 months.
            </p>

            <h2 style={h2Style}>12. Termination</h2>
            <p>
              You can stop using Renew+ at any time. We may suspend or terminate your account if you violate these Terms. You can request a data export before termination.
            </p>

            <h2 style={h2Style}>13. Changes to Terms</h2>
            <p>
              We may update these Terms occasionally. We&apos;ll notify you of significant changes in-app or by email. Continued use of Renew+ after changes means you accept the updated Terms.
            </p>

            <h2 style={h2Style}>14. Governing Law</h2>
            <p>
              These Terms are governed by the laws of New Zealand. Any disputes will be resolved in New Zealand courts.
            </p>

            <h2 style={h2Style}>15. Contact Us</h2>
            <p style={{ marginTop: "12px" }}>
              <strong>Email:</strong> <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              <strong>Company:</strong> Crafted by Ellis<br />
              <strong>Location:</strong> New Zealand
            </p>

            <div style={{ marginTop: "48px", padding: "24px", background: "var(--color-background-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-secondary)" }}>
                <strong>Plain English:</strong> Be respectful, pay for what you subscribe to, and we&apos;ll do our best to make a great app. We&apos;re not financial or health advisers — use Renew+ as a tool, not a replacement for professional advice.
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
const listStyle: React.CSSProperties = {
  paddingLeft: "24px", marginBottom: "16px",
};
const linkStyle: React.CSSProperties = {
  color: "var(--rust)", textDecoration: "underline",
};
