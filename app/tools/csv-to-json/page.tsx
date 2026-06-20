import type { Metadata } from 'next';
import { CsvToJson } from '@/components/tools/CsvToJson';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'CSV to JSON Converter',
  description: 'Convert CSV data to JSON instantly in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/csv-to-json' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CSV to JSON Converter',
  description: 'Convert CSV data to JSON instantly in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/csv-to-json',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">CSV to JSON Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert CSV data to JSON instantly in your browser.</p>
      </div>
      <CsvToJson />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Paste CSV', description: 'Input your CSV data (comma or tab separated) or upload a CSV file.' },
          { step: 'Convert', description: "Click the 'Convert' button to generate structured JSON arrays." },
          { step: 'Copy JSON', description: 'Copy the formatted JSON array or download it as a .json file.' }
        ]}
        useCases={[
          'Converting spreadsheet data exports (Excel, Google Sheets) to JSON for web apps.',
          'Structuring CSV raw data into developer-friendly API payloads.',
          'Quickly parsing tabular structures for data analytics.'
        ]}
        privacyNote='CSV parsing and JSON formatting run entirely client-side. No spreadsheet data leaves your browser.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/json-formatter', name: 'JSON Formatter & Validator', description: 'Format, validate, minify and inspect JSON.' },
          { href: '/tools/url-encoder', name: 'URL Encoder Decoder', description: 'Encode or decode URL components.' },
          { href: '/tools/base64', name: 'Base64 Encoder Decoder', description: 'Encode and decode Base64 strings.' }
        ]}
      />
</>
  );
}
