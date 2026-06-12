import type { MetadataRoute } from 'next';
import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: 'https://tools2do.com',    lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://tools2do.com/pk', lastModified: now, changeFrequency: 'daily',  priority: 1.0 },
    ...GLOBAL_TOOLS.map(tool => ({
      url: `https://tools2do.com${tool.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: tool.isFeatured ? 0.9 : 0.8,
    })),
    ...PK_TOOLS.map(tool => ({
      url: `https://tools2do.com${tool.slug}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    })),
  ];
}
