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
            Version date: 13 June 2026 · Effective: 13 June 2026
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
            <p>
              The App is a &ldquo;Licensed Application&rdquo; provided through the Apple App Store. These Terms are the end user licence agreement (EULA) for the App. Where these Terms are less restrictive than, or conflict with, Apple&apos;s applicable Media Services Terms and Conditions, Apple&apos;s terms govern to the extent of the conflict. Section 13 sets out additional terms required by Apple.
            </p>

            <h2 style={h2Style}>2. Eligibility and Minimum Age</h2>
            <p>
              You must be at least <strong>13 years of age</strong> to use Renew+. By using the App, you represent that you meet this requirement. If you are between 13 and 18 (or the age of majority where you live), you represent that a parent or legal guardian has reviewed and agreed to these Terms on your behalf and supervises your use.
            </p>
            <p>
              In some jurisdictions a higher minimum age applies to consent to the processing of personal data (for example, 16 in parts of the European Union). Where that is the case, you must meet the higher age, or have verifiable parental consent, before using the App. See the <Link href="/renewplus/privacy" style={linkStyle}>Privacy Policy</Link> for details on the digital age of consent.
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

            <h2 style={h2Style}>5. Subscriptions and Apple Billing</h2>
            <p>Renew+ offers three tiers:</p>
            <ul style={listStyle}>
              <li><strong>Silver (Free):</strong> Core features — up to 3 goals, 10 recipes, 30 journal entries, 1 budget</li>
              <li><strong>Gold:</strong> Expanded features — up to 15 goals, 100 recipes, unlimited journal entries, 5 budgets, AI tools, data export, recipe sharing</li>
              <li><strong>Premium:</strong> Unlimited access to all features, advanced analytics, priority support</li>
            </ul>
            <p>
              All paid subscriptions are sold and processed by Apple through the App Store under Apple&apos;s Media Services Terms and Conditions and the Apple Developer Program Paid Applications Agreement. Payment is charged to your Apple Account at confirmation of purchase. Subscriptions automatically renew at the then-current price unless auto-renew is turned off at least 24 hours before the end of the current period; your Apple Account is charged for renewal within 24 hours before the period ends. Current pricing is shown in-app at the time of purchase and may vary by region and over time. We do not collect or store your payment-card details — Apple handles all billing.
            </p>

            <h2 style={h2Style}>6. Billing, Refunds and Cancellation</h2>
            <p>
              Because billing is handled by Apple, refunds are issued by Apple in accordance with Apple&apos;s Media Services Terms and applicable law — we cannot directly access your payment method or grant refunds. To request a refund, use Apple&apos;s process at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>reportaproblem.apple.com</a>.
            </p>
            <p>
              You can manage or cancel your subscription at any time in your Apple Account settings (Settings → [your name] → Subscriptions). If you cancel, you retain access to paid features until the end of your current billing period; partial periods are not refunded except where required by law. Deleting the App does not cancel a subscription.
            </p>
            <p>
              Nothing in this section limits any non-excludable refund or remedy you may have under consumer law (see Section 15).
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

            <h2 style={h2Style}>9. Disclaimers — Not Financial, Tax, or Medical Advice</h2>
            <h3 style={h3Style}>Financial, tax, and KiwiSaver calculations</h3>
            <p>
              Tax calculations, KiwiSaver and superannuation projections, and take-home pay estimates are based on publicly available government rate information. These calculations are <strong>estimates only</strong> and:
            </p>
            <ul style={listStyle}>
              <li>May not reflect your exact personal tax situation</li>
              <li>Do not account for all individual circumstances (trusts, special rates, additional deductions)</li>
              <li>Are not a substitute for advice from a qualified accountant or tax professional</li>
              <li>May not reflect the most recent legislative changes</li>
            </ul>
            <p>
              <strong>Renew+ is not a registered financial adviser and does not provide financial advice within the meaning of the Financial Markets Conduct Act 2013 (NZ) or equivalent law in your country.</strong> Nothing in the App constitutes financial, investment, tax, or legal advice. Decisions you make about your money are your own; consult a licensed professional before acting.
            </p>
            <h3 style={h3Style}>Health, nutrition, and wellness features</h3>
            <p>
              The meal planning, recipe, shopping list, mood, journal, and goal features are provided for general lifestyle and organisational purposes only. They are <strong>not medical, nutritional, dietetic, psychological, or other professional health advice</strong>, and are not intended to diagnose, treat, cure, or prevent any condition.
            </p>
            <ul style={listStyle}>
              <li>Allergy and dietary tags are organisational labels you set — they are <strong>not</strong> a safety system. Always read product labels and verify ingredients yourself; do not rely on the App to keep you or others safe from allergens or intolerances.</li>
              <li>Nutritional or calorie figures, where shown, are estimates and may be inaccurate.</li>
              <li>Mood and journal entries are personal records, not a clinical or mental-health service. If you are in distress or crisis, contact a qualified professional or your local emergency service.</li>
            </ul>
            <p>
              Always consult a qualified healthcare professional before making decisions about diet, nutrition, allergies, exercise, or mental health.
            </p>

            <h2 style={h2Style}>10. AI Features</h2>
            <p>
              Renew+ uses AI (powered by Anthropic Claude) for goal planning, recipe scanning, and other features. AI-generated content is based on your inputs, may be inaccurate or incomplete, and does not constitute financial, tax, medical, or other professional advice. Always use your own judgement and verify AI suggestions before relying on them. How your data is handled when you use AI features is described in our <Link href="/renewplus/privacy" style={linkStyle}>Privacy Policy</Link>.
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
              You are granted a limited, personal, non-transferable licence to use the App on Apple-branded devices that you own or control, as permitted by the Usage Rules in Apple&apos;s Media Services Terms. You may not copy, modify, or distribute any part of the App without permission.
            </p>

            <h2 style={h2Style}>13. Apple App Store — Licensed Application Terms</h2>
            <p>
              The following terms apply because you obtained the App from the Apple App Store. They supplement, and where required prevail over, the rest of these Terms.
            </p>
            <ul style={listStyle}>
              <li><strong>Acknowledgement.</strong> These Terms are concluded between you and Crafted by Ellis only, and not with Apple. Crafted by Ellis, not Apple, is solely responsible for the App and its content.</li>
              <li><strong>Scope of licence.</strong> The licence granted to you for the App is a non-transferable licence to use the App on any Apple-branded products that you own or control, as permitted by the Usage Rules in Apple&apos;s Media Services Terms and Conditions.</li>
              <li><strong>Maintenance and support.</strong> Crafted by Ellis is solely responsible for providing any maintenance and support services for the App. Apple has no obligation to furnish any maintenance and support services with respect to the App.</li>
              <li><strong>Warranty.</strong> Crafted by Ellis is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the App to you; to the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever with respect to the App.</li>
              <li><strong>Product claims.</strong> Crafted by Ellis, not Apple, is responsible for addressing any claims by you or any third party relating to the App or your possession and/or use of the App, including: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation.</li>
              <li><strong>Intellectual property.</strong> In the event of any third-party claim that the App or your possession and use of the App infringes that third party&apos;s intellectual property rights, Crafted by Ellis, not Apple, will be solely responsible for the investigation, defence, settlement, and discharge of any such intellectual property infringement claim.</li>
              <li><strong>Legal compliance.</strong> You represent and warrant that you are not located in a country subject to a U.S. Government embargo, or designated by the U.S. Government as a &ldquo;terrorist supporting&rdquo; country, and that you are not listed on any U.S. Government list of prohibited or restricted parties.</li>
              <li><strong>Developer contact.</strong> Questions, complaints, or claims about the App should be directed to Crafted by Ellis at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>, New Zealand.</li>
              <li><strong>Third-party terms.</strong> You must comply with applicable third-party terms of agreement when using the App.</li>
              <li><strong>Third-party beneficiary.</strong> You acknowledge and agree that Apple, and Apple&apos;s subsidiaries, are third-party beneficiaries of these Terms, and that, upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary.</li>
            </ul>

            <h2 style={h2Style}>14. Disclaimers and Limitation of Liability</h2>
            <p>
              Renew+ is provided &ldquo;as is&rdquo; without warranties of any kind, except those that cannot be excluded by law. To the maximum extent permitted by law, Crafted by Ellis is not liable for indirect, incidental, or consequential damages arising from your use of Renew+. Subject to Section 15, our total aggregate liability is limited to the greater of the amount you paid us (or Apple for the App on our behalf) in the 12 months before the claim, or NZ$50.
            </p>

            <h2 style={h2Style}>15. Consumer Guarantees and Mandatory Rights</h2>
            <p>
              Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy that you have under applicable law and that cannot lawfully be excluded, restricted, or modified (your &ldquo;non-excludable rights&rdquo;). Where any provision of these Terms would otherwise do so, that provision applies only to the extent it does not affect your non-excludable rights.
            </p>
            <p>
              For consumers in <strong>New Zealand</strong>, our supply of the App and services comes with guarantees under the <strong>Consumer Guarantees Act 1993</strong>, and you are protected by the <strong>Fair Trading Act 1986</strong>. Where you acquire the App for personal, domestic, or household use, these guarantees cannot be contracted out of, and any limitation of liability in these Terms is subject to them. Where you acquire the App for the purposes of a business, you agree that the Consumer Guarantees Act does not apply to the extent permitted by section 43.
            </p>
            <p>
              These mandatory rights apply in addition to the regional rights described in Section 18.
            </p>

            <h2 style={h2Style}>16. Changes to the App and Terms</h2>
            <p>
              We may update these Terms at any time. When we make material changes, we will update the version date at the top of this page and prompt you to re-accept within the App before you can continue using it. We may also change, suspend, or discontinue features with reasonable notice where practicable.
            </p>

            <h2 style={h2Style}>17. Termination</h2>
            <p>
              We may suspend or terminate your account if you breach these Terms or if we are required to do so by law. You may delete your account at any time from Settings → Delete Account, which permanently erases all your data as described in the <Link href="/renewplus/privacy" style={linkStyle}>Privacy Policy</Link>. On termination, your licence to use the App ceases immediately.
            </p>

            <h2 style={h2Style}>18. Regional Consumer Rights</h2>
            <h3 style={h3Style}>Australia</h3>
            <p>
              Our services come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for other reasonably foreseeable loss or damage.
            </p>
            <h3 style={h3Style}>United Kingdom / European Union</h3>
            <p>
              Nothing in these Terms affects your statutory rights under applicable consumer protection legislation, including, in the UK, the Consumer Rights Act 2015.
            </p>
            <h3 style={h3Style}>United States (California)</h3>
            <p>
              These Terms do not waive any rights you have under the California Consumer Privacy Act or other applicable California consumer protection laws.
            </p>

            <h2 style={h2Style}>19. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of New Zealand, without regard to conflict-of-laws rules. Any disputes will be subject to the non-exclusive jurisdiction of the New Zealand courts. This choice of law and jurisdiction does not deprive you of the protection of any mandatory consumer law of the country in which you are habitually resident, and does not override Section 15. Please contact us at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a> before commencing any legal proceeding — most issues can be resolved quickly and informally.
            </p>

            <h2 style={h2Style}>20. Contact</h2>
            <p style={{ marginTop: "12px" }}>
              <strong>Crafted by Ellis</strong><br />
              General: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              Privacy: <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              Location: New Zealand
            </p>

            <div style={{ marginTop: "48px", padding: "24px", background: "var(--color-background-secondary)", borderRadius: "var(--radius-lg)", border: "1px solid var(--color-border)" }}>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-secondary)" }}>
                <strong>Plain English:</strong> Renew+ helps you track your own money — we never touch it. Apple handles billing and refunds. Tax figures and meal/wellness features are estimates and organisational tools, not professional advice — we&apos;re not a financial adviser, accountant, doctor, or dietitian. Your consumer rights under NZ law (and your local law) still apply no matter what these Terms say.
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
