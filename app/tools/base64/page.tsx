import type { Metadata } from 'next';
import { Base64Tool } from '@/components/tools/Base64Tool';

export const metadata: Metadata = {
  title: 'Base64 Encoder / Decoder',
  description: 'Encode and decode Base64 strings instantly in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/base64' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Base64 Encoder / Decoder</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Encode and decode Base64 strings instantly in your browser.</p>
      </div>
      <Base64Tool />
    </>
  );
}
