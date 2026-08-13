import type { CSSProperties, ReactNode } from "react";
import Device, { type DeviceVariant } from "./Device";
import ViewTransition from "./ViewTransition";

/**
 * A device that keeps its identity across a route change.
 *
 * Two pages rendering a DeviceStage with the same `name` produce a morph: the
 * browser matches the elements, then animates position, size and shape between
 * them. That is what carries the small phone on a shelf card up into the hero
 * of the app's own page — one object moving, rather than two swapping.
 *
 * Because Device is the same structure for both variants, the same mechanism
 * will morph a phone into a laptop when the incoming page asks for one.
 *
 * `share="device-morph"` names the transition so globals.css can time it.
 * Without View Transitions support the device still renders; the change cuts.
 */

export type DeviceStageProps = {
  /** Shared identity. Must match on both pages for the morph to happen. */
  name: string;
  variant: DeviceVariant;
  width: number;
  children?: ReactNode;
  glow?: string;
  style?: CSSProperties;
};

export default function DeviceStage({
  name,
  variant,
  width,
  children,
  glow,
  style,
}: DeviceStageProps) {
  return (
    <ViewTransition name={name} share="device-morph">
      <Device variant={variant} width={width} glow={glow} style={style}>
        {children}
      </Device>
    </ViewTransition>
  );
}
