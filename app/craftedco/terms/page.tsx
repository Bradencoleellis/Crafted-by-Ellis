import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service | Crafted Co",
  description: "Terms of service for Crafted Co, a Crafted by Ellis app.",
};

/**
 * Crafted Co terms — DRAFT, pre-launch.
 *
 * The product is in build and its commercial model is not settled, so anything
 * that depends on shipped behaviour (pricing, tiers, data retention periods,
 * processor list) is deliberately described as not-yet-final rather than
 * invented. Fill these in from the real implementation before launch, and put
 * the document through the same legal review Renew+ had.
 */
export default function CraftedCoTermsPage() {
  return (
    <LegalPage
      app="co"
      eyebrow="Legal · Crafted Co"
      title="Terms of Service"
      version="Draft · 16 August 2026 · Crafted Co is in development"
    >
      <div className="callout">
        <p style={{ margin: 0 }}>
          <strong>Crafted Co has not launched.</strong> These terms are published early so the
          intent is visible while the product is being built. They will be finalised — and reviewed
          — before anyone can sign up, and the version date above will change when that happens.
        </p>
      </div>

      <p style={{ marginBottom: "32px" }}>
        These terms govern your use of <strong>Crafted Co</strong>, a job, quoting and invoicing tool
        for small building and trade businesses, published by Crafted by Ellis. They cover the app
        only. The website that describes it has its own <Link href="/terms">website terms</Link>.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Crafted Co is published by Crafted by Ellis, the trading name of Braden Cole Ellis, a sole
        trader based in Hamilton, New Zealand.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        Crafted Co is a business tool. You must be at least 18 years old and using it for a business
        purpose. If you accept these terms on behalf of a company, you confirm you are authorised to
        bind that company.
      </p>

      <h2>3. Your account and your team</h2>
      <ul>
        <li>You are responsible for keeping your login credentials secure</li>
        <li>
          If you invite staff or subcontractors to your organisation, you are responsible for what
          they do in it, and for removing access when someone leaves
        </li>
        <li>You must give accurate information when you register</li>
      </ul>

      <h2>4. Your data is yours</h2>
      <p>
        Quotes, jobs, photos, invoices, client records and any other content you put into Crafted Co
        remain yours. We do not claim ownership of it, we do not sell it, and we do not use it to
        train AI models.
      </p>
      <p>
        You grant us only the licence needed to run the service for you: to store your content,
        process it, back it up, and display it to you and the people you have given access to.
      </p>

      <h2>5. Exporting and leaving</h2>
      <p>
        You can export your data while your account is active. If you close your account we will
        delete your content within a defined period, which will be stated here before launch, except
        where we are legally required to retain records for longer.
      </p>

      <h2>6. Pricing and billing</h2>
      <p>
        Pricing is not finalised. When it is, this section will state the plans, what each includes,
        the billing cycle, how to cancel, and the refund position. No charge will be made without
        that being published first and agreed by you at sign-up.
      </p>

      <h2>7. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use Crafted Co for anything unlawful, or to store content you have no right to store</li>
        <li>Attempt to access another organisation&apos;s data</li>
        <li>Probe, scan or stress-test the service without written permission</li>
        <li>Resell or white-label the service without written permission</li>
      </ul>

      <h2>8. Professional and regulatory responsibility</h2>
      <p>
        Crafted Co is a record-keeping and organisational tool. It is <strong>not</strong> a
        substitute for professional judgement or for meeting your legal obligations.
      </p>
      <ul>
        <li>
          Quotes, measurements, cost estimates and margins the app produces are calculations based on
          what you enter. Checking them is your responsibility
        </li>
        <li>
          Building consent, Licensed Building Practitioner obligations, Health and Safety at Work Act
          duties, and record-keeping requirements remain yours. Features that help you track them do
          not discharge them
        </li>
        <li>
          Figures relating to GST or income are estimates for your own planning. They are not tax
          advice — use an accountant
        </li>
      </ul>

      <h2>9. AI features</h2>
      <p>
        Where Crafted Co uses AI to draft, summarise or extract information, the output is generated
        from what you supply and can be wrong. Review anything AI-generated before you send it to a
        client or rely on it. The specific AI providers used will be listed in the{" "}
        <Link href="/craftedco/privacy">Privacy Policy</Link> before launch.
      </p>

      <h2>10. Availability</h2>
      <p>
        We aim to keep the service available but do not guarantee uninterrupted access. Maintenance,
        outages and third-party failures happen. Keep your own copies of anything you cannot afford
        to lose.
      </p>

      <h2>11. Disclaimers and liability</h2>
      <p>
        The service is provided &ldquo;as is&rdquo;. To the extent permitted by law, our total
        liability to you for any claim is limited to the amount you paid us in the twelve months
        before the claim, and we are not liable for indirect or consequential loss, including lost
        profits or lost business.
      </p>
      <p>
        Where you use Crafted Co as a consumer rather than in business, nothing here limits your
        rights under the New Zealand Consumer Guarantees Act 1993.
      </p>

      <h2>12. Suspension and termination</h2>
      <p>
        You can stop using the service at any time. We may suspend or end access if these terms are
        breached, giving reasonable notice and an opportunity to export your data unless the breach
        makes that inappropriate.
      </p>

      <h2>13. Changes</h2>
      <p>
        We may update these terms. Material changes will be notified in the app before they take
        effect, and the date at the top of this page will change.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These terms are governed by the laws of New Zealand, and the New Zealand courts have
        non-exclusive jurisdiction.
      </p>

      <h2>15. Contact</h2>
      <p>
        <a href="mailto:braden@craftedbyellis.com">braden@craftedbyellis.com</a>
      </p>

      <div className="callout-closing">
        <p style={{ margin: 0 }}>
          <strong>Plain English:</strong> Crafted Co keeps your jobs, quotes and invoices in order.
          Your data stays yours, we don&apos;t sell it and we don&apos;t train AI on it. It helps you
          track consents, LBP records and GST — it doesn&apos;t make you compliant, and it isn&apos;t
          tax advice. Check anything the app calculates before you send it to a client. Pricing
          isn&apos;t set yet, and nothing gets charged without being published first.
        </p>
      </div>
    </LegalPage>
  );
}
