import type { Metadata } from 'next';
import Script from 'next/script';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';

export const metadata: Metadata = {
  title: 'Password Generator',
  description: 'Generate strong random passwords with crypto.getRandomValues.',
  alternates: { canonical: 'https://tools2do.com/tools/password-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Password Generator',
  description: 'Generate strong random passwords with crypto.getRandomValues.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/password-generator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Password Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate strong random passwords with crypto.getRandomValues.</p>
      </div>
      <PasswordGenerator />
    </>
  );
}
