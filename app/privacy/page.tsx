export const metadata = {
  title: "Privacy Policy | Crafted by Ellis",
  description: "Privacy policy for Crafted by Ellis and Renew+.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--color-beige)",
        padding: "80px 0 40px",
      }}>
        <div className="container-page" style={{ textAlign: "center", maxWidth: "800px" }}>
          <p style={labelStyle}>Legal</p>
          <h1 style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: "15px",
            color: "var(--color-text-tertiary)",
          }}>
            Last updated: May 17, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 0 96px", background: "var(--color-background)" }}>
        <div className="container-page" style={{ maxWidth: "800px" }}>
          <div style={contentStyle}>
            <p style={{ marginBottom: "32px" }}>
              At Crafted by Ellis (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website (craftedbyellis.com) and our app, Renew+.
            </p>

            <h2 style={h2Style}>1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <h3 style={h3Style}>Account Information</h3>
            <ul style={listStyle}>
              <li>Name and email address (when you create an account)</li>
              <li>Profile information you choose to provide</li>
              <li>Authentication data (via Firebase Authentication)</li>
            </ul>

            <h3 style={h3Style}>App Usage Data</h3>
            <ul style={listStyle}>
              <li>Goals, journal entries, recipes, financial data you create</li>
              <li>Meal plans, shopping lists, and pantry items</li>
              <li>App preferences and settings</li>
              <li>Subscription tier and purchase history</li>
            </ul>

            <h3 style={h3Style}>Technical Information</h3>
            <ul style={listStyle}>
              <li>Device type, OS version, app version</li>
              <li>Anonymized analytics (via Firebase Analytics)</li>
              <li>Crash reports (to fix bugs and improve stability)</li>
            </ul>

            <h2 style={h2Style}>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul style={listStyle}>
              <li>Provide and maintain the Renew+ app and services</li>
              <li>Personalize your experience and store your data</li>
              <li>Process subscription payments (via Apple App Store)</li>
              <li>Send important service updates (rarely, only when essential)</li>
              <li>Improve our products through anonymized analytics</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>

            <h2 style={h2Style}>3. Data Storage and Security</h2>
            <p>
              Your data is stored securely using Firebase (Google Cloud) infrastructure. We implement industry-standard security measures including:
            </p>
            <ul style={listStyle}>
              <li>Encrypted data transmission (HTTPS/TLS)</li>
              <li>Encrypted data storage</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
            </ul>
            <p>
              While we take reasonable steps to protect your data, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2 style={h2Style}>4. Data Sharing</h2>
            <p>We do not sell your personal data. Period.</p>
            <p>We may share data only in these limited cases:</p>
            <ul style={listStyle}>
              <li><strong>Service providers:</strong> Firebase (Google) for backend infrastructure, Apple for App Store payments</li>
              <li><strong>Legal requirements:</strong> If required by law or to protect rights and safety</li>
              <li><strong>With your consent:</strong> If you explicitly opt-in to share with partners or family members</li>
            </ul>

            <h2 style={h2Style}>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul style={listStyle}>
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Export your data in a standard format</li>
              <li><strong>Withdraw consent:</strong> Opt out of analytics or marketing</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a>.</p>

            <h2 style={h2Style}>6. Children&apos;s Privacy</h2>
            <p>
              Renew+ is not intended for children under 13. We do not knowingly collect data from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
            </p>

            <h2 style={h2Style}>7. Third-Party Services</h2>
            <p>Renew+ uses the following third-party services:</p>
            <ul style={listStyle}>
              <li><strong>Firebase (Google):</strong> Backend, authentication, analytics — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
              <li><strong>Apple App Store:</strong> App distribution and payments — <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
              <li><strong>Anthropic Claude:</strong> AI-powered goal planning and recipe scanning — <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Privacy Policy</a></li>
            </ul>

            <h2 style={h2Style}>8. Cookies and Tracking</h2>
            <p>
              Our website (craftedbyellis.com) uses minimal cookies for essential functionality. We do not use tracking cookies for advertising purposes.
            </p>

            <h2 style={h2Style}>9. International Data Transfers</h2>
            <p>
              Your data may be processed in countries where Firebase operates servers, including the United States. By using our services, you consent to this transfer.
            </p>

            <h2 style={h2Style}>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We&apos;ll notify you of significant changes via the app or email. Continued use of the service after changes means you accept the updated policy.
            </p>

            <h2 style={h2Style}>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p style={{ marginTop: "12px" }}>
              <strong>Email:</strong> <a href="mailto:braden@craftedbyellis.com" style={linkStyle}>braden@craftedbyellis.com</a><br />
              <strong>Company:</strong> Crafted by Ellis<br />
              <strong>Location:</strong> New Zealand
            </p>

            <div style={{
              marginTop: "48px",
              padding: "24px",
              background: "var(--color-background-secondary)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
            }}>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--color-text-secondary)" }}>
                <strong>Plain English:</strong> We collect what we need to make the app work, we keep it secure, we don&apos;t sell it, and you can ask us to delete it anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--rust)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "12px",
};

const contentStyle: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.7,
  color: "var(--color-text-primary)",
};

const h2Style: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  marginTop: "40px",
  marginBottom: "16px",
  letterSpacing: "-0.01em",
};

const h3Style: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
  marginTop: "20px",
  marginBottom: "12px",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "24px",
  marginBottom: "16px",
};

const linkStyle: React.CSSProperties = {
  color: "var(--rust)",
  textDecoration: "underline",
};
