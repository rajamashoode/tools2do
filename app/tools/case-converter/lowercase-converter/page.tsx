import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Lowercase Converter – Convert Text to Lowercase Online',
  description: 'Easily convert all your text to lowercase letters. Free online text case converter that works instantly in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter/lowercase-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Lowercase Text Converter","description":"Easily convert all your text to lowercase letters. Free online text case converter that works instantly in your browser.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/case-converter/lowercase-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Lowercase Text Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Transform any capitalized text, sentences, or paragraphs into completely lowercase letters with a single click.</p>
      </div>
      <CaseConverter />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Text', description: 'Type or paste the text you want to convert.' }, { step: 'Select Lowercase', description: 'Click the "lowercase" button to convert all letters.' }, { step: 'Copy Text', description: 'Copy the converted text back to your clipboard.' }]}
        useCases={['Normalizing text data for database entries or comparisons.', 'Converting ALL CAPS messages into readable lowercase.', 'Formatting tags or keywords for SEO purposes.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/case-converter', name: 'Case Converter', description: 'Convert to uppercase, title case, and more.' }, { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words and characters in your text.' }]}
      />
    </>
  );
}