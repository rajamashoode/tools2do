import type { Metadata } from 'next';
import { TextRepeater } from '@/components/tools/TextRepeater';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Text Repeater',
  description: 'Repeat any word, sentence or paragraph multiple times.',
  alternates: { canonical: 'https://tools2do.com/tools/text-repeater' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Text Repeater',
  description: 'Repeat any word, sentence or paragraph multiple times.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/text-repeater',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Text Repeater</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Repeat any word, sentence or paragraph multiple times.</p>
      </div>
      <TextRepeater />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Enter text', description: 'Type the word, symbol, or sentence you want to repeat.' },
          { step: 'Specify settings', description: 'Choose the number of iterations and select separator characters.' },
          { step: 'Copy repeated text', description: 'Generate the output string and copy it to the clipboard.' }
        ]}
        useCases={[
          'Creating mock datasets, separator lines, or debug logs.',
          'Testing text wrapping and performance limits of textareas.',
          'Creating customized emoji lines or repetitive layouts.'
        ]}
        privacyNote='Process runs inside browser. Your inputs are not uploaded.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/lorem-ipsum-generator', name: 'Lorem Ipsum Generator', description: 'Generate clean placeholder text.' },
          { href: '/tools/remove-extra-spaces', name: 'Remove Extra Spaces', description: 'Clean text by removing duplicate spaces.' },
          { href: '/tools/character-counter', name: 'Character Counter', description: 'Count characters with platform limit bars.' }
        ]}
      />
</>
  );
}
