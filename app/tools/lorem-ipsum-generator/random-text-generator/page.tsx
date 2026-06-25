import type { Metadata } from 'next';
import { LoremIpsumGenerator } from '@/components/tools/LoremIpsumGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Random Text Generator – Generate Gibberish Placeholders',
  description: "Generate paragraphs of random dummy text for your web designs. Fast, free, and customizable random text generator.",
  alternates: { canonical: 'https://tools2do.com/tools/lorem-ipsum-generator/random-text-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Random Text Generator","description":"Generate paragraphs of random dummy text for your web designs. Fast, free, and customizable random text generator.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/lorem-ipsum-generator/random-text-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Random Text Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Fill your empty layout containers with realistic-looking random text. A vital utility for UI/UX designers and frontend developers.</p>
      </div>
      <LoremIpsumGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Select Type", description: "Choose between words, sentences, or full paragraphs." }, { step: "Set Number", description: "Define how much text you need." }, { step: "Copy to Clipboard", description: "Instantly grab the placeholder text." }]}
        useCases={["Testing text-overflow handling in a CSS layout.", "Populating a mock database with sample user biographies.", "Designing magazine layouts in Adobe InDesign."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/lorem-ipsum-generator/dummy-text-generator', name: 'Dummy Text Generator', description: "Generate Lorem Ipsum." }]}
      />
    </>
  );
}