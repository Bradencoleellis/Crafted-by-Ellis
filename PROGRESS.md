# Crafted by Ellis — Website Progress Log

Working notes for autonomous/looped sessions on this repo. Check this file
before starting work so we don't duplicate another session's changes, and
update it (tick items, add new findings) whenever you finish a pass.

Branch in use: `claude/crafted-co-progress-7zu4gg`. No open PRs/issues as of
2026-07-05 — this file is the coordination point until one exists.

## Done

- [x] Fixed `var(--color-accent)` usage across `app/about`, `app/contact`,
      `app/terms`, `app/privacy`, `app/renewplus` — CLAUDE.md forbids this
      token; replaced with `var(--rust)` everywhere (2026-07-05).
- [x] Fixed pricing-tier name drift on the Renew+ marketing page
      (`app/renewplus/page.tsx`): it still showed the old Silver/Gold/Platinum
      names and limits after commit `af6405a` renamed the tiers to
      Spark/Rise/Thrive in the ToS. Updated the pricing cards and FAQ copy to
      match. Kept prices ($4.99/$10.99) and unverified figures (recipe
      counts, AI generation limits, receipt scans) as they were — see "Needs
      verification" below (2026-07-05).
- [x] Renamed the same tiers (Silver/Gold/Platinum → Spark/Rise/Thrive) in the
      generic `/terms` page subscription list for consistency (2026-07-05).
- [x] Fixed two unescaped apostrophes in `app/page.tsx` that failed
      `npm run lint` (react/no-unescaped-entities) (2026-07-05).

## Needs verification (don't guess — ask Braden or check App Store Connect)

- [ ] `app/renewplus/page.tsx` pricing cards list specific numbers (recipe
      counts, meal-planning weeks, AI generation/receipt-scan limits per
      month, prices) that aren't stated in the ToS (`app/renewplus/terms`)
      and weren't verifiable from this repo. They were left unchanged during
      the tier rename — confirm they still match the real in-app limits.

## Known but out of scope for a quick pass

- [ ] `app/terms` and `app/privacy` (generic Crafted by Ellis legal pages)
      are structurally a much shorter/older doc than `app/renewplus/terms`
      and `app/renewplus/privacy` (the authoritative, actively-maintained
      Renew+ legal docs per CLAUDE.md). Dates, contact-only-one-email intent,
      and depth of coverage differ. Only the tier names were reconciled;
      a full rewrite would be a bigger, separate task — check with Braden
      before doing a full pass, since these are customer-facing legal text.
- [ ] Do NOT touch `app/renewplus/terms` or `app/renewplus/privacy` content
      without also bumping `AppConstants.Legal.currentTosVersion` in the iOS
      app repo (`/Users/bradenellis/RenewPlus/RenewPlus/...`) per CLAUDE.md —
      that repo isn't in this session's scope, so flag it for Braden rather
      than silently skipping.
- [ ] `app/contact` form is a client-side stub (`setTimeout` fake send, see
      comment "For now, just simulate sending") — no real email backend
      wired up yet.
- [ ] Home, Apps, Games pages all have a single real product (Renew+) plus
      "more coming" placeholders — expected, not a bug.

## How to keep this file useful

- Tick a box the moment you finish that item, in the same commit.
- If you find a new bug/inconsistency, add it under "Known but out of
  scope" or a new dated entry rather than just fixing silently, so the next
  session has a paper trail.
