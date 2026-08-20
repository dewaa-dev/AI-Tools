# Architecture

## Overview

Dewa AI is a portfolio-ready frontend demonstration of an AI workspace. It intentionally runs without an application database, authentication provider, payment service, email service, or model API.

## Technology stack

- TypeScript, React 19, TanStack Start, TanStack Router, and a TanStack Query provider
- Vite, Tailwind CSS, and Radix UI primitives
- Cloudflare Workers deployment adapter

## Runtime architecture

```text
Browser -> Cloudflare/TanStack Start SSR -> file route -> SiteLayout/AppShell
        -> React component state -> local demo interaction/result
```

`src/server.ts` wraps SSR errors and adds response security headers at the Worker boundary. `src/router.tsx` creates the router and query client. `src/routes` contains flat file-based routes. `src/components/site` owns public-site chrome; `src/components/app` owns portfolio-application navigation.

## Portfolio demo mode

Application pages use realistic seed data and local React state:

- Workspace conversations and attachment filenames live in memory.
- Team invitations append an `Invited` member locally and send no email.
- Billing changes update the displayed plan; receipts are generated locally.
- Settings changes live for the mounted session and can be reset.
- Contact submission clears the form and confirms local receipt without transmitting values.
- Dashboard project creation appends a project locally for the mounted demo session.

The UI labels demo contexts and never claims that a payment, email, account change, or backend write occurred.

## Routes and data

All application destinations are real TanStack Router routes. Workspace tool selection uses a validated `tool` search parameter. Unknown paths use the root 404 component. No persistent state, application API, server functions, database migrations, jobs, or external integrations exist.

## Known limitations

- Demo state resets on component remount or page reload.
- Authentication and tenant isolation are not implemented.
- AI responses are deterministic UI simulations.
- Receipt files are text demo artifacts, not payment documents.
