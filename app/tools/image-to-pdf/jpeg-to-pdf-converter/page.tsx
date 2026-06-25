import type { Metadata } from 'next';
import { ImageToPdf } from '@/components/tools/ImageToPdf';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JPEG to PDF Converter – Convert JPEG to PDF Online',
  description: "Quickly convert multiple JPEG images into one PDF document. Fast, free, and secure online JPEG to PDF converter tool.",
  alternates: { canonical: 'https://tools2do.com/tools/image-to-pdf/jpeg-to-pdf-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JPEG to PDF Converter","description":"Quickly convert multiple JPEG images into one PDF document. Fast, free, and secure online JPEG to PDF converter tool.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/image-to-pdf/jpeg-to-pdf-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JPEG to PDF Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compile your high-quality JPEG photos into a clean PDF document for easy sharing and printing. No file uploads to external servers.</p>
      </div>
      <ImageToPdf />
      <ToolInfoSection
        howToSteps={[{ step: "Upload JPEGs", description: "Select the JPEG files you want to combine." }, { step: "Rearrange", description: "Drag the files to set the correct page order." }, { step: "Save PDF", description: "Download your fully generated PDF document." }]}
        useCases={["Creating a PDF slideshow from a folder of JPEG photographs.", "Bundling scanned JPEG documents into a single legal file.", "Preparing high-quality architectural blueprints for email."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/image-to-pdf/jpg-to-pdf-converter', name: 'JPG to PDF', description: "Convert standard JPGs." }]}
      />
    </>
  );
}