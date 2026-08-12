import Link from "next/link";
import type { CSSProperties } from "react";
import PageShell, { PageHero } from "@/components/PageShell";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Games · Crafted by Ellis",
  description: "Original games from Crafted by Ellis. In development, with no launch date yet.",
};

const EXPECTATIONS = [
  { title: "Original concepts", body: "No clones and no trend-chasing. Ideas that feel like they came from somewhere." },
  { title: "Premium quality", body: "The same attention to detail as the apps, and the same refusal to ship early." },
  { title: "Fair pricing", body: "Pay once, or free. No ads, no energy timers, no gotchas." },
  { title: "Built to last", body: "Maintained and updated rather than abandoned the week after launch." },
];

export default function GamesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Games"
        title="Made with the same care as the apps."
        lead="The first game is being built right now. There is no launch date, because it ships when it is finished and not before."
      />

      <section style={sectionStyle}>
        <Reveal index={1} className="surface-card" style={panelStyle}>
          <div className="eyebrow" style={{ marginBottom: "14px" }}>
            In development
          </div>
          <p style={panelBodyStyle}>
            One game, early. It is the only one on the list, and it will stay that way until it is done.
          </p>
          <Link href="/contact" className="pill-dark" style={{ marginTop: "26px" }}>
            Get notified
          </Link>
        </Reveal>

        <div style={gridStyle}>
          {EXPECTATIONS.map(({ title, body }, i) => (
            <Reveal key={title} index={i + 2}>
              <div className="display-section" style={{ marginBottom: "10px" }}>
                {title}
              </div>
              <p style={itemBodyStyle}>{body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

const sectionStyle: CSSProperties = {
  padding: "0 var(--gutter) clamp(60px, 8vw, 96px)",
  display: "grid",
  gap: "clamp(32px, 5vw, 56px)",
  maxWidth: "980px",
};

const panelStyle: CSSProperties = {
  padding: "clamp(28px, 3.4vw, 44px)",
  background: "var(--surface)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const panelBodyStyle: CSSProperties = {
  fontSize: "clamp(17px, 2vw, 22px)",
  lineHeight: 1.45,
  letterSpacing: "-0.015em",
  fontWeight: 600,
  fontVariationSettings: "'wdth' 110",
  maxWidth: "460px",
};

// Four items, so the track is sized to break to two columns rather than three —
// three would leave the fourth stranded on a row of its own.
const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "clamp(24px, 3.4vw, 44px)",
};

const itemBodyStyle: CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.66,
  color: "var(--ink-body)",
};
