import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Apps · Crafted by Ellis",
  description: "The whole catalogue: two apps, both made by one person in Aotearoa New Zealand.",
};

export default function AppsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The catalogue"
        title="Two apps, and no plans for a third."
        lead="Everything here is designed, built and supported by one person. An app only ships once it is finished, and it stays looked after long after that."
      />

      <section style={listSectionStyle}>
        <Reveal index={1} className="surface-card" style={{ ...rowStyle, background: "var(--surface)" }}>
          <div style={rowMainStyle}>
            <div style={lockupStyle}>
              <Image src="/AppIcon.png" alt="" width={64} height={64} style={appIconStyle} />
              <div>
                <div className="display-section" style={{ marginBottom: "4px" }}>
                  Renew+
                </div>
                <span style={{ ...statusStyle, color: "var(--renew-accent)" }}>iOS · Coming soon</span>
              </div>
            </div>
            <p style={rowBodyStyle}>
              Every subscription you pay for, in one honest list. Renew+ tracks what renews, when, and what it
              actually costs you across a year.
            </p>
            <div style={actionRowStyle}>
              <Link href="/renewplus" className="pill-dark">
                View app
              </Link>
              <Link href="/renewplus#features" className="pill-outline">
                Features
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal index={2} className="surface-card" style={{ ...rowStyle, background: "var(--surface)" }}>
          <div style={rowMainStyle}>
            <div style={lockupStyle}>
              {/* Placeholder mark — replaced by the real Crafted Co icon when
                  that app has a page of its own. */}
              <div style={placeholderIconStyle} aria-hidden="true" />
              <div>
                <div className="display-section" style={{ marginBottom: "4px" }}>
                  Crafted Co
                </div>
                <span style={{ ...statusStyle, color: "var(--ink-label)" }}>In build</span>
              </div>
            </div>
            <p style={rowBodyStyle}>
              A quieter way to run a small trade business — quotes, jobs and invoices without the clutter. Built
              from ten years on the tools rather than from a spreadsheet.
            </p>
            <div style={actionRowStyle}>
              <Link href="/contact" className="pill-outline">
                Follow the build
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}

const listSectionStyle: CSSProperties = {
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
  display: "grid",
  gap: "clamp(16px, 2vw, 24px)",
  maxWidth: "980px",
};

const rowStyle: CSSProperties = {
  padding: "clamp(26px, 3vw, 40px)",
};

const rowMainStyle: CSSProperties = {
  display: "grid",
  gap: "20px",
};

const lockupStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const appIconStyle: CSSProperties = {
  width: "64px",
  height: "64px",
  borderRadius: "16px",
  boxShadow: "var(--shadow-icon)",
  flexShrink: 0,
};

const placeholderIconStyle: CSSProperties = {
  width: "64px",
  height: "64px",
  borderRadius: "16px",
  background: "#f0efec",
  boxShadow: "0 18px 40px -22px rgba(25,24,23,.4)",
  flexShrink: 0,
};

const statusStyle: CSSProperties = {
  fontSize: "10.5px",
  fontWeight: 600,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
};

const rowBodyStyle: CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.66,
  color: "var(--ink-body)",
  maxWidth: "560px",
};

const actionRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};
