import type { Metadata } from 'next';
import { AgeCalculator } from '@/components/tools/AgeCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Baby Age Calculator – Calculate Age in Weeks and Months',
  description: 'Calculate your baby\'s exact age in weeks, months, and days. Free online baby age calculator for milestones and doctor visits.',
  alternates: { canonical: 'https://tools2do.com/tools/age-calculator/baby-age-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Baby Age Calculator","description":"Calculate your baby's exact age in weeks, months, and days. Free online baby age calculator for milestones and doctor visits.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/age-calculator/baby-age-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Baby Age Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly convert your baby's birth date into exact weeks and months. Perfect for tracking developmental milestones.</p>
      </div>
      <AgeCalculator />
      <ToolInfoSection
        howToSteps={[{ step: 'Enter Birth Date', description: 'Input your baby\'s date of birth.' }, { step: 'Select Today', description: 'Keep the comparison date as today to get the current age.' }, { step: 'Read Details', description: 'View the total age in months and total weeks.' }]}
        useCases={['Determining if your baby is ready for certain developmental milestones.', 'Providing exact week-based age to pediatricians during visits.', 'Tracking weekly growth accurately.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/age-calculator', name: 'Age Calculator', description: 'General purpose age calculator.' }]}
      />
    </>
  );
}