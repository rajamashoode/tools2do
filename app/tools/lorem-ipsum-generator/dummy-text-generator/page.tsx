import type { Metadata } from 'next';
import { LoremIpsumGenerator } from '@/components/tools/LoremIpsumGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Dummy Text Generator – Generate Placeholder Text',
  description: "Generate standard dummy text for web design and publishing. Free, fast Lorem Ipsum generator for your mockups.",
  alternates: { canonical: 'https://tools2do.com/tools/lorem-ipsum-generator/dummy-text-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Dummy Text Generator","description":"Generate standard dummy text for web design and publishing. Free, fast Lorem Ipsum generator for your mockups.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/lorem-ipsum-generator/dummy-text-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Dummy Text Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly grab paragraphs, sentences, or words of classic Lorem Ipsum text to use as placeholders in your design mockups.</p>
      </div>
      <LoremIpsumGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Select Format", description: "Choose whether you want paragraphs, sentences, or words." }, { step: "Set Amount", description: "Pick the exact number you need." }, { step: "Copy Text", description: "Instantly copy the generated dummy text." }]}
        useCases={["Filling out wireframes and UI mockups in Figma.", "Testing typography and font choices on a new website.", "Drafting layout templates before actual content is ready."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/text-repeater', name: 'Text Repeater', description: "Repeat specific words or sentences." }]}
      />
    </>
  );
}