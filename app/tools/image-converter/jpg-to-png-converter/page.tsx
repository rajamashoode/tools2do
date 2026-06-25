import type { Metadata } from 'next';
import { ImageConverter } from '@/components/tools/ImageConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JPG to PNG Converter – Convert JPEG to PNG Online Free',
  description: 'Convert JPG/JPEG images to lossless PNG format in your browser. Fast, private, and secure image conversion with no data sent to servers.',
  alternates: { canonical: 'https://tools2do.com/tools/image-converter/jpg-to-png-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JPG to PNG Converter Online","description":"Convert JPG/JPEG images to lossless PNG format in your browser. Fast, private, and secure image conversion with no data sent to servers.","applicationCategory":"ImageEditorApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-converter/jpg-to-png-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JPG to PNG Converter Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Transform your compressed JPG photos into the lossless PNG format. Perfect for when you need a standardized image format for editing.</p>
      </div>
      <ImageConverter targetFormat="image/png" />
      <ToolInfoSection
        howToSteps={[{ step: 'Select JPG Files', description: 'Upload the JPEG images you want to convert.' }, { step: 'Batch Convert', description: 'The tool automatically prepares them for lossless PNG conversion.' }, { step: 'Download PNG', description: 'Save the converted PNG files to your local drive.' }]}
        useCases={['Preparing images for graphic design software that prefers PNG.', 'Standardizing all images in a project to the PNG format.', 'Converting photos before running them through background removal tools.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-converter/png-to-jpg-converter', name: 'PNG to JPG Converter', description: 'Convert PNG images to JPG.' }, { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Reduce the file size of your converted PNGs.' }]}
      />
    </>
  );
}