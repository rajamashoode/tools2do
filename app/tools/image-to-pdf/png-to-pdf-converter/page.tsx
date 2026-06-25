import type { Metadata } from 'next';
import { ImageToPdf } from '@/components/tools/ImageToPdf';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'PNG to PDF Converter – Convert PNGs to PDF Online',
  description: "Convert transparent and high-quality PNG images into a PDF document. Free online tool with no uploads required.",
  alternates: { canonical: 'https://tools2do.com/tools/image-to-pdf/png-to-pdf-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"PNG to PDF Converter","description":"Convert transparent and high-quality PNG images into a PDF document. Free online tool with no uploads required.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-to-pdf/png-to-pdf-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PNG to PDF Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Easily bundle multiple PNG images into one cohesive PDF document for printing, sharing, or archiving.</p>
      </div>
      <ImageToPdf />
      <ToolInfoSection
        howToSteps={[{ step: "Upload PNGs", description: "Select the PNG files you wish to convert." }, { step: "Adjust Settings", description: "Choose your preferred page orientation and margins." }, { step: "Download PDF", description: "Instantly download the combined PDF file." }]}
        useCases={["Converting exported UI mockups into a client presentation PDF.", "Archiving high-resolution digital art.", "Creating instructional documents from software screenshots."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-to-pdf/jpg-to-pdf-converter', name: 'JPG to PDF Converter', description: "Convert JPG images to PDF." }]}
      />
    </>
  );
}