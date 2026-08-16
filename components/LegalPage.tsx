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
   * An app's documents scope to that app: its own ground, focus ring and
   * selection, and its own footer. Studio documents stay neutral.
   *
   * This is the catalogue model in one prop — every app owns its own Terms and
   * Privacy Policy, and the site-level pair covers only the website. Adding an
   * app means adding a key here, not branching inside each document.
   */
  app?: AppScope;
  children: ReactNode;
};

type AppScope = "renew" | "co";

type AppChrome = {
  /** Where the back glyph goes: up out of this app, to its landing page. */
  home: string;
  label: string;
  supportEmail: string;
  footerEyebrow: string;
  footerBaseline: string;
  footerLinks: Array<{ label: string; href: string }>;
};

const APPS: Record<AppScope, AppChrome> = {
  renew: {
    home: "/renewplus",
    label: "Renew+",
    supportEmail: "RenewPlus@craftedbyellis.com",
    footerEyebrow: "Renew+ support",
    footerBaseline: "© 2026 Crafted by Ellis · Renew+ is a Crafted by Ellis app",
    footerLinks: [
      { label: "Privacy", href: "/renewplus/privacy" },
      { label: "Terms", href: "/renewplus/terms" },
      { label: "Renew+", href: "/renewplus" },
      { label: "All apps", href: "/" },
    ],
  },
  co: {
    home: "/craftedco",
    label: "Crafted Co",
    supportEmail: "braden@craftedbyellis.com",
    footerEyebrow: "Crafted Co support",
    footerBaseline: "© 2026 Crafted by Ellis · Crafted Co is a Crafted by Ellis app",
    footerLinks: [
      { label: "Privacy", href: "/craftedco/privacy" },
      { label: "Terms", href: "/craftedco/terms" },
      { label: "Crafted Co", href: "/craftedco" },
      { label: "All apps", href: "/" },
    ],
  },
};

/**
 * The wrapper every policy document shares: the studio shell, a title block,
 * and a `.prose` column. All typographic rhythm inside `children` comes from
 * that class — the documents themselves carry no styling of their own, which is
 * what stops four long files drifting apart from each other over time.
 */
export default function LegalPage({ eyebrow, title, version, app, children }: LegalPageProps) {
  const chrome = app ? APPS[app] : undefined;

  return (
    <PageShell
      // Only Renew+ repaints the ground today. Crafted Co keeps the neutral
      // studio shell until its accent ships as a PageShell scope — borrowing
      // the orange one would put a Renew+ page frame around a Crafted Co
      // document, which is worse than staying neutral.
      accent={app === "renew" ? "renew" : undefined}
      // The back glyph is the app-page treatment: it means "up out of this app,
      // to the studio". A studio-level document is already in the studio, so it
      // keeps the plain wordmark that every other studio page uses.
      back={!!chrome}
      backHref={chrome?.home ?? "/"}
      nav={
        chrome
          ? [{ label: chrome.label, href: chrome.home }, { label: "Support", href: "/contact" }]
          : undefined
      }
      footerEyebrow={chrome?.footerEyebrow}
      footerEmail={chrome?.supportEmail}
      footerLinks={chrome?.footerLinks}
      footerBaseline={chrome?.footerBaseline}
    >
      <section style={{ padding: "clamp(40px, 6vw, 72px) var(--gutter) clamp(32px, 4vw, 48px)" }}>
        <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(18px, 2.4vw, 26px)" }}>
          {eyebrow}
        </Reveal>
        <Reveal as="h1" index={2} className="display" style={{ marginBottom: "16px" }}>
          {title}
        </Reveal>
        <Reveal as="p" index={3} style={{ fontSize: "var(--type-label-size)", lineHeight: 1.6, color: "var(--ink-faint)" }}>
          {version}
        </Reveal>
      </section>

      <section style={{ padding: "0 var(--gutter) clamp(60px, 8vw, 96px)" }}>
        <div className="prose">{children}</div>
      </section>
    </PageShell>
  );
}
