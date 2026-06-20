# Tools2Do.com — Full SEO & Technical Audit Report

**Framework:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4  
**Deployment target:** Vercel (edge)  
**Audit date:** June 2026  
**Auditor:** Antigravity (following AGENTS.md)

---

## Executive Summary

The site is technically well-structured and avoids the most dangerous anti-patterns. Core infrastructure is solid: canonical URLs are set, `sitemap.ts` pulls from the registry, `robots.ts` is correct, privacy policy is honest, and tool processing claims are largely accurate. However, there are **significant metadata quality gaps** across the majority of tool pages, a **critical fake-data safety issue** in the bill checker component, **duplicate schema** injected on every page, and **missing OG images** referenced that don't exist. These are fixable and worth prioritising immediately.

---

## Priority Levels

| Level | Meaning |
|---|---|
| **P1 — Critical** | Safety, trust, or indexation failure. Fix before next deploy. |
| **P2 — High** | Material SEO harm or policy risk. Fix within one sprint. |
| **P3 — Medium** | Noticeable opportunity loss. Fix within two sprints. |
| **P4 — Low** | Polish and best-practice alignment. Fix as capacity allows. |

---

## P1 — CRITICAL (Fix Before Next Deploy)

### P1-A · SAFETY: Bill Checker Shows Fabricated Bill Data as If Real

**File:** [`components/tools/LescoBillChecker.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/components/tools/LescoBillChecker.tsx) — lines 15–17, 34

**Problem:**  
After the user enters a valid 14-digit reference number and clicks "Check Bill", the component generates a fake amount (`Rs. ${Number(reference.slice(-4)) + 1800}`) and fake units consumed (`Number(reference.slice(-3))`), derived from the reference number digits itself. The UI displays a full "Bill Summary" with fake Name, Amount Due, Due Date, and Units Consumed — as if these are real values returned from LESCO/MEPCO/etc.

The disclaimer text is buried below the data in small secondary text. A real user will read "Rs. 6,275 Due 25 June 2026" and trust it as real bill data.

**Why it's a P1:**  
- Violates AGENTS.md §8: "Never claim a tool runs locally unless verified in code" and "Never create fake usage counts / fake data presented as real."  
- Creates direct user harm: users may believe they owe a specific amount and act on it (pay wrong amount, miss real due date).  
- Creates regulatory and trust risk. Pakistan utility pages must not mislead.  
- `dueDate` is hardcoded to `'25 June 2026'` which will become stale.

**Fix:**  
Remove the fake Bill Summary card entirely. On submit, validate the reference number format, confirm it is valid, and then redirect the user to the official portal with the reference number pre-populated (or clearly instruct them to use it). The component should be a **reference validator + guided redirect**, not a bill data presenter.

---

### P1-B · SCHEMA: Duplicate `WebSite` + `Organization` Schema on Every Page

**Files:** [`app/layout.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/layout.tsx) lines 34–68 AND [`app/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/page.tsx) lines 7–42

**Problem:**  
The identical `WebSite` + `Organization` JSON-LD block is injected twice on the homepage: once in the global layout (all pages) and once inside `page.tsx`. Every single page on the site therefore renders the `WebSite`/`Organization` schema at least once (via layout). The homepage renders it twice.

Additionally, the two copies have **inconsistent data**:
- `layout.tsx` Organization: `contactPoint.email = "rajamashoodelahi@gmail.com"`, `sameAs` uses `rajamashoodelahi` handles
- `page.tsx` Organization: `contactPoint.email = "support@tools2do.com"`, `sameAs` uses `rajamashoode` handles  

This inconsistency can confuse Google's entity understanding.

**Fix:**  
- Keep the schema **only in `layout.tsx`** (sitewide). Remove it from `app/page.tsx`.
- Consolidate all `sameAs` to the correct, consistent handles (audit which social handles actually exist).
- Decide on one contact email (support@tools2do.com is more professional and scalable).

---

### P1-C · SCHEMA: Fake `AggregateRating` on JSON Formatter

**File:** [`app/tools/json-formatter/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/tools/json-formatter/page.tsx) — line 17

