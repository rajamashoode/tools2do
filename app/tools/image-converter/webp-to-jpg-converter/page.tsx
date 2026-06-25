import type { Metadata } from 'next';
import { ImageConverter } from '@/components/tools/ImageConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'WebP to JPG Converter – Convert WebP to JPEG Online',
  description: 'Easily convert WebP images downloaded from websites into standard JPG/JPEG format. Free, fast, and secure client-side browser tool.',
  alternates: { canonical: 'https://tools2do.com/tools/image-converter/webp-to-jpg-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"WebP to JPG Converter","description":"Easily convert WebP images downloaded from websites into standard JPG/JPEG format. Free, fast, and secure client-side browser tool.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-converter/webp-to-jpg-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">WebP to JPG Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert modern WebP image files back to the universally supported JPG format. No signup and no server uploads required.</p>
      </div>
      <ImageConverter targetFormat="image/jpeg" />
      <ToolInfoSection
        howToSteps={[{ step: 'Upload WebP Image', description: 'Drop the WebP file you downloaded into the dropzone.' }, { step: 'Set JPG Quality', description: 'Choose how much compression you want for the output JPG.' }, { step: 'Convert to JPG', description: 'Instantly download the file in standard JPEG format.' }]}
        useCases={['Converting WebP images downloaded from Google Chrome to use in older software.', 'Making web images compatible with older mobile devices or email clients.', 'Converting website assets back into editable formats.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-converter/png-to-jpg-converter', name: 'PNG to JPG Converter', description: 'Convert PNG images to JPG.' }]}
      />
    </>
  );
}