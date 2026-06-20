import type { Metadata } from 'next';
import { WordCounter } from '@/components/tools/WordCounter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Word Counter – Count Words & Characters Online',
  description: 'Free online word counter. Count words, characters, sentences, paragraphs and reading time instantly. No signup. Paste text and get results in seconds.',
  alternates: { canonical: 'https://tools2do.com/tools/word-counter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Word Counter',
  description: 'Count words, characters, sentences and reading time.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/word-counter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Word Counter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Count words, characters, sentences and reading time.</p>
      </div>
      <WordCounter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Enter text', description: 'Type or paste your text directly into the text editor.' },
          { step: 'Review stats', description: 'Look at the real-time indicators for word count, character count, sentence count, and paragraph count.' },
          { step: 'Check reading time', description: 'Review the estimated reading and speaking times calculated instantly for your text.' }
        ]}
        useCases={[
          'Checking article or essay length to meet specific word limit targets.',
          'Reviewing reading speed compatibility for speeches and presentations.',
          'Analyzing character and word counts for social media posts or blog snippets.'
        ]}
        privacyNote='All text analysis is processed locally in your browser. No text is uploaded to our servers.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/character-counter', name: 'Character Counter', description: 'Count characters with platform limit bars.' },
          { href: '/tools/case-converter', name: 'Case Converter', description: 'Convert text to UPPERCASE, lowercase, Title Case, sentence case, or slug-format.' },
          { href: '/tools/find-and-replace', name: 'Find and Replace', description: 'Find and replace text with plain text or regex patterns.' }
        ]}
      />
</>
  );
}
