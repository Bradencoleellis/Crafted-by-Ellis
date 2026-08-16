import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import DeviceStage from "@/components/devices/DeviceStage";
import CraftedCoScreen from "@/components/devices/CraftedCoScreen";
import { displayWidth } from "@/components/devices/Device";

// Larger than the 210px shelf-card laptop on the home page. The gap between the
// two is what the shared-element morph animates across — same arrangement as
// Renew+, so both shelf cards open the same way.
const HERO_LAPTOP_W = 560;

export const metadata: Metadata = {
  title: "Crafted Co | Crafted by Ellis",
  description:
    "A quieter way to run a small trade business — quotes, jobs and invoices without the clutter. Built for New Zealand builders.",
};

const CO_NAV = [
  { label: "What it is", href: "#what" },
  { label: "Build", href: "#build" },
  { label: "Legal", href: "#legal" },
];

const PILLARS = [
  {
    title: "Quote from the job, not the office",
    body: "Price a job standing in it. Measurements, materials and labour land in the same place, and the quote goes out before you have driven home.",
  },
  {
    title: "One thread per job",
    body: "Every photo, variation and invoice hangs off the job it belongs to. No hunting through a phone gallery for the shot that settles an argument.",
  },
  {
    title: "Built for how NZ sites actually run",
    body: "Council consents, LBP records and GST are part of the model rather than bolted on for a market this was not designed for.",
  },
];

export default function CraftedCoPage() {
  return (
    <>
      <SiteHeader nav={CO_NAV} back backHref="/" />

      <section style={heroStyle} className="grid-bg device-section">
        <div className="container-page" style={heroInnerStyle}>
          <div style={heroCopyStyle}>
            <Reveal index={1} style={{ marginBottom: "clamp(18px, 2.4vw, 26px)" }}>
              <div className="display-app">Crafted Co</div>
              <div style={statusStyle}>In build</div>
            </Reveal>

            <Reveal as="h1" index={2} className="display" style={{ marginBottom: "clamp(18px, 2.4vw, 26px)" }}>
              A quieter way to run a small trade business.
            </Reveal>

            <Reveal as="p" index={3} style={heroBodyStyle}>
              Quotes, jobs and invoices in one place, shaped around how a small New Zealand building
              company actually works — not a generic job tracker with a hard hat on the marketing page.
            </Reveal>

            <Reveal index={4} style={metaStyle}>
              In development · Web, iOS &amp; Android
              <br />
              Follow the build for an early look
            </Reveal>
          </div>

          {/* The same object as the laptop on the home shelf card — matching
              DeviceStage name, so arriving here opens it up to size rather than
              cutting to a bigger picture of one. */}
          <Reveal index={5} className="device-fit" style={stageRowStyle}>
            <DeviceStage
              name="device-craftedco"
              variant="laptop"
              width={HERO_LAPTOP_W}
              glow="var(--co-accent-glow)"
            >
              <CraftedCoScreen w={displayWidth("laptop", HERO_LAPTOP_W)} />
            </DeviceStage>
          </Reveal>
        </div>
      </section>

      <section id="what" style={sectionStyle}>
        <div className="container-page">
          <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(24px, 3vw, 38px)" }}>
            What it is
          </Reveal>
          <div style={pillarGridStyle}>
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} index={i + 2}>
                <h2 style={pillarTitleStyle}>{pillar.title}</h2>
                <p style={pillarBodyStyle}>{pillar.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="build" style={sectionStyle}>
        <div className="container-page">
          <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(20px, 2.4vw, 28px)" }}>
            Where it is up to
          </Reveal>
          <Reveal as="p" index={2} style={buildBodyStyle}>
            Crafted Co is being built in the open, one working piece at a time. There is no launch date
            being promised here — it ships when a builder could run a week of real work through it
            without falling back to paper.
          </Reveal>
        </div>
      </section>

      {/* Each app carries its own legal, per the catalogue model — the site-level
          pair covers craftedbyellis.com and says nothing about any app. */}
      <section id="legal" style={sectionStyle}>
        <div className="container-page">
          <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(20px, 2.4vw, 28px)" }}>
            Legal
          </Reveal>
          <Reveal as="p" index={2} style={{ ...buildBodyStyle, fontSize: "15px", marginBottom: "20px" }}>
            Crafted Co has its own terms and privacy policy, separate from the other apps and from
            this website. Both are drafts while the product is in build.
          </Reveal>
          <Reveal index={3} style={legalLinkRowStyle}>
            <Link href="/craftedco/terms" className="pill-outline">
              Terms of Service
            </Link>
            <Link href="/craftedco/privacy" className="pill-outline">
              Privacy Policy
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

const heroStyle: CSSProperties = {
  padding: "clamp(48px, 7vw, 96px) 0 clamp(56px, 8vw, 104px)",
  background: "var(--color-background)",
};

const heroInnerStyle: CSSProperties = {
  display: "grid",
  gap: "clamp(40px, 6vw, 72px)",
  alignItems: "center",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
};

const heroCopyStyle: CSSProperties = { minWidth: 0 };

const statusStyle: CSSProperties = {
  fontSize: "13px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--ink-label)",
  marginTop: "8px",
};

const heroBodyStyle: CSSProperties = {
  fontSize: "clamp(16px, 1.5vw, 18px)",
  lineHeight: 1.6,
  color: "var(--ink-body)",
  maxWidth: "48ch",
  marginBottom: "clamp(20px, 2.6vw, 28px)",
};

const metaStyle: CSSProperties = {
  fontSize: "13px",
  lineHeight: 1.6,
  color: "var(--ink-faint)",
};

// min-width:0 lets the laptop shrink inside the grid track instead of forcing
// the column wider than the viewport on a phone.
const stageRowStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  minWidth: 0,
};

const sectionStyle: CSSProperties = {
  padding: "clamp(48px, 7vw, 92px) 0",
  background: "var(--color-background)",
};

const pillarGridStyle: CSSProperties = {
  display: "grid",
  gap: "clamp(28px, 4vw, 48px)",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
};

const pillarTitleStyle: CSSProperties = {
  fontSize: "clamp(18px, 1.8vw, 21px)",
  fontWeight: 600,
  letterSpacing: "-0.005em",
  color: "var(--ink)",
  marginBottom: "12px",
  textWrap: "balance",
};

const pillarBodyStyle: CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.65,
  color: "var(--ink-body)",
};

const legalLinkRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

const buildBodyStyle: CSSProperties = {
  fontSize: "clamp(16px, 1.6vw, 19px)",
  lineHeight: 1.65,
  color: "var(--ink-body)",
  maxWidth: "62ch",
};
