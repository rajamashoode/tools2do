import type { Metadata } from 'next';
import { RemoveExtraSpaces } from '@/components/tools/RemoveExtraSpaces';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Trim Whitespace Online – Remove Trailing Spaces',
  description: "Instantly trim leading and trailing whitespace from your text. Clean up bad formatting and invisible characters online.",
  alternates: { canonical: 'https://tools2do.com/tools/remove-extra-spaces/trim-whitespace' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Trim Whitespace Online","description":"Instantly trim leading and trailing whitespace from your text. Clean up bad formatting and invisible characters online.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/remove-extra-spaces/trim-whitespace"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Trim Whitespace Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Remove invisible leading and trailing spaces that cause validation errors in forms, databases, and spreadsheets.</p>
      </div>
      <RemoveExtraSpaces />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Data", description: "Input a list of words or paragraphs with extra spaces." }, { step: "Trim Spaces", description: "Click the button to execute a global trim operation." }, { step: "Copy Cleaned Data", description: "Retrieve the normalized text strings." }]}
        useCases={["Cleaning a list of email addresses before importing to Mailchimp.", "Fixing user inputs that contain accidental spacebar hits.", "Preparing data for an exact-match database query."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/remove-extra-spaces/space-remover', name: 'Space Remover', description: "Remove double spaces." }]}
      />
    </>
  );
}