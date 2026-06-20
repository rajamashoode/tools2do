import type { Metadata } from 'next';
import { CssFormatter } from '@/components/tools/CssFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'CSS Formatter',
  description: 'Format or minify CSS stylesheets in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/css-formatter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CSS Formatter',
  description: 'Format or minify CSS stylesheets in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/css-formatter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">CSS Formatter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Format or minify CSS stylesheets in your browser.</p>
      </div>
      <CssFormatter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Paste CSS', description: 'Enter your raw or minified CSS code into the editor.' },
          { step: 'Format or minify', description: "Click 'Format' to clean up styles and layout, or 'Minify' to compress CSS stylesheets." },
          { step: 'Copy output', description: 'Copy the cleaned styles to clipboard for use in your style files.' }
        ]}
        useCases={[
          'Beautifying compressed or messy CSS files for easier editing.',
          'Minifying CSS assets to improve page loading performance.',
          'Validating basic CSS structures and layout syntax.'
        ]}
        privacyNote='Formatting is executed client-side. Your CSS stylesheets are never uploaded.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Format or minify JavaScript code.' },
          { href: '/tools/html-formatter', name: 'HTML Formatter', description: 'Format or minify HTML markup.' },
          { href: '/tools/json-formatter', name: 'JSON Formatter & Validator', description: 'Format, validate, minify and inspect JSON.' }
        ]}
      />
</>
  );
}
