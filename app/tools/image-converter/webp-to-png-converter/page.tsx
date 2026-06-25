import type { Metadata } from 'next';
import { ImageConverter } from '@/components/tools/ImageConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'WebP to PNG Converter – Convert WebP to PNG Online Free',
  description: 'Convert downloaded WebP images back to transparent, lossless PNG format in your browser. Fast, private, and secure.',
  alternates: { canonical: 'https://tools2do.com/tools/image-converter/webp-to-png-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"WebP to PNG Converter","description":"Convert downloaded WebP images back to transparent, lossless PNG format in your browser. Fast, private, and secure.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-converter/webp-to-png-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">WebP to PNG Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">WebP images are great for the web, but hard to edit. Convert WebP files back to highly-compatible PNG images instantly.</p>
      </div>
      <ImageConverter targetFormat="image/png" />
      <ToolInfoSection
        howToSteps={[{ step: 'Upload WebP', description: 'Drop the WebP file into the converter.' }, { step: 'Convert', description: 'The tool automatically prepares a lossless PNG version.' }, { step: 'Download', description: 'Save the PNG file for editing.' }]}
        useCases={['Converting WebP logos downloaded from sites back to transparent PNGs.', 'Preparing web images for use in Adobe Photoshop or Illustrator.', 'Making images compatible with older CMS platforms.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-converter/webp-to-jpg-converter', name: 'WebP to JPG Converter', description: 'Convert WebP images to JPG.' }]}
      />
    </>
  );
}