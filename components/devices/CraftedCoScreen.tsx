import type { CSSProperties } from "react";

/**
 * The Crafted Co jobs board, drawn rather than screenshotted.
 *
 * Same reasoning as RenewScreen: vector survives the morph from a 210px shelf
 * card up to a 620px hero, ships nothing, and cannot drift out of sync with the
 * palette the way a stale capture does.
 *
 * This one is laid out for the laptop's 1.54 aspect rather than the phone's
 * 0.46, so it reads as a *desktop* product: a rail down the left, a working
 * area to the right. Rebuilding the phone layout wide would have produced a
 * stretched phone, which is the tell that a mockup was resized rather than
 * designed.
 *
 * Palette is the Crafted Co earth set (green/ochre), never Renew+ orange —
 * these are two different products sharing one shelf, and the colour is the
 * fastest way a reader tells them apart.
 *
 * Everything scales off `w`, the screen width in px. Below ~260px the job rows
 * lose their secondary line and the summary strip drops: at shelf-card size
 * they are texture, not information.
 */

export default function CraftedCoScreen({ w }: { w: number }) {
  const u = w / 100; // one unit = 1% of screen width
  const dense = w >= 260;

  const wrap: CSSProperties = {
    width: "100%",
    height: "100%",
    background: "var(--co-screen-bg)",
    display: "flex",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans, system-ui, sans-serif)",
    overflow: "hidden",
  };

  const rail: CSSProperties = {
    width: `${22 * u}px`,
    flexShrink: 0,
    background: "var(--co-screen-rail)",
    borderRight: "1px solid var(--co-screen-border)",
    padding: `${3.4 * u}px ${2.6 * u}px`,
    display: "flex",
    flexDirection: "column",
    gap: `${2.2 * u}px`,
    boxSizing: "border-box",
  };

  const brandRow: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: `${1.6 * u}px`,
    marginBottom: `${2.6 * u}px`,
  };

  const brandMark: CSSProperties = {
    width: `${4.2 * u}px`,
    height: `${4.2 * u}px`,
    borderRadius: `${1.2 * u}px`,
    background: "var(--co-accent)",
    flexShrink: 0,
  };

  const brandWord: CSSProperties = {
    height: `${1.9 * u}px`,
    width: `${11 * u}px`,
    borderRadius: `${0.9 * u}px`,
    background: "var(--co-screen-ink-3)",
  };

  const navItem = (active: boolean): CSSProperties => ({
    display: "flex",
    alignItems: "center",
    gap: `${1.6 * u}px`,
    padding: `${1.5 * u}px ${1.4 * u}px`,
    borderRadius: `${1.4 * u}px`,
    background: active ? "var(--co-accent-tint)" : "transparent",
  });

  const navDot = (active: boolean): CSSProperties => ({
    width: `${2.2 * u}px`,
    height: `${2.2 * u}px`,
    borderRadius: `${0.7 * u}px`,
    flexShrink: 0,
    background: active ? "var(--co-accent)" : "var(--co-screen-ink-3)",
  });

  const navWord = (pct: number, active: boolean): CSSProperties => ({
    height: `${1.6 * u}px`,
    width: `${pct}%`,
    borderRadius: `${0.8 * u}px`,
    background: active ? "var(--co-accent-deep)" : "var(--co-screen-ink-3)",
    opacity: active ? 0.9 : 0.65,
  });

  const main: CSSProperties = {
    flex: 1,
    padding: `${3.6 * u}px ${4 * u}px`,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    boxSizing: "border-box",
  };

  const headRow: CSSProperties = {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: `${3.2 * u}px`,
  };

  const title: CSSProperties = {
    fontSize: `${5.4 * u}px`,
    fontWeight: 650,
    letterSpacing: `${-0.04 * u}px`,
    color: "var(--co-screen-ink)",
    lineHeight: 1,
  };

  const pill: CSSProperties = {
    fontSize: `${2.4 * u}px`,
    fontWeight: 600,
    color: "var(--co-screen-inverse)",
    background: "var(--co-accent)",
    borderRadius: `${1.4 * u}px`,
    padding: `${1.1 * u}px ${2.2 * u}px`,
  };

  const jobCard: CSSProperties = {
    background: "var(--co-screen-card)",
    border: "1px solid var(--co-screen-border)",
    borderRadius: `${2.2 * u}px`,
    padding: `${2.8 * u}px ${3 * u}px`,
    marginBottom: `${2 * u}px`,
    display: "flex",
    alignItems: "center",
    gap: `${2.6 * u}px`,
  };

  const jobBody: CSSProperties = { flex: 1, minWidth: 0 };

  const jobName = (pct: number): CSSProperties => ({
    height: `${2.1 * u}px`,
    width: `${pct}%`,
    borderRadius: `${1 * u}px`,
    background: "var(--co-screen-ink)",
    opacity: 0.82,
  });

  const jobMeta = (pct: number): CSSProperties => ({
    height: `${1.5 * u}px`,
    width: `${pct}%`,
    borderRadius: `${0.8 * u}px`,
    background: "var(--co-screen-ink-3)",
    marginTop: `${1.4 * u}px`,
  });

  // Progress as a meter rather than a status word — §6.8 of the standard, and
  // the same move the Renew+ checklist makes.
  const meterTrack: CSSProperties = {
    width: `${20 * u}px`,
    height: `${1.8 * u}px`,
    borderRadius: `${0.9 * u}px`,
    background: "var(--co-screen-sunk)",
    overflow: "hidden",
    flexShrink: 0,
  };

  const meterFill = (pct: number, ochre = false): CSSProperties => ({
    width: `${pct}%`,
    height: "100%",
    borderRadius: `${0.9 * u}px`,
    background: ochre ? "var(--co-ochre)" : "var(--co-accent)",
  });

  const summary: CSSProperties = {
    marginTop: "auto",
    display: "flex",
    gap: `${2 * u}px`,
  };

  const statTile: CSSProperties = {
    flex: 1,
    background: "var(--co-screen-card)",
    border: "1px solid var(--co-screen-border)",
    borderRadius: `${2 * u}px`,
    padding: `${2.2 * u}px ${2.4 * u}px`,
  };

  const statNum: CSSProperties = {
    fontSize: `${3.6 * u}px`,
    fontWeight: 650,
    color: "var(--co-screen-ink)",
    lineHeight: 1,
    fontVariantNumeric: "tabular-nums",
  };

  const statLabel: CSSProperties = {
    height: `${1.3 * u}px`,
    width: "62%",
    borderRadius: `${0.7 * u}px`,
    background: "var(--co-screen-ink-3)",
    marginTop: `${1.4 * u}px`,
  };

  const jobs: Array<{ name: number; meta: number; pct: number; ochre?: boolean }> = [
    { name: 58, meta: 34, pct: 72 },
    { name: 44, meta: 28, pct: 41, ochre: true },
    { name: 66, meta: 38, pct: 18 },
  ];

  return (
    <div style={wrap} aria-hidden="true">
      <div style={rail}>
        <div style={brandRow}>
          <div style={brandMark} />
          {dense && <div style={brandWord} />}
        </div>
        {[
          { w: 74, active: true },
          { w: 58, active: false },
          { w: 66, active: false },
          { w: 50, active: false },
        ].map((item, i) => (
          <div key={i} style={navItem(item.active)}>
            <div style={navDot(item.active)} />
            <div style={navWord(item.w, item.active)} />
          </div>
        ))}
      </div>

      <div style={main}>
        <div style={headRow}>
          <div style={title}>Jobs</div>
          <div style={pill}>New quote</div>
        </div>

        {jobs.map((job, i) => (
          <div key={i} style={jobCard}>
            <div style={jobBody}>
              <div style={jobName(job.name)} />
              {dense && <div style={jobMeta(job.meta)} />}
            </div>
            <div style={meterTrack}>
              <div style={meterFill(job.pct, job.ochre)} />
            </div>
          </div>
        ))}

        {dense && (
          <div style={summary}>
            {["12", "3", "8"].map((n, i) => (
              <div key={i} style={statTile}>
                <div style={statNum}>{n}</div>
                <div style={statLabel} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
