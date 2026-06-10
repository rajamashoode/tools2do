import type { Metadata } from 'next';
import { LoremIpsumGenerator } from '@/components/tools/LoremIpsumGenerator';

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator',
  description: 'Generate clean placeholder text for designs and layouts.',
  alternates: { canonical: 'https://tools2do.com/tools/lorem-ipsum-generator' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Lorem Ipsum Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate clean placeholder text for designs and layouts.</p>
      </div>
      <LoremIpsumGenerator />
    </>
  );
}
