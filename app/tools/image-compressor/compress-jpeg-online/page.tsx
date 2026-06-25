import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Compress JPEG Online – Reduce JPEG File Size Free',
  description: "Compress JPEG images online without losing quality. Free browser-based JPEG compressor to reduce image file size securely.",
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-jpeg-online' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Compress JPEG Online","description":"Compress JPEG images online without losing quality. Free browser-based JPEG compressor to reduce image file size securely.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-compressor/compress-jpeg-online"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress JPEG Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Shrink your large JPEG files down to a fraction of their original size. Maintain visual fidelity while drastically improving load times.</p>
      </div>
      <ImageCompressor />
      <ToolInfoSection
        howToSteps={[{ step: "Upload JPEG", description: "Drag and drop your JPEG photo." }, { step: "Auto-Compress", description: "The tool intelligently balances quality and file size." }, { step: "Download File", description: "Save the significantly smaller JPEG image." }]}
        useCases={["Compressing heavy JPEG photos from a DSLR camera.", "Optimizing images for faster loading on a WordPress blog.", "Meeting email attachment size limits."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-compressor/compress-image-to-200kb', name: 'Compress Image to 200KB', description: "Set a strict size limit." }]}
      />
    </>
  );
}