import type { Metadata } from 'next';
import { AgeCalculator } from '@/components/tools/AgeCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Birthday Calculator – Find Exact Age and Days Until Birthday',
  description: 'Calculate your exact age in years, months, and days. Free online birthday calculator instantly finds out how many days until your next birthday.',
  alternates: { canonical: 'https://tools2do.com/tools/age-calculator/birthday-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Birthday Calculator","description":"Calculate your exact age in years, months, and days. Free online birthday calculator instantly finds out how many days until your next birthday.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/age-calculator/birthday-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Birthday Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find your precise age and see a fun countdown to your next birthday. All calculations happen instantly in your browser.</p>
      </div>
      <AgeCalculator />
      <ToolInfoSection
        howToSteps={[{ step: 'Select Birthday', description: 'Enter your date of birth using the date picker.' }, { step: 'Pick Target Date', description: 'Leave it as today, or pick a future date to find out how old you will be.' }, { step: 'View Results', description: 'Instantly view your age in years, months, days, and total days.' }]}
        useCases={['Finding out exactly how old you are down to the day.', 'Checking how many days are left until your upcoming birthday.', 'Calculating the exact age gap between two different dates.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/age-calculator/baby-age-calculator', name: 'Baby Age Calculator', description: 'Calculate exact age in months and weeks.' }]}
      />
    </>
  );
}