import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Crafted by Ellis",
  description: "Privacy policy for Crafted by Ellis and Renew+.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      version="Last updated: 17 May 2026"
    >

            <p style={{ marginBottom: "32px" }}>
              At Crafted by Ellis (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website (craftedbyellis.com) and our app, Renew+.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <h3>Account Information</h3>
            <ul>
              <li>Name and email address (when you create an account)</li>
              <li>Profile information you choose to provide</li>
              <li>Authentication data (via Firebase Authentication)</li>
            </ul>

            <h3>App Usage Data</h3>
            <ul>
              <li>Goals, journal entries, recipes, financial data you create</li>
              <li>Meal plans, shopping lists, and pantry items</li>
              <li>App preferences and settings</li>
              <li>Subscription tier and purchase history</li>
            </ul>

            <h3>Technical Information</h3>
            <ul>
              <li>Device type, OS version, app version</li>
              <li>Anonymized analytics (via Firebase Analytics)</li>
              <li>Crash reports (to fix bugs and improve stability)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and maintain the Renew+ app and services</li>
              <li>Personalize your experience and store your data</li>
              <li>Process subscription payments (via Apple App Store)</li>
              <li>Send important service updates (rarely, only when essential)</li>
              <li>Improve our products through anonymized analytics</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>

            <h2>3. Data Storage and Security</h2>
            <p>
              Your data is stored securely using Firebase (Google Cloud) infrastructure. We implement industry-standard security measures including:
            </p>
            <ul>
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Encrypted data storage</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
            </ul>
            <p>
              While we take reasonable steps to protect your data, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>4. Data Sharing</h2>
            <p>We do not sell your personal data. Period.</p>
            <p>We may share data only in these limited cases:</p>
            <ul>
              <li><strong>Service providers:</strong> Firebase (Google) for backend infrastructure, Apple for App Store payments</li>
              <li><strong>Legal requirements:</strong> If required by law or to protect rights and safety</li>
              <li><strong>With your consent:</strong> If you explicitly opt-in to share with partners or family members</li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Export your data in a standard format</li>
              <li><strong>Withdraw consent:</strong> Opt out of analytics or marketing</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:RenewPlusPrivacy@craftedbyellis.com">RenewPlusPrivacy@craftedbyellis.com</a>.</p>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              Renew+ is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
            </p>

            <h2>7. Third-Party Services</h2>
            <p>Renew+ uses the following third-party services:</p>
            <ul>
              <li><strong>Firebase (Google):</strong> Backend, authentication, analytics. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Apple App Store:</strong> App distribution and payments. <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Anthropic Claude:</strong> AI-powered goal planning and recipe scanning. <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>

            <h2>8. Cookies and Tracking</h2>
            <p>
              Our website (craftedbyellis.com) uses minimal cookies for essential functionality. We do not use tracking cookies for advertising purposes.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your data may be processed in countries where Firebase operates servers, including the United States. By using our services, you consent to this transfer.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We&apos;ll notify you of significant changes via the app or email. Continued use of the service after changes means you accept the updated policy.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Email:</strong> <a href="mailto:RenewPlusPrivacy@craftedbyellis.com">RenewPlusPrivacy@craftedbyellis.com</a><br />
              <strong>Company:</strong> Crafted by Ellis<br />
              <strong>Location:</strong> New Zealand
            </p>

            <div className="callout-closing">
              <p style={{ margin: 0 }}>
                <strong>Plain English:</strong> We collect what we need to make the app work, we keep it secure, we don&apos;t sell it, and you can ask us to delete it anytime.
              </p>
            </div>
    </LegalPage>
  );
}
