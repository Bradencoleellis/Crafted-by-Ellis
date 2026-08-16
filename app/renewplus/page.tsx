import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import AppStoreBadge from "@/components/AppStoreBadge";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import DeviceStage from "@/components/devices/DeviceStage";
import RenewScreen from "@/components/devices/RenewScreen";
import { displayWidth } from "@/components/devices/Device";

// Larger than the 168px shelf-card phone on the home page. The gap between the
// two is what the shared-element morph animates across.
const HERO_PHONE_W = 244;

export const metadata: Metadata = {
  title: "Renew+ | Crafted by Ellis",
  description:
    "Every subscription you pay for, in one honest list. Renew+ tracks what renews, when, and what it actually costs you across a year.",
};

const RENEW_NAV = [
  { label: "Screens", href: "#shots" },
  { label: "Features", href: "#features" },
  { label: "Support", href: "#support" },
];

// TODO at launch: replace the placeholder plates with the real 9:19 captures
// and wire AppStoreBadge's href to the live product URL.
const SHOTS = [
  { slot: "Shot 01", caption: "The list — everything you pay for, ordered by what renews next." },
  { slot: "Shot 02", caption: "A single subscription, with its real annual cost worked out." },
  { slot: "Shot 03", caption: "The year at a glance, so a quiet month is easy to spot." },
];

const FEATURES = [
  {
    title: "See what is coming",
    body: "A single timeline of renewals for the month ahead, with a quiet reminder a few days before each one charges.",
  },
  {
    title: "Know the yearly cost",
    body: "Weekly, monthly and annual plans are converted to one comparable figure, so the true annual total is never a surprise.",
  },
  {
    title: "Cancel with confidence",
    body: "Mark anything as ending and Renew+ keeps the record, so you can see what you dropped and what it saved you.",
  },
];

