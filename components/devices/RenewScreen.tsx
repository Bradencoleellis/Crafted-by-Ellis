import type { CSSProperties } from "react";

/**
 * The Renew+ home screen, drawn rather than screenshotted.
 *
 * Vector beats a PNG here for three reasons: it stays crisp when the device
 * morphs from a 168px shelf card up to a 300px hero, it costs nothing to ship,
 * and it can never drift out of sync with the app's palette the way a stale
 * capture does. Structure and copy follow the real HomeView — "Today", the
 * "Start here" checklist with its "N of M done" line, then the focus rows.
 *
 * Everything scales off `w`, the screen width in px, so one component serves
 * every size the device is used at. Below ~150px the secondary rows are
 * dropped: at that size they are texture, not information, and the noise costs
 * more than the detail buys.
 */

export default function RenewScreen({ w }: { w: number }) {
  const u = w / 100; // one unit = 1% of screen width
  const dense = w >= 150;

  const wrap: CSSProperties = {
    width: "100%",
    height: "100%",
    background: "var(--renew-screen-bg)",
    display: "flex",
    flexDirection: "column",
    padding: `${5.5 * u}px ${6 * u}px ${3 * u}px`,
    boxSizing: "border-box",
    fontFamily: "var(--font-sans, system-ui, sans-serif)",
    overflow: "hidden",
  };

  const statusRow: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: `${4.2 * u}px`,
    fontWeight: 600,
    color: "var(--renew-screen-ink)",
    marginBottom: `${6 * u}px`,
  };

  const title: CSSProperties = {
    fontSize: `${10 * u}px`,
    fontWeight: 650,
    letterSpacing: `${-0.03 * u}px`,
    color: "var(--renew-screen-ink)",
    lineHeight: 1,
    marginBottom: `${1.6 * u}px`,
  };

  const sub: CSSProperties = {
    fontSize: `${4 * u}px`,
    color: "var(--renew-screen-ink-2)",
    marginBottom: `${5.5 * u}px`,
  };

  const card: CSSProperties = {
    background: "var(--renew-screen-card)",
    border: "1px solid var(--renew-screen-border)",
    borderRadius: `${5 * u}px`,
    padding: `${4.5 * u}px`,
    marginBottom: `${3.4 * u}px`,
  };

  const bar: CSSProperties = {
    height: `${2.4 * u}px`,
    borderRadius: `${1.2 * u}px`,
    background: "var(--renew-screen-sunk)",
    overflow: "hidden",
    marginTop: `${3.2 * u}px`,
  };

  const row: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: `${3 * u}px`,
    padding: `${3.2 * u}px 0`,
    borderBottom: "1px solid var(--renew-screen-border)",
  };

  const dot = (filled: boolean): CSSProperties => ({
    width: `${4.6 * u}px`,
    height: `${4.6 * u}px`,
    borderRadius: "50%",
    flexShrink: 0,
    background: filled ? "var(--renew-accent)" : "transparent",
    border: filled ? "none" : `${0.9 * u}px solid var(--renew-screen-ink-3)`,
  });

  const line = (pct: number, strong = false): CSSProperties => ({
    height: `${strong ? 3 : 2.4}px`,
    width: `${pct}%`,
    borderRadius: `${1.5 * u}px`,
    background: strong ? "var(--renew-screen-ink)" : "var(--renew-screen-ink-3)",
    opacity: strong ? 0.82 : 0.5,
  });

  return (
    <div style={wrap}>
      <div style={statusRow}>
        <span>9:41</span>
        <span style={{ letterSpacing: `${0.6 * u}px`, opacity: 0.55 }}>▮▮▮</span>
      </div>

      <div style={title}>Today</div>
      <div style={sub}>Tuesday 12 August</div>

      {/* "Start here" — the real onboarding checklist, amber progress */}
      <div style={card}>
        <div
          style={{
            fontSize: `${4.6 * u}px`,
            fontWeight: 620,
            color: "var(--renew-screen-ink)",
          }}
        >
          Start here
        </div>
        <div
          style={{
            fontSize: `${3.6 * u}px`,
            color: "var(--renew-screen-ink-2)",
            marginTop: `${1.2 * u}px`,
          }}
        >
          2 of 5 done
        </div>
        <div style={bar}>
          <div
            style={{
              width: "40%",
              height: "100%",
              background: "var(--renew-accent)",
              borderRadius: "inherit",
            }}
          />
        </div>
      </div>

      {dense && (
        <div style={{ ...card, paddingTop: `${3 * u}px`, paddingBottom: `${1 * u}px` }}>
          <div
            style={{
              fontSize: `${3.4 * u}px`,
              fontWeight: 600,
              letterSpacing: `${0.5 * u}px`,
              textTransform: "uppercase",
              color: "var(--renew-screen-ink-3)",
              marginBottom: `${1.4 * u}px`,
            }}
          >
            Focus today
          </div>
          {[true, false, false].map((done, i) => (
            <div
              key={i}
              style={{
                ...row,
                borderBottom: i === 2 ? "none" : row.borderBottom,
              }}
            >
              <span style={dot(done)} />
              <span style={line(i === 0 ? 62 : i === 1 ? 78 : 48, i === 0)} />
            </div>
          ))}
        </div>
      )}

      {/* Tab bar. The active tab is the only amber in the chrome — the app's
          colour system permits exactly one accent, so the bar cannot compete
          with the progress fill above it. */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: `${3 * u}px`,
          borderTop: "1px solid var(--renew-screen-border)",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              width: `${5 * u}px`,
              height: `${5 * u}px`,
              borderRadius: `${1.6 * u}px`,
              background:
                i === 0 ? "var(--renew-accent)" : "var(--renew-screen-ink-3)",
              opacity: i === 0 ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
