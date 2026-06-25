import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Uppercase Converter – Capitalize All Letters Online',
  description: 'Convert your text to ALL CAPS instantly. Free online uppercase text converter tool.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/uppercase-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Uppercase Text Converter","description":"Convert your text to ALL CAPS instantly. Free online uppercase text converter tool.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/uppercase-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Uppercase Text Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly change all letters in your text to uppercase. Useful for headlines, SQL queries, or emphasis.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Text', description: 'Type or paste your text.' }, { step: 'Select Uppercase', description: 'Click the "UPPERCASE" button.' }, { step: 'Copy Result', description: 'Copy the capitalized text.' }]}
        useCases={['Formatting SQL keywords for better readability.', 'Creating attention-grabbing headlines or warnings.', 'Standardizing acronyms and abbreviations.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter', name: 'Case Converter', description: 'Convert to lowercase, title case, and more.' }]}
      />
    </>
  );
}