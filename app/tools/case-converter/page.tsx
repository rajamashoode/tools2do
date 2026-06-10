import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';

export const metadata: Metadata = {
  title: 'Case Converter',
  description: 'Convert to UPPERCASE, lowercase, Title Case, slug-format.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert to UPPERCASE, lowercase, Title Case, slug-format.</p>
      </div>
      <CaseConverter />
    </>
  );
}
