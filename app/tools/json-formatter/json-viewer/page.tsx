import type { Metadata } from 'next';
import { JsonFormatter } from '@/components/tools/JsonFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JSON Viewer – Online JSON Tree Viewer & Parser',
  description: "View and parse complex JSON payloads in an easy-to-read format. Free JSON viewer online with collapsing nodes.",
  alternates: { canonical: 'https://tools2do.com/tools/json-formatter/json-viewer' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Online JSON Viewer","description":"View and parse complex JSON payloads in an easy-to-read format. Free JSON viewer online with collapsing nodes.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/json-formatter/json-viewer"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Online JSON Viewer</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly inspect large JSON objects. Beautify the syntax, validate the structure, and easily copy individual data points.</p>
      </div>
      <JsonFormatter />
      <ToolInfoSection
        howToSteps={[{ step: "Input JSON", description: "Paste the raw API response." }, { step: "Parse Data", description: "Let the tool structure the data visually." }, { step: "Inspect", description: "Analyze the formatted object hierarchy." }]}
        useCases={["Reviewing a 1,000-line JSON payload returned by a third-party API.", "Checking the specific structure of a GraphQL response.", "Validating webhooks visually before writing processing logic."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/json-formatter/json-beautifier', name: 'JSON Beautifier', description: "Indent JSON code." }]}
      />
    </>
  );
}