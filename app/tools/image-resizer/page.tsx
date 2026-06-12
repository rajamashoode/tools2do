import type { Metadata } from 'next';
import Script from 'next/script';
import { ImageResizer } from '@/components/tools/ImageResizer';

export const metadata: Metadata = {
  title: 'Image Resizer – Resize Images Online Free',
  description: 'Resize images to custom dimensions or use quick presets for Instagram, Facebook, Twitter and passport photos. Batch support, rename before download.',
  alternates: { canonical: 'https://tools2do.com/tools/image-resizer' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Image Resizer – Resize Images Online Free',
  description: 'Resize images to custom dimensions or use quick presets for Instagram, Facebook, Twitter and passport photos. Batch support, rename before download.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/image-resizer',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Image Resizer</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Resize images to any dimension. Use quick presets for Instagram, Facebook, Twitter and more, or enter custom width and height. Supports multiple files and file renaming.</p>
      </div>
      <ImageResizer />
    </>
  );
}
