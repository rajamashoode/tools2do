import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Passport Size Photo Resizer – Resize to 35x45mm Online',
  description: 'Resize and crop photo to passport size online free. Create 35x45mm Pakistan passport photos or 2x2 inch US visa photos client-side instantly.',
  alternates: { canonical: 'https://tools2do.com/tools/image-resizer/passport-size-photo-resizer' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Passport Size Photo Resizer Online',
  description: 'Free client-side tool to crop and resize photos to official passport and visa dimensions.',
  applicationCategory: 'ImageEditorApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/image-resizer/passport-size-photo-resizer',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Passport Size Photo Resizer Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Crop and resize your photo to official passport dimensions (35x45mm or 2x2 inches). 100% private client-side processing.</p>
      </div>
      <ImageCompressor targetSize="Passport Size" />
      <ToolInfoSection
        howToSteps={[
          { step: 'Upload portrait photo', description: 'Drag and drop or select a high-quality headshot photograph.' },
          { step: 'Crop & Resize', description: 'The tool automatically crops and resizes the photo to official passport/visa aspect ratios.' },
          { step: 'Download', description: 'Save your passport-ready photo instantly to your device.' }
        ]}
        useCases={[
          'Generating official 35x45mm photos for Pakistan passport and ID card submissions.',
          'Resizing 2x2 inch photos for US visa, green card, or passport registration.',
          'Preparing compliant photos for online registration portals, corporate IDs, or admission cards.'
        ]}
        privacyNote="All face cropping and image adjustments are executed locally using your browser's Canvas API. Your photos are never sent to a server."
      />
      <RelatedTools
        tools={[
          { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Resize images with custom dimensions or standard social presets.' },
          { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Compress images to target file sizes (100KB, 200KB, 500KB) online.' },
          { href: '/tools/image-converter', name: 'Image Converter', description: 'Convert images to JPG, PNG, or WebP format in batch.' }
        ]}
      />
    </>
  );
}
