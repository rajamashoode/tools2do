import type { Metadata } from 'next';
import { RemoveExtraSpaces } from '@/components/tools/RemoveExtraSpaces';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Extra Space Remover – Clean Up Formatting Online',
  description: 'Remove double spaces, trailing spaces, and unwanted tabs from your text. Clean up messy copy-pasted content instantly.',
  alternates: { canonical: 'https://tools2do.com/tools/remove-extra-spaces/space-remover' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Extra Space Remover","description":"Remove double spaces, trailing spaces, and unwanted tabs from your text. Clean up messy copy-pasted content instantly.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/remove-extra-spaces/space-remover"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Extra Space Remover</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Fix formatting errors by automatically stripping out double spaces and unnecessary whitespace. Perfect for cleaning up PDF copies.</p>
      </div>
      <RemoveExtraSpaces />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Text', description: 'Input your poorly formatted text.' }, { step: 'Clean Whitespace', description: 'Click the button to collapse multiple spaces into single spaces.' }, { step: 'Copy Cleaned Text', description: 'Retrieve your perfectly formatted document.' }]}
        useCases={['Cleaning up text copied from a poorly formatted PDF.', 'Fixing double-spacing errors before publishing a blog post.', 'Normalizing user input data before saving it to a database.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/find-and-replace', name: 'Find and Replace', description: 'Replace specific words in your text.' }]}
      />
    </>
  );
}