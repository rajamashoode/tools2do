import type { Metadata } from 'next';
import { JsFormatter } from '@/components/tools/JsFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JS Minifier – Compress JavaScript Code Online',
  description: 'Minify and compress your JavaScript code. Remove whitespace and comments to reduce file size and improve website load times.',
  alternates: { canonical: 'https://tools2do.com/tools/javascript-formatter/js-minifier' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JavaScript Minifier","description":"Minify and compress your JavaScript code. Remove whitespace and comments to reduce file size and improve website load times.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/javascript-formatter/js-minifier"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JavaScript Minifier</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Optimize your JS code for production by stripping out all unnecessary characters without changing how it runs.</p>
      </div>
      <JsFormatter />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste JS', description: 'Input your raw JavaScript code.' }, { step: 'Minify', description: 'Click minify to collapse the code into a single lightweight string.' }, { step: 'Copy Code', description: 'Copy the compressed output for production use.' }]}
        useCases={['Reducing the file size of JavaScript libraries before deployment.', 'Obfuscating basic logic to make it slightly harder to read.', 'Improving website performance scores by serving smaller assets.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Beautify minified JS code.' }, { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Minify and format CSS.' }]}
      />
    </>
  );
}