export default function RenewPlusPage() {
  return (
    // .accent-renew is what makes this page orange: the accent, the warmer
    // ground and the focus ring all resolve from it. Remove the class and the
    // page falls back to neutral studio rather than breaking.
    <div className="accent-renew" style={pageStyle}>
      <div style={orangeWashStyle} aria-hidden="true" />
      <div style={whiteWashStyle} aria-hidden="true" />

      <SiteHeader nav={RENEW_NAV} back />

      <main>
      <section style={heroStyle}>
        <div style={{ maxWidth: "600px" }}>
          <Reveal index={1} style={lockupStyle}>
            {/* No white plate behind the icon — the warm off-white ground gives
                it enough contrast on its own, and a plate would read as a
                second, competing card. */}
            <Image
              src="/AppIcon.png"
              alt=""
              width={86}
              height={86}
              priority
              style={iconStyle}
            />
            <div>
              <div className="display-app">Renew+</div>
              <div style={comingSoonStyle}>Coming soon</div>
            </div>
          </Reveal>

          <Reveal as="h1" index={2} className="display" style={{ marginBottom: "clamp(18px, 2.4vw, 26px)" }}>
            Every subscription you pay for, in one honest list.
          </Reveal>

          <Reveal as="p" index={3} style={heroBodyStyle}>
            Renew+ keeps track of what renews, when, and what it actually costs you across a year — so nothing
            quietly bills you for a service you stopped using in March.
          </Reveal>

          <Reveal index={4} style={ctaRowStyle}>
            <AppStoreBadge size="lg" />
            <div style={metaStyle}>
              Free tier · iPhone &amp; iPad
              <br />
              iOS 17 or later
            </div>
          </Reveal>
        </div>

        {/* The lead phone is the same object as the one on the home shelf card —
            same DeviceStage name, so arriving here morphs it up to size rather
            than replacing it. The second plate stays a placeholder until the
            real captures land; it is not part of the morph, so it simply
            crossfades in behind. */}
        <Reveal index={5} style={phonePairStyle}>
          <DeviceStage
            name="device-renewplus"
            variant="phone"
            width={HERO_PHONE_W}
            glow="var(--renew-accent-glow)"
            style={{ transform: "translateY(14px) rotate(-3deg)" }}
          >
            <RenewScreen w={displayWidth("phone", HERO_PHONE_W)} />
          </DeviceStage>
          <div style={{ ...phoneStyle, transform: "translateY(-14px) rotate(3deg)" }}>
            <div style={phoneScreenStyle}>Shot 02</div>
          </div>
        </Reveal>
      </section>

      <section id="shots" style={{ position: "relative", paddingTop: "clamp(64px, 9vw, 110px)", scrollMarginTop: "24px" }}>
        <Reveal index={1} style={railHeaderStyle}>
          <div className="eyebrow">The screens</div>
          <div className="eyebrow eyebrow-faint">Scroll →</div>
        </Reveal>

        <div className="rail" style={shotsRailStyle} tabIndex={0} role="group" aria-label="Renew+ screenshots">
          {SHOTS.map(({ slot, caption }, i) => (
            <Reveal key={slot} index={i + 2} style={shotItemStyle}>
              <div style={shotFrameStyle}>
                <div style={shotScreenStyle}>{slot}</div>
              </div>
              <div style={shotCaptionStyle}>{caption}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="features" style={featuresSectionStyle}>
        <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(22px, 3vw, 34px)" }}>
          What it does
        </Reveal>
        <div style={featureGridStyle}>
          {FEATURES.map(({ title, body }, i) => (
            <Reveal key={title} index={i + 2} style={featureCardStyle}>
              {/* Icon slot. A Lucide-style line icon in the accent drops
                  straight in here at the same 34px. */}
              <div style={iconSlotStyle} aria-hidden="true" />
              <div className="display-section" style={{ marginBottom: "10px" }}>
                {title}
              </div>
              <p style={featureBodyStyle}>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ position: "relative", padding: "0 var(--gutter) clamp(56px, 7vw, 88px)" }}>
        <Reveal index={1} style={bannerStyle}>
          <div style={{ maxWidth: "520px" }}>
            <div style={bannerEyebrowStyle}>Made by one person</div>
            <p style={bannerBodyStyle}>
              Renew+ is designed, built and supported by me. Email about a bug and it reaches the person who wrote
              it.
            </p>
          </div>
          <Link href="/" className="pill-dark">
            About the studio
          </Link>
        </Reveal>
      </section>
      </main>

      <SiteFooter
        id="support"
        compact
        eyebrow="Renew+ support"
        email="RenewPlus@craftedbyellis.com"
        links={[
          { label: "Privacy", href: "/renewplus/privacy" },
          { label: "Terms", href: "/renewplus/terms" },
          { label: "Help", href: "/contact" },
          { label: "All apps", href: "/" },
        ]}
        baseline="© 2026 Crafted by Ellis · Renew+ is a Crafted by Ellis app"
      />
    </div>
  );
}

/* ── Styles ── */

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: "var(--paper-warm)",
  position: "relative",
  overflowX: "hidden",
  flex: 1,
};

const orangeWashStyle: CSSProperties = {
  position: "absolute",
  right: "-18vw",
  top: "-24vw",
  width: "80vw",
  height: "80vw",
  maxWidth: "1000px",
  maxHeight: "1000px",
  background: "radial-gradient(circle at 50% 50%, rgba(255,132,0,.16), rgba(245,118,26,0) 64%)",
  pointerEvents: "none",
};

const whiteWashStyle: CSSProperties = {
  position: "absolute",
  left: "-16vw",
  top: "6vw",
  width: "60vw",
  height: "60vw",
  maxWidth: "760px",
  maxHeight: "760px",
  background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,.9), rgba(255,255,255,0) 66%)",
  pointerEvents: "none",
};

const heroStyle: CSSProperties = {
  position: "relative",
  padding: "clamp(48px, 7vw, 84px) var(--gutter) 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "clamp(30px, 4vw, 56px)",
  alignItems: "center",
};

const lockupStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "clamp(20px, 3vw, 28px)",
};

const iconStyle: CSSProperties = {
  width: "clamp(64px, 7vw, 86px)",
  height: "clamp(64px, 7vw, 86px)",
  borderRadius: "20px",
  boxShadow: "var(--shadow-icon)",
};

const comingSoonStyle: CSSProperties = {
  fontSize: "var(--type-micro-size)",
  fontWeight: 600,
  letterSpacing: "var(--type-micro-track)",
  textTransform: "uppercase",
  color: "var(--accent)",
  marginTop: "8px",
};

