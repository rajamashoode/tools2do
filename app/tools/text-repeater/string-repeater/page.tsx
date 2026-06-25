import type { Metadata } from 'next';
import { TextRepeater } from '@/components/tools/TextRepeater';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'String Repeater – Multiply Text Strings Online',
  description: "Repeat or multiply any text string up to 10,000 times online. Free string multiplier tool for developers and copywriters.",
  alternates: { canonical: 'https://tools2do.com/tools/text-repeater/string-repeater' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"String Repeater","description":"Repeat or multiply any text string up to 10,000 times online. Free string multiplier tool for developers and copywriters.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/text-repeater/string-repeater"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">String Repeater</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Need a massive block of repeating text? Multiply any string instantly. Perfect for generating dummy data or testing limits.</p>
      </div>
      <TextRepeater />
      <ToolInfoSection
        howToSteps={[{ step: "Input String", description: "Enter the specific string or character to repeat." }, { step: "Set Multiplier", description: "Choose the exact number of repetitions." }, { step: "Generate", description: "Copy the resulting massive string." }]}
        useCases={["Generating long strings to test database column character limits.", "Creating padding for cryptographic data testing.", "Multiplying a specific HTML tag to stress-test a browser."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/text-repeater/word-repeater', name: 'Word Repeater', description: "Repeat words." }]}
      />
    </>
  );
}