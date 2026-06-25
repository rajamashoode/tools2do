import type { Metadata } from 'next';
import { TextRepeater } from '@/components/tools/TextRepeater';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Word Repeater – Repeat Words Multiple Times Online',
  description: 'Repeat a specific word or phrase up to 10,000 times instantly. Free online text multiplier tool for copy-pasting.',
  alternates: { canonical: 'https://tools2do.com/tools/text-repeater/word-repeater' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Word Repeater Online","description":"Repeat a specific word or phrase up to 10,000 times instantly. Free online text multiplier tool for copy-pasting.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/text-repeater/word-repeater"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Word Repeater Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Need to repeat a word thousands of times? Our tool multiplies your text instantly without crashing your browser.</p>
      </div>
      <TextRepeater />
      <ToolInfoSection
        howToSteps={[{ step: 'Enter Word', description: 'Type the word or phrase you want to repeat.' }, { step: 'Set Count', description: 'Specify how many times you want the word to be duplicated.' }, { step: 'Copy Text', description: 'Click repeat and copy the massive block of text.' }]}
        useCases={['Generating dummy text for design mockups.', 'Creating a massive text file for load-testing an application.', 'Spamming repeated phrases in game chats (where allowed).']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/lorem-ipsum-generator', name: 'Lorem Ipsum Generator', description: 'Generate random placeholder text.' }]}
      />
    </>
  );
}