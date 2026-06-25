import type { Metadata } from 'next';
import { MarkdownPreviewer } from '@/components/tools/MarkdownPreviewer';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Online Markdown Editor – Write with Live Preview',
  description: "Write Markdown in a distraction-free online editor with a real-time live preview. Perfect for drafting README files and blogs.",
  alternates: { canonical: 'https://tools2do.com/tools/markdown-previewer/markdown-editor' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Online Markdown Editor","description":"Write Markdown in a distraction-free online editor with a real-time live preview. Perfect for drafting README files and blogs.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/markdown-previewer/markdown-editor"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Online Markdown Editor</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">A clean, fast, and completely private Markdown editor. See your formatting render in real-time right alongside your code.</p>
      </div>
      <MarkdownPreviewer />
      <ToolInfoSection
        howToSteps={[{ step: "Write Content", description: "Type standard Markdown syntax in the editor pane." }, { step: "Live Preview", description: "Watch the rich text render automatically." }, { step: "Export", description: "Copy the Markdown or the rendered HTML." }]}
        useCases={["Drafting a complex README.md file with tables and lists.", "Writing a new blog post before importing it to a CMS.", "Taking fast, well-formatted notes during a meeting."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/markdown-previewer/markdown-to-html', name: 'Markdown to HTML', description: "Convert MD to HTML." }]}
      />
    </>
  );
}