import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Apps · Crafted by Ellis",
  description: "iOS apps made by Crafted by Ellis — premium, thoughtfully designed, built to last.",
};

export default function AppsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "80px 0 64px", background: "var(--ink)", position: "relative", overflow: "hidden" }} className="grid-bg">
        <div style={{
          position: "absolute", top: "-20%", right: "10%", width: "500px", height: "500px",
          background: "radial-gradient(ellipse, rgba(154,74,42,0.1) 0%, transparent 60%)",
          pointerEvents: "none", animation: "orb-drift-2 22s ease-in-out infinite",
        }} />
        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <p style={monoCap}>iOS Apps</p>
          <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 64px)", marginBottom: "20px" }}>
            Apps we&apos;ve <em>made</em>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", maxWidth: "480px", lineHeight: 1.7 }}>
            Each app is built slowly and with care. No feature bloat, no dark patterns — just software worth using.
          </p>
        </div>
      </section>

      {/* App list */}
      <section style={{ padding: "80px 0", background: "var(--ink-2)" }}>
        <div className="container-page">
          {/* Renew+ */}
          <Link href="/renewplus" className="glass-card" style={{ padding: "0", overflow: "hidden", marginBottom: "20px", display: "block", cursor: "pointer" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "32px", padding: "40px", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "16px",
                    overflow: "hidden", position: "relative", flexShrink: 0,
                  }}>
                    <Image src="/AppIcon.png" alt="Renew+" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "3px" }}>Renew+</h2>
                    <span style={{
                      fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em",
                      textTransform: "uppercase", color: "var(--rust)",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                    }}>iOS · Available now</span>
                  </div>
                </div>
                <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "28px", maxWidth: "540px" }}>
                  Your premium lifestyle companion. Track goals, journal daily, plan meals, manage finances, and build the life you want — all in one beautifully designed app.
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <Link href="/renewplus" className="btn-primary">View app</Link>
                  <Link href="/renewplus#features" className="btn-secondary">Features</Link>
                </div>
              </div>
              <div style={{
                padding: "12px 18px",
                background: "rgba(154,74,42,0.08)", border: "1px solid rgba(154,74,42,0.18)",
                borderRadius: "var(--radius-md)",
                fontSize: "13px", color: "var(--rust)", fontWeight: 600,
                whiteSpace: "nowrap", alignSelf: "start",
              }}>
                Free · Premium unlock
              </div>
            </div>

            {/* Feature pills */}
            <div style={{
              padding: "20px 40px",
              borderTop: "1px solid var(--color-border)",
              display: "flex", gap: "10px", flexWrap: "wrap",
            }}>
              {["Goal Tracking", "Journaling", "Meal Planning", "Finance", "Smart Calendar", "Family Sharing"].map(f => (
                <span key={f} style={{
                  padding: "4px 12px", borderRadius: "var(--radius-full)",
                  background: "var(--color-surface)", border: "1px solid var(--color-border)",
                  fontSize: "12px", color: "var(--color-text-secondary)", fontWeight: 500,
                }}>
                  {f}
                </span>
              ))}
            </div>
          </Link>

          {/* More coming */}
          <div className="glass-card" style={{ padding: "40px", opacity: 0.5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "16px",
                background: "var(--color-surface)", border: "1px solid var(--color-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", color: "var(--color-text-tertiary)", flexShrink: 0,
              }}>+</div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "4px" }}>More apps in progress</h3>
                <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                  New ideas are always in motion. Stay tuned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const monoCap: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: "11px", fontWeight: 500, letterSpacing: "0.22em",
  textTransform: "uppercase", color: "var(--rust)", marginBottom: "12px",
};