**Problem:**  
```js
aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '1240' }
```
There are no visible user reviews or ratings on the JSON Formatter page. This is fabricated structured data.

**Why it's a P1:**  
This directly violates Google's structured data guidelines and AGENTS.md §8 ("Never create fake ratings"). Google can apply a manual action for this. It is present only on the JSON formatter but must be removed immediately.

**Fix:** Remove the `aggregateRating` property from the JSON-LD entirely. Add a `@type: WebApplication` with only factually verifiable properties.

---

### P1-D · PRIVACY CONFLICT: About Page Claims "No files uploaded. No text sent to server" Globally

**File:** [`app/about/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/about/page.tsx) — line 19

**Problem:**  
> "Every tool on this site runs entirely in your browser. No files are uploaded. No text is sent to a server."

This is **false for QR Code Generator**, which sends user-entered text to `api.qrserver.com` (an external third-party API), as correctly disclosed in the Privacy Policy. The About page makes a blanket false claim.

**Fix:**  
Change the About page language to: *"Most tools run entirely in your browser. See our Privacy Policy for tools that use third-party APIs."* or similar qualified language.

---

## P2 — HIGH (Fix Within One Sprint)

### P2-A · METADATA: ~20 Tool Pages Have Weak, Template-Identical Titles and Descriptions

**Affected files (sample):**

| File | Title | Issue |
|---|---|---|
| `tools/regex-tester/page.tsx` | `Regex Tester` | No brand, no task keyword, too short |
| `tools/password-generator/page.tsx` | `Password Generator` | No brand, no benefit, no keyword |
| `tools/qr-code-generator/page.tsx` | `QR Code Generator` | No brand, minimal |
| `tools/base64/page.tsx` | `Base64 Encoder / Decoder` | No brand, no action keyword |
| `tools/word-counter/page.tsx` | `Word Counter Online Free – Count Words Characters Sentences Instantly` | Title OK but description is almost identical to meta paragraph |
| `pk/bisp-payment-verification/page.tsx` | `BISP Payment Verification` | No brand, no task clarity |
| `pk/ehsaas-program-tracking/page.tsx` | `Ehsaas Program 8171 Tracking` | No brand, no action |
| `app/team/page.tsx` | `Team` | Completely bare, no brand |

**The template from `layout.tsx` adds ` | Tools2Do` via the title template**, so `Regex Tester` renders as `Regex Tester | Tools2Do` — which is acceptable but missed opportunity to include the task keyword.

**AGENTS.md formula** (§11.3):
```
[Tool Name] – Free Online [Primary Task] | Tools2Do
```

**Descriptions are also thin.** Most tool pages have descriptions that are 1 sentence copied directly from the registry `description` field (which was designed for card previews, not meta descriptions). They lack the formula, unique features, and the "No signup required" CTA.

**Fix:** Apply the AGENTS.md title and description formula to each tool page. Priority order: json-formatter, image-compressor, word-counter, password-generator, regex-tester, qr-code-generator, base64, url-encoder, image-converter, pdf-merge-split.

---

### P2-B · METADATA: Image Compressor Title is Keyword-Stuffed

**File:** [`app/tools/image-compressor/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/tools/image-compressor/page.tsx) — line 4

**Current title:**  
`Image Compressor Online Free – Compress JPG PNG WebP Without Quality Loss`

**Problem:**  
"Image Compressor Online Free" already packs three keywords in sequence. Combined with the layout template, the full title becomes:  
`Image Compressor Online Free – Compress JPG PNG WebP Without Quality Loss | Tools2Do`  
= 75 characters + the layout template suffix adds even more. This reads unnaturally and may trigger keyword stuffing detection.

**Fix:**  
`Image Compressor – Compress JPG, PNG & WebP Online Free | Tools2Do`

---

### P2-C · SITEMAP: All Pages Use `lastModified: now` (Build Timestamp)

