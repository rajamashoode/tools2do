import type { Metadata } from 'next';
import { WordCounter } from '@/components/tools/WordCounter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Essay Word Counter – Check Academic Paper Length',
  description: "Instantly count the words in your essay, thesis, or academic paper online. Free essay word counter helps you meet assignment requirements.",
  alternates: { canonical: 'https://tools2do.com/tools/word-counter/essay-word-counter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Essay Word Counter","description":"Instantly count the words in your essay, thesis, or academic paper online. Free essay word counter helps you meet assignment requirements.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/word-counter/essay-word-counter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Essay Word Counter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Ensure your school assignment or university thesis meets the required word limits. Check words, sentences, and character counts instantly.</p>
      </div>
      <WordCounter />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Essay", description: "Copy and paste your entire academic paper." }, { step: "View Statistics", description: "Look at the live word count and sentence count metrics." }, { step: "Adjust Text", description: "Edit your essay directly in the box to hit your target length." }]}
        useCases={["Checking if a college admissions essay meets the 500-word limit.", "Ensuring a high school English paper hits the minimum requirement.", "Analyzing the structural length of academic paragraphs."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/word-counter/character-counter', name: 'Character Counter', description: "Count specific characters." }]}
      />
    </>
  );
}