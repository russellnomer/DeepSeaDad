# Deep Sea Dad — Changelog

## 2026-08-02 — Revenue Engine + Growth Infrastructure

### Revenue
- **Gear Shop: 100% affiliate link coverage** — filled 18 previously-dead "Check Price" buttons with Amazon Associate search URLs (tag: `deepseadad-20`). Every item in the shop now earns commission on click-through purchases.
- **Top Picks hero section** — added 4 high-ticket items (fish finder $500–700, YETI cooler $275–325, Costa sunglasses $150–200, Garmin fish finder $200–280) featured prominently above the full shop. Highest commission-$ items shown first.
- **FTC disclosure** — Amazon Associates disclosure retained per 16 CFR § 255.

### Email list (owned channel)
- **PostgreSQL subscribers table** — new schema (`lib/db/src/schema/subscribers.ts`): email, source, consent flag, timestamp. GDPR-minimal: no behavioral data stored.
- **POST /api/subscribe endpoint** — idempotent, validates email format via Zod, logs anonymized email prefix only. Returns distinct messages for new vs. already-subscribed.
- **Home page email form wired to backend** — was previously discarding emails client-side. Now persists to DB.
- **Tackle Box email gate** — first 2 tips free as teaser; remaining 6 locked behind email signup. LocalStorage `dsd_tackle_unlocked` flag persists unlock across sessions. Email captured to `/api/subscribe` with source `tackle-box`.

### Growth / viral
- **Share My Fishing Score button** — appears after conditions load. Uses Web Share API on mobile, falls back to Twitter/X intent URL on desktop. Pre-fills: "I got X/10 fishing score — [label] conditions today! 🎣 Check yours at deepseadad.com". Each share = organic traffic → affiliate clicks.

### SEO (from prior session)
- Enhanced `index.html` with full Open Graph, Twitter Card, JSON-LD structured data
- `robots.txt` and `sitemap.xml` published and verified serving
