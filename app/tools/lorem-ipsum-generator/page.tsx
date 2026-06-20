import type { Metadata } from 'next';
import { LoremIpsumGenerator } from '@/components/tools/LoremIpsumGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator',
  description: 'Generate clean placeholder text for designs and layouts.',
  alternates: { canonical: 'https://tools2do.com/tools/lorem-ipsum-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Lorem Ipsum Generator',
  description: 'Generate clean placeholder text for designs and layouts.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/lorem-ipsum-generator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Lorem Ipsum Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate clean placeholder text for designs and layouts.</p>
      </div>
      <LoremIpsumGenerator />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Choose volume', description: 'Specify how many paragraphs, sentences, or words you require.' },
          { step: 'Configure output', description: 'Toggle options like starting with standard placeholder prefix.' },
          { step: 'Copy text', description: 'Generate the placeholder text and copy it for your layouts.' }
        ]}
        useCases={[
          'Generating placeholder paragraphs for design mockups or UI drafts.',
          'Filling empty sections of websites during template development.',
          'Testing text rendering and font size visual scales.'
        ]}
        privacyNote='Lorem Ipsum generation is processed entirely offline using local generator data.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/text-repeater', name: 'Text Repeater', description: 'Repeat any word, sentence or paragraph multiple times.' },
          { href: '/tools/remove-extra-spaces', name: 'Remove Extra Spaces', description: 'Clean text by removing duplicate spaces.' },
          { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words, characters, sentences, paragraphs and reading time.' }
        ]}
      />
</>
  );
}
