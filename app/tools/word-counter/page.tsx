import type { Metadata } from 'next';
import { WordCounter } from '@/components/tools/WordCounter';

export const metadata: Metadata = {
  title: 'Word Counter',
  description: 'Count words, characters, sentences and reading time.',
  alternates: { canonical: 'https://tools2do.com/tools/word-counter' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Word Counter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Count words, characters, sentences and reading time.</p>
      </div>
      <WordCounter />
    </>
  );
}
