import type { Metadata } from 'next';
import { WordCounter } from '@/components/tools/WordCounter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Tweet Character Counter – Check Twitter Limits',
  description: "Ensure your tweet is under the 280-character limit. Free online tweet character counter tool for social media managers.",
  alternates: { canonical: 'https://tools2do.com/tools/word-counter/tweet-character-counter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Tweet Character Counter","description":"Ensure your tweet is under the 280-character limit. Free online tweet character counter tool for social media managers.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/word-counter/tweet-character-counter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Tweet Character Counter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Draft your tweets perfectly. Check exactly how many characters you have left before hitting the strict 280-character Twitter limit.</p>
      </div>
      <WordCounter />
      <ToolInfoSection
        howToSteps={[{ step: "Draft Tweet", description: "Type your tweet directly into the editor." }, { step: "Check Count", description: "Monitor the character count to ensure it stays below 280." }, { step: "Post", description: "Copy the perfected tweet to your social media dashboard." }]}
        useCases={["Drafting marketing tweets for a brand campaign.", "Writing concise LinkedIn or Facebook social updates.", "Ensuring hashtags do not push a post over the character limit."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/word-counter', name: 'Word Counter', description: "Count total words." }]}
      />
    </>
  );
}