**File:** [`app/sitemap.ts`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/sitemap.ts) — line 5

**Problem:**  
`const now = new Date()` means every page reports its `lastModified` as the time of the build request. This makes Google think every page changes on every crawl, even if content didn't change. For PK utility pages with `changeFrequency: 'daily'` and `priority: 0.9`, this inflates urgency signals dishonestly.

**Fix:**  
Add actual `lastModified` dates to the tool registry, or use a static date per content type (e.g. last code commit date for static tools), or at minimum, use a fixed quarterly date for stable tools rather than `now`.

---

### P2-D · SITEMAP: `/html-sitemap` and RSS Feed Are Not Included in sitemap.ts

**Files:** `app/sitemap.ts`, `app/html-sitemap/page.tsx`, `app/feed.xml/route.ts`

**Problem:**  
The HTML sitemap page and feed.xml are not listed in `sitemap.ts`. The HTML sitemap is a legitimate indexable helper page and should be included. The `feed.xml` route listing in the HTML sitemap (via `companyPages`) also points to `/feed.xml` which is an application route — this should link to it cleanly but doesn't need to be in the XML sitemap.

Also: `/team` page is in the HTML sitemap's company pages but **not in `sitemap.ts`** — it should be included.

**Fix:** Add `https://tools2do.com/html-sitemap` and `https://tools2do.com/team` to `sitemap.ts`.

---

### P2-E · CANONICAL: LESCO/MEPCO Pages Set `hreflang` for `ur-PK` Pointing to Non-Existent URLs

**Files:** `app/pk/check-lesco-bill/page.tsx` line 10, `app/pk/check-mepco-bill/page.tsx` line 10

**Problem:**  
```js
languages: { 'en-PK': '...check-lesco-bill', 'ur-PK': '...check-lesco-bill?lang=ur' }
```
The `?lang=ur` URL parameter page doesn't exist — there is no Urdu version and no `lang` parameter handling in middleware or the page. These are orphaned hreflang declarations pointing to non-existent URLs.

**Why it matters:** Invalid hreflang targets (especially URLs that 404 or return the same content as the canonical) are a known signal quality issue. Google will ignore invalid hreflang declarations, but it creates crawl waste and could trigger a Search Console error.

**Fix:** Remove the `languages` hreflang declarations until a real Urdu version is implemented. Use only `alternates: { canonical: '...' }` for now.

---

### P2-F · SCHEMA: `SearchAction` Points to Non-Functional URL

**File:** [`app/layout.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/layout.tsx) — lines 44–48

**Problem:**  
```js
potentialAction: {
  '@type': 'SearchAction',
  target: { urlTemplate: 'https://tools2do.com/?q={search_term_string}' },
}
```
The homepage (`/`) does not handle a `?q=` query parameter. There is no search results page at that URL. The CommandPalette is client-side only and not crawlable. This `SearchAction` schema is invalid per AGENTS.md §13.1: "Add `SearchAction` only if the site has real internal search."

**Fix:** Remove `potentialAction` from the `WebSite` schema until a real server-rendered or pre-rendered search results page exists at a stable URL.

---

### P2-G · PRIVACY: QR Code Generator Claim Mismatch

**Files:** [`components/tools/QrCodeGenerator.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/components/tools/QrCodeGenerator.tsx), [`app/tools/qr-code-generator/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/tools/qr-code-generator/page.tsx)

**Problem:**  
The QR Code Generator sends user input to `api.qrserver.com` (an external third-party API). This is correctly disclosed in the Privacy Policy. However, the `qr-code-generator/page.tsx` title says just "QR Code Generator" with description "Generate QR codes for URLs, text and contacts." — with no privacy clarification. Meanwhile, the footer says "All tools run locally in your browser whenever possible" which could mislead QR users. The About page (P1-D above) also makes a blanket false claim.

**Fix:**  
- Add a visible UI note on the QR generator page: *"QR codes are generated via the QR Server API. Your input text is sent to their server. Do not enter confidential information."*  
- Ensure this is in the schema `description` too.

---

### P2-H · PK HUB: `/pk` Page Has No Metadata (No Title, No Description, No Canonical)

**File:** [`app/pk/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/pk/page.tsx)

