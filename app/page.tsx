import type { CSSProperties } from "react";
import AppStoreBadge from "@/components/AppStoreBadge";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import DeviceStage from "@/components/devices/DeviceStage";
import RenewScreen from "@/components/devices/RenewScreen";
import { displayWidth } from "@/components/devices/Device";

// Body width of the shelf-card phone. The hero on /renewplus is larger; the
// morph between the two is the whole point, so they are deliberately different.
const PHONE_W = 168;

// The home nav points into this page's own sections rather than at other
// routes: the shelf below *is* the apps list, and "Studio" and "Contact" are
// both further down the same page.
const HOME_NAV = [
  { label: "Apps", href: "#shelf" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

// The dashed third tile is a placeholder for an app that does not exist yet.
// Flip to false the moment it starts reading as filler rather than as intent.
const SHOW_NEXT_TILE = true;

const STATS = [
  { figure: "02", label: "Apps in the studio" },
  { figure: "01", label: "Person, start to finish" },
  { figure: "NZ", label: "Designed and built here" },
];

const PRINCIPLES = [
  {
    title: "Few things, done well",
    body: "Two apps is the whole catalogue. Everything I ship has to earn the space it takes on your phone, so most ideas never make it past a weekend.",
  },
  {
    title: "Built for the long term",
    body: "No ads, no data resale, no engagement tricks. Apps are paid for once or by subscription, and that is the only business model behind them.",
  },
  {
    title: "Support from the maker",
    body: "When you email about a bug, it reaches the person who wrote the line that caused it. Most replies go out the same day.",
  },
];

export default function Home() {
  return (
    <div style={pageStyle}>
      {/* A single static light wash sitting off the top-left corner. It is the
          only texture on the page — no grid, nothing animated. */}
      <div style={washStyle} aria-hidden="true" />

      <SiteHeader nav={HOME_NAV} activeHref="#shelf" />

      <main>
      <section style={heroStyle}>
        <div style={{ maxWidth: "660px" }}>
          <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(22px, 3vw, 34px)" }}>
            Crafted by Ellis · Aotearoa New Zealand
          </Reveal>
          <Reveal as="h1" index={2} className="display-hero" style={{ marginBottom: "clamp(22px, 3vw, 32px)" }}>
            Software made by hand, one app at a time.
          </Reveal>
          <Reveal as="p" index={3} style={heroBodyStyle}>
            I am Ellis. I design, build and support every app here myself, from New Zealand. There is no team, no
            investor deadline and no roadmap I do not control — apps ship when they are finished, and stay looked
            after long after launch.
          </Reveal>
        </div>

        <Reveal index={4} style={statColumnStyle}>
          {STATS.map(({ figure, label }) => (
            <div key={label}>
              <div style={statFigureStyle}>{figure}</div>
              <div className="micro-label" style={{ marginTop: "6px" }}>
                {label}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="shelf" style={{ position: "relative", paddingTop: "clamp(72px, 10vw, 118px)", scrollMarginTop: "24px" }}>
        <Reveal index={1} style={railHeaderStyle}>
          <div className="eyebrow">On the shelf</div>
          <div className="eyebrow eyebrow-faint">Scroll →</div>
        </Reveal>

        {/* tabindex on the rail itself is what makes it scrollable from the
            keyboard once the scrollbar is hidden. */}
        <div className="rail" style={shelfRailStyle} tabIndex={0} role="group" aria-label="Apps from the studio">
          <Reveal
            as="a"
            index={2}
            href="/renewplus"
            className="shelf-card shelf-card--accent"
            style={{ ...shelfCardStyle, ...renewCardStyle }}
          >
            <div style={cardTopRowStyle}>
              <span style={{ ...cardTagStyle, opacity: 0.88 }}>Coming soon</span>
              <span style={{ ...cardTagStyle, opacity: 0.7 }}>01</span>
            </div>
            <div style={cardTitleStyle}>Renew+</div>
            <p style={{ ...cardBodyStyle, opacity: 0.94 }}>
              Every subscription you pay for, in one honest list. Know what renews before it does.
            </p>
            <AppStoreBadge size="sm" />

            {/* The phone rises out of the card's bottom edge, lit from below it.
                It is the same object as the hero on /renewplus: DeviceStage
                hands its identity to the browser under a shared name, so
                following this card morphs the phone up into place rather than
                cutting to a different picture of one. */}
            <div style={plateRowStyle}>
              <DeviceStage
                name="device-renewplus"
                variant="phone"
                width={PHONE_W}
                glow="var(--renew-accent-glow)"
                style={{ marginBottom: `-${Math.round(PHONE_W * 0.34)}px` }}
              >
                <RenewScreen w={displayWidth("phone", PHONE_W)} />
              </DeviceStage>
            </div>
          </Reveal>

          <Reveal index={3} className="shelf-card shelf-card--neutral" style={{ ...shelfCardStyle, ...craftedCoCardStyle }}>
            <div style={cardTopRowStyle}>
              <span style={{ ...cardTagStyle, color: "var(--ink-label)" }}>In build</span>
              <span style={{ ...cardTagStyle, color: "var(--ink-faint)" }}>02</span>
            </div>
            <div style={cardTitleStyle}>Crafted Co</div>
            <p style={{ ...cardBodyStyle, color: "var(--ink-body)" }}>
              A quieter way to run a small trade business — quotes, jobs and invoices without the clutter.
            </p>
            {/* Not a link yet: there is no page behind it. It reads as a label
                for what is coming, which is what the card is. */}
            <span className="pill-outline" style={{ alignSelf: "flex-start" }}>
              Follow the build
            </span>

            {/* Placeholder mark — swap for the real Crafted Co icon when that
                page is built, and take this card's accent from it then. */}
            <div style={markRowStyle}>
              <div style={markStyle} aria-hidden="true">
                <div style={markRow}>
                  <div style={{ flex: 1, background: "var(--ink)" }} />
                  <div style={{ flex: 1, background: "var(--ink)" }} />
                </div>
                <div style={markRow}>
                  <div style={{ flex: 1, background: "var(--ink)" }} />
                  <div style={{ flex: 2, background: "var(--ink)" }} />
                  <div style={{ flex: 1, background: "var(--ink)" }} />
                </div>
                <div style={markRow}>
                  <div style={{ flex: 1, background: "var(--ink)" }} />
                  <div style={{ flex: 1, background: "var(--ink)" }} />
                </div>
              </div>
            </div>
          </Reveal>

          {SHOW_NEXT_TILE && (
            <div style={nextTileStyle}>
              Next app
              <br />
              in time
            </div>
          )}
        </div>
      </section>

      <section id="studio" style={studioSectionStyle}>
        <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(24px, 3vw, 38px)" }}>
          How I work
        </Reveal>
        <div style={studioGridStyle}>
          {PRINCIPLES.map(({ title, body }, i) => (
            <Reveal key={title} index={i + 2}>
              <div className="display-section" style={{ marginBottom: "12px" }}>
                {title}
              </div>
              <p style={studioBodyStyle}>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* ── Styles ── */

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: "var(--paper)",
  position: "relative",
  overflowX: "hidden",
  flex: 1,
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
  padding: "clamp(56px, 9vw, 96px) var(--gutter) 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "clamp(32px, 5vw, 70px)",
  alignItems: "start",
};

const heroBodyStyle: CSSProperties = {
  fontSize: "clamp(15px, 1.4vw, 16.5px)",
  lineHeight: 1.68,
  color: "var(--ink-body)",
  maxWidth: "480px",
};

const statColumnStyle: CSSProperties = {
  display: "grid",
  gap: "clamp(16px, 2vw, 22px)",
  paddingTop: "6px",
  maxWidth: "280px",
};

const statFigureStyle: CSSProperties = {
  fontSize: "clamp(30px, 3.4vw, 38px)",
  fontWeight: 600,
  fontVariationSettings: "'wdth' 112",
  letterSpacing: "-0.02em",
  lineHeight: 1,
};

const railHeaderStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "20px",
  padding: "0 var(--gutter) clamp(18px, 2.4vw, 26px)",
};

const shelfRailStyle: CSSProperties = {
  gap: "clamp(14px, 1.8vw, 22px)",
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
};

const shelfCardStyle: CSSProperties = {
  scrollSnapAlign: "start",
  flex: "none",
  width: "min(520px, 86vw)",
  minHeight: "min(560px, 78vh)",
  borderRadius: "var(--radius-xl)",
  overflow: "hidden",
  padding: "clamp(24px, 3vw, 36px) clamp(24px, 3vw, 36px) 0",
  display: "flex",
  flexDirection: "column",
};

const renewCardStyle: CSSProperties = {
  background: "linear-gradient(170deg, var(--renew-accent), var(--renew-accent-deep))",
  color: "var(--ink-inverse)",
};

const craftedCoCardStyle: CSSProperties = {
  background: "var(--surface)",
  color: "var(--ink)",
};

const cardTopRowStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "clamp(20px, 3vw, 30px)",
};

const cardTagStyle: CSSProperties = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
};

const cardTitleStyle: CSSProperties = {
  fontSize: "clamp(38px, 4.6vw, 52px)",
  fontWeight: 600,
  letterSpacing: "-0.028em",
  fontVariationSettings: "'wdth' 114",
  lineHeight: 1,
  marginBottom: "14px",
};

const cardBodyStyle: CSSProperties = {
  margin: "0 0 clamp(20px, 2.6vw, 26px)",
  fontSize: "clamp(14.5px, 1.3vw, 15.5px)",
  lineHeight: 1.6,
  maxWidth: "360px",
};

const plateRowStyle: CSSProperties = {
  marginTop: "auto",
  display: "flex",
  justifyContent: "center",
  gap: "14px",
  paddingTop: "34px",
};


const markRowStyle: CSSProperties = {
  marginTop: "auto",
  display: "flex",
  justifyContent: "center",
  padding: "34px 0 clamp(40px, 6vw, 56px)",
};

const markStyle: CSSProperties = {
  width: "150px",
  height: "150px",
  borderRadius: "var(--radius-2xl)",
  background: "#f0efec",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "9px",
  padding: "32px",
  boxShadow: "0 24px 50px -26px rgba(25,24,23,.32)",
};

const markRow: CSSProperties = { display: "flex", gap: "6px", height: "16px" };

const nextTileStyle: CSSProperties = {
  scrollSnapAlign: "start",
  flex: "none",
  width: "min(220px, 60vw)",
  minHeight: "min(560px, 78vh)",
  borderRadius: "var(--radius-xl)",
  border: "1.5px dashed rgba(25,24,23,.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  fontSize: "10.5px",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "var(--ink-faint)",
  textAlign: "center",
  lineHeight: 1.8,
};

const studioSectionStyle: CSSProperties = {
  position: "relative",
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
  scrollMarginTop: "24px",
};

const studioGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "clamp(24px, 3.4vw, 44px)",
  maxWidth: "1180px",
};

const studioBodyStyle: CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.66,
  color: "var(--ink-body)",
};
