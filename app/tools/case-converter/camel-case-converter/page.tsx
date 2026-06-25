import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Camel Case Converter – Convert Text to camelCase',
  description: 'Easily convert normal text, snake_case, or kebab-case strings into camelCase. Free developer tool for programming formatting.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/camel-case-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Camel Case Converter","description":"Easily convert normal text, snake_case, or kebab-case strings into camelCase. Free developer tool for programming formatting.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/camel-case-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Camel Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Transform variables, file names, or regular sentences into camelCase. A quick utility for developers formatting JavaScript or Java code.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Variables', description: 'Input your raw text or incorrectly formatted variables.' }, { step: 'Convert', description: 'Select camelCase to instantly transform the text.' }, { step: 'Copy Code', description: 'Copy your newly formatted camelCase strings.' }]}
        useCases={['Converting JSON keys from snake_case to camelCase for JavaScript consumption.', 'Formatting long variable names consistently.', 'Generating clean, programming-friendly IDs from regular sentences.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter/snake-case-converter', name: 'Snake Case Converter', description: 'Convert text to snake_case.' }]}
      />
    </>
  );
}