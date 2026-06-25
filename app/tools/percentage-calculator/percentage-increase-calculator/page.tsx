import type { Metadata } from 'next';
import { PercentageCalculator } from '@/components/tools/PercentageCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Percentage Increase Calculator – Find Growth & Margin',
  description: 'Calculate the percentage increase or decrease between two numbers. Ideal for tracking financial growth, profit margins, and statistical changes.',
  alternates: { canonical: 'https://tools2do.com/tools/percentage-calculator/percentage-increase-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Percentage Increase Calculator","description":"Calculate the percentage increase or decrease between two numbers. Ideal for tracking financial growth, profit margins, and statistical changes.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/percentage-calculator/percentage-increase-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Percentage Increase Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find out the exact percentage change between an old value and a new value. Useful for tracking business growth or stock market gains.</p>
      </div>
      <PercentageCalculator />
      <ToolInfoSection
        howToSteps={[{ step: 'Select Change Mode', description: 'Choose the "Percentage increase/decrease" mode.' }, { step: 'Input Numbers', description: 'Enter your starting value and your ending value.' }, { step: 'View Change', description: 'Instantly see if it is an increase or decrease and by what percent.' }]}
        useCases={['Calculating month-over-month revenue growth for a business.', 'Tracking percentage gains or losses in a stock portfolio.', 'Finding the percentage markup on retail products.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/percentage-calculator', name: 'Percentage Calculator', description: 'General percentage math.' }]}
      />
    </>
  );
}