import type { Metadata } from 'next';
import { PercentageCalculator } from '@/components/tools/PercentageCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Discount Calculator – Calculate Sale Price and Savings',
  description: 'Easily calculate the final price after a percentage discount. Find out exactly how much money you save during sales.',
  alternates: { canonical: 'https://tools2do.com/tools/percentage-calculator/discount-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Discount Calculator","description":"Easily calculate the final price after a percentage discount. Find out exactly how much money you save during sales.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/percentage-calculator/discount-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Discount Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Shopping a sale? Enter the original price and the percentage off to instantly see the final price and your total savings.</p>
      </div>
      <PercentageCalculator />
      <ToolInfoSection
        howToSteps={[{ step: 'Select Mode', description: 'Choose the "What is X% of Y" calculation mode.' }, { step: 'Enter Values', description: 'Input the discount percentage and original price.' }, { step: 'Get Final Price', description: 'Subtract the result from the original price.' }]}
        useCases={['Calculating the final cost of an item during a Black Friday sale.', 'Finding out exactly how much a 20% coupon will save you.', 'Verifying store discounts at the checkout counter.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/percentage-calculator/percentage-increase-calculator', name: 'Percentage Increase Calculator', description: 'Calculate growth over time.' }]}
      />
    </>
  );
}