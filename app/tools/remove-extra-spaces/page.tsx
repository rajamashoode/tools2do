import type { Metadata } from 'next';
import { RemoveExtraSpaces } from '@/components/tools/RemoveExtraSpaces';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Remove Extra Spaces Online Free – Clean Text Instantly',
  description: 'Remove extra spaces, duplicate spaces and blank lines from text online free. Clean and format text instantly in your browser. No signup, no limits.',
  alternates: { canonical: 'https://tools2do.com/tools/remove-extra-spaces' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Remove Extra Spaces',
  description: 'Clean text by removing duplicate spaces and line breaks.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/remove-extra-spaces',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Remove Extra Spaces</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Clean text by removing duplicate spaces and line breaks.</p>
      </div>
      <RemoveExtraSpaces />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Input text', description: 'Paste your text block containing spacing issues.' },
          { step: 'Select settings', description: 'Choose whether to remove duplicate spaces, tabs, or blank lines.' },
          { step: 'Copy clean text', description: 'Process and copy the cleaned text back to your clipboard.' }
        ]}
        useCases={[
          'Removing double spaces or weird tab formats after converting PDF to text.',
          'Stripping empty lines from code or text document exports.',
          'Formatting content prior to word counting or publishing.'
        ]}
        privacyNote='Spaces removal runs entirely locally. Your text remains private.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/case-converter', name: 'Case Converter', description: 'Convert text case formats.' },
          { href: '/tools/text-repeater', name: 'Text Repeater', description: 'Repeat any word, sentence or paragraph.' },
          { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words, characters, sentences, paragraphs and reading time.' }
        ]}
      />
</>
  );
}
