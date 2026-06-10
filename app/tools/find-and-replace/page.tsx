import type { Metadata } from 'next';
import { FindAndReplace } from '@/components/tools/FindAndReplace';

export const metadata: Metadata = {
  title: 'Find and Replace',
  description: 'Find and replace text with plain text or regex.',
  alternates: { canonical: 'https://tools2do.com/tools/find-and-replace' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Find and Replace</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find and replace text with plain text or regex.</p>
      </div>
      <FindAndReplace />
    </>
  );
}
