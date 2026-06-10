# tools2do.com Next.js 15 Rebuild

A production-oriented Next.js App Router rebuild for Tools2Do, with dual global developer tools and Pakistan utility SEO experiences.

## Deployment Checklist

### Environment variables

- `NEXT_PUBLIC_ADSENSE_CLIENT_ID`: Google AdSense publisher client ID, for example `ca-pub-1234567890123456`.
- `NEXT_PUBLIC_ADSENSE_SLOT_ID`: Default ad slot ID used by reusable ad components.

### Vercel project settings

- Framework preset: Next.js.
- Runtime: Vercel serverless and Edge Middleware; no Docker and no custom Node server.
- Build command: `npm run build`.
- Install command: `npm install`.
- Output directory: leave as the Next.js default.
- Domains: attach `tools2do.com` and `www.tools2do.com`; redirect `www` to apex if preferred.
- Geographic routing: ensure Vercel request headers are available so `x-vercel-ip-country` reaches middleware.

### Post-deploy verification

- Open `/` from a non-PK location and confirm the global developer homepage renders.
- Open `/` with `x-vercel-ip-country: PK` and confirm middleware rewrites to `/pk` while preserving access to `/tools/*`.
- Confirm `/tools/json-formatter` formats, minifies, uploads, copies, validates, and reports errors locally.
- Confirm `/tools/image-compressor` uploads JPEG, PNG, and WebP files under 10MB and compresses through the Web Worker.
- Confirm `/pk/check-lesco-bill`, `/pk/check-ke-electric-bill`, `/pk/check-mepco-bill`, and `/pk/check-iesco-bill` render metadata, FAQ JSON-LD, and client-side validation.
- Validate `/sitemap.xml`, `/robots.txt`, Lighthouse mobile Core Web Vitals, structured data, and canonical URLs.
- Add real Open Graph images in `public/images/` for each programmatic SEO page before final indexation.
