import type { Metadata } from 'next';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Case Converter',
  description: 'Convert to UPPERCASE, lowercase, Title Case, slug-format.',
  alternates: { canonical: 'https://tools2do.com/tools/case-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Case Converter',
  description: 'Convert to UPPERCASE, lowercase, Title Case, slug-format.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/case-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Case Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert to UPPERCASE, lowercase, Title Case, slug-format.</p>
      </div>
      <CaseConverter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Paste text', description: 'Paste your text into the editor pane.' },
          { step: 'Choose case', description: 'Click UPPERCASE, lowercase, Title Case, Sentence Case, or slug-case buttons.' },
          { step: 'Copy result', description: 'Copy the updated text to your clipboard with one click.' }
        ]}
        useCases={[
          'Quickly fixing text typed with CAPS LOCK accidentally left on.',
          'Formatting blog or article titles to proper Title Case style.',
          'Standardizing variables, header titles, or documentation text.'
        ]}
        privacyNote='All case changes are processed entirely inside your browser. No data is sent to any server.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words, sentences, and paragraphs.' },
          { href: '/tools/character-counter', name: 'Character Counter', description: 'Count characters with platform limit bars.' },
          { href: '/tools/remove-extra-spaces', name: 'Remove Extra Spaces', description: 'Clean up whitespace and empty lines.' }
        ]}
      />
</>
  );
}
