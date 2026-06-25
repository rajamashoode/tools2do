import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Pascal Case Converter – Convert Text to PascalCase',
  description: "Easily convert spaces, snake_case, and camelCase into PascalCase online. Free text formatting tool for developers and writers.",
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/pascal-case-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Pascal Case Converter","description":"Easily convert spaces, snake_case, and camelCase into PascalCase online. Free text formatting tool for developers and writers.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/pascal-case-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Pascal Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly transform standard text strings into PascalCase (UpperCamelCase). Perfect for naming classes in JavaScript, C#, and Java.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Input String", description: "Paste the words you want to convert into the text box." }, { step: "Select PascalCase", description: "Click the PascalCase button to format your text instantly." }, { step: "Copy Result", description: "Copy the transformed string to your clipboard." }]}
        useCases={["Generating C# or Java class names from human-readable text.", "Formatting React component names.", "Standardizing database table naming conventions."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter/camel-case-converter', name: 'Camel Case Converter', description: "Convert text to camelCase." }]}
      />
    </>
  );
}