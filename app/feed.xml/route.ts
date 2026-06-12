import { TOOLS_REGISTRY } from '@/lib/tools-registry';

export async function GET(): Promise<Response> {
  const base = 'https://tools2do.com';
  const now  = new Date().toUTCString();

  const items = TOOLS_REGISTRY.slice(0, 20).map(tool => `
    <item>
      <title><![CDATA[${tool.name}]]></title>
      <link>${base}${tool.slug}</link>
      <guid isPermaLink="true">${base}${tool.slug}</guid>
      <description><![CDATA[${tool.description}]]></description>
      <pubDate>${now}</pubDate>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tools2Do – Free Online Tools</title>
    <link>${base}</link>
    <description>Free browser-based tools for developers and Pakistan utility helpers.</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
