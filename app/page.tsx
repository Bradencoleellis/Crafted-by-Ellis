import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "120px 0 140px" }} className="grid-bg">
        {/* Orbs */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div className="orb" style={{
            top: "-15%", left: "45%", width: "700px", height: "500px",
            background: "radial-gradient(ellipse, rgba(154,74,42,0.13) 0%, transparent 65%)",
            animation: "orb-drift-1 20s ease-in-out infinite",
          }} />
          <div className="orb" style={{
            bottom: "-10%", right: "-5%", width: "500px", height: "500px",
            background: "radial-gradient(ellipse, rgba(154,74,42,0.07) 0%, transparent 60%)",
            animation: "orb-drift-3 28s ease-in-out infinite",
          }} />
        </div>

        <div className="container-page" style={{ position: "relative", zIndex: 1, maxWidth: "780px" }}>
          <p style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "var(--rust)", marginBottom: "28px",
          }}>
            A small studio · New Zealand
          </p>
          <h1 className="display display-hero" style={{ fontSize: "clamp(48px, 7vw, 88px)", marginBottom: "28px" }}>
            Apps and games,<br /><em>crafted</em> with care.
          </h1>
          <p style={{
            fontSize: "18px", color: "var(--color-text-secondary)",
            lineHeight: 1.7, maxWidth: "520px", marginBottom: "44px",
          }}>
            Crafted by Ellis is a one-person studio making premium iOS apps and original games. Every product is built slowly, on purpose.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/apps" className="btn-primary">Browse Apps</Link>
            <Link href="/about" className="btn-secondary">About the studio</Link>
          </div>
        </div>
      </section>

      {/* ── Apps ── */}
      <section style={{ padding: "96px 0", background: "var(--ink-2)" }}>
        <div className="container-page">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={monoCap}>Apps</p>
              <h2 className="display display-section" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>iOS apps</h2>
            </div>
            <Link href="/apps" style={{ fontSize: "13px", color: "var(--rust)", fontWeight: 500, letterSpacing: "0.04em" }}>
              View all →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", maxWidth: "860px" }}>
            {/* Renew+ */}
            <Link href="/renewplus" className="glass-card" style={{
              display: "block", padding: "32px", position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(154,74,42,0.5), transparent)",
              }} />
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                overflow: "hidden", marginBottom: "20px", position: "relative", flexShrink: 0,
              }}>
                <Image src="/AppIcon.png" alt="Renew+" fill style={{ objectFit: "cover" }} />
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.02em" }}>Renew+</h3>
              <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
                Goal tracking, journaling, meal planning, and finance. Your premium lifestyle companion.
              </p>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--rust)", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                Learn more <ArrowRight />
              </span>
            </Link>

            {/* Placeholder */}
            <div className="glass-card" style={{ padding: "32px", opacity: 0.45 }}>
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: "rgba(246,242,234,0.04)", border: "1px solid rgba(246,242,234,0.07)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px", fontSize: "20px", color: "var(--color-text-tertiary)",
              }}>+</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", letterSpacing: "-0.02em" }}>More coming</h3>
              <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                New apps are in the works. Follow along to see what comes next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Games ── */}
      <section style={{ padding: "96px 0", background: "var(--ink)" }} className="grid-bg">
        <div className="container-page">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={monoCap}>Games</p>
              <h2 className="display display-section" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>Original games</h2>
            </div>
            <Link href="/games" style={{ fontSize: "13px", color: "var(--rust)", fontWeight: 500, letterSpacing: "0.04em" }}>
              View all →
            </Link>
          </div>

          <div className="glass-card" style={{
            padding: "56px 48px",
            display: "flex", alignItems: "center", gap: "48px",
            flexWrap: "wrap",
          }}>
            <div style={{ flex: 1, minWidth: "240px" }}>
              <p style={{ ...monoCap, marginBottom: "12px" }}>In development</p>
              <h3 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "14px" }}>
                Games are coming.
              </h3>
              <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.65, maxWidth: "400px" }}>
                Original games built with the same craft as the apps. Designed thoughtfully, shipped when they&rsquo;re ready.
              </p>
            </div>
            <Link href="/games" className="btn-secondary">Stay updated</Link>
          </div>
        </div>
      </section>

      {/* ── About strip ── */}
      <section style={{ padding: "96px 0", background: "var(--ink-2)" }}>
        <div className="container-page" style={{ maxWidth: "700px" }}>
          <p style={monoCap}>The studio</p>
          <h2 className="display display-section" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "24px" }}>
            One person. Many <em>things</em>.
          </h2>
          <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: "36px" }}>
            Crafted by Ellis is Braden Ellis, a developer and designer based in New Zealand. I build iOS apps and games that I&rsquo;d actually want to use, and I ship them when they&rsquo;re worth shipping.
          </p>
          <Link href="/about" className="btn-secondary">Read more</Link>
        </div>
      </section>
    </>
  );
}

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const monoCap: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em",
  textTransform: "uppercase", color: "var(--rust)", marginBottom: "10px",
};