**Problem:**  
The `/pk` Pakistan utility hub page exports **no `metadata`** object. It will fall back entirely to the root layout defaults (`Tools2Do – Free Online Developer Tools & Pakistan Utilities`), meaning the PK hub and the homepage share the same title and description. This is a duplicate metadata issue.

**Fix:**  
Add a proper `export const metadata: Metadata = { ... }` to `app/pk/page.tsx` following AGENTS.md §11.5:
```
title: 'Pakistan Utility Tools – Bill Check, Subsidy & Program Guides | Tools2Do'
description: 'Free Pakistan utility helpers — check LESCO, MEPCO, IESCO, GEPCO, FESCO, HESCO, PESCO, KE bills. BISP, Ehsaas, petrol prices, and subsidy calculators.'
alternates: { canonical: 'https://tools2do.com/pk' }
```

---

### P2-I · ROBOTS: Missing `noindex` for Dynamic Slug Fallback Pages

**Files:** `app/tools/[slug]/page.tsx`, `app/pk/[slug]/page.tsx`

**Problem:**  
These are catch-all fallback pages that render a bare stub with placeholder text ("This lightweight browser tool page is ready for a dedicated client-side implementation"). If someone navigates to a tool slug that exists in the registry but has no dedicated page (unlikely now but possible as registry grows), or if Google crawls an invented slug that hits the fallback with `tool.description` only, they will see thin content.

More critically: `app/tools/[slug]/page.tsx` renders with no `noindex` directive when it successfully finds a tool, serving only `tool.name` and `tool.description` (2–3 sentences) — as a full indexable page. This creates thin duplicate content risk if any tool's dedicated page ever fails to load.

**Fix:**  
- Add `robots: { index: false, follow: true }` to both `[slug]/page.tsx` files so the catch-all fallbacks are never indexed.
- Each tool has its own dedicated directory already — the `[slug]` fallback should only be a safety net, not an indexable page.

---

## P3 — MEDIUM (Fix Within Two Sprints)

### P3-A · CONTENT: Most Non-Featured Tool Pages Have No H1 Section

**Affected files (sample):** `tools/base64/page.tsx`, `tools/regex-tester/page.tsx`, `tools/password-generator/page.tsx`, etc.

**Pattern issue:**  
Most tool pages follow this layout:
```jsx
<h1>Tool Name</h1>
<p>Tool description (1 sentence).</p>
<ToolComponent />
```
The `<h1>` is present (good), but below it there is only one sentence of content before the interactive tool UI. There are no:
- Examples
- How-to instructions  
- Feature list
- Use cases
- Related tools links

Per AGENTS.md §6.3, individual tool pages should include: "tool UI, instructions, examples, privacy details, related tools, and FAQs."

**Fix:** Add a "How to use" section and at least 2–3 related tool links after the tool UI for all tool pages. The LESCO and MEPCO pages do this correctly — use them as a model.

---

### P3-B · INTERNAL LINKS: No Cross-Links Between Related Tools

**Problem:**  
There are zero internal links between related tool pages. For example:
- The Image Compressor page doesn't link to Image Resizer or Image Converter
- The JSON Formatter page doesn't link to CSV to JSON or JavaScript Formatter
- The Word Counter page doesn't link to Character Counter, Case Converter, or Find and Replace

The only internal linking happens through the Navbar (4 links) and the Footer (10 global tools, 10 PK tools). This means tool pages are isolated crawl islands with no PageRank distribution between siblings.

**Fix:** Add a "Related Tools" section at the bottom of every tool page, linking to 2–4 semantically adjacent tools. This can be driven by a registry field.

---

### P3-C · INTERNAL LINKS: Footer Uses `<h2>` Inside `<footer>` Navigation

