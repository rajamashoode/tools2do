import type { Metadata } from 'next';
import Script from 'next/script';
import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';

export const metadata: Metadata = {
  title: 'URL Encoder / Decoder',
  description: 'Encode and decode URL components safely in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/url-encoder' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'URL Encoder / Decoder',
  description: 'Encode and decode URL components safely in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/url-encoder',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL Encoder / Decoder</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Encode and decode URL components safely in your browser.</p>
      </div>
      <UrlEncoderDecoder />
    </>
  );
}
