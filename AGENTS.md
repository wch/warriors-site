# Warriors Cats Fan Website

Static fan site for the Warriors book series by Erin Hunter, targeted at elementary/middle school kids.

## Tech Stack

- **Astro** (static site generation, islands architecture)
- **React** (interactive components only — the quiz)
- **Tailwind CSS v4** (CSS-based config via `@theme` directive, no `tailwind.config.js`)
- **shadcn/ui** (New York style, components in `src/components/ui/`)

## Commands

```
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview production build
```

## Architecture

- Most pages ship **zero JavaScript** — only the quiz page (`/quiz`) hydrates a React island via `client:load`.
- Book, clan, character, and quiz data lives in TypeScript files under `src/data/` (not Astro content collections).
- Book cover images are loaded from Open Library's Covers API using ISBNs (`covers.openlibrary.org`).
- The `@/` path alias maps to `src/` (configured in `tsconfig.json`).

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components (button, card, badge, etc.)
│   ├── layout/      # Header, Footer (Astro)
│   ├── home/        # Hero, FeaturedBooks, SeriesOverview (Astro)
│   ├── books/       # BookCard, SeriesArcSection (Astro)
│   ├── clans/       # ClanCard, CharacterCard (Astro)
│   └── quiz/        # ClanQuiz.tsx (React island)
├── data/            # TypeScript data files (books, clans, characters, quiz)
├── layouts/         # BaseLayout.astro
├── pages/           # File-based routing
│   ├── books/       # Catalog + [slug] detail pages
│   ├── clans/       # Overview + [slug] detail pages
│   └── quiz.astro
├── styles/
│   └── global.css   # Tailwind v4 @theme config + shadcn CSS variables
└── lib/
    └── utils.ts     # cn() helper
```

## Styling

- Custom color palette defined in `src/styles/global.css` via `@theme`: `forest-*` (greens), `earth-*` (browns), `gold-*` (amber accents).
- shadcn CSS variables (`--primary`, `--card`, etc.) are mapped to the custom palette in `:root`.
- Headings use Georgia serif; body uses system font stack.
- Clan-specific accent colors use Tailwind's built-in palette (amber, slate, blue, stone, sky) applied via static class names in component lookup tables — not dynamic class construction.

## Adding shadcn Components

```
npx shadcn@latest add <component-name>
```

Config is in `components.json` at the project root.
