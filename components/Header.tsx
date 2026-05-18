"use client";

import Link from "next/link";
import { useState } from "react";
import EllisLogo from "./EllisLogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(15, 13, 10, 0.8)",
      borderBottom: "1px solid rgba(246, 242, 234, 0.07)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
    }}>
      <div className="container-page" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
      }}>
        <EllisLogo size={34} href="/" onLight={false} />

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/apps">Apps</NavLink>
          <NavLink href="/games">Games</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px", color: "var(--paper)" }}
          aria-label="Toggle menu"
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

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu" style={{
          display: "none",
          padding: "12px 24px 24px",
          borderTop: "1px solid rgba(246,242,234,0.07)",
          flexDirection: "column",
          gap: "2px",
          background: "rgba(15,13,10,0.98)",
        }}>
          {["Home:/", "Apps:/apps", "Games:/games", "About:/about", "Contact:/contact"].map(item => {
            const [label, href] = item.split(":");
            return (
              <Link key={href} href={href} onClick={() => setIsOpen(false)} style={{
                color: "var(--paper-dim)",
                fontSize: "16px",
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(246,242,234,0.06)",
                display: "block",
              }}>{label}</Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{
      color: "var(--paper-dim)",
      fontSize: "14px",
      fontWeight: 500,
      padding: "6px 12px",
      borderRadius: "var(--radius-sm)",
      transition: "color 0.15s ease",
    }}>
      {children}
    </Link>
  );
}
