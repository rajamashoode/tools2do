import type { Metadata } from 'next';
import Script from 'next/script';
import { PdfMergeSplit } from '@/components/tools/PdfMergeSplit';

export const metadata: Metadata = {
  title: 'PDF Merge & Split – Combine or Extract PDF Pages Online',
  description: 'Merge multiple PDF files into one, or split a PDF by extracting specific pages. Custom file name, runs entirely in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/pdf-merge-split' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
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
      <Script id="tool-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PDF Merge & Split</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Merge multiple PDFs into one, or split a PDF by entering page numbers like 1,3,5-7. Custom output file name. Runs entirely in your browser using pdf-lib.</p>
      </div>
      <PdfMergeSplit />
    </>
  );
}
