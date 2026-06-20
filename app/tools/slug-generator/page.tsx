import type { Metadata } from 'next';
import { SlugGenerator } from '@/components/tools/SlugGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Slug Generator',
  description: 'Generate clean URL slugs from any title or phrase.',
  alternates: { canonical: 'https://tools2do.com/tools/slug-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Slug Generator',
  description: 'Generate clean URL slugs from any title or phrase.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/slug-generator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Slug Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate clean URL slugs from any title or phrase.</p>
      </div>
      <SlugGenerator />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Input title', description: 'Enter your blog title, product name, or phrase.' },
          { step: 'Select separator', description: 'Choose separator style (dash, underscore, or space) and case formatting.' },
          { step: 'Copy slug', description: 'Grab the SEO-friendly URL slug instantly from the result box.' }
        ]}
        useCases={[
          'Creating clean, SEO-optimized URL path names for blog articles.',
          'Standardizing filename conventions for assets, images, and files.',
          'Generating human-readable route identifiers for dynamic pages.'
        ]}
        privacyNote='Slug generation occurs in-browser. Your titles and articles are completely private.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/uuid-generator', name: 'UUID Generator', description: 'Generate v4 UUIDs locally.' },
          { href: '/tools/url-encoder', name: 'URL Encoder Decoder', description: 'Encode or decode URL components.' },
          { href: '/tools/password-generator', name: 'Password Generator', description: 'Generate strong random passwords.' }
        ]}
      />
</>
  );
}
