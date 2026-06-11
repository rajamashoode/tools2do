import type { MetadataRoute } from 'next';
import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

const SITE_URL = 'https://tools2do.com';

const staticRoutes = [
  { path: '/',               changeFrequency: 'weekly' as const,  priority: 1.0 },
  { path: '/pk',             changeFrequency: 'daily' as const,   priority: 1.0 },
  { path: '/about',          changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/team',           changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact',        changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/html-sitemap',   changeFrequency: 'weekly' as const,  priority: 0.6 },
  { path: '/terms',          changeFrequency: 'yearly' as const,  priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly' as const,  priority: 0.5 },
  { path: '/feed.xml',       changeFrequency: 'daily' as const,   priority: 0.4 },
  { path: '/rss.xml',        changeFrequency: 'daily' as const,   priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const tools = [...GLOBAL_TOOLS, ...PK_TOOLS];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...tools.map((tool) => ({
      url: `${SITE_URL}${tool.slug}`,
      lastModified: now,
      changeFrequency: tool.isPakistani ? ('daily' as const) : ('monthly' as const),
      priority: tool.isPakistani ? 0.9 : tool.isFeatured ? 0.9 : 0.8,
    })),
  ];
}
