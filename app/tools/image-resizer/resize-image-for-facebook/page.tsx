import type { Metadata } from 'next';
import { ImageResizer } from '@/components/tools/ImageResizer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Resize Image for Facebook – Perfect Cover Photos',
  description: "Resize your photos for Facebook cover images, profile pictures, and shared posts. Free online social media image resizer.",
  alternates: { canonical: 'https://tools2do.com/tools/image-resizer/resize-image-for-facebook' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Resize Image for Facebook","description":"Resize your photos for Facebook cover images, profile pictures, and shared posts. Free online social media image resizer.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-resizer/resize-image-for-facebook"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Resize Image for Facebook</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Crop and scale your photos perfectly for Facebook. Ensure your profile pictures and cover photos are perfectly aligned and sharp.</p>
      </div>
      <ImageResizer />
      <ToolInfoSection
        howToSteps={[{ step: "Upload Photo", description: "Drop the photo you wish to upload to Facebook." }, { step: "Set Dimensions", description: "Input the standard Facebook dimensions (e.g., 820x312 for covers)." }, { step: "Download", description: "Export the correctly sized image." }]}
        useCases={["Creating a perfectly fitted Facebook cover photo for a business page.", "Sizing an advertisement image for optimal feed display.", "Cropping a profile picture so nothing gets cut off."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-resizer/resize-image-for-instagram', name: 'Resize for Instagram', description: "Create 1080x1080 square images." }]}
      />
    </>
  );
}