**File:** [`components/Footer.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/components/Footer.tsx) — lines 60, 68, 77, 87

**Problem:**  
The footer uses `<h2>` for section headings ("Developer Tools", "Pakistan Utilities", "Company", "Follow Us"). Since every page already has an `<h1>` and potentially `<h2>` elements in the page body, the footer `<h2>` tags interfere with heading hierarchy on many pages. Footers should use a non-heading element or lower-level heading like `<h3>`, or use `<p>` with visual styling for these navigational labels.

**Fix:** Change footer section headings from `<h2>` to `<h3>` or `<p class="...">` to avoid heading hierarchy pollution.

---

### P3-D · METADATA: `image-compressor` Missing Canonical URL

**File:** [`app/tools/image-compressor/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/tools/image-compressor/page.tsx)

**Problem:**  
This is the only featured tool page that exports a `Metadata` object **without** `alternates: { canonical: '...' }`. All other tool pages set a self-canonical. The image compressor page relies on the root layout's canonical (`https://tools2do.com`) instead of its own.

**Fix:** Add `alternates: { canonical: 'https://tools2do.com/tools/image-compressor' }` to the metadata export.

---

### P3-E · METADATA: `html-sitemap` Title Is Too Generic

**File:** [`app/html-sitemap/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/html-sitemap/page.tsx) — line 6

**Current title:** `HTML Sitemap`  
**Full rendered title:** `HTML Sitemap | Tools2Do`

**Problem:** This title is bare. Combined with layout template it's acceptable but could be improved for discoverability as a navigation aid.

**Fix:** `Tools2Do HTML Sitemap – All Tools & Pages | Tools2Do` (or just let the template handle it: title `'Tools2Do HTML Sitemap – All Tools & Pages'`).

---

### P3-F · OG IMAGES: Referenced Images Do Not Exist

**Files:** `app/pk/check-lesco-bill/page.tsx` line 9, `app/pk/check-mepco-bill/page.tsx` line 9 (and likely other PK pages)

**Problem:**  
OG image paths like `/images/check-lesco-bill-og.png` and `/images/check-mepco-bill-og.png` are referenced in OpenGraph metadata but these files **do not exist** in `public/images/`. The `public/images/` directory exists but its contents were not confirmed to contain these files.

This means social shares of LESCO/MEPCO pages will show no image (or a broken image fallback), harming click-through from social platforms.

**Fix:**  
Either generate per-page OG images using Next.js `opengraph-image.tsx` dynamic generation (like the homepage already does), or create static fallback images and place them in `public/images/`. The homepage has a working `opengraph-image.tsx` — extend this pattern per page type.

---

### P3-G · SCHEMA: PK Bill Pages Reuse Identical FAQ Text Across All DISCOs

**Files:** All `app/pk/check-*-bill/page.tsx` files

**Problem:**  
The FAQ content in all bill checker pages is virtually word-for-word identical — only the DISCO name is swapped (LESCO → MEPCO → IESCO, etc.). Google can detect near-duplicate FAQPage schema across pages and may devalue or ignore the structured data.

**Fix:** Differentiate FAQ content per DISCO: include city-specific questions (e.g., "How do I get a LESCO New Connection in Lahore?"), DISCO-specific portal URLs, office location info, mobile app availability etc. This also makes the pages more useful.

---

### P3-H · ACCESSIBILITY: Several Tool Forms Missing Visible Labels or Error IDs

**Files (examples):**  
- `components/tools/QrCodeGenerator.tsx` — `<label>` elements present but no `htmlFor` connecting them to input `id`  
- `components/tools/LescoBillChecker.tsx` — error `<p role="alert">` is not associated with the input via `aria-describedby`

**Problem:**  
Screen readers and accessibility tools need explicit `id`/`htmlFor` pairs and `aria-describedby` on error messages to correctly announce field errors. The label tag wrapping the input (`<label><span>...<input /></label>`) does work, but the error `<p>` is detached.

**Fix:**  
Add `id="lesco-reference"` to the input and `aria-describedby="lesco-error"` on the input + `id="lesco-error"` on the error `<p>`. Apply consistently across all tool forms.

---

### P3-I · CONTACT PAGE: Duplicate "Instagram" Social Link

**File:** [`app/contact/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/contact/page.tsx) — lines 47–52

