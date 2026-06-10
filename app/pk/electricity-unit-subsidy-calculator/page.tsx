import type { Metadata } from 'next';
import { ElectricitySubsidyCalculator } from '@/components/tools/ElectricitySubsidyCalculator';

export function generateMetadata(): Metadata {
  return {
    title: 'Electricity Unit Subsidy Calculator | Tools2Do',
    description: 'Estimate your electricity subsidy eligibility based on monthly unit consumption.',
    alternates: { canonical: 'https://tools2do.com/pk/electricity-unit-subsidy-calculator' },
  };
}

export default function Page(): React.ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Electricity Unit Subsidy Calculator</h1>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Estimate your electricity subsidy eligibility based on monthly unit consumption.</p>
        <ElectricitySubsidyCalculator />
    </article>
  );
}
