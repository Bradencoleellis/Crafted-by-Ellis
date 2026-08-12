import type { ReactNode } from "react";
import PageShell from "./PageShell";
import Reveal from "./Reveal";

type LegalPageProps = {
  /** Small label above the title, e.g. "Legal · Renew+". */
  eyebrow: string;
  title: string;
  /** Version and effective dates, shown under the title. */
  version: string;
  /**
   * Renew+ documents scope to the app: warm ground, orange focus ring and
   * selection, and the app's own footer. Studio documents stay neutral.
   */
  app?: "renew";
  children: ReactNode;
};

const RENEW_FOOTER_LINKS = [
  { label: "Privacy", href: "/renewplus/privacy" },
  { label: "Terms", href: "/renewplus/terms" },
  { label: "Renew+", href: "/renewplus" },
  { label: "All apps", href: "/" },
];

/**
 * The wrapper every policy document shares: the studio shell, a title block,
 * and a `.prose` column. All typographic rhythm inside `children` comes from
 * that class — the documents themselves carry no styling of their own, which is
 * what stops four long files drifting apart from each other over time.
 */
export default function LegalPage({ eyebrow, title, version, app, children }: LegalPageProps) {
  const isRenew = app === "renew";

  return (
    <PageShell
      accent={isRenew ? "renew" : undefined}
      // The back glyph is the app-page treatment: it means "up out of this app,
      // to the studio". A studio-level document is already in the studio, so it
      // keeps the plain wordmark that every other studio page uses.
      back={isRenew}
      backHref={isRenew ? "/renewplus" : "/"}
      nav={isRenew ? [{ label: "Renew+", href: "/renewplus" }, { label: "Support", href: "/contact" }] : undefined}
      footerEyebrow={isRenew ? "Renew+ support" : undefined}
      footerEmail={isRenew ? "RenewPlus@craftedbyellis.com" : undefined}
      footerLinks={isRenew ? RENEW_FOOTER_LINKS : undefined}
      footerBaseline={
        isRenew
          ? "© 2026 Crafted by Ellis · Renew+ is a Crafted by Ellis app"
          : undefined
      }
    >
      <section style={{ padding: "clamp(40px, 6vw, 72px) var(--gutter) clamp(32px, 4vw, 48px)" }}>
        <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(18px, 2.4vw, 26px)" }}>
          {eyebrow}
        </Reveal>
        <Reveal as="h1" index={2} className="display" style={{ marginBottom: "16px" }}>
          {title}
        </Reveal>
        <Reveal as="p" index={3} style={{ fontSize: "13.5px", lineHeight: 1.55, color: "var(--ink-faint)" }}>
          {version}
        </Reveal>
      </section>

      <section style={{ padding: "0 var(--gutter) clamp(60px, 8vw, 96px)" }}>
        <div className="prose">{children}</div>
      </section>
    </PageShell>
  );
}
