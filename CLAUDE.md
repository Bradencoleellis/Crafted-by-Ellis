@AGENTS.md

# Crafted by Ellis — Website (crafted-by-ellis)

Next.js App Router project. Read AGENTS.md first — this version has breaking changes from standard Next.js.

## Key Paths

| What | Where |
|---|---|
| All pages | `app/` (App Router — no `src/`, no `pages/`) |
| Global styles | `app/globals.css` |
| Root layout | `app/layout.tsx` |
| Renew+ landing | `app/renewplus/page.tsx` |
| Renew+ Terms of Service | `app/renewplus/terms/page.tsx` |
| Renew+ Privacy Policy | `app/renewplus/privacy/page.tsx` |
| Other pages | `app/about/`, `app/apps/`, `app/contact/`, `app/games/` |

## Dev Server

```bash
cd "/Users/bradenellis/Vault/Vault/Projects/Crafted by Ellis/crafted-by-ellis"
npm run dev
```

Runs on `http://localhost:3000`. Always start the dev server and verify in browser before reporting UI changes done.

## Styling Rules

- **All styles are inline React `CSSProperties`** — no Tailwind, no CSS modules on page files
- **CSS variables** (defined in `globals.css`) — always use these, never hardcode colours:
  - `var(--rust)` — brand accent (links, labels, callout borders)
  - `var(--color-background)` — page background
  - `var(--color-background-secondary)` — card/callout fill
  - `var(--color-text-primary)` — body text
  - `var(--color-text-secondary)` — secondary text
  - `var(--color-text-tertiary)` — captions, metadata
  - `var(--color-border)` — card borders
  - `var(--radius-lg)`, `var(--radius-md)` — border radius tokens
- **Reusable style objects** at the bottom of each page file (e.g. `labelStyle`, `h2Style`, `contentStyle`) — follow the existing pattern, don't inline one-off styles for repeated elements
- **`className="grid-bg"`** — used on hero sections for the dot-grid background
- **Anything with a `:hover`, `:active`, `:focus-visible` or `:user-invalid` state must be a class in `globals.css`, not an inline style.** Inline styles can't express pseudo-classes, and an inline declaration beats the stylesheet on specificity — `outline: "none"` in a style object silently killed the site-wide focus ring on every contact-form field. Existing shared classes: `.btn-primary`, `.btn-secondary`, `.glass-card`, `.nav-link`, `.mobile-menu-link`, `.icon-button`, `.footer-link`, `.input-field`, `.label-chip`, `.orb`
- **Motion tokens** — `var(--ease-firm)` is the default curve (critically damped, no overshoot) and `var(--ease-firm-reverse)` is its mirror for the return leg of a reversible transition. Press feedback uses `var(--dur-press)` (100ms); state changes `var(--dur-state)`; spatial moves `var(--dur-spatial)`. `--spring-bounce` overshoots and is intentionally unused — reserve it for genuinely gesture-driven motion
- **Display headings** — `.display` alone is the mid scale (40–64px). Add `.display-hero` for 48–88px and `.display-section` for 28–44px; each step sets its own Fraunces `opsz` and tracking. Don't apply one tracking value across the scale

## Page Structure Pattern (legal/content pages)

Every content page follows this exact two-section structure:

```tsx
// Section 1: Hero header (grid-bg, padding 80px 0 40px)
<section style={{ padding: "80px 0 40px", background: "var(--color-background)" }} className="grid-bg">
  <div className="container-page" style={{ maxWidth: "800px" }}>
    <Link href="/renewplus">← Renew+</Link>   {/* back link in --rust */}
    <p style={labelStyle}>Legal · Renew+</p>   {/* UPPERCASE label */}
    <h1>Page Title</h1>
    <p>Version date / subtitle</p>
  </div>
</section>

// Section 2: Content (padding 60px 0 96px)
<section style={{ padding: "60px 0 96px", background: "var(--color-background)" }}>
  <div className="container-page" style={{ maxWidth: "800px" }}>
    <div style={contentStyle}>
      {/* content */}
      {/* Always end with the "Plain English" summary box */}
    </div>
  </div>
</section>
```

## Common Mistakes to Avoid

- **Prefer `var(--rust)` over `var(--color-accent)`** — both work (`--color-accent` is aliased to `--rust` in `globals.css`), but `--rust` is the name used in most of the codebase. Don't "fix" existing `--color-accent` usages; they resolve correctly
- **Do NOT create new CSS files** for page-level styles — inline `CSSProperties` only
- **Do NOT use `pages/` directory** — this is App Router, everything is in `app/`
- **Do NOT skip the dev server check** — always verify pages render before reporting done
- **Always use `&ldquo;` / `&rdquo;`** for curly quotes and `&apos;` for apostrophes in JSX — raw quotes cause lint warnings
- **`container-page`** is the standard width-constrained wrapper class — use it, don't invent new layout wrappers

## Legal Pages — Important Context

The Renew+ ToS and Privacy Policy were last updated **15 June 2026** (version string `"2026-06-15"`).

This version string is also hardcoded in the iOS app at:
`/Users/bradenellis/Vault/Vault/Projects/RenewPlus/RenewPlus/RenewPlus/Utilities/AppConstants.swift` → `AppConstants.Legal.currentTosVersion`

**Whenever the legal pages are updated on this website, also bump `currentTosVersion` in the iOS app** — this forces existing users through the in-app consent gate on next login.

Contact email used on Renew+ legal pages (only one real address):
- All contact (support, privacy, legal): `braden@craftedbyellis.com`

## Project Locations

Everything lives under the Obsidian vault. The old `/Users/bradenellis/RenewPlus/…` and
`/Users/bradenellis/crafted-by-ellis` paths do **not** exist — don't reintroduce them.

| What | Where |
|---|---|
| This website | `/Users/bradenellis/Vault/Vault/Projects/Crafted by Ellis/crafted-by-ellis/` |
| RenewPlus iOS app | `/Users/bradenellis/Vault/Vault/Projects/RenewPlus/RenewPlus/` |
| Legal source-of-truth markdown | `/Users/bradenellis/Vault/Vault/Projects/RenewPlus/RenewPlus/Legal/` |
