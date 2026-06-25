import type { Metadata } from 'next';
import { CsvToJson } from '@/components/tools/CsvToJson';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'CSV to JSON Converter – Convert Data Securely Online',
  description: "Convert CSV spreadsheet data into structured JSON objects. Fast, free, and completely local browser-based parsing.",
  alternates: { canonical: 'https://tools2do.com/tools/csv-to-json/csv-to-json-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"CSV to JSON Converter","description":"Convert CSV spreadsheet data into structured JSON objects. Fast, free, and completely local browser-based parsing.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/csv-to-json/csv-to-json-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">CSV to JSON Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Easily transform comma-separated values (CSV) into JavaScript Object Notation (JSON) format. Great for data migration and APIs.</p>
      </div>
      <CsvToJson />
      <ToolInfoSection
        howToSteps={[{ step: "Paste CSV", description: "Input your raw CSV text or spreadsheet data." }, { step: "Parse Data", description: "The tool securely processes the data locally in your browser." }, { step: "Copy JSON", description: "Download or copy the newly formatted JSON array." }]}
        useCases={["Converting exported Excel spreadsheets to JSON for web apps.", "Migrating flat data files into NoSQL databases like MongoDB.", "Generating mock API data from spreadsheets."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/json-formatter', name: 'JSON Formatter', description: "Format and validate JSON." }]}
      />
    </>
  );
}