import type { Metadata } from 'next';
import Script from 'next/script';
import { SlugGenerator } from '@/components/tools/SlugGenerator';

export const metadata: Metadata = {
  title: 'Slug Generator',
  description: 'Generate clean URL slugs from any title or phrase.',
  alternates: { canonical: 'https://tools2do.com/tools/slug-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
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
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Slug Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate clean URL slugs from any title or phrase.</p>
      </div>
      <SlugGenerator />
    </>
  );
}
