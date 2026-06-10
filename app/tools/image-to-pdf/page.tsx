import type { Metadata } from 'next';
import { ImageToPdf } from '@/components/tools/ImageToPdf';

export const metadata: Metadata = {
  title: 'Image to PDF Converter – Convert Images to PDF Online',
  description: 'Convert multiple images to a single PDF file. Each image becomes a page. Reorder images, set a custom PDF name, and download instantly.',
  alternates: { canonical: 'https://tools2do.com/tools/image-to-pdf' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Image to PDF</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert multiple images into a single PDF. Each image becomes one page. Reorder pages, set a custom file name, and download instantly — no upload required.</p>
      </div>
      <ImageToPdf />
    </>
  );
}
