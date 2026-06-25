import type { Metadata } from 'next';
import { WordCounter } from '@/components/tools/WordCounter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Sentence Counter – Count Sentences in Text Online',
  description: 'Free online tool to count sentences, words, and paragraphs in your writing. Improve your text readability by tracking sentence length.',
  alternates: { canonical: 'https://tools2do.com/tools/word-counter/sentence-counter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Sentence Counter","description":"Free online tool to count sentences, words, and paragraphs in your writing. Improve your text readability by tracking sentence length.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/word-counter/sentence-counter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Sentence Counter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Find out exactly how many sentences are in your essay, article, or document. Helps in evaluating readability and pacing.</p>
      </div>
      <WordCounter />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Writing', description: 'Copy and paste your document into the input field.' }, { step: 'Check Sentences', description: 'Look at the statistics panel to see your total sentence count.' }, { step: 'Analyze Text', description: 'Use the count to determine if your sentences are too long on average.' }]}
        useCases={['Checking academic essays for structural balance.', 'Improving blog post readability by ensuring varied sentence lengths.', 'Meeting specific sentence requirements for school assignments.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/word-counter/character-counter', name: 'Character Counter', description: 'Count characters with or without spaces.' }]}
      />
    </>
  );
}