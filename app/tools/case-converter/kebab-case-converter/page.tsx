import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Kebab Case Converter – Convert Text to kebab-case',
  description: "Convert normal text and strings into kebab-case online. Free developer tool for generating URL slugs and CSS class names.",
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/kebab-case-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Kebab Case Converter","description":"Convert normal text and strings into kebab-case online. Free developer tool for generating URL slugs and CSS class names.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/kebab-case-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Kebab Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format your text strings with hyphens (dash separated). Essential for writing HTML classes, CSS IDs, and URL parameters.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Content", description: "Enter the text you need formatted." }, { step: "Apply kebab-case", description: "Click the formatting button to replace spaces with dashes." }, { step: "Copy String", description: "Copy your correctly formatted kebab-case text." }]}
        useCases={["Formatting HTML and CSS class names correctly.", "Generating URL slugs from blog post titles.", "Creating standardized file names for web assets."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/slug-generator', name: 'URL Slug Generator', description: "Generate clean URL slugs." }]}
      />
    </>
  );
}