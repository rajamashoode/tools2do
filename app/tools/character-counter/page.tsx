import type { Metadata } from 'next';
import Script from 'next/script';
import { CharacterCounter } from '@/components/tools/CharacterCounter';

export const metadata: Metadata = {
  title: 'Character Counter',
  description: 'Count characters with platform limit bars.',
  alternates: { canonical: 'https://tools2do.com/tools/character-counter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Character Counter',
  description: 'Count characters with platform limit bars.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/character-counter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Character Counter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Count characters with platform limit bars.</p>
      </div>
      <CharacterCounter />
    </>
  );
}