const heroBodyStyle: CSSProperties = {
  margin: "0 0 clamp(26px, 3.4vw, 34px)",
  fontSize: "16px",
  lineHeight: 1.6,
  color: "var(--ink-body)",
  maxWidth: "470px",
};

const ctaRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "18px",
};

const metaStyle: CSSProperties = {
  fontSize: "var(--type-micro-size)",
  fontWeight: 600,
  letterSpacing: "var(--type-micro-track)",
  lineHeight: "var(--type-micro-lh)",
  textTransform: "uppercase",
  color: "var(--ink-label)",
};

const phonePairStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "clamp(12px, 1.6vw, 18px)",
};

const phoneStyle: CSSProperties = {
  width: "min(210px, 40%)",
  aspectRatio: "9 / 19",
  background: "#fff",
  borderRadius: "32px",
  boxShadow: "var(--shadow-phone)",
  padding: "8px",
};

const phoneScreenStyle: CSSProperties = {
  height: "100%",
  background: "var(--surface-screen)",
  borderRadius: "25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "9.5px",
  fontWeight: 600,
  letterSpacing: "var(--type-micro-track)",
  textTransform: "uppercase",
  color: "var(--ink-faint)",
};

const railHeaderStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  gap: "20px",
  padding: "0 var(--gutter) clamp(18px, 2.4vw, 26px)",
};

const shotsRailStyle: CSSProperties = {
  gap: "clamp(14px, 2vw, 24px)",
  padding: "0 var(--gutter) clamp(50px, 7vw, 80px)",
};

const shotItemStyle: CSSProperties = {
  scrollSnapAlign: "start",
  flex: "none",
  width: "min(300px, 72vw)",
};

const shotFrameStyle: CSSProperties = {
  background: "#fff",
  borderRadius: "var(--radius-2xl)",
  boxShadow: "var(--shadow-rail)",
  padding: "10px",
  aspectRatio: "9 / 19",
};

const shotScreenStyle: CSSProperties = {
  height: "100%",
  background: "var(--surface-screen)",
  borderRadius: "26px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "var(--type-micro-size)",
  fontWeight: 600,
  letterSpacing: "var(--type-micro-track)",
  textTransform: "uppercase",
  color: "var(--ink-faint)",
};

const shotCaptionStyle: CSSProperties = {
  marginTop: "16px",
  fontSize: "var(--type-label-size)",
  lineHeight: 1.6,
  color: "var(--ink-body)",
  maxWidth: "270px",
};

const featuresSectionStyle: CSSProperties = {
  position: "relative",
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
  scrollMarginTop: "24px",
};

const featureGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(272px, 1fr))",
  gap: "clamp(16px, 2vw, 24px)",
};

const featureCardStyle: CSSProperties = {
  background: "var(--surface-warm)",
  borderRadius: "var(--radius-lg)",
  padding: "clamp(24px, 2.6vw, 32px)",
  boxShadow: "var(--shadow-feature)",
};

const iconSlotStyle: CSSProperties = {
  width: "34px",
  height: "34px",
  borderRadius: "var(--radius-sm)",
  background: "var(--accent-tint)",
  marginBottom: "22px",
};

const featureBodyStyle: CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.6,
  color: "var(--ink-body)",
};

const bannerStyle: CSSProperties = {
  background: "linear-gradient(150deg, var(--renew-accent), var(--renew-accent-deep))",
  borderRadius: "var(--radius-xl)",
  padding: "clamp(28px, 4vw, 52px)",
  color: "var(--ink-inverse)",
  display: "flex",
  flexWrap: "wrap",
  gap: "clamp(20px, 3vw, 44px)",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "var(--shadow-accent)",
};

const bannerEyebrowStyle: CSSProperties = {
  fontSize: "var(--type-micro-size)",
  fontWeight: 600,
  letterSpacing: "var(--type-micro-track)",
  lineHeight: "var(--type-micro-lh)",
  textTransform: "uppercase",
  opacity: 0.85,
  marginBottom: "14px",
};

const bannerBodyStyle: CSSProperties = {
  fontSize: "clamp(18px, 2.2vw, 26px)",
  lineHeight: 1.35,
  letterSpacing: "-0.022em",
  fontWeight: 600,
  fontVariationSettings: "'wdth' 112",
};
