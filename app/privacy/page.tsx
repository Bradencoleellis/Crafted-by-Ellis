import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Website Privacy | Crafted by Ellis",
  description:
    "How craftedbyellis.com handles your information. Each app published by Crafted by Ellis has its own separate privacy policy.",
};

/**
 * Site-level privacy policy. Covers the website and nothing else.
 *
 * Deliberately short, because the site genuinely does very little: no accounts,
 * no analytics, no tracking cookies, no third-party scripts. Claiming more
 * collection than actually happens is its own kind of inaccuracy, so this
 * describes the real behaviour rather than a defensive superset of it.
 *
 * The previous version of this page described Firebase Analytics and account
 * data — that was Renew+'s behaviour, not the website's, and it now lives at
 * /renewplus/privacy where it belongs.
 */
export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal · Website"
      title="Website Privacy"
      version="Last updated: 16 August 2026"
    >
      <p style={{ marginBottom: "32px" }}>
        This policy covers <strong>craftedbyellis.com</strong> — this website only. Crafted by Ellis
        is a catalogue of independently published apps, and{" "}
        <strong>each app has its own separate privacy policy</strong> describing what that app
        collects. This page does not describe any app.
      </p>

      <h2>1. The short version</h2>
      <p>
        This website does not collect personal information about you. There are no accounts, no
        sign-in, no advertising, no analytics, no tracking cookies, and no third-party tracking
        scripts. Nothing you do here is used to build a profile of you.
      </p>

      <h2>2. What the website collects</h2>
      <p>
        <strong>Nothing, by design.</strong> Browsing these pages does not create a record tied to
        you. We do not run Google Analytics or any equivalent, and we do not set cookies for
        analytics or advertising.
      </p>
      <p>
        Like any site on the internet, the server that delivers these pages processes your IP
        address and browser user-agent in order to send you the page. That is a technical necessity
        of the web, handled by our hosting provider, and we do not combine it with anything else or
        use it to identify you.
      </p>

      <h2>3. Contacting us</h2>
      <p>
        If you email us, we receive whatever you put in that email — typically your name, your email
        address, and your message. We use it only to reply and to keep a record of the conversation.
        We do not add you to a mailing list, and we do not pass it to anyone else.
      </p>
      <p>
        You can email us directly at{" "}
        <a href="mailto:braden@craftedbyellis.com">braden@craftedbyellis.com</a> rather than using a
        form, if you prefer.
      </p>

      <h2>4. Each app has its own policy</h2>
      <p>
        Apps do collect data — accounts, your content, and so on — and each one documents that
        separately:
      </p>
      <ul>
        <li>
          Renew+ — <Link href="/renewplus/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/renewplus/terms">Terms</Link>
        </li>
        <li>
          Crafted Co — <Link href="/craftedco/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/craftedco/terms">Terms</Link>
        </li>
      </ul>
      <p>
        Installing an app is governed by that app&apos;s policy. Nothing on this page limits or
        overrides it.
      </p>

      <h2>5. Your rights</h2>
      <p>
        Under the New Zealand Privacy Act 2020 you can ask what personal information we hold about
        you, ask us to correct it, and ask us to delete it. For this website that will usually be
        nothing beyond an email thread, if you have written to us. To make a request, email{" "}
        <a href="mailto:braden@craftedbyellis.com">braden@craftedbyellis.com</a>.
      </p>
      <p>
        If you are in the UK or EU, the equivalent rights under UK/EU GDPR apply, including the
        right to complain to your local supervisory authority.
      </p>

      <h2>6. Children</h2>
      <p>
        This website is not directed at children, and it does not knowingly collect information from
        anyone. Age requirements for the apps are set out in each app&apos;s own documents.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update this policy. The date at the top of this page is the date of the current
        version. If the website ever starts collecting something — analytics, for instance — this
        page will say so before that happens.
      </p>

      <h2>8. Contact</h2>
      <p>
        Privacy questions about this website:{" "}
        <a href="mailto:braden@craftedbyellis.com">braden@craftedbyellis.com</a>. Crafted by Ellis is
        the trading name of Braden Cole Ellis, a sole trader based in Hamilton, New Zealand.
      </p>

      <div className="callout-closing">
        <p style={{ margin: 0 }}>
          <strong>Plain English:</strong> This website doesn&apos;t track you. No accounts, no
          analytics, no advertising cookies. If you email us we read your email and reply, and
          that&apos;s it. The apps are different — each one has its own privacy policy, and those
          are the ones to read before you install something.
        </p>
      </div>
    </LegalPage>
  );
}
