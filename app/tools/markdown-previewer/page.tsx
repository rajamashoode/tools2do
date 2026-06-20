import type { Metadata } from 'next';
import { MarkdownPreviewer } from '@/components/tools/MarkdownPreviewer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Markdown Previewer',
  description: 'Preview Markdown content with a two-pane live editor. Runs entirely in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/markdown-previewer' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Markdown Previewer',
  description: 'Preview Markdown content with a two-pane live editor. Runs entirely in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/markdown-previewer',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Markdown Previewer</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Preview Markdown content with a two-pane live editor. Runs entirely in your browser.</p>
      </div>
      <MarkdownPreviewer />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Write Markdown', description: 'Enter markdown text into the left editor panel.' },
          { step: 'Review live output', description: 'Watch the right panel render fully formatted HTML styling in real-time.' },
          { step: 'Copy HTML', description: 'Copy the compiled HTML output or use it directly for publishing.' }
        ]}
        useCases={[
          'Drafting blog posts, READMEs, or documentation using markdown.',
          'Reviewing markdown format correctness before committing files to git.',
          'Converting markdown texts to stylized HTML markup instantly.'
        ]}
        privacyNote='Markdown parsing is handled inside the browser sandbox using marked.js. Your document data is never sent online.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/html-formatter', name: 'HTML Formatter', description: 'Format or minify HTML markup.' },
          { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Format or minify CSS stylesheets.' },
          { href: '/tools/javascript-formatter', name: 'JavaScript Formatter', description: 'Format or minify JavaScript code.' }
        ]}
      />
</>
  );
}
