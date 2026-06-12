import type { Metadata } from 'next';
import Script from 'next/script';
import { RemoveExtraSpaces } from '@/components/tools/RemoveExtraSpaces';

export const metadata: Metadata = {
  title: 'Remove Extra Spaces',
  description: 'Clean text by removing duplicate spaces and line breaks.',
  alternates: { canonical: 'https://tools2do.com/tools/remove-extra-spaces' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Remove Extra Spaces',
  description: 'Clean text by removing duplicate spaces and line breaks.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/remove-extra-spaces',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Remove Extra Spaces</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Clean text by removing duplicate spaces and line breaks.</p>
      </div>
      <RemoveExtraSpaces />
    </>
  );
}
