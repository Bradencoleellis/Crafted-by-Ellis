import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy | Crafted Co",
  description: "Privacy policy for Crafted Co, a Crafted by Ellis app.",
};

/**
 * Crafted Co privacy policy — DRAFT, pre-launch.
 *
 * Crafted Co is a B2B tool, which makes it materially different from Renew+:
 * the builder using it enters personal information about *their clients*, so
 * this document has to deal with third-party data the user supplies, not just
 * the user's own. That section is the one to get reviewed properly.
 *
 * Anything that depends on shipped infrastructure — the processor list,
 * retention periods, data residency — is marked as not-yet-final rather than
 * guessed. Fill from the real implementation before launch.
 */
export default function CraftedCoPrivacyPage() {
  return (
    <LegalPage
      app="co"
      eyebrow="Legal · Crafted Co"
      title="Privacy Policy"
      version="Draft · 16 August 2026 · Crafted Co is in development"
    >
      <div className="callout">
        <p style={{ margin: 0 }}>
          <strong>Crafted Co has not launched.</strong> This policy is published early so the intent
          is visible while the product is being built. The processor list, retention periods and
          data location will be confirmed from the shipped system, and the whole document reviewed,
          before anyone can sign up.
        </p>
      </div>

      <p style={{ marginBottom: "32px" }}>
        This policy covers the <strong>Crafted Co</strong> app, published by Crafted by Ellis. The
        website that describes it has its own, much shorter,{" "}
        <Link href="/privacy">website privacy policy</Link>.
      </p>

      <h2>1. Two kinds of information</h2>
      <p>Crafted Co is a business tool, so there are two distinct groups of people involved:</p>
      <ul>
        <li>
          <strong>You</strong> — the builder or trade business using the app. We are responsible for
          your information as described below
        </li>
        <li>
          <strong>Your clients</strong> — the homeowners and customers whose names, addresses and job
          details you enter. That information is <em>yours</em>; we hold and process it on your
          behalf and under your instructions
        </li>
      </ul>
      <p>
        In data-protection terms you are the controller of your clients&apos; information and we are
        your processor. Practically: we do not contact your clients, we do not market to them, and we
        do not use their details for anything except running the service for you.
      </p>

      <h2>2. What we collect about you</h2>
      <ul>
        <li>
          <strong>Account details</strong> — name, email, business name, and your password in hashed
          form
        </li>
        <li>
          <strong>Your content</strong> — quotes, jobs, site photos, invoices, notes, and anything
          else you put into the app
        </li>
        <li>
          <strong>Technical data</strong> — device and app-version information, and error reports
          when something crashes, so faults can be fixed
        </li>
      </ul>

      <h2>3. What we do with it</h2>
      <ul>
        <li>Run the service: store your work, sync it across your devices, show it to your team</li>
        <li>Support you when you ask for help</li>
        <li>Diagnose faults and improve reliability</li>
        <li>Send service messages — billing, security, and material changes to this policy</li>
      </ul>
      <p>
        We do not sell your data, we do not sell your clients&apos; data, and we do not use either to
        train AI models.
      </p>

      <h2>4. AI processing</h2>
      <p>
        Where you use an AI feature, the content needed for that request is sent to an AI provider,
        processed, and returned. It is not used to train the provider&apos;s models. The specific
        providers and the regions they process in will be listed here before launch.
      </p>

      <h2>5. Who else touches your data</h2>
      <p>
        We use third-party infrastructure to run the service — hosting, database, file storage,
        crash reporting and payment processing. The final list, and each provider&apos;s privacy
        policy, will be published here before launch. Every one of them is a processor acting on our
        instructions; none of them get your data for their own purposes.
      </p>
      <p>
        We will also disclose information where the law requires it, and we will tell you when we are
        permitted to.
      </p>

      <h2>6. Where your data lives</h2>
      <p>
        Data location and any overseas transfers will be confirmed before launch, along with the
        safeguards that apply under Information Privacy Principle 12 of the Privacy Act 2020.
      </p>

      <h2>7. How long we keep it</h2>
      <p>
        While your account is open, we keep your content so you can use it. After you close your
        account, we delete it within a defined period that will be stated here before launch, except
        where we must keep records longer for tax or legal reasons. You can export your data at any
        time while the account is active.
      </p>

      <h2>8. Security</h2>
      <p>
        Data is encrypted in transit and at rest, access is restricted, and each organisation&apos;s
        data is isolated from every other organisation&apos;s. No system is perfectly secure, so if a
        breach affects you we will notify you and the Office of the Privacy Commissioner as the
        Privacy Act 2020 requires.
      </p>

      <h2>9. Your rights</h2>
      <p>
        Under the Privacy Act 2020 you can ask for a copy of the personal information we hold about
        you, ask us to correct it, and ask us to delete it. Email{" "}
        <a href="mailto:braden@craftedbyellis.com">braden@craftedbyellis.com</a> and we will respond
        within 20 working days.
      </p>
      <p>
        If one of <em>your clients</em> asks us for their information, we will refer them to you —
        it is your record, and you are the controller of it.
      </p>
      <p>
        If you are in the UK or EU, the equivalent UK/EU GDPR rights apply, including the right to
        complain to your supervisory authority.
      </p>

      <h2>10. Children</h2>
      <p>
        Crafted Co is a business tool and is not intended for anyone under 18. We do not knowingly
        collect information from children.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update this policy. Material changes will be notified in the app before they take
        effect, and the date at the top of this page will change.
      </p>

      <h2>12. Contact</h2>
      <p>
        Privacy questions:{" "}
        <a href="mailto:braden@craftedbyellis.com">braden@craftedbyellis.com</a>. Crafted by Ellis is
        the trading name of Braden Cole Ellis, a sole trader based in Hamilton, New Zealand.
      </p>

      <div className="callout-closing">
        <p style={{ margin: 0 }}>
          <strong>Plain English:</strong> Your jobs, quotes and client details belong to you. We hold
          them so the app works, and that&apos;s all — we don&apos;t sell them, we don&apos;t market
          to your clients, and we don&apos;t train AI on your work. You can export or delete your
          data. If a client of yours wants their information, we&apos;ll point them at you, because
          it&apos;s your record.
        </p>
      </div>
    </LegalPage>
  );
}
