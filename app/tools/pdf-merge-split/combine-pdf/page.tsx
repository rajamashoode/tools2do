import type { Metadata } from 'next';
import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Combine PDF Online – Merge PDF Files Together Free',
  description: "Combine multiple PDF files into one easily online. Secure, fast, and free PDF combiner with no page limits.",
  alternates: { canonical: 'https://tools2do.com/tools/pdf-merge-split/combine-pdf' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Combine PDF Online","description":"Combine multiple PDF files into one easily online. Secure, fast, and free PDF combiner with no page limits.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/pdf-merge-split/combine-pdf"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Combine PDF Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Put multiple PDF documents together in a specific order. Our tool processes your files locally to ensure maximum privacy.</p>
      </div>
      <PdfMergeSplit />
      <ToolInfoSection
        howToSteps={[{ step: "Select Files", description: "Upload all the PDFs you need to combine." }, { step: "Drag and Drop", description: "Reorder the files exactly as they should appear." }, { step: "Combine", description: "Click merge to combine them into one seamless document." }]}
        useCases={["Combining multiple homework assignments into a single submission.", "Merging financial statements for tax preparation.", "Assembling an ebook from individually exported chapters."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/pdf-merge-split/split-pdf', name: 'Split PDF', description: "Separate pages from a PDF." }]}
      />
    </>
  );
}