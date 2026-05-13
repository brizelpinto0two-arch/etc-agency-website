# B's Portfolio

A creative/editorial portfolio site built with Figma Make.

## Stack

- **React 18** + **Vite 6** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/ui** components (Radix UI primitives) in `src/app/components/ui/`
- **Motion** (Framer Motion) for animations
- Package manager: **pnpm**

## Dev

```bash
pnpm install
pnpm dev      # starts Vite dev server
pnpm build
```

## Project layout

```
src/
  app/
    App.tsx                  # root — assembles all sections in order
    components/              # portfolio sections (one component per section)
    components/ui/           # shadcn/ui primitives (don't edit manually)
    components/figma/        # Figma Make helpers
  imports/                   # image assets
  styles/
    theme.css                # CSS custom properties & typography base
    fonts.css
    globals.css
    tailwind.css
```

## Path alias

`@` resolves to `src/` (configured in `vite.config.ts`).

## Design system

### Color palette — "Diffused Worlds"

Defined as CSS vars in `src/styles/theme.css`:

| Token | Value |
|---|---|
| `--infrared-orange` | `#ff4500` |
| `--electric-pink` | `#ff006e` |
| `--ultraviolet-purple` | `#8338ec` |
| `--washed-lavender` | `#d4c5f9` |
| `--toxic-yellow` | `#ffbe0b` |
| `--cyan-glow` | `#00f5ff` |
| `--fog-grey` | `#b8b8d1` |
| `--deep-blue` | `#4169e1` |
| `--coral-red` | `#ff5757` |

Base background is `#050505` (near-black). All sections are full-width, stacked vertically inside `App.tsx`.

### Typography

Base font size: `16px`. Headings use `font-weight-medium` (500). Set in `theme.css` `@layer base`.

## Conventions

- Each portfolio section is its own component file in `src/app/components/`. Keep them self-contained.
- Prefer flexbox/grid over absolute positioning unless the visual effect requires it.
- Use the `motion` package for animations — it's already installed.
- Don't edit files in `src/app/components/ui/` directly; they are shadcn/ui generated components.
- Images live in `src/imports/`. Reference them with the `@` alias (`import img from '@/imports/...'`).
- `figma:asset/<filename>` imports resolve to `src/assets/` via the custom Vite plugin in `vite.config.ts`.
