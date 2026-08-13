import type { CSSProperties, ReactNode } from "react";

/**
 * One device, two variants, drawn from real hardware measurements.
 *
 * Phone and laptop are deliberately the *same* element structure with different
 * numbers, because that is what lets a shared <ViewTransition> morph one into
 * the other rather than crossfading two unrelated pictures. Every value below is
 * a fraction of the body width, so a single `width` prop scales the whole thing
 * and the proportions stay honest at any size.
 *
 * Measurements (mm), taken from the display area rather than guessed — get the
 * bezels wrong and screen content is letterboxed or subtly stretched, which
 * reads as "fake" without the viewer being able to say why:
 *   iPhone 15 Pro  body 70.6 x 146.6, corner 11.8, display 64.9 x 140.7  (0.4613)
 *   MacBook Pro 14 lid  312.6 x 221.2, corner 5.5, display 304.1 x 197.5 (1.5397)
 *
 * Chrome colours come from --device-* tokens in globals.css. They are not part
 * of the paper/ink ramp because this is a physical object, not a brand surface.
 */

export type DeviceVariant = "phone" | "laptop";

type Geometry = {
  /** body height as a fraction of body width */
  ratio: number;
  corner: number;
  bezelX: number;
  bezelTop: number;
  bezelBottom: number;
  screenCorner: number;
  /** laptop deck thickness; 0 for the phone */
  deck: number;
  /** dark cutout: Dynamic Island on the phone, camera notch on the lid */
  cutoutW: number;
  cutoutH: number;
};

const GEOMETRY: Record<DeviceVariant, Geometry> = {
  phone: {
    ratio: 146.6 / 70.6,
    corner: 11.8 / 70.6,
    bezelX: 2.85 / 70.6,
    bezelTop: 2.95 / 70.6,
    bezelBottom: 2.95 / 70.6,
    screenCorner: 8.95 / 70.6,
    deck: 0,
    cutoutW: 26 / 70.6,
    cutoutH: 7.6 / 70.6,
  },
  laptop: {
    ratio: 221.2 / 312.6,
    corner: 5.5 / 312.6,
    bezelX: 4.25 / 312.6,
    bezelTop: 5.5 / 312.6,
    bezelBottom: 18.2 / 312.6,
    screenCorner: 1.25 / 312.6,
    deck: 9.7 / 312.6,
    cutoutW: 42 / 312.6,
    cutoutH: 5.2 / 312.6,
  },
};

/**
 * Display width for a given body width. Screen content scales off the display
 * area, not the body, or it drifts by the bezel — small on a phone, very
 * visible on a laptop where the chin is 18mm.
 */
export function displayWidth(variant: DeviceVariant, width: number): number {
  return width - 2 * (width * GEOMETRY[variant].bezelX);
}

export type DeviceProps = {
  variant: DeviceVariant;
  /** Body width in px. Everything else derives from it. */
  width: number;
  /** Screen content. Sized to the display area, so give it the real aspect. */
  children?: ReactNode;
  /** Colour of the glow cast behind the device, e.g. an app accent. */
  glow?: string;
  style?: CSSProperties;
  className?: string;
};

export default function Device({
  variant,
  width,
  children,
  glow,
  style,
  className,
}: DeviceProps) {
  const g = GEOMETRY[variant];
  const bodyH = width * g.ratio;
  const deckH = width * g.deck;
  const screenW = width - 2 * (width * g.bezelX);
  const screenH = bodyH - width * g.bezelTop - width * g.bezelBottom;

  const wrapStyle: CSSProperties = {
    position: "relative",
    width: `${width}px`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...style,
  };

  const bodyStyle: CSSProperties = {
    position: "relative",
    width: `${width}px`,
    height: `${bodyH}px`,
    borderRadius: `${width * g.corner}px`,
    background: "var(--device-body)",
    // Hairline first, long soft shadow second — the elevation pattern the rest
    // of the site uses. A tight dark shadow here would date the whole page.
    boxShadow: [
      "inset 0 0 0 1px var(--device-edge)",
      "0 1px 2px rgba(25,24,23,0.10)",
      `0 ${Math.round(width * 0.07)}px ${Math.round(width * 0.16)}px -${Math.round(
        width * 0.06,
      )}px rgba(25,24,23,0.30)`,
    ].join(", "),
    display: "flex",
    alignItems: variant === "phone" ? "center" : "flex-start",
    justifyContent: "center",
    paddingTop: `${width * g.bezelTop}px`,
    flexShrink: 0,
  };

  const screenStyle: CSSProperties = {
    position: "relative",
    width: `${screenW}px`,
    height: `${screenH}px`,
    borderRadius: `${width * g.screenCorner}px`,
    overflow: "hidden",
    background: "var(--device-screen)",
    // The lit edge of the glass, same trick as the site's glass cards.
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
  };

  const cutoutStyle: CSSProperties = {
    position: "absolute",
    top: variant === "phone" ? `${width * g.bezelTop * 2.1}px` : 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: `${width * g.cutoutW}px`,
    height: `${width * g.cutoutH}px`,
    borderRadius: `${width * g.cutoutH}px`,
    background: "var(--device-cutout)",
    zIndex: 2,
  };

  // Front edge is a touch wider than the lid, which is what reads as a hinge
  // rather than a slab. The notch is the finger groove.
  const deckStyle: CSSProperties = {
    position: "relative",
    width: `${width * 1.04}px`,
    height: `${deckH}px`,
    borderRadius: `0 0 ${deckH * 0.55}px ${deckH * 0.55}px`,
    background: "var(--device-deck)",
    boxShadow: [
      "inset 0 1px 0 var(--device-edge)",
      `0 ${Math.round(deckH * 0.8)}px ${Math.round(deckH * 2.4)}px rgba(25,24,23,0.28)`,
    ].join(", "),
    flexShrink: 0,
  };

  const grooveStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: `${width * 0.14}px`,
    height: `${deckH * 0.5}px`,
    borderRadius: `0 0 ${deckH}px ${deckH}px`,
    background: "var(--device-cutout)",
    opacity: 0.5,
  };

  return (
    <div style={wrapStyle} className={className}>
      {glow && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: `-${width * 0.18}px`,
            borderRadius: "50%",
            background: glow,
            filter: `blur(${Math.round(width * 0.18)}px)`,
            opacity: 0.5,
            zIndex: -1,
            pointerEvents: "none",
          }}
        />
      )}

      <div style={bodyStyle}>
        <div style={screenStyle}>{children}</div>
        <div style={cutoutStyle} aria-hidden="true" />
      </div>

      {variant === "laptop" && (
        <div style={deckStyle} aria-hidden="true">
          <div style={grooveStyle} />
        </div>
      )}
    </div>
  );
}
