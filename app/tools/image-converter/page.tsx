import type { Metadata } from 'next';
import Script from 'next/script';
import { ImageConverter } from '@/components/tools/ImageConverter';

export const metadata: Metadata = {
  title: 'Image Converter – Convert JPG, PNG, WebP Online',
  description: 'Convert images to JPG, PNG or WebP format. Supports batch conversion, custom dimensions, quality control and file rename. Runs in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/image-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Image Converter – Convert JPG, PNG, WebP Online',
  description: 'Convert images to JPG, PNG or WebP format. Supports batch conversion, custom dimensions, quality control and file rename. Runs in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/image-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Image Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert images to JPG, PNG or WebP. Batch process multiple files, resize dimensions, adjust quality, and rename before downloading. No upload — runs in your browser.</p>
      </div>
      <ImageConverter />
    </>
  );
}
