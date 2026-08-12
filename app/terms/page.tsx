import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service | Crafted by Ellis",
  description: "Terms of service for Crafted by Ellis and Renew+.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      version="Last updated: 17 May 2026"
    >

            <p style={{ marginBottom: "32px" }}>
              Welcome to Crafted by Ellis. These Terms of Service (&quot;Terms&quot;) govern your use of our website (craftedbyellis.com) and our applications, including Renew+ (collectively, the &quot;Service&quot;). By using our Service, you agree to these Terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our Service, you agree to be bound by these Terms. If you don&apos;t agree, please don&apos;t use the Service.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use Renew+. If you&apos;re under 18, you must have permission from a parent or legal guardian.
            </p>

            <h2>3. Your Account</h2>
            <p>To use most features, you need to create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current information</li>
              <li>Keep your password secure</li>
              <li>Notify us of any unauthorized access</li>
              <li>Be responsible for all activity on your account</li>
            </ul>

            <h2>4. Subscription Plans</h2>
            <p>Renew+ offers three subscription tiers:</p>
            <ul>
              <li><strong>Silver:</strong> Free tier with limited features</li>
              <li><strong>Gold:</strong> Premium tier with expanded features (paid subscription)</li>
              <li><strong>Platinum:</strong> Top tier with all features (paid subscription)</li>
            </ul>
            <p>
              Subscriptions are processed through the Apple App Store. Pricing is shown in the app and may vary by region. Subscriptions auto-renew unless cancelled.
            </p>

            <h2>5. Refunds and Cancellation</h2>
            <p>
              Subscription refunds are handled by Apple. To request a refund, use the App Store&apos;s refund process. You can cancel your subscription anytime through your Apple ID settings; you&apos;ll retain premium access until the end of your current billing period.
            </p>

            <h2>6. Acceptable Use</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Use the Service for illegal purposes</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Post content that is illegal, harmful, or violates rights of others</li>
              <li>Attempt to hack, reverse-engineer, or disrupt the Service</li>
              <li>Use automated tools (bots, scrapers) without permission</li>
              <li>Share your account with others</li>
              <li>Impersonate others</li>
            </ul>

            <h2>7. User Content</h2>
            <p>
              You retain ownership of content you create (goals, journal entries, recipes, etc.). By using the Service, you grant us a limited license to store, display, and process your content as needed to provide the Service.
            </p>
            <p>
              If you share content publicly (e.g., in the community feed), you grant us a non-exclusive license to display that content within the Service. You can delete shared content anytime.
            </p>

            <h2>8. Intellectual Property</h2>
            <p>
              All rights, title, and interest in the Service (including software, designs, logos, and the &quot;Crafted by Ellis&quot; and &quot;Renew+&quot; brands) are owned by Crafted by Ellis. You may not copy, modify, or distribute our IP without permission.
            </p>

            <h2>9. AI Features</h2>
            <p>
              Renew+ uses AI (powered by Anthropic Claude) for features like goal planning and recipe scanning. AI outputs are generated based on your inputs and may not always be accurate. Use AI-generated content at your own discretion.
            </p>

            <h2>10. Service Availability</h2>
            <p>
              We strive to keep the Service available 24/7, but we don&apos;t guarantee uninterrupted access. We may temporarily suspend the Service for maintenance, updates, or security reasons.
            </p>

            <h2>11. Disclaimers</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind. We make no guarantees about results from using Renew+ (e.g., achieving goals, financial outcomes).
            </p>
            <p>
              <strong>Renew+ is not a substitute for professional advice.</strong> It is a personal tool. Consult a financial advisor for financial decisions, a healthcare professional for health matters, and a tax professional for tax advice. The tax calculations in the app are estimates only.
            </p>

            <h2>12. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Crafted by Ellis is not liable for indirect, incidental, or consequential damages from your use of the Service. Our total liability is limited to the amount you paid us in the last 12 months.
            </p>

            <h2>13. Termination</h2>
            <p>
              You can stop using the Service anytime. We may suspend or terminate your account if you violate these Terms. Upon termination, your data may be deleted (you can request a data export beforehand).
            </p>

            <h2>14. Changes to Terms</h2>
            <p>
              We may update these Terms occasionally. We&apos;ll notify you of significant changes. Continued use of the Service means you accept the updated Terms.
            </p>

            <h2>15. Governing Law</h2>
            <p>
              These Terms are governed by the laws of New Zealand. Any disputes will be resolved in New Zealand courts.
            </p>

            <h2>16. Contact Us</h2>
            <p>
              Questions about these Terms? Get in touch:
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Email:</strong> <a href="mailto:RenewPlus@craftedbyellis.com">RenewPlus@craftedbyellis.com</a><br />
              <strong>Company:</strong> Crafted by Ellis<br />
              <strong>Location:</strong> New Zealand
            </p>

            <div className="callout-closing">
              <p style={{ margin: 0 }}>
                <strong>Plain English:</strong> Be cool, don&apos;t abuse the service, pay for what you subscribe to, and we&apos;ll do our best to provide a great product. We&apos;re not lawyers or financial advisors. Use the app as a tool, not a replacement for professional advice.
              </p>
            </div>
    </LegalPage>
  );
}
