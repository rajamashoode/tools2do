import type { Metadata } from 'next';
import Script from 'next/script';
import { CaseConverter } from '@/components/tools/CaseConverter';

export const metadata: Metadata = {
  title: 'Case Converter',
  description: 'Convert to UPPERCASE, lowercase, Title Case, slug-format.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Case Converter',
  description: 'Convert to UPPERCASE, lowercase, Title Case, slug-format.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/case-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert to UPPERCASE, lowercase, Title Case, slug-format.</p>
      </div>
      <CaseConverter />
    </>
  );
}
