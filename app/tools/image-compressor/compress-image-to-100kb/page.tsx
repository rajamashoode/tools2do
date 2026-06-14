import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';

export const metadata: Metadata = {
  title: 'Compress Image to 100KB Online Free – For Forms & Applications',
  description: 'Compress image to 100KB online free. Reduce photo size to 100KB for exam portals, government forms, job applications. Runs in browser. No signup.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/compress-image-to-100kb' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Compress Image to 100KB Online Free – For Forms & Applications</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compress image to 100KB online free. Reduce photo size to 100KB for exam portals, government forms, job applications. Runs in browser. No signup.</p>
      </div>
      <ImageCompressor targetSize="100KB" />
    </>
  );
}
