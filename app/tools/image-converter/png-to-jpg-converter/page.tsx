import type { Metadata } from 'next';
import { ImageConverter } from '@/components/tools/ImageConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'PNG to JPG Converter – Convert PNG to JPEG Online Free',
  description: 'Convert PNG images to JPG/JPEG format instantly in your browser. Batch convert multiple files with 100% privacy and no server uploads.',
  alternates: { canonical: 'https://tools2do.com/tools/image-converter/png-to-jpg-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"PNG to JPG Converter Online","description":"Convert PNG images to JPG/JPEG format instantly in your browser. Batch convert multiple files with 100% privacy and no server uploads.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-converter/png-to-jpg-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PNG to JPG Converter Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly convert transparent or large PNG images to the highly-compatible and lightweight JPG format. All processing happens locally on your device.</p>
      </div>
      <ImageConverter targetFormat="image/jpeg" />
      <ToolInfoSection
        howToSteps={[{ step: 'Upload PNG Files', description: 'Drag and drop one or more PNG files into the converter area.' }, { step: 'Adjust Quality', description: 'Set your desired JPG output quality using the slider.' }, { step: 'Convert and Download', description: 'Click convert to instantly generate and save your new JPG files.' }]}
        useCases={['Converting screenshots (usually PNG) to JPG to save storage space.', 'Making images compatible with systems that do not accept PNG files.', 'Removing transparency from logos or graphics by converting to a solid background JPG.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-converter/jpg-to-png-converter', name: 'JPG to PNG Converter', description: 'Convert JPEG images back to PNG.' }, { href: '/tools/image-converter/webp-to-jpg-converter', name: 'WebP to JPG Converter', description: 'Convert modern WebP images to standard JPG.' }]}
      />
    </>
  );
}