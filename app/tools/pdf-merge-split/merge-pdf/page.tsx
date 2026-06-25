import type { Metadata } from 'next';
import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Merge PDF Online – Combine Multiple PDFs for Free',
  description: "Combine multiple PDF files into one single document securely. Free browser-based PDF merger with no file size limits.",
  alternates: { canonical: 'https://tools2do.com/tools/pdf-merge-split/merge-pdf' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Merge PDF Online","description":"Combine multiple PDF files into one single document securely. Free browser-based PDF merger with no file size limits.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/pdf-merge-split/merge-pdf"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Merge PDF Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Easily bundle multiple PDF documents into a single file. Our secure tool processes your files locally so they never leave your device.</p>
      </div>
      <PdfMergeSplit />
      <ToolInfoSection
        howToSteps={[{ step: "Upload PDFs", description: "Select the PDF files you want to combine." }, { step: "Reorder", description: "Drag and drop the files to set the correct sequence." }, { step: "Merge and Download", description: "Click merge to generate your single, consolidated document." }]}
        useCases={["Combining scanned pages of a contract into a single document.", "Merging a cover letter and resume before sending a job application.", "Bundling multiple invoices into a single monthly report."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/pdf-merge-split/split-pdf', name: 'Split PDF', description: "Extract pages from a PDF." }, { href: '/tools/image-to-pdf', name: 'Image to PDF', description: "Convert photos to PDF." }]}
      />
    </>
  );
}