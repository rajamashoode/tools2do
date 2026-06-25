import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Sentence Case Converter – Format Text Online',
  description: "Capitalize the first letter of each sentence instantly. Free online sentence case converter for emails and essays.",
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/sentence-case-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Sentence Case Converter","description":"Capitalize the first letter of each sentence instantly. Free online sentence case converter for emails and essays.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/sentence-case-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Sentence Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Fix accidental ALL CAPS typing by converting your text to proper sentence case. We automatically capitalize the first word of every sentence.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Input Text", description: "Paste the messy text block." }, { step: "Click Sentence case", description: "Instantly fix the capitalization." }, { step: "Download or Copy", description: "Grab your correctly formatted paragraph." }]}
        useCases={["Fixing an email drafted accidentally with caps lock on.", "Formatting user-submitted content before publishing.", "Cleaning up scraped data from the web."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter/title-case-converter', name: 'Title Case Converter', description: "Capitalize major words." }]}
      />
    </>
  );
}