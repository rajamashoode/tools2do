import type { Metadata } from 'next';
import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';

export const metadata: Metadata = {
  title: 'URL Encoder / Decoder',
  description: 'Encode and decode URL components safely in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/url-encoder' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL Encoder / Decoder</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Encode and decode URL components safely in your browser.</p>
      </div>
      <UrlEncoderDecoder />
    </>
  );
}
