import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';

export const metadata: Metadata = {
  title: 'Compress Image to 500KB Online Free – Reduce Image Size Instantly',
  description: 'Compress image to 500KB online free. Reduce JPG, PNG or WebP to under 500KB without quality loss. No signup, no upload to server. Runs in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-image-to-500kb' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress Image to 500KB Online Free – Reduce Image Size Instantly</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compress image to 500KB online free. Reduce JPG, PNG or WebP to under 500KB without quality loss. No signup, no upload to server. Runs in your browser.</p>
      </div>
      <ImageCompressor targetSize="500KB" />
    </>
  );
}
