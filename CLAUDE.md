# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page personal resume site built with Vite, React 18, TypeScript, styled-components, and MDX. It renders a printable "letter" layout composed of resume sections.

## Commands

Uses pnpm 10 (pinned via the `packageManager` field; Node 20 per Volta/engines).

- `pnpm install` — install dependencies
- `pnpm dev` — Vite dev server with HMR
- `pnpm build` — production build (outputs to `dist/`)
- `pnpm start` — preview the built `dist/` via `vite preview`
- `pnpm lint` — oxlint over `src` (config in `.oxlintrc.json`)
- `pnpm typecheck` — `tsc` in strict mode, no emit
- `pnpm format` / `pnpm format:check` — Prettier write/check over the repo

There are no tests; CI (`.github/workflows/ci.yml`) runs lint, format check, typecheck, and build on pull requests — all four must pass. Dependabot files grouped weekly update PRs.

## Architecture

- Vite's `root` is `src/` (see `vite.config.js`), so `src/index.html` is the entry page and the build output goes to `../dist`. `src/main.tsx` creates the React root and renders a styled-components `createGlobalStyle` alongside `App`.
- **Content lives in Markdown, not JSX.** Each resume section (`src/components/Header`, `Summary`, `Experience`, `Education`) colocates `.md` files with its `index.tsx` and imports them as React components via `@mdx-js/rollup` (with `remark-gfm`), registered as a `pre` plugin in `vite.config.js`. To change resume text, edit the `.md` files; to add an experience entry, add a `.md` file and import/render it in `Experience/index.tsx`. The `*.md` module declaration (typed as a React `ComponentType`) is in `src/typings/index.d.ts`.
- **Skills are data-driven.** `src/imports/skills.ts` exports skill lists (name + percent) keyed by category; `App.tsx` picks one via its `category` constant and passes it to `SkillList`, which renders percentage bar graphs.
- **Section icons are inline SVGs** in `src/components/Icon.tsx` (a name-keyed set of stroke paths); there is no icon font.
- Shared styled-components (section headers, articles, graph/border styles, variables) live in `src/components/Styles` and are re-exported from its `index.ts`.
- Overall page layout (the two-column letter grid) is in `src/styles.css` plus `grid-area` assignments in each section's styled container. `styles.css` uses `@custom-media` queries and CSS nesting, compiled by `postcss-preset-env` (`postcss.config.cjs`).

## Code Style

Prettier: no semicolons, single quotes, 2-space indent, ES5 trailing commas (`prettier.config.js`, ESM). Prettier is enforced in CI — run `pnpm format` before committing. TypeScript is strict with the automatic JSX runtime: don't add `import React from 'react'`; use type-only imports for React types (e.g. `import type { FC } from 'react'`).
