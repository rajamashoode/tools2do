import type { Metadata } from 'next';
import { HtmlFormatter } from '@/components/tools/HtmlFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'HTML Formatter',
  description: 'Format or minify HTML markup in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/html-formatter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'HTML Formatter',
  description: 'Format or minify HTML markup in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/html-formatter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">HTML Formatter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format or minify HTML markup in your browser.</p>
      </div>
      <HtmlFormatter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Paste HTML', description: 'Input your raw or messy HTML markup.' },
          { step: 'Format or minify', description: 'Beautify elements with clean tag trees, or minify layout markup.' },
          { step: 'Copy', description: 'Copy the clean code block for your website.' }
        ]}
        useCases={[
          'Indenting messy HTML structures to make tag closures easy to audit.',
          'Compacting index markup to save bytes on initial asset load.',
          'Cleaning template layouts or rich editor output.'
        ]}
        privacyNote='HTML code is processed inside browser window. No data is stored or uploaded.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Format or minify JavaScript code.' },
          { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Format or minify CSS stylesheets.' },
          { href: '/tools/json-formatter', name: 'JSON Formatter & Validator', description: 'Format, validate, minify and inspect JSON.' }
        ]}
      />
</>
  );
}
