# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Deep Sea Dad (react-vite at `/`)
A wholesome fishing mentor web app — "Your Patient Fishing Mentor." Features:
- **Real-time conditions dashboard**: Fetches weather from Open-Meteo API, calculates moon phase, generates fishing score (1-10 with Excellent/Good/Fair/Tough labels), and provides personalized Dad's advice
- **Dynamic sunrise/sunset**: Pulls actual sunrise/sunset times and incorporates them into fishing window recommendations
- **Hash-based SPA navigation**: 7 pages (Home, Freshwater, Saltwater & Deep Sea, Secret Tackle Box, Travel Guide, Cook Your Catch, About Dad)
- **localStorage persistence**: Saves last location, fishing mode (freshwater/saltwater), and auto-restores on return visits
- **Accessible joke modal**: Focus-trapped, keyboard-navigable modal with Dad's fishing jokes
- **Graceful failure handling**: Production-grade fallback advice when API is unavailable
- **Geolocation + manual location**: Browser geolocation or manual town/ZIP code entry via Open-Meteo geocoding API
- **Responsive design**: Mobile-first with Tailwind CSS, Playfair Display + Inter fonts
- **Color palette**: Ocean (#0b1f3a), Sunset (#e07a3f), Wood (#9c6644), Canvas (#f8f1e3)

Key source files:
- `artifacts/deep-sea-dad/src/App.tsx` — Main app with hash routing
- `artifacts/deep-sea-dad/src/components/ConditionsDashboard.tsx` — Weather conditions + fishing score + Dad's advice
- `artifacts/deep-sea-dad/src/lib/weather.ts` — Open-Meteo API integration
- `artifacts/deep-sea-dad/src/lib/fishing-score.ts` — Fishing score calculation algorithm
- `artifacts/deep-sea-dad/src/lib/advice.ts` — Context-aware fishing advice generator
- `artifacts/deep-sea-dad/src/lib/moon.ts` — Moon phase calculation
- `artifacts/deep-sea-dad/src/lib/storage.ts` — localStorage persistence
- `artifacts/deep-sea-dad/src/data/recipes.ts` — Recipe data (19 species with cleaning tips, whole-vs-fillet guidance, ingredients, instructions, Dad's bone tips)
- `artifacts/deep-sea-dad/src/pages/CookYourCatch.tsx` — Cook Your Catch page with expandable recipe cards and freshwater/saltwater filter
