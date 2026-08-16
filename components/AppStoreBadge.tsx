import type { CSSProperties } from "react";

type AppStoreBadgeProps = {
  /** `lg` is the hero badge on an app page; `sm` is the one inside a shelf card. */
  size?: "sm" | "lg";
  /** Set once the app is live and `href` is a real App Store URL. */
  href?: string;
  style?: CSSProperties;
};

/**
 * Stand-in for Apple's official "Download on the App Store" badge.
 *
 * TODO before launch: replace with the official SVG from Apple's Marketing
 * Tools site and pass the real product URL. The footprint here matches the
 * badge's, so that swap is a drop-in rather than a reflow.
 *
 * While Renew+ is unreleased this renders as a <span>, not a link, and reads
 * "Coming soon to the App Store". A badge styled like a button that goes
 * nowhere is worse than one that plainly does not — and the Apple glyph is
 * deliberately absent, both because the mark belongs on Apple's own asset and
 * because the  character it is usually faked with renders as tofu on every
 * non-Apple platform.
 */
export default function AppStoreBadge({ size = "lg", href, style }: AppStoreBadgeProps) {
  const large = size === "lg";

  const content = (
    <span style={{ display: "grid" }}>
      <span style={{ fontSize: "var(--type-micro-size)", letterSpacing: "var(--type-micro-track)",
  lineHeight: "var(--type-micro-lh)", textTransform: "uppercase", opacity: 0.75 }}>
        {href ? "Download on the" : "Coming soon to the"}
      </span>
      <span style={{ fontSize: large ? "16px" : "15px", fontWeight: 600, letterSpacing: "-0.01em" }}>
        App Store
      </span>
    </span>
  );

  const shared: CSSProperties = {
    padding: large ? "13px 20px" : "12px 18px",
    ...style,
  };

  if (href) {
    return (
      <a href={href} className="appstore-badge" style={shared}>
        {content}
      </a>
    );
  }

  return (
    <span className="appstore-badge" style={shared}>
      {content}
    </span>
  );
}
