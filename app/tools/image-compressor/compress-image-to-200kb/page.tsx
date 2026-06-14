import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';

export const metadata: Metadata = {
  title: 'Compress Image to 200KB Online Free – Reduce File Size Instantly',
  description: 'Compress image to 200KB online free. Perfect for online forms, job applications, visa portals. Reduce JPG PNG to 200KB in browser. No signup required.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-image-to-200kb' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress Image to 200KB Online Free – Reduce File Size Instantly</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compress image to 200KB online free. Perfect for online forms, job applications, visa portals. Reduce JPG PNG to 200KB in browser. No signup required.</p>
      </div>
      <ImageCompressor targetSize="200KB" />
    </>
  );
}
