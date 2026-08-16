"use client";

import { createElement, useCallback, useState, type CSSProperties, type ReactNode } from "react";

// Elements that can carry a reveal. Kept as a union rather than a generic
// polymorphic type because the alternative is a page of type gymnastics to
// support tags this design never uses.
type RevealTag =
  | "div" | "section" | "article" | "header" | "footer" | "aside"
  | "h1" | "h2" | "h3" | "p" | "span" | "a" | "li" | "figure";

type RevealProps = {
  children: ReactNode;
  /** Position within the section, restarting at 1 per section. Drives the stagger. */
  index?: number;
  as?: RevealTag;
  className?: string;
  style?: CSSProperties;
  href?: string;
  id?: string;
  "aria-label"?: string;
};

// The stagger caps at six. Past that the delay is longer than the animation
// itself and the last item in a long row arrives after the reader has already
// looked away.
const MAX_STAGGER = 6;
const STEP_SECONDS = 0.09;

/**
 * Nearest ancestor that scrolls horizontally, or null. Used to redirect the
 * observer off an element that can never intersect the viewport on its own.
 */
function horizontalScrollHost(node: HTMLElement): HTMLElement | null {
  let parent = node.parentElement;
  while (parent) {
    const overflowX = getComputedStyle(parent).overflowX;
    if (
      (overflowX === "auto" || overflowX === "scroll") &&
      parent.scrollWidth > parent.clientWidth
    ) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
}

/**
 * Reveals its child once, when it first enters the viewport, and then stops
 * watching it — the animation never replays on scroll-back.
 *
 * The hidden starting state lives in the `.reveal` class rather than being
 * written here on mount, so there is no frame where the content paints at full
 * opacity and then jumps back down before the observer attaches. That same CSS
 * carries the two opt-outs: `scripting: none` and `prefers-reduced-motion` both
 * render the element at its final state, which is why this component never
 * needs to check either.
 *
 * The observer is wired in a callback ref rather than an effect. That is not
 * style: a callback ref runs when the node actually attaches, so there is no
 * window between paint and observation, and React 19 runs the returned cleanup
 * when the node detaches.
 */
export default function Reveal({
  children,
  index = 1,
  as = "div",
  className,
  style,
  ...rest
}: RevealProps) {
  const [revealed, setRevealed] = useState(false);

  const observe = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    // No observer support: show the element rather than leaving it stranded at
    // opacity 0 forever.
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    // A card inside a horizontal rail can sit entirely off to the right, where
    // it never intersects the viewport — so it would stay at opacity 0 until
    // the reader swiped it into view, and then fade in underneath their thumb.
    // Watch the rail instead: the whole row reveals together when the row
    // arrives, and the stagger still reads because the cards are side by side.
    const target = horizontalScrollHost(node) ?? node;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setRevealed(true);
          io.disconnect();
        }
      },
      // The bottom inset means an element reveals once it is properly inside
      // the viewport rather than the instant its top edge clips the fold, so
      // the motion happens where the reader is actually looking.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  const delay = (Math.min(index, MAX_STAGGER) - 1) * STEP_SECONDS;

  return createElement(
    as,
    {
      ref: observe,
      className: className ? `reveal ${className}` : "reveal",
      "data-revealed": revealed ? "true" : undefined,
      style: { transitionDelay: `${delay}s`, ...style },
      ...rest,
    },
    children,
  );
}
