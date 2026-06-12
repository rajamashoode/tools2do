import type { Metadata } from 'next';
import Script from 'next/script';
import { TextRepeater } from '@/components/tools/TextRepeater';

export const metadata: Metadata = {
  title: 'Text Repeater',
  description: 'Repeat any word, sentence or paragraph multiple times.',
  alternates: { canonical: 'https://tools2do.com/tools/text-repeater' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Text Repeater',
  description: 'Repeat any word, sentence or paragraph multiple times.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/text-repeater',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Text Repeater</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Repeat any word, sentence or paragraph multiple times.</p>
      </div>
      <TextRepeater />
    </>
  );
}
