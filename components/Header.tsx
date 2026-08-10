"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import EllisLogo from "./EllisLogo";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Apps", href: "/apps" },
  { label: "Games", href: "/games" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // The header's edge and scroll-edge fade only exist while there is content
  // underneath the glass. passive: true keeps this off the scrolling critical
  // path — the listener must never be the reason a frame is late.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change closes the sheet: leaving a page while its menu is still open
  // strands the user in chrome that belongs to the screen they just left.
  // Adjusted during render rather than in an effect, so the sheet is already
  // closed in the same commit as the new route instead of one frame later.
  const [routeAtRender, setRouteAtRender] = useState(pathname);
  if (pathname !== routeAtRender) {
    setRouteAtRender(pathname);
    setIsOpen(false);
  }

  // Escape is the exit every overlay owes the keyboard.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="container-page" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
      }}>
        <EllisLogo size={34} href="/" onLight={false} />

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="nav-link"
              aria-current={isCurrent(pathname, href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn icon-button"
          style={{ display: "none" }}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen
              ? <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              : <>
                  <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                  <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
                </>
            }
          </svg>
        </button>
      </div>

      {/* Mobile sheet — always mounted, state carried on data-open so the open
          and close transitions run the same path from wherever the sheet
          currently is. inert while closed keeps it out of the tab order. */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        data-open={isOpen}
        inert={!isOpen}
      >
        {NAV.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="mobile-menu-link"
            onClick={() => setIsOpen(false)}
            aria-current={isCurrent(pathname, href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </div>

      <style>{`
        .mobile-menu { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

// Exact match for the root, prefix match elsewhere, so /renewplus/privacy still
// marks the section it lives in rather than lighting up nothing.
function isCurrent(pathname: string | null, href: string) {
  if (!pathname) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
