# KNI Academy — Design & Code Style Guide

This document governs visual design, component patterns, and code conventions for the KNI Academy website. All agents working on this project must follow these rules.

---

## 1. Design Identity

KNI Academy is a **TestAS preparation school**. The site must feel like a trustworthy educational institution — not a Silicon Valley SaaS startup, not a crypto dashboard, not an AI product landing page.

**Target feeling**: Clean, confident, professional. A school you'd trust your future with.

**Reference tone**: Think university admissions page meets a well-designed edtech product. Not Stripe. Not Linear. Not "AI-powered everything."

---

## 2. Color Palette

| Role | Value | Usage |
|---|---|---|
| **Primary text** | `text-slate-900` | Headlines, primary labels |
| **Secondary text** | `text-slate-600` | Body copy |
| **Muted text** | `text-slate-400` / `text-slate-500` | Captions, secondary labels, stats labels |
| **Accent** | `text-orange-600` / `bg-orange-600` | CTAs, key highlights, brand accent |
| **Accent hover** | `bg-orange-700` | Button hover states |
| **Background** | `bg-white` | Page sections |
| **Borders** | `border-slate-100` / `border-slate-200` | Cards, dividers |
| **Shadows** | `shadow-lg shadow-slate-200/50` | Elevated cards |

### What NOT to do with color
- **No gradient text.** Never use `bg-gradient-to-r … bg-clip-text text-transparent` on headings or labels. This is the single strongest signal of AI-generated SaaS slop.
- **No orange gradients on buttons.** Use solid `bg-orange-600`. No `from-orange-500 to-amber-500`.
- **No tinted backgrounds.** Don't use `bg-[#fffaf5]` or warm cream washes. Use `bg-white`.
- **No colored glow shadows on CTAs.** No `shadow-[0_8px_30px_rgba(255,145,77,0.5)]`. Use standard Tailwind shadows or none.
- **No orange-tinted geometry.** In any 3D or decorative elements, use `slate`/`gray` tones for structural elements (rings, lines). Reserve orange for data points only (e.g., a single dot).

---

## 3. Typography

- **Font**: Inter (loaded via `next/font/google`, variable `--font-inter`)
- **Headings**: `font-extrabold` or `font-bold`, `text-slate-900`, tight `tracking-tight`, tight `leading-[1.15]`
- **Body**: Regular weight (`font-normal` or `font-medium` at most), `text-slate-500` or `text-slate-600`
- **Labels/badges**: `text-xs`, `font-semibold`, `uppercase`, `tracking-wide` or `tracking-widest`
- **Stats values**: `font-bold text-slate-900` — no gradients, no special coloring

### Headline hierarchy
- H1: `text-4xl sm:text-[2.75rem] lg:text-[3.25rem]`
- H2: `text-3xl sm:text-4xl md:text-5xl`
- H3: `text-xl sm:text-2xl`

---

## 4. Components — Do's and Don'ts

### Buttons / CTAs
```
✅ DO:  bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-lg
        hover:bg-orange-700 transition-colors duration-200

❌ DON'T: bg-gradient-to-r from-orange-500 to-amber-500 rounded-full
          shadow-[0_8px_30px_-6px_rgba(255,145,77,0.5)]
```

- Primary: Solid `bg-orange-600`, `rounded-lg`, no glow
- Secondary: Plain text, `hover:bg-slate-100`, no border unless contextually necessary
- Always include `focus-visible:outline-2 focus-visible:outline-offset-2`
- Use `rounded-lg`, not `rounded-full` — pills are a SaaS pattern

### Cards
```
✅ DO:  bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100

❌ DON'T: bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl
          shadow-[0_20px_50px_-12px_rgba(255,145,77,0.18)]
```

- Use solid `bg-white` with real shadows
- No `backdrop-blur` unless there is actual layered content behind the card
- No `hover:translate-y-[-2px]` hover lift effects — these are a SaaS cliché
- No orange-tinted shadows

### Badges / Labels
```
✅ DO:  Plain text. text-xs font-semibold uppercase tracking-wide text-orange-700

❌ DON'T: Pill with pulsing dot, border, background, shadow
```

