import type { Metadata } from 'next';
import { RegexTester } from '@/components/tools/RegexTester';

export const metadata: Metadata = {
  title: 'Regex Tester',
  description: 'Test regular expressions with highlighted matches.',
  alternates: { canonical: 'https://tools2do.com/tools/regex-tester' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Regex Tester</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Test regular expressions with highlighted matches.</p>
      </div>
      <RegexTester />
    </>
  );
}
