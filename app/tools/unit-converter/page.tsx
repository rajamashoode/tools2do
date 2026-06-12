import type { Metadata } from 'next';
import Script from 'next/script';
import { UnitConverter } from '@/components/tools/UnitConverter';

export const metadata: Metadata = {
  title: 'Unit Converter',
  description: 'Convert length, weight, temperature and volume units.',
  alternates: { canonical: 'https://tools2do.com/tools/unit-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Unit Converter',
  description: 'Convert length, weight, temperature and volume units.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/unit-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Unit Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert length, weight, temperature and volume units.</p>
      </div>
      <UnitConverter />
    </>
  );
}
