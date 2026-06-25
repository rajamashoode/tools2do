import type { Metadata } from 'next';
import { JsonFormatter } from '@/components/tools/JsonFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JSON Minifier & Compressor – Minify JSON Online Free',
  description: 'Compress and minify your JSON data online. Remove all unnecessary whitespace, line breaks, and comments instantly in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/json-formatter/json-minifier' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JSON Minifier Online","description":"Compress and minify your JSON data online. Remove all unnecessary whitespace, line breaks, and comments instantly in your browser.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/json-formatter/json-minifier"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JSON Minifier Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Reduce the file size of your JSON payloads by removing all extra spaces and indentation. Perfect for preparing data for production APIs.</p>
      </div>
      <JsonFormatter />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste JSON', description: 'Paste your formatted JSON or upload a .json file.' }, { step: 'Click Minify', description: 'Hit the Minify button to compress the data into a single line.' }, { step: 'Copy Result', description: 'Copy the minified JSON string to your clipboard.' }]}
        useCases={['Optimizing API responses to reduce network payload size.', 'Preparing configuration files for production deployment.', 'Minifying large data dumps to save storage space.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/json-formatter', name: 'JSON Formatter', description: 'Format and beautify your minified JSON.' }, { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Format or minify JS code.' }]}
      />
    </>
  );
}