**Problem:**  
The social links array has `Instagram` listed twice at different indexes (lines 48 and 52), with the same URL. This is a copy-paste error.

**Fix:** Remove the duplicate Instagram entry. Also note that the `key={s.href}` would silently fail for duplicate URLs — use `key={s.label + s.href}` or index as a fallback.

---

### P3-J · RSS FEED: All `pubDate` Are Set to Build Time

**File:** [`app/feed.xml/route.ts`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/feed.xml/route.ts) — lines 5, 13

**Problem:**  
Every RSS item has `<pubDate>` set to `new Date().toUTCString()` — the exact time the feed was requested. RSS feed readers and podcast aggregators use `pubDate` to determine freshness. A feed where every item appears newly published on every request will cause excessive re-delivery and may confuse feed readers.

**Fix:** Add a `publishedAt` date field to the tool registry, or use a static reasonable publication date per tool. As a minimum, use a fixed date string per tool rather than `now`.

---

## P4 — LOW (Polish When Capacity Allows)

### P4-A · SOCIAL HANDLES: Inconsistent Across Files

**Problem:**  
There are three different sets of social handles used across the codebase:
- `layout.tsx` Organization schema: `rajamashoodelahi` (Instagram, LinkedIn, Facebook, TikTok, YouTube) + `rajamashoode/tools2do` (GitHub)
- `page.tsx` Organization schema: `rajamashoode` (X/Twitter, LinkedIn, Facebook, Instagram, TikTok, YouTube) + `rajamashoode/tools2do` (GitHub)
- `components/Footer.tsx`: `rajamashoodelahi` (GitHub, Instagram, LinkedIn, Facebook, TikTok, YouTube)
- `app/about/page.tsx`: `rajamashoodelahi` (TikTok, Facebook, Instagram, LinkedIn)
- `app/team/page.tsx`: `rajamashoodelahi` (LinkedIn), `rajamashoodelahi` (X)
- `app/contact/page.tsx`: `rajamashoode/tools2do` (GitHub), `rajamashoodelahi` (Instagram, LinkedIn, Facebook, TikTok)

Inconsistent sameAs URLs damage entity consolidation in Google's Knowledge Graph.

**Fix:** Decide on canonical handles and create a single `siteConfig.ts` constant for social links. Use that everywhere.

---

### P4-B · PERFORMANCE: Schema Injected with `strategy="beforeInteractive"` on Every Page

**Files:** All tool `page.tsx` files

**Problem:**  
JSON-LD schema blocks use `<Script strategy="beforeInteractive">`. This means the schema JSON is blocking the main thread. For JSON-LD, this is unnecessary — it can be `strategy="afterInteractive"` or better yet, use a simple `<script type="application/ld+json">` tag in the Next.js `<head>` via the metadata API's `other` field or a `<Head>` component, which has no hydration cost.

**Fix:** Use Next.js metadata's JSON-LD support where available, or switch to `strategy="afterInteractive"`. JSON-LD is read by Googlebot at render time and does not need to block page load.

---

### P4-C · SCHEMA: Tool Pages Use `SoftwareApplication` Inconsistently

**Problem:**  
Some pages use `@type: SoftwareApplication`, others use `@type: WebApplication`. AGENTS.md §13.2 recommends `WebApplication` for browser-based tools. `SoftwareApplication` is more appropriate for downloadable software. This is minor but inconsistent.

**Fix:** Standardise all tool schema to `@type: WebApplication` (or use the `@graph` pattern with both if needed).

---

### P4-D · PERFORMANCE: AdSense Placeholder Adds Visual Noise When Not Loaded

