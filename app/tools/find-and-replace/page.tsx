import type { Metadata } from 'next';
import Script from 'next/script';
import { FindAndReplace } from '@/components/tools/FindAndReplace';

export const metadata: Metadata = {
  title: 'Find and Replace',
  description: 'Find and replace text with plain text or regex.',
  alternates: { canonical: 'https://tools2do.com/tools/find-and-replace' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Find and Replace',
  description: 'Find and replace text with plain text or regex.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/find-and-replace',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Find and Replace</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find and replace text with plain text or regex.</p>
      </div>
      <FindAndReplace />
    </>
  );
}
