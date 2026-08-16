import Link from "next/link";
import type { CSSProperties } from "react";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Studio | Crafted by Ellis",
  description:
    "Crafted by Ellis is one person in Aotearoa New Zealand, designing, building and supporting every app in the catalogue.",
};

// The redesign's whole thesis is that there is no team, so the page speaks in
// the first person. The previous copy said "we" throughout, which read as a
// company and undercut the one thing the studio is actually selling.
const STORY = [
  "I spent ten years in the building industry before I wrote software for a living, and the habit that came with me is the one this studio runs on: you do not hand something over until it is finished, and you stand behind it afterwards.",
  "So the catalogue is small on purpose. Two apps, both mine end to end — design, code, support email, the lot. Nothing here was scoped by a committee or shipped to hit a quarter.",
  "There are no ads, no data resale and no engagement mechanics. Apps are paid for once or by subscription, and that is the entire business model. It means the only person I have to keep happy is the one using the app.",
];

const VALUES = [
  {
    title: "Craft over cadence",
    body: "Every detail gets looked at, and nothing ships to a date. If that means an app takes another month, it takes another month.",
  },
  {
    title: "Less, deliberately",
    body: "Features are removed more often than they are added. Most ideas never make it past a weekend, and the app is better for it.",
  },
  {
    title: "Built for everyone",
    body: "Dynamic Type, reduced motion, focus rings, real contrast. Accessibility is part of the build, not a pass at the end.",
  },
  {
    title: "Answerable",
    body: "When you email about a bug it reaches the person who wrote the line that caused it. Most replies go out the same day.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The studio"
        title="One person, in Aotearoa New Zealand."
      />

      <section style={storySectionStyle}>
        {STORY.map((paragraph, i) => (
          <Reveal as="p" key={paragraph.slice(0, 24)} index={i + 1} style={storyParagraphStyle}>
            {paragraph}
          </Reveal>
        ))}
      </section>

      <section style={valuesSectionStyle}>
        <Reveal index={1} className="eyebrow" style={{ marginBottom: "clamp(24px, 3vw, 38px)" }}>
          What I hold to
        </Reveal>
        <div style={valuesGridStyle}>
          {VALUES.map(({ title, body }, i) => (
            <Reveal key={title} index={i + 2}>
              <div className="display-section" style={{ marginBottom: "12px" }}>
                {title}
              </div>
              <p style={valueBodyStyle}>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={ctaSectionStyle}>
        <Reveal index={1}>
          <p style={ctaBodyStyle}>
            If you are using one of the apps, or thinking about it, the fastest way to reach me is email.
          </p>
          <Link href="/contact" className="pill-dark" style={{ marginTop: "24px" }}>
            Get in touch
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}

const storySectionStyle: CSSProperties = {
  padding: "0 var(--gutter) clamp(56px, 8vw, 88px)",
  display: "grid",
  gap: "20px",
  maxWidth: "700px",
};

const storyParagraphStyle: CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.6,
  color: "var(--ink-body)",
};

const valuesSectionStyle: CSSProperties = {
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
};

const valuesGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "clamp(24px, 3.4vw, 44px)",
  maxWidth: "1180px",
};

const valueBodyStyle: CSSProperties = {
  fontSize: "16px",
  lineHeight: 1.6,
  color: "var(--ink-body)",
};

const ctaSectionStyle: CSSProperties = {
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
  maxWidth: "700px",
};

const ctaBodyStyle: CSSProperties = {
  fontSize: "clamp(18px, 2.2vw, 26px)",
  lineHeight: 1.35,
  letterSpacing: "-0.022em",
  fontWeight: 600,
  fontVariationSettings: "'wdth' 112",
  maxWidth: "520px",
};
