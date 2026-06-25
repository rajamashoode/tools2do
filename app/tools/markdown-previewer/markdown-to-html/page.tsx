import type { Metadata } from 'next';
import { MarkdownPreviewer } from '@/components/tools/MarkdownPreviewer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Markdown to HTML Converter – Convert MD to HTML Online',
  description: 'Live Markdown to HTML converter. Type markdown syntax and instantly see the raw HTML equivalent and visual preview.',
  alternates: { canonical: 'https://tools2do.com/tools/markdown-previewer/markdown-to-html' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Markdown to HTML Converter","description":"Live Markdown to HTML converter. Type markdown syntax and instantly see the raw HTML equivalent and visual preview.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/markdown-previewer/markdown-to-html"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Markdown to HTML Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Easily write in Markdown and export clean HTML code. Perfect for writing blog posts, documentation, and README files.</p>
      </div>
      <MarkdownPreviewer />
      <ToolInfoSection
        howToSteps={[{ step: 'Write Markdown', description: 'Type or paste your Markdown text into the left editor.' }, { step: 'View Live Preview', description: 'See the formatted document render instantly on the right.' }, { step: 'Export HTML', description: 'Copy the generated HTML code to use on your website.' }]}
        useCases={['Writing content for a CMS that only accepts HTML input.', 'Testing GitHub README.md formatting before committing.', 'Quickly drafting well-formatted documentation.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/html-formatter', name: 'HTML Formatter', description: 'Format the outputted HTML code.' }]}
      />
    </>
  );
}