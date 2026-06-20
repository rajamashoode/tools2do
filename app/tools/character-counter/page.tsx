import type { Metadata } from 'next';
import { CharacterCounter } from '@/components/tools/CharacterCounter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Character Counter',
  description: 'Count characters with platform limit bars.',
  alternates: { canonical: 'https://tools2do.com/tools/character-counter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Character Counter',
  description: 'Count characters with platform limit bars.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/character-counter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Character Counter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Count characters with platform limit bars.</p>
      </div>
      <CharacterCounter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Enter text', description: 'Type or paste your text into the primary text box.' },
          { step: 'Monitor limits', description: 'Watch the limit bars fill up for Twitter, Instagram, SMS, and other platforms.' },
          { step: 'Review counters', description: 'Instantly check total characters, words, sentences, and whitespaces.' }
        ]}
        useCases={[
          'Drafting social media posts within character constraints.',
          'Checking length of SEO meta titles and descriptions.',
          'Writing essay or resume text with strict limit requirements.'
        ]}
        privacyNote='All character counting is performed entirely locally in your browser. Your input text is never uploaded to a server.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/word-counter', name: 'Word Counter', description: 'Count words, sentences, and paragraphs.' },
          { href: '/tools/case-converter', name: 'Case Converter', description: 'Convert text to UPPERCASE, lowercase, Title Case, sentence case, or slug-format.' },
          { href: '/tools/find-and-replace', name: 'Find and Replace', description: 'Find and replace text with plain text or regex patterns.' }
        ]}
      />
</>
  );
}
