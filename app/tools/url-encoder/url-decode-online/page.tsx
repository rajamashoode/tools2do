import type { Metadata } from 'next';
import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'URL Decoder Online – Decode URL Encoded Strings',
  description: "Instantly decode percent-encoded URL strings back into human-readable text. Free developer tool for inspecting web links.",
  alternates: { canonical: 'https://tools2do.com/tools/url-encoder/url-decode-online' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"URL Decoder Online","description":"Instantly decode percent-encoded URL strings back into human-readable text. Free developer tool for inspecting web links.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/url-encoder/url-decode-online"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL Decoder Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly decode unreadable percent-encoded URLs (like %20 for space) back into normal text strings for easy inspection and debugging.</p>
      </div>
      <UrlEncoderDecoder />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Encoded String", description: "Input your string containing % symbols." }, { step: "Select Decode", description: "Ensure the tool is in decode mode." }, { step: "Read Text", description: "Copy the newly decoded human-readable text." }]}
        useCases={["Debugging query parameters on a redirecting URL.", "Translating an encoded foreign language search query.", "Inspecting tracking links in marketing emails."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/url-encoder/url-encode-online', name: 'URL Encoder', description: "Encode URLs for safety." }]}
      />
    </>
  );
}