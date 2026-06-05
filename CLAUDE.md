# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve   # dev server with live reload (http://localhost:8080)
npm run build   # production build → dist/
```

`serve` runs Tailwind and Eleventy concurrently (via `concurrently`). `build` runs Tailwind first, then Eleventy.

## Architecture

This is a personal portfolio site for a freelance web developer, built with [Eleventy](https://www.11ty.dev/) (SSG) and deployed to GitHub Pages via a GitHub Actions workflow that runs on every push to `main`.

**Source → Output mapping** (`src/` → `dist/`):
- `src/_includes/` — Nunjucks/HTML partials: `layout.html` is the base template wrapping all pages; `header.html` and `footer.html` are injected via `{% include %}`.
- `src/pages/` — standalone pages (`404.html`, `disclaimer.html`, `ecodesign.html`).
- `src/index.html` — homepage; uses `layout: layout.html` frontmatter.
- `src/css/theme.css` — Tailwind v4 entry point, processed by `@tailwindcss/cli` directly to `dist/css/theme.css`. Contains `@theme` config (colors, fonts, breakpoints) and all custom CSS in `@layer base/components/utilities`.
- Static assets (`img/`, `favicon.ico`, etc.) are copied as-is via `addPassthroughCopy`.

**CSS architecture (`src/css/theme.css`):**
- `@theme` — brand colors, fonts (DM Sans + DM Serif Display)
- `@layer base` — body/typography resets, heading sizes, hr reset
- `@layer components` — navbar, display headings, button, hr-sm, list-checked, rsl-* site classes, text-white-80 compound
- `@layer utilities` — container, flexbox grid (row + col-* classes), fs-lg/fs-sm/fw-bold utilities; placed here to override Tailwind's built-in col-* and container utilities
## Commit conventions

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint + Husky `commit-msg` hook). Examples: `feat:`, `fix:`, `chore:`, `build:`, `docs:`.
