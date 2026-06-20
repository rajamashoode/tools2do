import type { Metadata } from 'next';
import { PercentageCalculator } from '@/components/tools/PercentageCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Percentage Calculator',
  description: 'Calculate percentages, increases and decreases instantly.',
  alternates: { canonical: 'https://tools2do.com/tools/percentage-calculator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Percentage Calculator',
  description: 'Calculate percentages, increases and decreases instantly.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/percentage-calculator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Percentage Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Calculate percentages, increases and decreases instantly.</p>
      </div>
      <PercentageCalculator />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Choose calculator type', description: 'Select the calculation type: simple percentage, percentage increase/decrease, or ratio.' },
          { step: 'Enter numbers', description: 'Input your base values and parameters into the fields.' },
          { step: 'View result', description: 'Read the computed values, percentages, and steps instantly.' }
        ]}
        useCases={[
          'Calculating discounts, sale pricing, and taxes during shopping.',
          'Estimating school or university grade percentages.',
          'Computing business profit margins, interest rates, or investment growth.'
        ]}
        privacyNote='All math calculations are done instantly in your browser via local JavaScript.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/age-calculator', name: 'Age Calculator', description: 'Calculate exact age in years, months and days.' },
          { href: '/tools/unit-converter', name: 'Unit Converter', description: 'Convert length, weight, temperature and volume units.' },
          { href: '/tools/timestamp-converter', name: 'Timestamp Converter', description: 'Convert Unix timestamps to human-readable dates.' }
        ]}
      />
</>
  );
}
