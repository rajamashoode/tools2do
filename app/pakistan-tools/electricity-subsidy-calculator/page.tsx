import type { Metadata } from 'next';
import { ElectricitySubsidyCalculator } from '@/components/tools/ElectricitySubsidyCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Electricity Subsidy Calculator Pakistan – Check Bill Subsidy',
  description: "Calculate your electricity bill subsidy and check your eligibility for the Punjab CM Roshan Gharana Scheme. Free online calculator.",
  alternates: { canonical: 'https://tools2do.com/pakistan-tools/electricity-subsidy-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Electricity Subsidy Calculator","description":"Calculate your electricity bill subsidy and check your eligibility for the Punjab CM Roshan Gharana Scheme. Free online calculator.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"PKR"},"url":"https://tools2do.com/pakistan-tools/electricity-subsidy-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Electricity Subsidy Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find out exactly how much relief you will receive on your electricity bill based on your units consumed under the Punjab Government Relief scheme.</p>
      </div>
      <ElectricitySubsidyCalculator />
      <ToolInfoSection
        howToSteps={[{ step: "Select Month", description: "Choose your billing month (e.g. August or September 2024)." }, { step: "Enter Units", description: "Input the total units consumed as shown on your bill." }, { step: "View Subsidy", description: "The tool calculates your per-unit rate and total subsidy instantly." }]}
        useCases={["Verifying if your household qualifies for the 14 rupees per unit relief.", "Checking your expected bill amount for August or September 2024.", "Understanding the breakdown of the Punjab CM Electricity Relief plan."]}
        privacyNote="Tools2Do is an independent utility and is not affiliated with the government. Data is retrieved from official public sources directly in your browser. We do not store your reference numbers or sensitive data."
      />
      <RelatedTools
        tools={[{ href: '/pakistan-tools/lesco-bill-checker', name: 'LESCO Bill Checker', description: "Check your LESCO electricity bill." }]}
      />
    </>
  );
}