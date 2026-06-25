import type { Metadata } from 'next';
import { JsonFormatter } from '@/components/tools/JsonFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JSON Beautifier – Format and Indent JSON Online',
  description: "Beautify messy or minified JSON code online. Easily format and indent JSON strings for human readability.",
  alternates: { canonical: 'https://tools2do.com/tools/json-formatter/json-beautifier' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JSON Beautifier","description":"Beautify messy or minified JSON code online. Easily format and indent JSON strings for human readability.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/json-formatter/json-beautifier"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JSON Beautifier</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Make dense, unreadable JSON strings beautiful. Apply perfect indentation and syntax highlighting right in your browser.</p>
      </div>
      <JsonFormatter />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Data", description: "Input your minified JSON string." }, { step: "Format", description: "Click format to apply spaces or tabs." }, { step: "Copy Clean JSON", description: "Copy the easily readable, well-structured output." }]}
        useCases={["Reading complex server responses copied from a network tab.", "Formatting JSON strings stored in database columns for readability.", "Preparing code snippets for documentation."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/json-formatter/json-validator', name: 'JSON Validator', description: "Check JSON syntax." }]}
      />
    </>
  );
}