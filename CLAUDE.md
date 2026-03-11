# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
npm run start    # Start production server
```

No test suite is configured.

## Architecture

Single-page Next.js 15 app — one route (`app/page.tsx`) that composes all sections in order.

### Component structure

```
components/
  layout/
    navbar.tsx           # Sticky floating navbar with mobile Sheet drawer
    theme-provider.tsx   # next-themes wrapper (defaultTheme="dark")
    toggle-theme.tsx     # Dark/light mode toggle button
    sections/            # One file per page section, rendered in page.tsx order:
      hero, sponsors, benefits, features, services,
      before-after, testimonials, pricing, faq, contact, footer
  ui/                    # shadcn/ui primitives (accordion, avatar, button, card,
                         # carousel, form, input, label, navigation-menu,
                         # select, separator, sheet, badge, icon, textarea)
lib/
  utils.ts               # cn() = clsx + tailwind-merge
```

### Data flow

All content is hardcoded inside each section component — no external API calls, no CMS. To update copy or content, edit the relevant `components/layout/sections/*.tsx` file directly.

The contact form (`contact.tsx`) uses `react-hook-form` + `zod` for validation and logs to console on submit — there is no backend integration yet.

### RTL / Hebrew conventions

- Root `<html>` has `lang="he" dir="rtl"`
- All new UI must be RTL-first. Key patterns already established:
  - Use `flex-row-reverse` to flip icon/text order for RTL
  - `text-right` on labels and headings
  - `Sheet side="right"` for mobile drawers
  - `AccordionTrigger` uses `flex-row-reverse`
  - Carousel uses `opts={{ direction: "rtl" }}`
  - Sponsors marquee wrapped in `dir="ltr"` to keep scroll direction correct

### Styling

- Tailwind CSS with CSS variables for theming (`app/globals.css`)
- All colors via semantic tokens: `primary`, `muted`, `accent`, `card`, `background`, `foreground`, etc.
- Primary brand color is orange (`--primary` maps to orange-500/600)
- Dark background: `slate-950` (`222 47% 6%`)
- `tailwindcss-animate` plugin imported as `import animate from "tailwindcss-animate"` in `tailwind.config.ts`
- Custom marquee animation defined in Tailwind keyframes (no external marquee library — avoids React 19 conflicts)

### Navbar anchors

Nav links use `href="#section-id"` hash anchors. Section IDs match: `benefits`, `services`, `pricing`, `testimonials`, `faq`, `contact`.

### Images

`next.config.ts` allows remote images from `images.unsplash.com` and `i.pravatar.cc` only.

### Path aliases

`@/` maps to project root (configured in `tsconfig.json`).
