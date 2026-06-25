import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Title Case Converter – Capitalize Titles Online',
  description: 'Convert your text to Title Case. Automatically capitalize the first letter of major words for essays, blog posts, and headlines.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/title-case-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Title Case Converter","description":"Convert your text to Title Case. Automatically capitalize the first letter of major words for essays, blog posts, and headlines.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/title-case-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Title Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Properly format your headlines, book titles, and article names. Our tool capitalizes major words while keeping minor words lowercase.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: 'Input Title', description: 'Paste your unformatted headline or title.' }, { step: 'Select Title Case', description: 'Click the Title Case button.' }, { step: 'Copy Result', description: 'Copy the correctly formatted title.' }]}
        useCases={['Formatting blog post titles for publication.', 'Capitalizing book titles or academic paper headers.', 'Standardizing product names for an e-commerce store.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter/uppercase-converter', name: 'Uppercase Converter', description: 'Convert text to ALL CAPS.' }, { href: '/tools/case-converter/camel-case-converter', name: 'Camel Case Converter', description: 'Convert text to camelCase for coding.' }]}
      />
    </>
  );
}