import type { Metadata } from 'next';
import { JsFormatter } from '@/components/tools/JsFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JavaScript Formatter',
  description: 'Format or minify JavaScript code in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/javascript-formatter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'JavaScript Formatter',
  description: 'Format or minify JavaScript code in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/javascript-formatter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JavaScript Formatter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format or minify JavaScript code in your browser.</p>
      </div>
      <JsFormatter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Paste JS code', description: 'Enter your raw, unformatted, or minified JavaScript code.' },
          { step: 'Format or minify', description: "Click 'Format' to apply indentation and spacing, or 'Minify' to compress code." },
          { step: 'Copy JS', description: 'Copy the formatted script output for your IDE or project.' }
        ]}
        useCases={[
          'De-obfuscating single-line or minified JavaScript blocks for readability.',
          'Minifying scripts to optimize asset performance.',
          'Standardizing formatting across older codebases.'
        ]}
        privacyNote='Code formatting runs entirely inside browser sandbox. Your proprietary code is never sent online.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/html-formatter', name: 'HTML Formatter', description: 'Format or minify HTML markup.' },
          { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Format or minify CSS stylesheets.' },
          { href: '/tools/json-formatter', name: 'JSON Formatter & Validator', description: 'Format, validate, minify and inspect JSON.' }
        ]}
      />
</>
  );
}
