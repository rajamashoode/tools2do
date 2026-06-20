import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Compress Image to 100KB – Online Size Reducer',
  description: 'Compress image to 100KB online free. Reduce photo size to exactly 100KB for exam portals, government forms, and job applications client-side.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-image-to-100kb' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Compress Image to 100KB Online',
  description: 'Free client-side image compressor preset to target exactly 100KB.',
  applicationCategory: 'ImageEditorApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/image-compressor/compress-image-to-100kb',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress Image to 100KB Online Free</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Reduce photo size to exactly 100KB for portals, government forms, and job applications. Secure client-side compression without uploads.</p>
      </div>
      <ImageCompressor targetSize="100KB" />
      <ToolInfoSection
        howToSteps={[
          { step: 'Upload images', description: 'Drag and drop or click to upload your JPEG, PNG, or WebP files.' },
          { step: 'Preset configuration', description: 'The compressor is automatically pre-configured to output files within the 100KB boundary.' },
          { step: 'Download', description: 'Click compress and save the optimized files instantly to your local storage.' }
        ]}
        useCases={[
          'Fulfilling strict 100KB file limitations on Pakistani government and educational admissions portals (HEC, CSS, FPSC).',
          'Reducing email size constraints by target limits.',
          'Optimizing signatures and documents.'
        ]}
        privacyNote="All image compression is executed directly in your browser using local canvas processing APIs. Your files are never sent to a server."
      />
      <RelatedTools
        tools={[
          { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Adjust custom compression settings for PNG, JPG, and WebP files.' },
          { href: '/tools/image-converter', name: 'Image Converter', description: 'Convert image files to JPG, PNG, or WebP format.' },
          { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Crop or resize images to custom pixel dimensions.' }
        ]}
      />
    </>
  );
}
