import type { Metadata } from 'next';
import Script from 'next/script';
import { CssFormatter } from '@/components/tools/CssFormatter';

export const metadata: Metadata = {
  title: 'CSS Formatter',
  description: 'Format or minify CSS stylesheets in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/css-formatter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CSS Formatter',
  description: 'Format or minify CSS stylesheets in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/css-formatter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">CSS Formatter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format or minify CSS stylesheets in your browser.</p>
      </div>
      <CssFormatter />
    </>
  );
}
