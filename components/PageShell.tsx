import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";
import SiteFooter, { type FooterLink } from "./SiteFooter";
import SiteHeader, { type NavItem } from "./SiteHeader";

type PageShellProps = {
  children: ReactNode;
  nav?: NavItem[];
  back?: boolean;
  backHref?: string;
  /** Renew+ pages pass this so the accent, warm ground and orange focus ring apply. */
  accent?: "renew";
  footerEyebrow?: string;
  footerEmail?: string;
  footerLinks?: FooterLink[];
  footerBaseline?: string;
};

/**
 * The studio page shell: ground, the one static light wash, header and footer.
 *
 * Every page that is not the home page or an app landing page uses this, which
 * is what keeps the gutter, the wash position and the footer identical across
 * the site. The two bespoke pages compose the same pieces by hand because their
 * grounds and washes differ.
 */
export default function PageShell({
  children,
  nav,
  back = false,
  backHref = "/",
  accent,
  footerEyebrow,
  footerEmail,
  footerLinks,
  footerBaseline,
}: PageShellProps) {
  return (
    <div className={accent === "renew" ? "accent-renew" : undefined} style={pageStyle}>
      <div style={washStyle} aria-hidden="true" />
      <SiteHeader nav={nav} back={back} backHref={backHref} />
      <main style={{ position: "relative" }}>{children}</main>
      <SiteFooter
        eyebrow={footerEyebrow}
        email={footerEmail}
        links={footerLinks}
        baseline={footerBaseline}
      />
    </div>
  );
}

/**
 * The standard opening of a studio page: eyebrow, title, one paragraph of lead.
 * Nothing separates it from the content below but whitespace and the drop in
 * type scale — there are no rules or dividing bars anywhere in this system.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section style={heroStyle}>
      <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(22px, 3vw, 34px)" }}>
        {eyebrow}
      </Reveal>
      <Reveal as="h1" index={2} className="display-hero" style={{ maxWidth: "16ch" }}>
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" index={3} style={leadStyle}>
          {lead}
        </Reveal>
      )}
      {children}
    </section>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: "var(--color-background)",
  position: "relative",
  overflowX: "hidden",
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const washStyle: CSSProperties = {
  position: "absolute",
  left: "-14vw",
  top: "-18vw",
  width: "70vw",
  height: "70vw",
  maxWidth: "900px",
  maxHeight: "900px",
  background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,.95), rgba(255,255,255,0) 66%)",
  pointerEvents: "none",
};

const heroStyle: CSSProperties = {
  position: "relative",
  padding: "clamp(48px, 8vw, 88px) var(--gutter) clamp(40px, 6vw, 64px)",
};

const leadStyle: CSSProperties = {
  marginTop: "clamp(22px, 3vw, 32px)",
  fontSize: "16px",
  lineHeight: 1.6,
  color: "var(--ink-body)",
  maxWidth: "560px",
};
