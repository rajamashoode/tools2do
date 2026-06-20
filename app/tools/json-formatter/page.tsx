import type { Metadata } from 'next';
import { JsonFormatter } from '@/components/tools/JsonFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JSON Formatter & Validator',
  description: 'Format, validate, minify, copy, and inspect JSON locally in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/json-formatter' }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: ['JSON formatting', 'JSON validation', 'JSON minification', 'Copy formatted output', 'Upload JSON file', 'Keyboard shortcut formatting', 'Key count statistics'],
  url: 'https://tools2do.com/tools/json-formatter',
  name: 'JSON Formatter & Validator',
  description: 'Free browser-based JSON formatter, validator, minifier, and inspector.',
};

export default function JsonFormatterPage(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JSON Formatter & Validator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format, validate, minify, and inspect JSON entirely in your browser.</p>
      </div>
      <script id="json-formatter-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JsonFormatter />
      <ToolInfoSection
        howToSteps={[
          { step: 'Paste or upload JSON', description: 'Paste your raw JSON text or drag-and-drop a JSON file into the input editor.' },
          { step: 'Format or minify', description: "Click 'Format' to beautify with clean indentation, or 'Minify' to compress into a single line." },
          { step: 'Copy output', description: "Validate any error locations marked by the checker, and click 'Copy Output' to copy the clean JSON." }
        ]}
        useCases={[
          'Beautifying unformatted or single-line API payloads for easier debugging.',
          'Checking JSON syntax correctness and locating precise syntax error locations.',
          'Minifying JSON config files to reduce page size or payload transfer weight.'
        ]}
        privacyNote='All formatting, validation, and minification is performed entirely locally in your browser. Your data never leaves your device.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Format or minify JavaScript code in your browser.' },
          { href: '/tools/html-formatter', name: 'HTML Formatter', description: 'Format or minify HTML markup in your browser.' },
          { href: '/tools/csv-to-json', name: 'CSV to JSON Converter', description: 'Convert CSV data to formatted JSON instantly in your browser.' }
        ]}
      />
</>
    );
}
