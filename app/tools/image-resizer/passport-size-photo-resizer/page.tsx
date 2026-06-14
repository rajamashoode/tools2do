import type { Metadata } from 'next';
import { ImageCompressor } from '@/components/tools/ImageCompressor';

export const metadata: Metadata = {
  title: 'Passport Size Photo Resizer Online Free – Resize Photo to 35x45mm',
  description: 'Resize photo to passport size online free. Make 35x45mm Pakistan passport photos, 2x2 inch US photos. Crop, resize and download instantly. No signup.',
  alternates: { canonical: 'https://tools2do.com/tools/image-compressor/passport-size-photo-resizer' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Passport Size Photo Resizer Online Free – Resize Photo to 35x45mm</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Resize photo to passport size online free. Make 35x45mm Pakistan passport photos, 2x2 inch US photos. Crop, resize and download instantly. No signup.</p>
      </div>
      <ImageCompressor targetSize="Passport Size" />
    </>
  );
}
