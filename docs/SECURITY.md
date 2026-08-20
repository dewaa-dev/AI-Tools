# Security

## Current boundary

This is a portfolio frontend demo. It has no accounts, authentication tokens, payment credentials, application database, upload endpoint, or external AI/email API.

## Demo data handling

- People, organizations, usage, invoices, and payment details are fictional fixtures.
- Form and settings values remain in React memory.
- Contact submissions are not transmitted or persisted.
- Attachment files are not read or uploaded; only their browser-provided filename is displayed.
- Team invitations send no email and billing controls process no payment.
- Demo receipts are generated in the browser from predefined fixtures.

Do not add real personal, financial, credential, or customer data to fixtures.

## Rendering

React renders user-entered values as text. Demo input is not evaluated, used to build commands, inserted through `dangerouslySetInnerHTML`, or sent to a server. The generic chart-style helper must remain developer-controlled unless hardened for untrusted input.

## Authentication and future APIs

Application-style routes are public demo routes. Before backend data is added, enforce identity, tenant membership, permissions, and resource ownership on the server. Production integrations must add server validation, authorization, rate limits, safe errors, CSRF protection where applicable, explicit CORS, secret bindings, upload controls, and redacted logging.

## Deployment

`src/server.ts` adds security headers to normal and branded-error responses at the Cloudflare Worker boundary:

- CSP restricts objects, base URLs, framing, form targets, images, fonts, and connections.
- Frame embedding is denied by both CSP `frame-ancestors` and `X-Frame-Options`.
- Content-type sniffing is disabled and cross-origin referrers are limited.
- Camera, geolocation, microphone, payment, and USB browser capabilities are disabled.
- HSTS is emitted only for HTTPS requests so local HTTP development remains usable.

TanStack Start currently emits inline scripts for streaming and hydration. The policy intentionally omits `script-src`, `style-src`, and `default-src` instead of allowing `unsafe-inline` or breaking hydration. A future strict script/style policy requires request-scoped nonces or build-generated hashes integrated with the framework output.

Never place secrets in `VITE_*` variables because they are client-visible. Resolve known dependency advisories before production use.
