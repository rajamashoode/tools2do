import { TOOLS_REGISTRY } from '@/lib/tools-registry';

// P3-J fix: Use stable per-item dates instead of new Date() at build time.
// Previously, every item had the build timestamp as pubDate — this gave RSS readers
// the false impression that every tool was "new" on every deployment.
// Now items carry the date the tool was most recently meaningfully updated.
// Update TOOLS_LAST_MODIFIED (and individual overrides below) whenever a tool's
// content, functionality, or metadata changes significantly.
const TOOLS_LAST_MODIFIED = 'Thu, 19 Jun 2026 12:00:00 GMT';

// Per-tool date overrides. If a tool has been updated more recently than the
// shared baseline, add an entry here: id → RFC-2822 date string.
const TOOL_DATES: Record<string, string> = {
  'json-formatter':      'Thu, 19 Jun 2026 12:00:00 GMT',
  'image-compressor':    'Thu, 19 Jun 2026 12:00:00 GMT',
  'image-converter':     'Thu, 19 Jun 2026 12:00:00 GMT',
  'word-counter':        'Thu, 19 Jun 2026 12:00:00 GMT',
  'lesco-bill':          'Thu, 19 Jun 2026 12:00:00 GMT',
  'ke-bill':             'Thu, 19 Jun 2026 12:00:00 GMT',
};

export async function GET(): Promise<Response> {
  const base = 'https://tools2do.com';
  const feedLastBuild = TOOLS_LAST_MODIFIED;

  const items = TOOLS_REGISTRY.slice(0, 20).map(tool => `
    <item>
      <title><![CDATA[${tool.name}]]></title>
      <link>${base}${tool.slug}</link>
      <guid isPermaLink="true">${base}${tool.slug}</guid>
      <description><![CDATA[${tool.description}]]></description>
      <pubDate>${TOOL_DATES[tool.id] ?? TOOLS_LAST_MODIFIED}</pubDate>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tools2Do – Free Online Tools</title>
    <link>${base}</link>
    <description>Free browser-based tools for developers and Pakistan utility helpers.</description>
    <language>en-us</language>
    <lastBuildDate>${feedLastBuild}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
