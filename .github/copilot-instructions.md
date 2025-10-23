This repo is a small Vue 3 single-page application scaffolded for Vite.
Keep suggestions concise, actionable, and tied to concrete files/examples below.

What this project is

- Vue 3 + Vite single-page app. Entry: `src/main.js`.
- State management: Pinia (stores in `src/stores/`, example: `src/stores/counter.js`).
- Routing: Vue Router, routes defined in `src/router/index.js`. `AboutView` is lazy-loaded.
- Builds and dev server via Vite. Config: `vite.config.js` (alias `@` -> `src`).

Quick commands (from `package.json`)

- Install: `npm install`
- Dev server: `npm run dev` (runs `vite`)
- Build: `npm run build` (runs `vite build`)
- Preview: `npm run preview` (runs `vite preview`)
- Lint (auto-fix): `npm run lint` (`eslint . --fix --cache`)
- Format: `npm run format` (`prettier --write src/`)

Important patterns & examples to use when editing or generating code

- Use single-file components (SFCs) with `<script setup>` (see `src/App.vue`, `src/views/*`).
- Use the `@` alias for imports. Examples:
  - `import Hello from '@/components/HelloWorld.vue'`
  - `src` assets: `src="@/assets/logo.svg"` in `src/App.vue`
- Pinia stores use the composition-style `defineStore` (see `src/stores/counter.js`). Example usage:
  - `import { useCounterStore } from '@/stores/counter'`
  - `const counter = useCounterStore(); counter.increment()`
- Router: routes live in `src/router/index.js`. Add route-level code-splitting via `component: () => import('...')`.

Project conventions discovered (follow these)

- File extensions: `.vue` for components and views; store files are plain `.js` (not TypeScript).
- CSS: global entry is `src/assets/main.css`; components may use `scoped` styles as in `src/App.vue`.
- Linting: project uses a flat ESLint config in `eslint.config.js`; prefer making small, lint-friendly edits
  and run `npm run lint` before committing.
- Dev tooling: `vite-plugin-vue-devtools` is enabled in `vite.config.js`. Recommend using browser Vue DevTools
  and the Vite dev server when debugging.

Integration & environment notes

- Vite uses `import.meta.env.BASE_URL` in the router history; be careful when changing base paths.
- No tests or CI config were found; do not assume testing harnesses exist.
- Node engines field in `package.json` lists supported Node versions — follow it when running commands.

When you edit or add code, prioritize these checks

- Does the import use the `@` alias for app-local modules? (see `jsconfig.json`)
- Will a new route be lazy-loaded if it's a non-critical page? Prefer `() => import('...')`.
- If adding state, put Pinia stores under `src/stores/` and follow the `defineStore` pattern.
- Run `npm run lint` and `npm run dev` locally to ensure no runtime or lint errors.

Files to reference for concrete examples

- `src/main.js` — app bootstrapping (Pinia + Router).
- `src/App.vue` — top-level layout and asset import usage.
- `src/router/index.js` — routing + lazy-loading style.
- `src/stores/counter.js` — Pinia composition-style store example.
- `vite.config.js` & `jsconfig.json` — `@` alias details.

If anything is ambiguous or you need external integration details (APIs, env vars, CI), ask for the missing files or developer preferences.

Revision note: there was no existing `.github/copilot-instructions.md` or AGENT files to merge; this file was created from the repository contents.
