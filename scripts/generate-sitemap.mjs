import fs from 'fs';
import path from 'path';

function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const baseDir = path.resolve('app');
let allPages = findPageFiles(path.join(baseDir, 'tools'));
allPages = allPages.concat(findPageFiles(path.join(baseDir, 'pakistan-tools')));

// filter out any [slug] or layout files if they match by mistake (none should, but just in case)
let urls = allPages.map(p => {
  let relativePath = path.relative(baseDir, p);
  // replace backslashes with forward slashes
  relativePath = relativePath.replace(/\\/g, '/');
  // remove '/page.tsx'
  relativePath = relativePath.replace('/page.tsx', '');
  return `https://tools2do.com/${relativePath}`;
});

// sort alphabetically
urls.sort();

let sitemapCode = `import { MetadataRoute } from 'next';

// --------------------------------------------------------------------------------
// IMPORTANT: IF YOU ADD NEW ROUTES, MAKE SURE TO ADD THEM HERE!
// --------------------------------------------------------------------------------

export default function sitemap(): MetadataRoute.Sitemap {
  const CORE_LAST_MODIFIED = new Date().toISOString();
  const TOOLS_LAST_MODIFIED = new Date().toISOString();
  const BLOG_LAST_MODIFIED = new Date('2024-03-20').toISOString();

  const coreRoutes = [
    { url: 'https://tools2do.com', lastModified: CORE_LAST_MODIFIED, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: 'https://tools2do.com/tools', lastModified: CORE_LAST_MODIFIED, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: 'https://tools2do.com/blog', lastModified: BLOG_LAST_MODIFIED, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://tools2do.com/about', lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://tools2do.com/contact', lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://tools2do.com/privacy-policy', lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: 'https://tools2do.com/terms-of-service', lastModified: CORE_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: 'https://tools2do.com/blog/pta-tax-abolished-pakistan-smartphones-regulatory-duty-update', lastModified: BLOG_LAST_MODIFIED, changeFrequency: 'yearly' as const, priority: 0.6 }
  ];

  const dynamicRoutes = [
`;

for (const url of urls) {
  sitemapCode += `    { url: '${url}', lastModified: TOOLS_LAST_MODIFIED, changeFrequency: 'monthly' as const, priority: 0.7 },\n`;
}

sitemapCode += `  ];

  return [...coreRoutes, ...dynamicRoutes];
}
`;

fs.writeFileSync('app/sitemap.ts', sitemapCode);
console.log('Sitemap fully auto-generated with ' + urls.length + ' tool routes!');