**File:** [`components/AdSlot.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/components/AdSlot.tsx)

**Problem:**  
When AdSense is not loaded (e.g. in development, or blocked by ad blockers), the AdSlot renders a dashed border box with "Advertisement" text and reserved minimum height (100px leaderboard). This adds visual noise and empty space for users with ad blockers. The `NEXT_PUBLIC_ADSENSE_CLIENT_ID` defaults to `'ca-pub-0000000000000000'` — if this is used in production without the real ID in env, AdSense ads will silently fail.

**Fix:**  
- Ensure the real `ADSENSE_CLIENT_ID` and `ADSENSE_SLOT_ID` are set in production env.
- Consider hiding the placeholder border/label when `visible` but no ad loaded (use a 200ms delay + empty check).

---

### P4-E · METADATA: `keywords` Array in Root Layout is Too Broad

**File:** [`app/layout.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/layout.tsx) — line 18

**Problem:**  
```js
keywords: ['online tools','developer tools','LESCO bill','image compressor','JSON formatter','Pakistan utilities','free tools']
```
Google ignores `<meta name="keywords">` entirely. The `keywords` field in Next.js metadata still renders as a meta tag, but it provides zero SEO value and adds minor page weight. More importantly, mixing tool-specific terms (LESCO bill, image compressor) into the global root keyword list is bad practice even if it was useful.

**Fix:** Remove the `keywords` array from the root `layout.tsx` metadata entirely. Page-level keyword strategy should be expressed through visible content and title/description, not meta keywords.

---

### P4-F · SCHEMA: `screenshot` in JSON Formatter Schema Points to Non-Existent Image

