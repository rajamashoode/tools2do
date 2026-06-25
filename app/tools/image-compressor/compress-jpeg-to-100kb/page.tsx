import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Compress JPEG to 100KB Online – Free JPG Size Reducer',
  description: 'Reduce JPEG file size to 100KB or less online. Fast, secure, and private in-browser compression without losing visual quality.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-jpeg-to-100kb' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Compress JPEG to 100KB Online","description":"Reduce JPEG file size to 100KB or less online. Fast, secure, and private in-browser compression without losing visual quality.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-compressor/compress-jpeg-to-100kb"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress JPEG to 100KB Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Easily compress your JPEG and JPG photos to 100KB for web uploads and form submissions. No server upload required.</p>
      </div>
      <ImageCompressor targetSize="100kb" />
      <ToolInfoSection
        howToSteps={[{ step: 'Select JPEG', description: 'Choose the JPG/JPEG file you want to compress.' }, { step: 'Reduce Size', description: 'Our algorithm finds the best quality setting to reach 100KB.' }, { step: 'Save Photo', description: 'Download the compressed JPEG file.' }]}
        useCases={['Meeting strict 100KB file size limits for online job applications.', 'Compressing scanned documents saved as JPEGs for easy sharing.', 'Saving storage space on your phone or computer.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-compressor', name: 'Image Compressor', description: 'General image compression tool.' }, { href: '/tools/image-resizer', name: 'Image Resizer', description: 'Change the dimensions of your JPEG.' }]}
      />
    </>
  );
}