- Just styled text. No pill containers unless the badge genuinely needs visual separation from surrounding content.
- Never use `animate-pulse` on decorative dots.

### Stats / Trust Indicators
```
✅ DO:  Inline flex row — "95% pass rate · 100+ students"
        Separated by a border-t divider

❌ DON'T: Grid of glassmorphism cards with hover effects and gradient text values
```

- Stats should be quiet and confident. Big number, small label, inline.
- No card wrappers for individual stat items unless they contain substantial content.

### Dividers / Separators
- Use `border-t border-slate-200/60` or `border-slate-100`
- Don't use gradient dividers or decorative lines

---

## 5. Decorative Visuals & 3D

### General principles
- **Less is more.** One strong visual element beats six competing ones.
- **Earn your complexity.** Every visual element must serve the narrative. "TestAS score → opportunities" needs one card and three labels, not a radar chart + progress circle + 6 floating cards.
- **3D parallax earns its place by making simple compositions feel alive** — not by enabling clutter.

### What to use
- Simple white cards with real shadows inside `<Html transform>` in R3F
- Thin muted connector lines (`#cbd5e1`, lineWidth 1)
- Subtle ring/platform geometry in slate gray
- Gentle mouse parallax (rotateY ±0.10, rotateX ±0.06, lerp factor 0.04–0.06)
- Slow independent floating per element (amplitude ~0.03–0.05, different phase offsets)

### What NOT to use
- `backdrop-blur` inside 3D scenes
- Orange-glowing lines or geometry
- Radar charts, progress circles, or dashboard-style data viz
- More than 4 `<Html>` elements in a single scene
- `animate-pulse` on any icon or element
- Gradient SVG connection lines
- Multiple large blurred gradient background divs

---

## 6. Layout Conventions

- Max content width: `max-w-7xl` with `px-5 sm:px-6 lg:px-8`
- Hero sections: `min-h-[calc(100svh-72px)]` to account for fixed header
- Header offset padding: `pt-[72px] lg:pt-[80px]`
- Grid: `lg:grid-cols-[1.05fr_0.95fr]` for text-heavy + visual layouts
- Mobile text: always `text-center`, desktop: `lg:text-left`
- Breakpoints: `md: 810px`, `lg: 1200px` (defined in tailwind.config.js)

---

## 7. Server vs Client Components

- **Default to Server Components.** All text, stats, CTAs, and layout wrappers must be server-rendered for SEO.
- **Client Components** are only for interactive behavior (3D canvas, form handlers, scroll listeners).
- Use `dynamic(() => import(...), { ssr: false })` for heavy client-only code (Three.js).
- Always provide a static fallback that visually matches the client component's layout to prevent CLS.
- Use `aria-hidden="true"` on decorative client visuals.

---

## 8. Internationalization

- Use `next-intl` with `useLocale()` and `useTranslations()`.
- Support `vn` (Vietnamese, default) and `en` (English).
- Locale detection: `const isEn = locale === "en"`.
- All user-facing text must have both Vietnamese and English versions.

---

## 9. Performance

- Limit Three.js canvas DPR: `dpr={[1, 1.5]}`
- Skip Three.js entirely on mobile (`< 768px`) — render the static fallback
- Respect `prefers-reduced-motion: reduce` — disable all animation loops
- No heavy post-processing effects in R3F scenes
- Use `priority` on above-the-fold images
- Keep First Load JS under 140kB per route

---

## 10. Anti-Patterns Checklist

Before submitting any UI change, verify none of these are present:

- [ ] Gradient text on headings
- [ ] Pulsing dots or status indicators that aren't real-time
- [ ] `backdrop-blur` on cards that don't overlay content
- [ ] Orange glow shadows on buttons
- [ ] `rounded-full` on primary CTAs
- [ ] Warm/tinted section backgrounds
- [ ] Multiple blurred gradient background divs
- [ ] Hover lift effects (`translate-y-[-2px]`) on static content
- [ ] Glassmorphism (`bg-white/80 border-white/50`) on opaque backgrounds
- [ ] More than 4 floating cards in a single visual composition
- [ ] Radar charts or progress circles used decoratively
- [ ] `animate-pulse` on non-live-data elements
