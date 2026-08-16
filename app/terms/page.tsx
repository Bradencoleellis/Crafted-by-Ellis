import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Website Terms | Crafted by Ellis",
  description:
    "Terms for using craftedbyellis.com. Each app published by Crafted by Ellis has its own separate terms.",
};

/**
 * Site-level terms. These cover the website and nothing else.
 *
 * Crafted by Ellis is a catalogue: every app owns its own Terms and Privacy
 * Policy under its own route. This page used to also govern Renew+, which
 * duplicated /renewplus/terms and meant two documents could drift apart and
 * disagree about the same product. Anything app-specific belongs there now.
 */
export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal · Website"
      title="Website Terms"
      version="Last updated: 16 August 2026"
    >
      <p style={{ marginBottom: "32px" }}>
        These terms cover your use of <strong>craftedbyellis.com</strong> — this website only.
        Crafted by Ellis is a catalogue of independently published apps, and{" "}
        <strong>each app has its own separate terms and privacy policy</strong>. Installing or
        using an app is governed by that app&apos;s documents, not by this page.
      </p>

      <h2>1. Who we are</h2>
      <p>
        Crafted by Ellis is the trading name of Braden Cole Ellis, a sole trader based in Hamilton,
        New Zealand. &ldquo;We&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to that
        business throughout this page.
      </p>

      <h2>2. What this website is</h2>
      <p>
        This site exists to describe the apps we publish and to let you get in touch. It is
        informational. There are no accounts, no sign-in, and nothing to purchase here — anything
        you buy happens in the App Store, Google Play, or inside the app itself, under that
        store&apos;s terms and the app&apos;s own.
      </p>

      <h2>3. Each app has its own terms</h2>
      <p>
        Nothing on this page grants you a licence to any app, or sets the rules for using one. Those
        live with the app:
      </p>
      <ul>
        <li>
          Renew+ — <Link href="/renewplus/terms">Terms</Link> ·{" "}
          <Link href="/renewplus/privacy">Privacy Policy</Link>
        </li>
        <li>
          Crafted Co — <Link href="/craftedco/terms">Terms</Link> ·{" "}
          <Link href="/craftedco/privacy">Privacy Policy</Link>
        </li>
      </ul>
      <p>
        Where this page and an app&apos;s own terms disagree about that app,{" "}
        <strong>the app&apos;s terms apply.</strong>
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Attempt to gain unauthorised access to the site or any server it runs on</li>
        <li>Scrape, mirror or republish the site in a way that presents it as your own</li>
        <li>Use the site to distribute malware, or to send unlawful or abusive messages</li>
        <li>Interfere with the site&apos;s normal operation for other visitors</li>
      </ul>

      <h2>5. Intellectual property</h2>
      <p>
        The site&apos;s content, layout, code, and the &ldquo;Crafted by Ellis&rdquo;, &ldquo;Renew+&rdquo;
        and &ldquo;Crafted Co&rdquo; names and marks are owned by Crafted by Ellis. You may link to
        the site freely and quote short extracts with attribution. You may not copy the design or
        substantial parts of the content for your own commercial use without written permission.
      </p>

      <h2>6. Availability and accuracy</h2>
      <p>
        The site is provided &ldquo;as is&rdquo;. We do not guarantee it will always be available or
        error-free, and we may change or remove any part of it at any time. Descriptions of apps —
        including features that are planned, in build, or coming soon — are indicative and not a
        promise that a given feature will ship, or ship in a particular form.
      </p>

      <h2>7. Links to other sites</h2>
      <p>
        Where we link out — to the App Store, Google Play, or a third party&apos;s privacy policy —
        we do not control those sites and are not responsible for their content or their handling of
        your information.
      </p>

      <h2>8. Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any indirect or consequential loss
        arising from your use of this website. Nothing in these terms limits any rights you have
        under the New Zealand Consumer Guarantees Act 1993 or the Fair Trading Act 1986 where those
        Acts apply to you.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of New Zealand, and the New Zealand courts have
        non-exclusive jurisdiction over any dispute arising from them.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these terms. The date at the top of this page is the date of the current
        version. Continuing to use the site after a change means you accept the updated terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this page: <a href="mailto:braden@craftedbyellis.com">braden@craftedbyellis.com</a>.
        For a question about a specific app, use the support address in that app&apos;s own terms.
      </p>

      <div className="callout-closing">
        <p style={{ margin: 0 }}>
          <strong>Plain English:</strong> This page is about the website, not the apps. There are no
          accounts here and nothing to buy. Don&apos;t attack or copy the site. Each app has its own
          terms and privacy policy, and those are the ones that matter once you install something.
          New Zealand law applies.
        </p>
      </div>
    </LegalPage>
  );
}
