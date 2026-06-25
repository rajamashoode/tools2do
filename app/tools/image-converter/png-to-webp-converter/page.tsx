import type { Metadata } from 'next';
import { ImageConverter } from '@/components/tools/ImageConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'PNG to WebP Converter – Convert PNG to WebP Online',
  description: 'Convert transparent PNG images to next-gen WebP format. Reduce file size significantly while preserving transparency.',
  alternates: { canonical: 'https://tools2do.com/tools/image-converter/png-to-webp-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"PNG to WebP Converter","description":"Convert transparent PNG images to next-gen WebP format. Reduce file size significantly while preserving transparency.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-converter/png-to-webp-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PNG to WebP Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Speed up your website by converting heavy PNG graphics into highly compressed WebP images. Supports transparency.</p>
      </div>
      <ImageConverter targetFormat="image/webp" />
      <ToolInfoSection
        howToSteps={[{ step: 'Select PNGs', description: 'Upload the PNG files you want to optimize.' }, { step: 'Convert to WebP', description: 'The tool compresses the files into the WebP format.' }, { step: 'Download', description: 'Save the optimized WebP images.' }]}
        useCases={['Optimizing transparent graphics for faster website loading speeds.', 'Creating smaller image assets for mobile applications.', 'Improving Google PageSpeed Insights scores.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-compressor', name: 'Image Compressor', description: 'Further compress your images.' }]}
      />
    </>
  );
}