**File:** [`app/tools/json-formatter/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/tools/json-formatter/page.tsx) — line 22

**Problem:**  
`screenshot: 'https://tools2do.com/images/json-formatter-screenshot.png'` — this image does not appear to exist in `public/images/`.

**Fix:** Either create the screenshot image and place it in `public/images/`, or remove the `screenshot` property from the schema until it exists.

---

### P4-G · SITEMAP: `changeFrequency: 'daily'` for All PK Utility Pages is Inaccurate

**File:** [`app/sitemap.ts`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/sitemap.ts) — line 18

**Problem:**  
Pakistan utility pages like BISP guidance, Ehsaas tracking, and PTCL bill checker are static content pages that don't change daily. Only petrol price checker content might change frequently. `changeFrequency: 'daily'` on static guides will cause Googlebot to re-crawl them unnecessarily.

**Fix:** Use `'weekly'` for most PK utility pages, and `'daily'` only for the petrol price checker or truly dynamic pages.

---

### P4-H · TEAM PAGE: Not Linked From Footer or Navigation

**File:** `app/team/page.tsx` exists but is not in `components/Footer.tsx`'s company links list.

**Problem:**  
The team page is linked in the HTML sitemap but not in the footer navigation. This makes it an orphan page accessible only from sitemap and direct URL. Trust pages like Team are low-effort credibility signals that should be easy to find.

**Fix:** Add `/team` to the Footer company links section.

---

### P4-I · PRIVACY POLICY: Last Updated Date is Hardcoded to "June 2025" (One Year Old)

**File:** [`app/privacy-policy/page.tsx`](file:///c:/Users/rajam/Desktop/tools2do-fixed/app/privacy-policy/page.tsx) — line 10

**Problem:**  
`const updated = 'June 2025'` — but the Terms of Service says "June 2026." The privacy policy appears to be 12 months out of date.

**Fix:** Update the privacy policy's `updated` constant to reflect the actual last review date. If the policy was meaningfully reviewed in 2026 with the new AdSense integration, update to `'June 2026'`.

---

## Summary Table

| ID | Area | Severity | File(s) |
|---|---|---|---|
| P1-A | Safety/Privacy | **Critical** | `LescoBillChecker.tsx` |
| P1-B | Schema | **Critical** | `layout.tsx`, `page.tsx` |
| P1-C | Schema | **Critical** | `json-formatter/page.tsx` |
| P1-D | Privacy/Content | **Critical** | `about/page.tsx` |
| P2-A | Metadata | High | ~20 tool page.tsx files |
| P2-B | Metadata | High | `image-compressor/page.tsx` |
| P2-C | Sitemap | High | `sitemap.ts` |
| P2-D | Sitemap | High | `sitemap.ts` |
| P2-E | Canonical | High | `check-lesco-bill`, `check-mepco-bill` |
| P2-F | Schema | High | `layout.tsx` |
| P2-G | Privacy | High | `qr-code-generator/page.tsx`, `QrCodeGenerator.tsx` |
| P2-H | Metadata | High | `pk/page.tsx` |
| P2-I | Indexation | High | `tools/[slug]/page.tsx`, `pk/[slug]/page.tsx` |
| P3-A | Content | Medium | All tool pages |
| P3-B | Internal links | Medium | All tool pages |
| P3-C | Accessibility/HTML | Medium | `Footer.tsx` |
| P3-D | Metadata | Medium | `image-compressor/page.tsx` |
| P3-E | Metadata | Medium | `html-sitemap/page.tsx` |
| P3-F | OG Images | Medium | PK bill checker pages |
| P3-G | Schema/Content | Medium | All `pk/check-*-bill` pages |
| P3-H | Accessibility | Medium | Multiple tool components |
| P3-I | Content | Medium | `contact/page.tsx` |
| P3-J | RSS | Medium | `feed.xml/route.ts` |
| P4-A | Entity/Social | Low | Multiple files |
| P4-B | Performance | Low | All tool page.tsx files |
| P4-C | Schema | Low | All tool page.tsx files |
| P4-D | Performance/UX | Low | `AdSlot.tsx` |
| P4-E | Metadata | Low | `layout.tsx` |
| P4-F | Schema | Low | `json-formatter/page.tsx` |
| P4-G | Sitemap | Low | `sitemap.ts` |
| P4-H | Internal links | Low | `Footer.tsx` |
| P4-I | Privacy | Low | `privacy-policy/page.tsx` |

---

## What's Working Well ✅

- **Canonical URLs:** Almost all pages set self-canonicals correctly (except image-compressor — P3-D).
- **robots.ts:** Clean and correct. Disallows `/_next/` and `/api/`. Points to sitemap.
- **next.config.ts:** Redirect chains are well-managed; old URL patterns are 301'd properly. City-to-DISCO redirects are correct.
- **Privacy Policy:** Honest and detailed. Correctly discloses Analytics, AdSense, Vercel, and QR Server API.
- **Terms of Service:** Explicitly disclaims government affiliation (§3). Correctly scoped.
- **Bill checker pages (LESCO, MEPCO):** Good content structure with H1, description, step-by-step guide, visible FAQs, BreadcrumbList schema, and official portal links. FAQPage schema matches visible content (FAQs are rendered via `<details>` elements). The issue is only with the fake bill data output (P1-A) and duplicate FAQ copy (P3-G).
- **OpenGraph image generation:** Homepage has a working dynamic `opengraph-image.tsx` using Next.js edge image generation.
- **AdSense CLS prevention:** `AdSlot.tsx` reserves minimum height per slot type, correctly preventing Cumulative Layout Shift.
- **Font loading:** Uses `next/font` with `display: 'swap'`, correct for CWV.
- **Image optimization:** `next.config.ts` configures AVIF and WebP formats with appropriate device sizes.
- **COOP/COEP headers:** Correctly set for Web Worker files in `public/workers/`.
- **`poweredByHeader: false`:** Set in `next.config.ts` — good security hygiene.
- **Middleware:** Country detection from Vercel headers is clean and correct.
- **Footer navigation:** Has proper `aria-label` on each `<nav>`. Links to all major tools and legal pages.
- **Navbar:** Has `aria-label="Primary navigation"` on the `<nav>` element. Mobile drawer toggles `aria-expanded` correctly.
