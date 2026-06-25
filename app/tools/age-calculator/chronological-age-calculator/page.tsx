import type { Metadata } from 'next';
import { AgeCalculator } from '@/components/tools/AgeCalculator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Chronological Age Calculator – Get Exact Age',
  description: "Calculate chronological age in years, months, and days. Free tool for teachers, testers, and medical professionals.",
  alternates: { canonical: 'https://tools2do.com/tools/age-calculator/chronological-age-calculator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Chronological Age Calculator","description":"Calculate chronological age in years, months, and days. Free tool for teachers, testers, and medical professionals.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/age-calculator/chronological-age-calculator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Chronological Age Calculator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Determine an exact chronological age for academic assessments, medical forms, and developmental testing accurately.</p>
      </div>
      <AgeCalculator />
      <ToolInfoSection
        howToSteps={[{ step: "Enter Birth Date", description: "Input the exact date of birth." }, { step: "Enter Test Date", description: "Input the current date or the date the test was administered." }, { step: "Get Results", description: "View the exact chronological age breakdown." }]}
        useCases={["Calculating chronological age for standardized psychological testing (like WISC).", "Determining eligibility age cut-offs for school enrollment.", "Checking age brackets for pediatric medical forms."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/age-calculator/birthday-calculator', name: 'Birthday Calculator', description: "Count down to a birthday." }]}
      />
    </>
  );
}