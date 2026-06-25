import type { Metadata } from 'next';
import { ImageResizer } from '@/components/tools/ImageResizer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Resize Image to 1080p Online – Free Full HD Resizer',
  description: "Resize any photo to 1920x1080 (Full HD) resolution. Fast, free, and private online image resizer.",
  alternates: { canonical: 'https://tools2do.com/tools/image-resizer/resize-image-to-1080p' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Resize Image to 1080p","description":"Resize any photo to 1920x1080 (Full HD) resolution. Fast, free, and private online image resizer.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-resizer/resize-image-to-1080p"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Resize Image to 1080p</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Need a Full HD image? Quickly scale or crop your photos to exactly 1920x1080 pixels for wallpapers or video thumbnails.</p>
      </div>
      <ImageResizer />
      <ToolInfoSection
        howToSteps={[{ step: "Upload Image", description: "Select the image you want to resize." }, { step: "Select 1080p", description: "Set the width to 1920 and the height to 1080." }, { step: "Export", description: "Download your Full HD image." }]}
        useCases={["Creating YouTube thumbnails at the perfect 1080p resolution.", "Resizing photos to use as desktop wallpapers.", "Standardizing images for a video presentation slide deck."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-resizer', name: 'Image Resizer', description: "Custom image resizer tool." }]}
      />
    </>
  );
}