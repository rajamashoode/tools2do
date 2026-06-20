import type { Metadata } from 'next';
import { ImageResizer } from '@/components/tools/ImageResizer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Image Resizer Online Free – Resize JPG PNG WebP in Seconds',
  description: 'Resize images online free — no signup, no upload. Batch resize JPG, PNG, WebP with Instagram, Facebook, Twitter presets or custom px. Runs in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/image-resizer' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
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
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Image Resizer</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Resize images to any dimension. Use quick presets for Instagram, Facebook, Twitter and more, or enter custom width and height. Supports multiple files and file renaming.</p>
      </div>
      <ImageResizer />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Upload image', description: 'Click the upload area or drag and drop an image file.' },
          { step: 'Enter dimensions', description: 'Specify custom width and height, or select a preset for Instagram, Facebook, or Twitter.' },
          { step: 'Download resized', description: 'Apply the changes and download the newly sized image instantly.' }
        ]}
        useCases={[
          'Preparing social media profile pictures or post layouts to correct sizes.',
          'Downscaling large camera photos to fit web standard dimensions.',
          'Cropping or adjusting canvas sizes for presentations.'
        ]}
        privacyNote='Your images are processed locally using client-side rendering. No files are transmitted online.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Compress JPEG, PNG, and WebP files client-side.' },
          { href: '/tools/image-converter', name: 'Image Converter', description: 'Convert images to JPG, PNG or WebP client-side.' },
          { href: '/tools/image-to-pdf', name: 'Image to PDF', description: 'Convert multiple images to a single PDF.' }
        ]}
      />
</>
  );
}
