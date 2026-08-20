# Deep Sea Dad

Deep Sea Dad is a wholesome fishing mentor: “Your Patient Fishing Mentor.” Anglers drop a location (geolocation or town/ZIP), get live weather and moon phase from Open-Meteo, and receive a 1–10 fishing score plus Dad’s advice — freshwater or saltwater, plus recipes for the catch.

The app is a mobile-first hash-routed SPA with ocean/sunset/wood colors (Playfair Display + Inter). Local storage remembers the last spot and fishing mode.

## Live domains

- [https://deepseadad.com](https://deepseadad.com)
- [https://www.deepseadad.com](https://www.deepseadad.com)
- [https://deepseadad.net](https://deepseadad.net)
- [https://www.deepseadad.net](https://www.deepseadad.net)

Artifact: **Deep Sea Dad (web)**.

## Who it is for

- Recreational anglers who want conditions and a patient coach, not a social network
- Families and beginners (jokes, recipes, travel notes)
- Russell Nomer Consulting / Russell Nomer, publishing the Deep Sea Dad brand

## What it does

- **Conditions dashboard** — Open-Meteo weather, sunrise/sunset, moon phase, fishing score (Excellent / Good / Fair / Tough), Dad’s advice
- **Hash routes** — Home, Freshwater, Saltwater & Deep Sea, Secret Tackle Box, Travel Guide, Cook Your Catch, About Dad
- **Cook Your Catch** — 19 species with cleaning tips, whole-vs-fillet guidance, ingredients, bone tips
- **Location** — browser geolocation or Open-Meteo geocoding (town / ZIP)
- **Graceful fallback** — advice still renders if weather is unavailable
- **Dad joke modal** — focus-trapped, keyboard accessible

## Stack

| Layer | Technology |
| --- | --- |
| Monorepo | pnpm workspaces, TypeScript 5.9, Node.js 24 |
| App | React + Vite + Tailwind CSS (`artifacts/deep-sea-dad`) |
| Weather | Open-Meteo (no API key) |
| Persistence | `localStorage` (location, mode) |
| Supporting | Express 5 API package, Drizzle/PostgreSQL workspace packages (not required for the fishing UI) |

## How to run

Weather calls use the public Open-Meteo APIs. Workspace install still expects Node 24 and pnpm.

```bash
pnpm install
pnpm --filter @workspace/deep-sea-dad run dev     # Vite, host 0.0.0.0
pnpm --filter @workspace/deep-sea-dad run build
pnpm --filter @workspace/deep-sea-dad run serve
```

Optional API package: `pnpm --filter @workspace/api-server run dev`.

## Repo layout

```
artifacts/deep-sea-dad/     Fishing mentor SPA
  src/App.tsx               Hash routing
  src/components/           Conditions dashboard, jokes
  src/lib/                  weather, fishing-score, advice, moon, storage
  src/data/recipes.ts
  src/pages/                Freshwater, saltwater, cook, travel, about
artifacts/api-server/       Express workspace API
artifacts/mockup-sandbox/
lib/                        Shared TS packages
scripts/
```

## Replit

https://replit.com/@RussellNomer/Deep-Sea-Dad

Owner: Russell Nomer / Russell Nomer Consulting.
