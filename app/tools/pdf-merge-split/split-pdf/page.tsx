import type { Metadata } from 'next';
import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Split PDF Online – Extract Pages from PDF for Free',
  description: "Extract specific pages or split a large PDF into smaller files. Secure, free online PDF splitter tool.",
  alternates: { canonical: 'https://tools2do.com/tools/pdf-merge-split/split-pdf' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Split PDF Online","description":"Extract specific pages or split a large PDF into smaller files. Secure, free online PDF splitter tool.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/pdf-merge-split/split-pdf"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Split PDF Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Remove unwanted pages or split a massive document into smaller, manageable pieces securely in your browser.</p>
      </div>
      <PdfMergeSplit />
      <ToolInfoSection
        howToSteps={[{ step: "Select PDF", description: "Upload the large PDF file you want to split." }, { step: "Select Pages", description: "Choose which pages to extract or remove." }, { step: "Download Parts", description: "Save the new, smaller PDF documents." }]}
        useCases={["Extracting a single signed page from a massive legal document.", "Splitting a huge textbook PDF into individual chapters for easier reading.", "Removing blank or unnecessary pages from a scanned file."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/pdf-merge-split/merge-pdf', name: 'Merge PDF', description: "Combine PDFs together." }]}
      />
    </>
  );
}