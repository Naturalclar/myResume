# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page personal resume site built with Vite, React 18, TypeScript, styled-components, and MDX. It renders a printable "letter" layout composed of resume sections.

## Commands

Uses pnpm (CI runs pnpm 8 on Node 20).

- `pnpm install` — install dependencies
- `pnpm build` — production build via Vite (outputs to `dist/`)
- `pnpm start` — serve the built `dist/` locally
- `pnpm lint` — ESLint over `src` (`.ts`/`.tsx`), config extends `@naturalclar`
- `npx vite` — dev server with HMR (there is no `dev` script in package.json)

There are no tests; CI (`.github/workflows/ci.yml`) only runs `pnpm build` on pull requests, so a successful build is the bar for CI.

Note: `pnpm watch` is a legacy gulp/webpack task and is broken — `gulpfile.js` requires a `webpack.config.js` that no longer exists. Use Vite instead.

## Architecture

- Vite's `root` is `src/` (see `vite.config.js`), so `src/index.html` is the entry page and the build output goes to `../dist`. `src/main.tsx` mounts `App` into `#app` and sets global styles.
- **Content lives in Markdown, not JSX.** Each resume section (`src/components/Header`, `Summary`, `Experience`, `Education`) colocates `.md` files with its `index.tsx` and imports them as React components via `@mdx-js/rollup` (with `remark-gfm`), registered as a `pre` plugin in `vite.config.js`. To change resume text, edit the `.md` files; to add an experience entry, add a `.md` file and import/render it in `Experience/index.tsx`. The `*.md` module declaration is in `src/typings/index.d.ts`.
- **Skills are data-driven.** `src/imports/skills.ts` exports skill lists (name + percent) keyed by category; `App.tsx` picks one via its `category` constant and passes it to `SkillList`, which renders percentage bar graphs.
- Shared styled-components (section headers, articles, icons, graph/border styles, variables) live in `src/components/Styles` and are re-exported from its `index.ts`.
- Overall page layout (the two-column letter grid) is in `src/styles.css` plus `grid-area` assignments in each section's styled container.

## Code Style

Prettier: no semicolons, single quotes, 2-space indent, ES5 trailing commas (`prettier.config.js`).
