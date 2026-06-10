import type { Metadata } from 'next';
import { JsFormatter } from '@/components/tools/JsFormatter';

export const metadata: Metadata = {
  title: 'JavaScript Formatter',
  description: 'Format or minify JavaScript code in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/javascript-formatter' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JavaScript Formatter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format or minify JavaScript code in your browser.</p>
      </div>
      <JsFormatter />
    </>
  );
}
