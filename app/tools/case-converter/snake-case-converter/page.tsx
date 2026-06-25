import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Snake Case Converter – Convert Text to snake_case',
  description: 'Convert text, spaces, and camelCase into snake_case. Free developer tool for Python, Ruby, and database naming conventions.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/snake-case-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Snake Case Converter","description":"Convert text, spaces, and camelCase into snake_case. Free developer tool for Python, Ruby, and database naming conventions.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/snake-case-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Snake Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format your strings with underscores. Essential for writing Python variables, database column names, and file naming conventions.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: 'Input Text', description: 'Enter the text you need to format.' }, { step: 'Apply snake_case', description: 'Click the snake_case option to replace spaces with underscores.' }, { step: 'Copy Result', description: 'Copy the formatted string to your clipboard.' }]}
        useCases={['Creating SQL database column names.', 'Formatting variable names for Python or Ruby.', 'Standardizing file names for web assets to avoid space-related URL issues.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter/camel-case-converter', name: 'Camel Case Converter', description: 'Convert text to camelCase.' }]}
      />
    </>
  );
}