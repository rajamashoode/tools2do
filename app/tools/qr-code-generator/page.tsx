import type { Metadata } from 'next';
import Script from 'next/script';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';

export const metadata: Metadata = {
  title: 'QR Code Generator',
  description: 'Generate QR codes for URLs, text and contacts.',
  alternates: { canonical: 'https://tools2do.com/tools/qr-code-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'QR Code Generator',
  description: 'Generate QR codes for URLs, text and contacts.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/qr-code-generator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">QR Code Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate QR codes for URLs, text and contacts.</p>
      </div>
      <QrCodeGenerator />
    </>
  );
}
