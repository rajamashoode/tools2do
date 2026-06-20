import type { Metadata } from 'next';
import { AgeCalculator } from '@/components/tools/AgeCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Age Calculator Online Free – Calculate Exact Age in Years Months Days',
  description: 'Calculate your exact age in years, months and days free online. Enter date of birth and get age instantly with next birthday countdown. No signup required.',
  alternates: { canonical: 'https://tools2do.com/tools/age-calculator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Age Calculator',
  description: 'Calculate exact age in years, months and days.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/age-calculator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Age Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Calculate exact age in years, months and days.</p>
      </div>
      <AgeCalculator />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Enter birthdate', description: 'Select your exact date, month, and year of birth.' },
          { step: 'Click calculate', description: 'Check the exact age broken down into years, months, and days.' },
          { step: 'Check countdown', description: 'See how many months and days are left until your next birthday.' }
        ]}
        useCases={[
          'Determining exact chronological age for government or job applications.',
          'Calculating eligibility limits based on age criteria.',
          'Finding birth countdown stats for birthday planning.'
        ]}
        privacyNote='Calculations run client-side. Your birthdate information is not sent to any server.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages, increases and decreases.' },
          { href: '/tools/timestamp-converter', name: 'Timestamp Converter', description: 'Convert Unix timestamps to human-readable dates.' },
          { href: '/tools/unit-converter', name: 'Unit Converter', description: 'Convert length, weight, temperature and volume units.' }
        ]}
      />
</>
  );
}
