# Security Policy

## Classification

**Public** GitHub repository. Production sites: deepseadad.com, www.deepseadad.com, deepseadad.net, www.deepseadad.net.

Owner: Russell Nomer / Russell Nomer Consulting.

This document is intentionally high-level. Do not publish exploit details against a public tree.

## Data handled

- Approximate location (browser geolocation or a town/ZIP the visitor types)
- Last location and freshwater/saltwater mode in `localStorage`
- No accounts, no payments, no personal documents in the fishing app

Weather and geocoding go to Open-Meteo. Do not send other personal data to that API.

## Authentication and access control

The consumer fishing app does not require login. Workspace API packages may use session configuration in other environments; they are not the public product surface.

Keep production secrets out of the git tree. Client-side location data stays in the visitor’s browser.

## Secret names

The Replit backup manifest names runtime credentials (database URL, session secret, Postgres client variables, connector hostname). Those belong in a secret manager, never in README files, issues, or client bundles.

This public repository must not contain secret values. If a secret is ever committed, rotate it and treat it as burned.

## Attack surface

- Public HTTPS static/SPA on the Deep Sea Dad domains
- Outbound Open-Meteo weather and geocoding
- Browser `localStorage` and geolocation permission
- Supporting API package if it is ever exposed on the same deployment

## Findings (defensive)

This is a public repository. Review deployments for:

- Secrets present only in the host’s secret store, not in git
- HTTPS and standard browser security headers on the marketing domains
- Least privilege if the Express API package is deployed beside the SPA

Do not file public issues that include payloads, credentials, or step-by-step exploit instructions.

## Reporting

Report vulnerabilities to **help@russellnomerconsulting.com**.

Please include the affected URL or path, a short description, and impact. Do not include exploit payloads or credential values.
