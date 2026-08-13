"use client";

import * as React from "react";

/**
 * React's `<ViewTransition>` only exists on the experimental channel, which
 * Next aliases in when `experimental.viewTransition` is set (next.config.ts).
 * `@types/react` doesn't declare it, and on the stable channel the export is
 * simply absent — so read it off React at runtime and fall back to rendering
 * the children bare.
 *
 * The fallback is the same degradation a browser without the View Transitions
 * API gets: the device still renders, the navigation just cuts. Nothing here is
 * load-bearing for content.
 */

type AnimationMap = Record<string, string> & { default?: string };
type Animation = string | AnimationMap;

export type ViewTransitionProps = {
  children: React.ReactNode;
  /** Shared identity. The same name on two pages is what produces a morph. */
  name?: string;
  /** Class applied when the element is shared across both pages (morphing). */
  share?: Animation;
  /** Class applied when the element only exists on the incoming page. */
  enter?: Animation;
  /** Class applied when the element only exists on the outgoing page. */
  exit?: Animation;
  /** Class applied on unrelated transitions — "none" opts out. */
  default?: Animation;
};

const ReactViewTransition = (
  React as unknown as {
    ViewTransition?: React.ComponentType<ViewTransitionProps>;
  }
).ViewTransition;

export const supportsViewTransition = Boolean(ReactViewTransition);

export default function ViewTransition({ children, ...props }: ViewTransitionProps) {
  if (!ReactViewTransition) return <>{children}</>;
  return <ReactViewTransition {...props}>{children}</ReactViewTransition>;
}
