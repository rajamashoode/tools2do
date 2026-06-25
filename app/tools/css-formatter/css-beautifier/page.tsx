import type { Metadata } from 'next';
import { CssFormatter } from '@/components/tools/CssFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'CSS Beautifier – Format and Indent CSS Code',
  description: "Format, indent, and beautify CSS stylesheets online. Make minified CSS readable again with this free developer tool.",
  alternates: { canonical: 'https://tools2do.com/tools/css-formatter/css-beautifier' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"CSS Beautifier","description":"Format, indent, and beautify CSS stylesheets online. Make minified CSS readable again with this free developer tool.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/css-formatter/css-beautifier"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">CSS Beautifier</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Turn a massive wall of minified CSS into a perfectly indented, readable stylesheet. Essential for inspecting third-party code.</p>
      </div>
      <CssFormatter />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Minified CSS", description: "Input the dense CSS string." }, { step: "Beautify", description: "Click the format button to expand the blocks." }, { step: "Copy Clean Code", description: "Copy the well-structured stylesheet." }]}
        useCases={["Inspecting a competitor's website stylesheet for design inspiration.", "Debugging a broken CSS rule that was compressed by a build tool.", "Reformatting an old legacy stylesheet for modern development."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/css-formatter/css-minifier', name: 'CSS Minifier', description: "Compress CSS." }]}
      />
    </>
  );
}