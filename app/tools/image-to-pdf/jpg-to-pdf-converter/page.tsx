import type { Metadata } from 'next';
import { ImageToPdf } from '@/components/tools/ImageToPdf';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JPG to PDF Converter – Convert Images to PDF Online',
  description: "Turn your JPG and JPEG images into a single PDF document. Free, fast, and completely secure browser-based tool.",
  alternates: { canonical: 'https://tools2do.com/tools/image-to-pdf/jpg-to-pdf-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JPG to PDF Converter","description":"Turn your JPG and JPEG images into a single PDF document. Free, fast, and completely secure browser-based tool.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-to-pdf/jpg-to-pdf-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JPG to PDF Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Combine multiple JPG photos into a single, easy-to-share PDF document. All processing is done securely on your device.</p>
      </div>
      <ImageToPdf />
      <ToolInfoSection
        howToSteps={[{ step: "Select JPGs", description: "Upload one or more JPG images." }, { step: "Arrange Order", description: "Drag and drop to put the photos in the correct sequence." }, { step: "Generate PDF", description: "Click convert and download your new PDF file." }]}
        useCases={["Compiling photos of receipts into an expense report PDF.", "Turning scanned homework assignments into a single file for submission.", "Creating a simple portfolio document from exported designs."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-to-pdf/png-to-pdf-converter', name: 'PNG to PDF Converter', description: "Convert PNG images to PDF." }, { href: '/tools/pdf-merge-split', name: 'PDF Merge & Split', description: "Combine multiple PDFs." }]}
      />
    </>
  );
}