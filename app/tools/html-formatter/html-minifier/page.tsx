import type { Metadata } from 'next';
import { HtmlFormatter } from '@/components/tools/HtmlFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'HTML Minifier – Compress HTML Code Online',
  description: "Minify HTML code online by removing whitespace, line breaks, and comments. Optimize website speed and reduce file size.",
  alternates: { canonical: 'https://tools2do.com/tools/html-formatter/html-minifier' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"HTML Minifier","description":"Minify HTML code online by removing whitespace, line breaks, and comments. Optimize website speed and reduce file size.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/html-formatter/html-minifier"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">HTML Minifier</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Compress your HTML files before deploying to production. Stripping out unnecessary characters helps improve your PageSpeed score.</p>
      </div>
      <HtmlFormatter />
      <ToolInfoSection
        howToSteps={[{ step: "Paste HTML", description: "Input your beautifully formatted HTML code." }, { step: "Minify", description: "Click minify to collapse it into a single line." }, { step: "Download", description: "Copy the minified output for deployment." }]}
        useCases={["Optimizing static HTML websites for faster loading.", "Minifying email templates before sending them via Mailchimp.", "Reducing the payload size of an embedded widget."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/html-formatter/html-beautifier', name: 'HTML Beautifier', description: "Format and indent HTML." }]}
      />
    </>
  );
}