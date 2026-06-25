import type { Metadata } from 'next';
import { CssFormatter } from '@/components/tools/CssFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'CSS Minifier – Compress CSS Stylesheets Online',
  description: 'Minify CSS code by removing spaces, line breaks, and comments. Optimize your website performance with smaller stylesheets.',
  alternates: { canonical: 'https://tools2do.com/tools/css-formatter/css-minifier' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"CSS Minifier Online","description":"Minify CSS code by removing spaces, line breaks, and comments. Optimize your website performance with smaller stylesheets.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/css-formatter/css-minifier"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">CSS Minifier Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compress your CSS before pushing to production. Our tool safely removes unnecessary characters to save bandwidth.</p>
      </div>
      <CssFormatter />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste CSS', description: 'Input your formatted stylesheet.' }, { step: 'Minify', description: 'Click the minify button to compress the text.' }, { step: 'Download', description: 'Copy the single-line CSS output.' }]}
        useCases={['Optimizing CSS payload size for faster First Contentful Paint.', 'Minifying small inline style blocks.', 'Preparing theme files for distribution.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Format and beautify CSS.' }]}
      />
    </>
  );
}