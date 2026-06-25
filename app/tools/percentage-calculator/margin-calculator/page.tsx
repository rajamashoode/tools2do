import type { Metadata } from 'next';
import { PercentageCalculator } from '@/components/tools/PercentageCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Margin Calculator – Calculate Profit Margins Online',
  description: "Calculate gross profit margin, markup, and revenue instantly. Free online margin calculator for business owners and retailers.",
  alternates: { canonical: 'https://tools2do.com/tools/percentage-calculator/margin-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Profit Margin Calculator","description":"Calculate gross profit margin, markup, and revenue instantly. Free online margin calculator for business owners and retailers.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/percentage-calculator/margin-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Profit Margin Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Determine the profitability of your products. Enter your cost and revenue to instantly calculate your exact gross margin percentage.</p>
      </div>
      <PercentageCalculator />
      <ToolInfoSection
        howToSteps={[{ step: "Select Mode", description: "Choose the percentage change or fraction mode based on your math." }, { step: "Input Costs", description: "Enter the cost of goods and total revenue." }, { step: "View Margin", description: "Instantly view your calculated profit margin." }]}
        useCases={["Calculating the necessary markup for a new retail product line.", "Checking the profitability of an ongoing ad campaign.", "Setting accurate wholesale prices for distributors."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/percentage-calculator/discount-calculator', name: 'Discount Calculator', description: "Calculate sale prices." }]}
      />
    </>
  );
}