import type { Metadata } from 'next';
import { ImageToPdf } from '@/components/tools/ImageToPdf';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Image to PDF Converter Online Free – JPG PNG to PDF in Seconds',
  description: 'Convert images to PDF free online. Upload JPG, PNG or WebP files — each image becomes a PDF page. Reorder, rename and download instantly. No signup required.',
  alternates: { canonical: 'https://tools2do.com/tools/image-to-pdf' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Image to PDF Converter – Convert Images to PDF Online',
  description: 'Convert multiple images to a single PDF file. Each image becomes a page. Reorder images, set a custom PDF name, and download instantly.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/image-to-pdf',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Image to PDF</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert multiple images into a single PDF. Each image becomes one page. Reorder pages, set a custom file name, and download instantly — no upload required.</p>
      </div>
      <ImageToPdf />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Select images', description: 'Add multiple JPEG, PNG, or WebP files.' },
          { step: 'Reorder pages', description: 'Drag cards to reorder how the pages will appear in the resulting PDF.' },
          { step: 'Save PDF', description: "Assign a file name, configure page layouts, and click 'Convert to PDF' to download." }
        ]}
        useCases={[
          'Combining scanned document photos into a single PDF submission.',
          'Creating quick PDF portfolios from design images.',
          'Compiling receipts for expense reporting.'
        ]}
        privacyNote='PDF generation is done client-side using pdf-lib in your browser. None of your images are sent to a server.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/pdf-merge-split', name: 'PDF Merge & Split', description: 'Merge multiple PDFs into one or split a PDF by extracting specific pages.' },
          { href: '/tools/image-compressor', name: 'Image Compressor', description: 'Compress JPEG, PNG, and WebP files client-side.' },
          { href: '/tools/image-converter', name: 'Image Converter', description: 'Convert images to JPG, PNG or WebP client-side.' }
        ]}
      />
</>
  );
}
