import type { Metadata } from 'next';
import { PtaTaxCalculator } from '@/components/tools/PtaTaxCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'PTA Tax Calculator – Check Mobile Phone Tax in Pakistan',
  description: "Calculate PTA tax on imported mobile phones including iPhone and Android. Updated PTA taxes for passport and CNIC registration.",
  alternates: { canonical: 'https://tools2do.com/pakistan-tools/pta-tax-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"PTA Tax Calculator","description":"Calculate PTA tax on imported mobile phones including iPhone and Android. Updated PTA taxes for passport and CNIC registration.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"PKR"},"url":"https://tools2do.com/pakistan-tools/pta-tax-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PTA Tax Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find out the exact PTA tax required to register your imported mobile phone in Pakistan. View taxes based on CNIC or Passport.</p>
      </div>
      <PtaTaxCalculator />
      <ToolInfoSection
        howToSteps={[{ step: "Select Phone Brand", description: "Choose whether you are checking an iPhone, Samsung, or another brand." }, { step: "Choose Model", description: "Select the specific model of your phone." }, { step: "View Taxes", description: "Instantly view the tax rates for both Passport and CNIC registration." }]}
        useCases={["Finding out the PTA tax required before importing an iPhone to Pakistan.", "Deciding whether to register a mobile phone on a CNIC or a Passport.", "Budgeting for mobile phone registration fees at the airport."]}
        privacyNote="Tools2Do is an independent utility and is not affiliated with the government. Data is retrieved from official public sources directly in your browser. We do not store your reference numbers or sensitive data."
      />
      <RelatedTools
        tools={[{ href: '/pakistan-tools/electricity-subsidy-calculator', name: 'Electricity Subsidy Calculator', description: "Calculate bill relief." }]}
      />
    </>
  );
}