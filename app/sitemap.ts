import type { MetadataRoute } from 'next';
import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

// Static build date used as a stable lastModified anchor.
// Update this date when you make meaningful content changes to a page group.
// Do NOT use `new Date()` here — that makes every page appear freshly changed on every build,
// which sends inaccurate freshness signals to Googlebot.
const TOOLS_LAST_MODIFIED   = new Date('2026-06-20');
const PK_TOOLS_LAST_MODIFIED = new Date('2026-06-20');
const SITE_LAST_MODIFIED    = new Date('2026-06-20');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: 'https://tools2do.com',            lastModified: SITE_LAST_MODIFIED,     changeFrequency: 'weekly',  priority: 1.0 },
    { url: 'https://tools2do.com/pk',         lastModified: PK_TOOLS_LAST_MODIFIED, changeFrequency: 'weekly',  priority: 0.9 },
    { url: 'https://tools2do.com/about',      lastModified: SITE_LAST_MODIFIED,     changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://tools2do.com/contact',    lastModified: SITE_LAST_MODIFIED,     changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://tools2do.com/team',       lastModified: SITE_LAST_MODIFIED,     changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://tools2do.com/privacy-policy', lastModified: SITE_LAST_MODIFIED, changeFrequency: 'yearly',  priority: 0.4 },
    { url: 'https://tools2do.com/terms',      lastModified: SITE_LAST_MODIFIED,     changeFrequency: 'yearly',  priority: 0.4 },
    { url: 'https://tools2do.com/html-sitemap', lastModified: SITE_LAST_MODIFIED,   changeFrequency: 'monthly', priority: 0.3 },

    // Global tools
    ...GLOBAL_TOOLS.map(tool => ({
      url: `https://tools2do.com${tool.slug}`,
      lastModified: TOOLS_LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: tool.isFeatured ? 0.9 : 0.8,
    })),

    // Pakistan utility pages — 'weekly' because guides may be updated with new portal links
    // and price/program changes. Not 'daily' since these are static content pages.
    ...PK_TOOLS.map(tool => ({
      url: `https://tools2do.com${tool.slug}`,
      lastModified: PK_TOOLS_LAST_MODIFIED,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    // Programmatic SEO Pages
    { url: 'https://tools2do.com/tools/image-compressor/compress-image-to-100kb', lastModified: TOOLS_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://tools2do.com/tools/image-compressor/compress-image-to-200kb', lastModified: TOOLS_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://tools2do.com/tools/image-compressor/compress-image-to-500kb', lastModified: TOOLS_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://tools2do.com/tools/image-resizer/passport-size-photo-resizer', lastModified: TOOLS_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.7 },
  ];
}
