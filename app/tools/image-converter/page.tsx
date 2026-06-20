import type { Metadata } from 'next';
import { ImageConverter } from '@/components/tools/ImageConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Image Converter Online Free – Convert JPG PNG WebP Instantly',
  description: 'Convert images online free. JPG to WebP, PNG to JPG, WebP to PNG — batch convert multiple files, resize dimensions, adjust quality. No upload, no signup.',
  alternates: { canonical: 'https://tools2do.com/tools/image-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
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
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Image Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert images to JPG, PNG or WebP. Batch process multiple files, resize dimensions, adjust quality, and rename before downloading. No upload — runs in your browser.</p>
      </div>
      <ImageConverter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Upload files', description: 'Select one or more JPEG, PNG, or WebP images from your computer or phone.' },
          { step: 'Choose target format', description: 'Select JPG, PNG, or WebP as the destination format, and adjust optional settings.' },
          { step: 'Convert and download', description: "Click 'Convert' to process files instantly in your browser, then download your converted images." }
        ]}
        useCases={[
          'Converting heavy PNG screenshots to lightweight WebP formats for web use.',
          'Saving WebP images from websites back to standard JPG format for local compatibility.',
          'Batch processing multiple images in different formats to a single standardized type.'
        ]}
        privacyNote='All image format conversion is processed locally within your browser. No files are uploaded to any server.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Compress JPEG, PNG, and WebP files client-side.' },
          { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Resize images with custom dimensions or presets.' },
          { href: '/tools/image-to-pdf', name: 'Image to PDF', description: 'Convert multiple images to a single PDF.' }
        ]}
      />
</>
  );
}
