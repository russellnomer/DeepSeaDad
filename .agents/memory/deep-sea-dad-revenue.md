---
name: Deep Sea Dad Revenue Model
description: Passive revenue architecture for deepseadad.com — affiliate, email list, and viral growth mechanics
---

# Deep Sea Dad Revenue Architecture

## Affiliate Revenue (Amazon Associates)
- Tag: `deepseadad-20` — Russell must replace with his actual Amazon Associates tag
- All gear items in `artifacts/deep-sea-dad/src/pages/GearShop.tsx` now have links
- Existing short links (`amzn.to/...`) keep their original tag; new items use search URL format: `https://www.amazon.com/s?k=PRODUCT+NAME&tag=deepseadad-20`
- Top Picks hero section shows 4 highest-ticket items first (max commission $)

**Why:** Every item without a link = zero commission. 18 items were previously dead. 100% coverage now.

## Email List (Owned Channel)
- DB table: `subscribersTable` in `lib/db/src/schema/subscribers.ts`
- API endpoint: POST `/api/subscribe` in `artifacts/api-server/src/routes/subscribe.ts`
- Sources tracked: `home` (home page form) and `tackle-box` (gate unlock)
- Idempotent: duplicate emails return success silently (prevents enumeration)
- GDPR-minimal: only email + source + consent flag + timestamp stored

**How to apply:** Any future email capture form should POST to `/api/subscribe` with `{ email, source }`.

## Email Gate — Secret Tackle Box
- `artifacts/deep-sea-dad/src/pages/TackleBox.tsx`
- First 2 tips shown free (teaser), remaining 6 locked
- Unlock mechanic: email form → POST /api/subscribe with `source: "tackle-box"` → `localStorage.setItem("dsd_tackle_unlocked", "true")`
- Persists across sessions; no re-gate after unlock

## Viral Share Button
- `artifacts/deep-sea-dad/src/components/ConditionsDashboard.tsx` → `ShareScoreButton` component
- Appears after fishing score loads in ResultsState
- Uses `navigator.share` (mobile Web Share API), falls back to Twitter/X intent URL
- Pre-fills: "I got X/10 fishing score — [label] conditions today! 🎣 Check yours at deepseadad.com"
