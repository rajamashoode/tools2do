import type { Metadata } from 'next';
import { RemoveExtraSpaces } from '@/components/tools/RemoveExtraSpaces';

export const metadata: Metadata = {
  title: 'Remove Extra Spaces',
  description: 'Clean text by removing duplicate spaces and line breaks.',
  alternates: { canonical: 'https://tools2do.com/tools/remove-extra-spaces' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Remove Extra Spaces</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Clean text by removing duplicate spaces and line breaks.</p>
      </div>
      <RemoveExtraSpaces />
    </>
  );
}
