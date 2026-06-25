import type { Metadata } from 'next';
import { FindAndReplace } from '@/components/tools/FindAndReplace';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Text Replacer – Find and Replace Words Online',
  description: 'Easily find and replace words, phrases, or characters in your text online. Supports case-sensitive matching and regex.',
  alternates: { canonical: 'https://tools2do.com/tools/find-and-replace/text-replacer' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Online Text Replacer","description":"Easily find and replace words, phrases, or characters in your text online. Supports case-sensitive matching and regex.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/find-and-replace/text-replacer"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Online Text Replacer</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Swap out specific words in a large document instantly. Use regular expressions for advanced text manipulation right in your browser.</p>
      </div>
      <FindAndReplace />
      <ToolInfoSection
        howToSteps={[{ step: 'Input Document', description: 'Paste the large text you want to edit.' }, { step: 'Find Word', description: 'Enter the target word you want to locate.' }, { step: 'Replace All', description: 'Enter the replacement word and click Replace All.' }]}
        useCases={['Changing a character name throughout an entire story draft.', 'Updating an outdated company name in a legal privacy policy.', 'Swapping specific code snippets across a long file.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/remove-extra-spaces', name: 'Remove Extra Spaces', description: 'Clean up whitespace formatting.' }]}
      />
    </>
  );
}