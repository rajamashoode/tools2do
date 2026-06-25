import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Compress Image to 50KB Online Free – Reduce Photo Size',
  description: 'Compress JPG, PNG, or WebP images to exactly 50KB or less without losing quality. 100% free, private, client-side browser processing.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-image-to-50kb' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Compress Image to 50KB Online","description":"Compress JPG, PNG, or WebP images to exactly 50KB or less without losing quality. 100% free, private, client-side browser processing.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-compressor/compress-image-to-50kb"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress Image to 50KB Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Upload your photo to instantly reduce its file size to 50KB or below. Perfect for government forms, admission portals, and email attachments.</p>
      </div>
      <ImageCompressor targetSize="50kb" />
      <ToolInfoSection
        howToSteps={[{ step: 'Upload Image', description: 'Drag and drop your JPEG, PNG, or WebP file into the compressor.' }, { step: 'Auto Compress', description: 'The tool automatically adjusts the quality to hit the 50KB target.' }, { step: 'Download File', description: 'Save the optimized image directly to your device.' }]}
        useCases={['Uploading photos to government portals or university admission forms that require a strict 50KB limit.', 'Reducing email attachment sizes to send multiple images at once.', 'Optimizing images for faster website loading speeds.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-compressor/compress-image-to-100kb', name: 'Compress Image to 100KB', description: 'Reduce image size to 100KB online.' }, { href: '/tools/image-converter', name: 'Image Converter', description: 'Convert images to JPG, PNG, or WebP format.' }, { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Resize images with custom dimensions.' }]}
      />
    </>
  );
}