import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

const SITE_URL = 'https://tools2do.com';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(): Promise<Response> {
  const now = new Date().toUTCString();
  const tools = [...GLOBAL_TOOLS, ...PK_TOOLS];

  const staticItems = [
    {
      title: 'Tools2Do - Free Online Developer Tools & Pakistan Utilities',
      url: SITE_URL,
      description:
        'Free browser-based tools for developers, students, creators, and everyday users. Includes image tools, PDF tools, text utilities, calculators, and Pakistan utility helpers.',
    },
    {
      title: 'Pakistan Utility Tools',
      url: `${SITE_URL}/pk`,
      description:
        'Pakistan utility helpers for electricity bills, gas bills, telecom bills, petrol prices, BISP guidance, and Ehsaas program tracking.',
    },
  ];

  const items = [
    ...staticItems,
    ...tools.map((tool) => ({
      title: tool.name,
      url: `${SITE_URL}${tool.slug}`,
      description: tool.description,
    })),
  ];

  const rssItems = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid>${escapeXml(item.url)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${now}</pubDate>
    </item>`
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tools2Do</title>
    <link>${SITE_URL}</link>
    <description>Free browser-based tools, PDF utilities, image tools, text helpers, calculators, and Pakistan utility guides.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
