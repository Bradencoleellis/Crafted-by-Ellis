import Link from "next/link";

export const metadata = {
  title: "Games · Crafted by Ellis",
  description: "Original games from Crafted by Ellis. Coming soon.",
};

export default function GamesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "80px 0 64px", background: "var(--ink)", position: "relative", overflow: "hidden" }} className="grid-bg">
        <div className="orb" style={{
          top: "-20%", left: "20%", width: "600px", height: "600px",
          background: "radial-gradient(ellipse, rgba(154,74,42,0.09) 0%, transparent 60%)",
          animation: "orb-drift-1 24s ease-in-out infinite",
        }} />
        <div className="container-page" style={{ position: "relative", zIndex: 1 }}>
          <p style={monoCap}>Games</p>
          <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 64px)", marginBottom: "20px" }}>
            Original <em>games</em>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", maxWidth: "480px", lineHeight: 1.7 }}>
            Games made with the same craft as the apps. Designed thoughtfully, built without compromise.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section style={{ padding: "80px 0", background: "var(--ink-2)" }}>
        <div className="container-page" style={{ maxWidth: "700px" }}>
          <div className="glass-card" style={{ padding: "64px 56px", textAlign: "center" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "18px",
              background: "var(--rust-subtle)", border: "1px solid var(--rust-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 28px", fontSize: "26px",
            }}>
              ⬡
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "16px" }}>
              In development
            </h2>
            <p style={{ fontSize: "16px", color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "400px", margin: "0 auto 36px" }}>
              The first game is being built right now. No launch date yet. It ships when it&apos;s ready.
            </p>
            <Link href="/contact" className="btn-primary">Get notified</Link>
          </div>

          {/* What to expect */}
          <div style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { title: "Original concepts", desc: "No clones, no trend-chasing. Ideas that feel fresh." },
              { title: "Premium quality", desc: "The same attention to detail as the apps." },
              { title: "Fair pricing", desc: "Pay once or free. No ads, no gotchas." },
              { title: "Built to last", desc: "Maintained and updated. Not abandoned after launch." },
            ].map(({ title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, marginBottom: "6px" }}>{title}</h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
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
