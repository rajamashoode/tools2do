import type { Metadata } from 'next';
import { UnitConverter } from '@/components/tools/UnitConverter';

export const metadata: Metadata = {
  title: 'Unit Converter',
  description: 'Convert length, weight, temperature and volume units.',
  alternates: { canonical: 'https://tools2do.com/tools/unit-converter' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Unit Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert length, weight, temperature and volume units.</p>
      </div>
      <UnitConverter />
    </>
  );
}
