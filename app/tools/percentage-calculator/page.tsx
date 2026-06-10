import type { Metadata } from 'next';
import { PercentageCalculator } from '@/components/tools/PercentageCalculator';

export const metadata: Metadata = {
  title: 'Percentage Calculator',
  description: 'Calculate percentages, increases and decreases instantly.',
  alternates: { canonical: 'https://tools2do.com/tools/percentage-calculator' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Percentage Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Calculate percentages, increases and decreases instantly.</p>
      </div>
      <PercentageCalculator />
    </>
  );
}
