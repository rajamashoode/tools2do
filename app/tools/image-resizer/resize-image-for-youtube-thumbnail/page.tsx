import type { Metadata } from 'next';
import { ImageResizer } from '@/components/tools/ImageResizer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Resize Image for YouTube Thumbnail – 1280x720',
  description: "Easily resize your graphics to the perfect 1280x720 YouTube thumbnail resolution. Free online thumbnail maker tool.",
  alternates: { canonical: 'https://tools2do.com/tools/image-resizer/resize-image-for-youtube-thumbnail' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Resize Image for YouTube Thumbnail","description":"Easily resize your graphics to the perfect 1280x720 YouTube thumbnail resolution. Free online thumbnail maker tool.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-resizer/resize-image-for-youtube-thumbnail"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Resize Image for YouTube Thumbnail</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Ensure your video thumbnails look crisp and professional. Resize and crop your graphics to exactly 1280x720 pixels.</p>
      </div>
      <ImageResizer />
      <ToolInfoSection
        howToSteps={[{ step: "Select Graphic", description: "Upload your raw thumbnail artwork." }, { step: "Resize to 720p", description: "Set the width to 1280 and height to 720." }, { step: "Export", description: "Download the optimized thumbnail." }]}
        useCases={["Preparing custom artwork for a YouTube video upload.", "Resizing a stream highlight graphic for Twitch.", "Standardizing blog post featured images."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-resizer/resize-image-to-1080p', name: 'Resize to 1080p', description: "Scale up to Full HD." }]}
      />
    </>
  );
}