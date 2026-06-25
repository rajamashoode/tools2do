import type { Metadata } from 'next';
import { ImageResizer } from '@/components/tools/ImageResizer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Resize Image for Instagram Online – Free Square Crop',
  description: "Easily resize your photos to perfect Instagram dimensions (1080x1080). Crop, scale, and adjust your images online for free.",
  alternates: { canonical: 'https://tools2do.com/tools/image-resizer/resize-image-for-instagram' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Resize Image for Instagram","description":"Easily resize your photos to perfect Instagram dimensions (1080x1080). Crop, scale, and adjust your images online for free.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-resizer/resize-image-for-instagram"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Resize Image for Instagram</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Ensure your photos look perfect on your feed. Resize and crop images to 1080x1080 pixels securely in your browser.</p>
      </div>
      <ImageResizer />
      <ToolInfoSection
        howToSteps={[{ step: "Upload Photo", description: "Drop your high-resolution image into the tool." }, { step: "Set Dimensions", description: "Set width and height to 1080x1080 or select a 1:1 aspect ratio." }, { step: "Download Image", description: "Save the perfectly sized photo for your feed." }]}
        useCases={["Creating perfectly square images for an Instagram feed.", "Preventing Instagram from cropping important parts of a photo.", "Standardizing product images for social media marketing."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-compressor', name: 'Image Compressor', description: "Compress images to reduce file size." }, { href: '/tools/image-resizer/resize-image-to-1080p', name: 'Resize to 1080p', description: "Resize images to Full HD." }]}
      />
    </>
  );
}