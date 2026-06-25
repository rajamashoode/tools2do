import type { Metadata } from 'next';
import { WordCounter } from '@/components/tools/WordCounter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Character Counter – Count Characters Online Free',
  description: 'Easily count the number of characters in your text with or without spaces. Perfect for tweets, meta descriptions, and essays.',
  alternates: { canonical: 'https://tools2do.com/tools/word-counter/character-counter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Character Counter Online","description":"Easily count the number of characters in your text with or without spaces. Perfect for tweets, meta descriptions, and essays.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/word-counter/character-counter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Character Counter Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly find out the exact character count of your text. Useful for meeting strict character limits on social media or forms.</p>
      </div>
      <WordCounter />
      <ToolInfoSection
        howToSteps={[{ step: 'Type or Paste Text', description: 'Input your text into the box.' }, { step: 'View Character Count', description: 'The tool instantly updates the character count, including and excluding spaces.' }, { step: 'Edit Live', description: 'Continue typing to see the count update in real time.' }]}
        useCases={['Ensuring tweets stay under the 280-character limit.', 'Writing SEO meta titles (under 60 characters) and descriptions (under 160 characters).', 'Filling out application forms with strict character constraints.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/word-counter', name: 'Word Counter', description: 'Get detailed text statistics including word count.' }, { href: '/tools/case-converter', name: 'Case Converter', description: 'Format your text to proper casing.' }]}
      />
    </>
  );
}