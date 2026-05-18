import Link from "next/link";

export const metadata = {
  title: "About | Crafted by Ellis",
  description: "Learn about Crafted by Ellis, founded by Braden Ellis. Building thoughtfully designed digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--color-beige)",
        padding: "96px 0",
      }}>
        <div className="container-page" style={{ textAlign: "center", maxWidth: "800px" }}>
          <p style={labelStyle}>About</p>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Crafted by Ellis
          </h1>
          <p style={{
            fontSize: "20px",
            color: "var(--color-text-secondary)",
            lineHeight: 1.6,
          }}>
            Thoughtfully designed digital experiences, built by one person who cares about the details.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "96px 0", background: "var(--color-background)" }}>
        <div className="container-page" style={{ maxWidth: "700px" }}>
          <p style={labelStyle}>Our Story</p>
          <h2 style={sectionHeadingStyle}>Built with care, designed with purpose</h2>
          <div style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--color-text-primary)" }}>
            <p style={{ marginBottom: "20px" }}>
              Crafted by Ellis was founded with a simple belief: digital products should be made with the same care as physical craftsmanship. Every interaction, every animation, every line of code matters.
            </p>
            <p style={{ marginBottom: "20px" }}>
              We focus on creating apps and games that genuinely improve people&apos;s lives. No dark patterns. No engagement tricks. Just thoughtful design that respects your time and attention.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Our first product, Renew+, is an iOS lifestyle app designed to help people build better habits, reach their goals, and live more intentionally. It represents everything we stand for: premium design, accessibility, and meaningful features.
            </p>
            <p>
              We&apos;re just getting started. More apps, more games, and more thoughtfully designed experiences are on the way.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{
        padding: "96px 0",
        background: "var(--color-background-secondary)",
      }}>
        <div className="container-page">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={labelStyle}>Our Values</p>
            <h2 style={sectionHeadingStyle}>What we believe in</h2>
          </div>

          <div className="values-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}>
            <ValueCard
              icon={<CraftsmanshipIcon />}
              title="Craftsmanship"
              description="Every detail is considered. From the smallest icon to the largest interaction, we obsess over getting it right."
            />
            <ValueCard
              icon={<MinimalismIcon />}
              title="Minimalism"
              description="Clean, purposeful design. We remove what doesn't serve the user. Less is genuinely more."
            />
            <ValueCard
              icon={<AccessibilityIcon />}
              title="Accessibility"
              description="Built for everyone. Inclusive design that works regardless of ability or technology."
            />
            <ValueCard
              icon={<QualityIcon />}
              title="Quality"
              description="Premium products that feel great to use every single day. No shortcuts, no compromises."
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "96px 0", background: "var(--color-background)" }}>
        <div className="container-page" style={{ maxWidth: "700px", textAlign: "center" }}>
          <p style={labelStyle}>What&apos;s Next</p>
          <h2 style={sectionHeadingStyle}>The road ahead</h2>
          <p style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "var(--color-text-secondary)",
            marginBottom: "32px",
          }}>
            We&apos;re building more than just one app. Crafted by Ellis is becoming a home for premium digital experiences—apps that help you live better, games that bring joy, and tools that respect your time.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "32px 24px",
      background: "var(--color-background)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
    }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>{icon}</div>
      <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{description}</p>
    </div>
  );
}

const RUST = "#9A4A2A";

function CraftsmanshipIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill={RUST} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  );
}

function MinimalismIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill={RUST} xmlns="http://www.w3.org/2000/svg">
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  );
}

function AccessibilityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill={RUST} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 7h-5v13h-2v-6h-2v6H9V9H4V7h16v2z"/>
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill={RUST} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
    </svg>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: "var(--color-accent)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  marginBottom: "12px",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  marginBottom: "24px",
  lineHeight: 1.2,
};
