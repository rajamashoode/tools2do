import type { Metadata } from 'next';
import { JsonFormatter } from '@/components/tools/JsonFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JSON Validator – Validate and Check JSON Online',
  description: "Check if your JSON code is valid. Free online JSON validator catches syntax errors, missing quotes, and trailing commas.",
  alternates: { canonical: 'https://tools2do.com/tools/json-formatter/json-validator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JSON Validator Online","description":"Check if your JSON code is valid. Free online JSON validator catches syntax errors, missing quotes, and trailing commas.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/json-formatter/json-validator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JSON Validator Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find out exactly why your JSON payload is breaking. Instantly detect syntax errors, missing brackets, and invalid formatting.</p>
      </div>
      <JsonFormatter />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Payload", description: "Input your raw JSON string." }, { step: "Check Validity", description: "The tool will automatically highlight any parsing errors." }, { step: "Fix Errors", description: "Use the provided error message to correct your syntax." }]}
        useCases={["Debugging a failing API request due to malformed payload data.", "Validating complex configuration files before deploying them.", "Checking hand-written JSON strings for missing quotes."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/json-formatter/json-beautifier', name: 'JSON Beautifier', description: "Format and indent JSON." }]}
      />
    </>
  );
}