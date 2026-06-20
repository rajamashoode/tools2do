import type { Metadata } from 'next';
import { FindAndReplace } from '@/components/tools/FindAndReplace';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Find and Replace',
  description: 'Find and replace text with plain text or regex.',
  alternates: { canonical: 'https://tools2do.com/tools/find-and-replace' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Find and Replace',
  description: 'Find and replace text with plain text or regex.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/find-and-replace',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Find and Replace</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find and replace text with plain text or regex.</p>
      </div>
      <FindAndReplace />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Input text', description: 'Enter your primary text into the main textbox.' },
          { step: 'Define parameters', description: "Specify the 'Find' query and the 'Replace with' target. Toggle regex mode if needed." },
          { step: 'Apply', description: "Click 'Replace All' and copy the resulting modified text." }
        ]}
        useCases={[
          'Mass-updating specific words or variables across large blocks of text.',
          'Cleaning up CSVs, logs, or coding files using regular expressions.',
          'Stripping undesired words or formatting from copy-pasted articles.'
        ]}
        privacyNote='All search and replace logic runs in-browser. Your text is kept private and secure.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/regex-tester', name: 'Regex Tester', description: 'Test regular expressions against sample text.' },
          { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words, sentences, and paragraphs.' },
          { href: '/tools/case-converter', name: 'Case Converter', description: 'Convert text case formats.' }
        ]}
      />
</>
  );
}
