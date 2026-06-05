# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run serve   # dev server with live reload (http://localhost:8080)
npm run build   # production build → dist/
```

## Architecture

This is a personal portfolio site for a freelance web developer, built with [Eleventy](https://www.11ty.dev/) (SSG) and deployed to GitHub Pages via a GitHub Actions workflow that runs on every push to `main`.

**Source → Output mapping** (`src/` → `dist/`):
- `src/_includes/` — Nunjucks/HTML partials: `layout.html` is the base template wrapping all pages; `header.html` and `footer.html` are injected via `{% include %}`.
- `src/pages/` — standalone pages (`404.html`, `disclaimer.html`, `ecodesign.html`).
- `src/index.html` — homepage; uses `layout: layout.html` frontmatter.
- `src/css/theme.scss` — SCSS entry point: imports Bootstrap, a custom theme layer (`src/css/theme/`), and user overrides (`src/_user-variables.scss`, `src/css/_user-overrides.scss`, `src/css/_user-additions.scss`). Compiled by the `@11tyrocks/eleventy-plugin-sass-lightningcss` Eleventy plugin.
- Static assets (`img/`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, `browserconfig.xml`) are copied as-is via `addPassthroughCopy`.

**CSS layering:**
1. Bootstrap SCSS variables (overridden in `_user-variables.scss` — brand color palette lives here)
2. Theme layer (`src/css/theme/`) — Bootstrap component overrides and custom components
3. User overrides (`_user-overrides.scss`) and additions (`_user-additions.scss`) — site-specific styles

## Commit conventions

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/) (enforced by commitlint + Husky `commit-msg` hook). Examples: `feat:`, `fix:`, `chore:`, `build:`, `docs:`.
