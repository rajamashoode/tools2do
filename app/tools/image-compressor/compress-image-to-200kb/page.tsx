import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Compress Image to 200KB Online – Free Photo Reducer',
  description: 'Compress JPG, PNG, or WebP images to 200KB or less without losing noticeable quality. Free, fast, private image compression.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-image-to-200kb' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Compress Image to 200KB","description":"Compress JPG, PNG, or WebP images to 200KB or less without losing noticeable quality. Free, fast, private image compression.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-compressor/compress-image-to-200kb"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress Image to 200KB</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Reduce your photo file size to exactly 200KB. An ideal tool for optimizing website images and meeting medium-size upload limits.</p>
      </div>
      <ImageCompressor targetSize="200kb" />
      <ToolInfoSection
        howToSteps={[{ step: 'Select Image', description: 'Drop your high-resolution image into the box.' }, { step: 'Process Automatically', description: 'The tool compresses the image while aiming for a maximum of 200KB.' }, { step: 'Download', description: 'Save the highly optimized image.' }]}
        useCases={['Compressing blog post featured images to improve SEO load times.', 'Meeting 200KB upload limits on forums and profile picture systems.', 'Saving storage space while keeping images looking sharp.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-compressor/compress-image-to-500kb', name: 'Compress Image to 500KB', description: 'Compress images to a larger 500KB limit.' }]}
      />
    </>
  );
}