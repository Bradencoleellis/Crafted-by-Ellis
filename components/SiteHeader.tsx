"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";

export type NavItem = { label: string; href: string };

// The studio nav, used by every page that is not one of the two bespoke ones.
// Home and Renew+ pass their own, because their nav points at sections of the
// page you are already on rather than at other routes.
export const STUDIO_NAV: NavItem[] = [
  { label: "Apps", href: "/apps" },
  { label: "Games", href: "/games" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type SiteHeaderProps = {
  nav?: NavItem[];
  /** Prefixes the wordmark with a back glyph and points it at `backHref`. */
  back?: boolean;
  backHref?: string;
  /**
   * Marks one item current when the route cannot say so — the home page's nav
   * is three in-page anchors, and "Apps" is where you already are.
   */
  activeHref?: string;
};

/**
 * The site's only header. It does not stick, and it has no mobile menu: the nav
 * is four uppercase micro-labels, which is small enough to wrap onto a second
 * line at 320px rather than needing to collapse behind a button. That keeps the
 * design's no-breakpoints rule intact and costs nothing in reachability.
 */
export default function SiteHeader({
  nav = STUDIO_NAV,
  back = false,
  backHref = "/",
  activeHref,
}: SiteHeaderProps) {
  const pathname = usePathname();

  return (
    <header style={headerStyle}>
      <Link href={back ? backHref : "/"} style={wordmarkStyle}>
        {back && <span style={{ fontSize: "15px", lineHeight: 1, color: "var(--ink-label)" }}>←</span>}
        Crafted by Ellis
      </Link>

      <nav style={navStyle}>
        {nav.map(({ label, href }) => (
          <Link
            key={`${label}-${href}`}
            href={href}
            className="nav-link"
            aria-current={href === activeHref || isCurrent(pathname, href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

// Exact match for the root, prefix match elsewhere, so /renewplus/privacy still
// marks the section it belongs to instead of lighting up nothing. In-page
// anchors are never "current" — the page they point into is the page you are on,
// and marking all three at once says nothing.
function isCurrent(pathname: string | null, href: string) {
  if (!pathname || href.startsWith("#")) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

const headerStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "20px",
  padding: "clamp(20px, 3vw, 34px) var(--gutter)",
};

const wordmarkStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.01em",
  color: "var(--ink)",
};

const navStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "clamp(16px, 2.4vw, 34px)",
};
