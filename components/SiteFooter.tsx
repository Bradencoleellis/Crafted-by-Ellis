import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "./Reveal";

export type FooterLink = { label: string; href: string };

// Studio-level contact. Renew+ overrides this with its own support address, and
// Crafted Co will bring CraftedCo@craftedbyellis.com when its page is built.
export const STUDIO_EMAIL = "braden@craftedbyellis.com";

// "Website privacy" and "Website terms", not "Privacy" and "Terms": under the
// catalogue model these two documents cover craftedbyellis.com only, and each
// app carries its own pair on its own pages. Labelling them generically implied
// they governed the apps as well, which is exactly the overlap being removed.
export const STUDIO_FOOTER_LINKS: FooterLink[] = [
  { label: "Renew+", href: "/renewplus" },
  { label: "Crafted Co", href: "/craftedco" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Website privacy", href: "/privacy" },
  { label: "Website terms", href: "/terms" },
];

type SiteFooterProps = {
  eyebrow?: string;
  email?: string;
  links?: FooterLink[];
  baseline?: string;
  /**
   * The app pages run the footer directly under a full-bleed panel, so it needs
   * no top padding of its own; the studio pages need the gap.
   */
  compact?: boolean;
  id?: string;
};

/**
 * The footer is one row: the contact address set large enough to be the page's
 * last real piece of typography, and a line of micro-links beside it. There is
 * no dividing rule above it and no column grid — the whitespace and the jump in
 * type scale do the separating, which is the same rule the rest of the site
 * follows.
 */
export default function SiteFooter({
  eyebrow = "Get in touch",
  email = STUDIO_EMAIL,
  links = STUDIO_FOOTER_LINKS,
  baseline = "© 2026 Crafted by Ellis · Aotearoa New Zealand",
  compact = false,
  id = "contact",
}: SiteFooterProps) {
  return (
    <footer
      id={id}
      style={{
        position: "relative",
        padding: compact
          ? "0 var(--gutter) clamp(36px, 4vw, 52px)"
          : "clamp(40px, 6vw, 70px) var(--gutter) clamp(36px, 4vw, 50px)",
        scrollMarginTop: "24px",
      }}
    >
      <Reveal index={1} style={rowStyle}>
        <div>
          <div className="eyebrow" style={{ marginBottom: compact ? "14px" : "16px" }}>
            {eyebrow}
          </div>
          <a
            href={`mailto:${email}`}
            className="contact-link"
            style={{
              display: "inline-block",
              fontSize: compact ? "clamp(22px, 3vw, 34px)" : "clamp(24px, 3.4vw, 40px)",
            }}
          >
            {email}
          </a>
        </div>

        <div style={linkRowStyle}>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} className="footer-link">
              {label}
            </Link>
          ))}
        </div>
      </Reveal>

      <div
        style={{
          marginTop: compact ? "clamp(28px, 4vw, 52px)" : "clamp(30px, 5vw, 60px)",
          fontSize: "var(--type-micro-size)",
          letterSpacing: "var(--type-micro-track)",
  lineHeight: "var(--type-micro-lh)",
          textTransform: "uppercase",
          color: "var(--ink-faint)",
        }}
      >
        {baseline}
      </div>
    </footer>
  );
}

const rowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "clamp(22px, 4vw, 60px)",
  alignItems: "flex-end",
  justifyContent: "space-between",
};

const linkRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};
