import type { Metadata } from 'next';
import { PercentageCalculator } from '@/components/tools/PercentageCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Sales Tax Calculator – Calculate Tax Fast',
  description: "Instantly calculate sales tax, GST, or VAT percentages. Free online tax calculator for accounting and shopping.",
  alternates: { canonical: 'https://tools2do.com/tools/percentage-calculator/tax-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Online Sales Tax Calculator","description":"Instantly calculate sales tax, GST, or VAT percentages. Free online tax calculator for accounting and shopping.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/percentage-calculator/tax-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Online Sales Tax Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find the exact final price after tax. Enter the base price and the tax percentage to instantly calculate the total cost.</p>
      </div>
      <PercentageCalculator />
      <ToolInfoSection
        howToSteps={[{ step: "Enter Amount", description: "Type the base price of your item." }, { step: "Set Tax Rate", description: "Input the local tax percentage rate." }, { step: "Calculate", description: "View the total amount including calculated tax." }]}
        useCases={["Calculating final retail prices at the checkout register.", "Checking GST or VAT on a wholesale invoice.", "Budgeting for a large purchase like a car or house."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/percentage-calculator/margin-calculator', name: 'Margin Calculator', description: "Calculate profit margins." }]}
      />
    </>
  );
}