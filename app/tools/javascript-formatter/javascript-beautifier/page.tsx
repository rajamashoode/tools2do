import type { Metadata } from 'next';
import { JsFormatter } from '@/components/tools/JsFormatter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'JavaScript Beautifier – Format JS Code Online',
  description: "Format, indent, and beautify minified JavaScript. Free online JS beautifier for debugging complex web applications.",
  alternates: { canonical: 'https://tools2do.com/tools/javascript-formatter/javascript-beautifier' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"JavaScript Beautifier","description":"Format, indent, and beautify minified JavaScript. Free online JS beautifier for debugging complex web applications.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/javascript-formatter/javascript-beautifier"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">JavaScript Beautifier</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Make unreadable JavaScript understandable. Apply standard indentation and line breaks to quickly debug confusing code blocks.</p>
      </div>
      <JsFormatter />
      <ToolInfoSection
        howToSteps={[{ step: "Input Script", description: "Paste the minified JavaScript code." }, { step: "Format Code", description: "Click beautify to properly indent functions and loops." }, { step: "Debug", description: "Read and debug the newly formatted code structure." }]}
        useCases={["Reverse-engineering a compiled web widget.", "Debugging an error thrown by a minified third-party library.", "Formatting inline scripts copied from old HTML files."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/javascript-formatter/js-minifier', name: 'JS Minifier', description: "Compress JS code." }]}
      />
    </>
  );
}