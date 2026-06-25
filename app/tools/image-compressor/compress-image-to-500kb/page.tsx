import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Compress Image to 500KB Online – High Quality Compressor',
  description: 'Reduce high-resolution photos to 500KB while maintaining excellent quality. Free browser-based image compressor tool.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-image-to-500kb' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Compress Image to 500KB","description":"Reduce high-resolution photos to 500KB while maintaining excellent quality. Free browser-based image compressor tool.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-compressor/compress-image-to-500kb"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress Image to 500KB</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compress large photos from your camera or phone down to 500KB. Perfect for sharing high-quality images without huge file sizes.</p>
      </div>
      <ImageCompressor targetSize="500kb" />
      <ToolInfoSection
        howToSteps={[{ step: 'Upload Large Photo', description: 'Select the large photo you wish to shrink.' }, { step: 'Wait a Second', description: 'The tool quickly processes the image down to 500KB.' }, { step: 'Save File', description: 'Download your optimized high-quality image.' }]}
        useCases={['Preparing high-resolution portfolio images for the web.', 'Compressing photos taken on an iPhone or DSLR before emailing them.', 'Reducing PDF embedding sizes by shrinking the source images first.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-compressor/compress-image-to-100kb', name: 'Compress Image to 100KB', description: 'Compress images to a strict 100KB limit.' }]}
      />
    </>
  );
}