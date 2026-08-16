import Link from "next/link";

interface EllisLogoProps {
  /** Font size of "ellis" in px. Tag scales proportionally. Default 36. */
  size?: number;
  href?: string;
  /** Pass true when placing on a LIGHT background (uses ink #1b1612).
   *  Default false = dark background (uses paper #f6f2ea). */
  onLight?: boolean;
  /** Hide the "crafted — by" tag. Auto-hidden below ~80px name size. */
  hideTag?: boolean;
}

const RUST = "#9a4a2a";

export default function EllisLogo({
  size = 36,
  href = "/",
  onLight = false,
  hideTag = false,
}: EllisLogoProps) {
  const fg = onLight ? "#1b1612" : "#f6f2ea";
  // Tag stays legible: clamp between 8px and 12px regardless of name size
  const tagSize = Math.max(8, Math.min(12, Math.round(size * 0.072 * 1.6)));
  const gap = Math.round(size * 0.32);
  const showTag = !hideTag && size >= 24;

  const mark = (
    <span
      aria-label="Crafted by Ellis"
      style={{
        display: "inline-grid",
        gridTemplateColumns: showTag ? "auto auto" : "auto",
        alignItems: "end",
        gap: showTag ? `0 ${gap}px` : 0,
        color: fg,
        lineHeight: 1,
      }}
    >
      {showTag && (
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', monospace",
            fontSize: `${tagSize}px`,
            fontWeight: 500,
            lineHeight: "var(--type-micro-lh)",
            letterSpacing: "var(--type-micro-track)",
            textTransform: "uppercase",
            textAlign: "right",
            whiteSpace: "nowrap",
            opacity: 0.6,
            paddingBottom: "0.22em",
            color: fg,
          }}
        >
          crafted{" "}
          <span style={{ fontStyle: "normal", color: RUST, opacity: 1 }}>—</span>
          <br />
          by
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--font-fraunces), 'Fraunces', serif",
          fontWeight: 320,
          fontSize: `${size}px`,
          lineHeight: 0.82,
          letterSpacing: "-0.045em",
          fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 0',
          color: fg,
          display: "inline-block",
        }}
      >
        ellis
        <span style={{ color: RUST }}>.</span>
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <Link
      href={href}
      aria-label="Crafted by Ellis — home"
      style={{ textDecoration: "none", display: "inline-flex", alignItems: "end" }}
    >
      {mark}
    </Link>
  );
}

/** The "e." circle avatar — use for square contexts (favicon, profile, app icon). */
export function EllisAvatar({
  size = 40,
  onLight = false,
}: {
  size?: number;
  onLight?: boolean;
}) {
  const bg = onLight ? "#1b1612" : "#f6f2ea";
  const fg = onLight ? "#f6f2ea" : "#1b1612";

  return (
    <span
      aria-label="Crafted by Ellis"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        flexShrink: 0,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-fraunces), 'Fraunces', serif",
          fontWeight: 360,
          fontSize: `${Math.round(size * 0.72)}px`,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0',
          color: fg,
          transform: "translateY(8%)",
          display: "inline-block",
        }}
      >
        e<span style={{ color: RUST }}>.</span>
      </span>
    </span>
  );
}
