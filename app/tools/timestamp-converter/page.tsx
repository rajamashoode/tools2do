import type { Metadata } from 'next';
import Script from 'next/script';
import { TimestampConverter } from '@/components/tools/TimestampConverter';

export const metadata: Metadata = {
  title: 'Timestamp Converter',
  description: 'Convert Unix timestamps to dates and back.',
  alternates: { canonical: 'https://tools2do.com/tools/timestamp-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Timestamp Converter',
  description: 'Convert Unix timestamps to dates and back.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/timestamp-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Timestamp Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert Unix timestamps to dates and back.</p>
      </div>
      <TimestampConverter />
    </>
  );
}
