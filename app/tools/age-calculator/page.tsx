import type { Metadata } from 'next';
import Script from 'next/script';
import { AgeCalculator } from '@/components/tools/AgeCalculator';

export const metadata: Metadata = {
  title: 'Age Calculator',
  description: 'Calculate exact age in years, months and days.',
  alternates: { canonical: 'https://tools2do.com/tools/age-calculator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Age Calculator',
  description: 'Calculate exact age in years, months and days.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/age-calculator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Age Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Calculate exact age in years, months and days.</p>
      </div>
      <AgeCalculator />
    </>
  );
}
