import type { Metadata } from 'next';
import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'PDF Merge & Split Online Free – Combine or Extract PDF Pages',
  description: 'Merge multiple PDFs into one or split PDF pages online free. Extract pages by number like 1,3,5-7. No upload to server, runs in browser. No signup needed.',
  alternates: { canonical: 'https://tools2do.com/tools/pdf-merge-split' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'PDF Merge & Split – Combine or Extract PDF Pages Online',
  description: 'Merge multiple PDF files into one, or split a PDF by extracting specific pages. Custom file name, runs entirely in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/pdf-merge-split',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PDF Merge & Split</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Merge multiple PDFs into one, or split a PDF by entering page numbers like 1,3,5-7. Custom output file name. Runs entirely in your browser using pdf-lib.</p>
      </div>
      <PdfMergeSplit />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Add PDF files', description: 'Upload the PDF documents you wish to combine or split.' },
          { step: 'Choose merge or split', description: 'Choose to merge all files, or specify page ranges to split and extract.' },
          { step: 'Download results', description: 'Process the documents instantly and download the output file.' }
        ]}
        useCases={[
          'Merging separate PDF reports into a single consolidated file.',
          'Extracting specific chapters or pages from a heavy PDF document.',
          'Splitting a single multi-page scan into individual files.'
        ]}
        privacyNote='All PDF processing is executed locally in your browser using JavaScript. Your document files are never uploaded.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/image-to-pdf', name: 'Image to PDF', description: 'Convert multiple images to a single PDF.' },
          { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words, characters, sentences, paragraphs and reading time.' },
          { href: '/tools/url-encoder', name: 'URL Encoder Decoder', description: 'Encode or decode URL components and query strings.' }
        ]}
      />
</>
  );
}
