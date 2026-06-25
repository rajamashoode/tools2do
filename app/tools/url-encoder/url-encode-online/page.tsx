import type { Metadata } from 'next';
import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'URL Encoder Online – Encode Special Characters',
  description: "Encode text, spaces, and special characters into URL-safe formats instantly. Free browser-based URL encode tool.",
  alternates: { canonical: 'https://tools2do.com/tools/url-encoder/url-encode-online' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"URL Encoder Online","description":"Encode text, spaces, and special characters into URL-safe formats instantly. Free browser-based URL encode tool.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/url-encoder/url-encode-online"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL Encoder Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Transform raw text strings into a percent-encoded format so they can be safely transmitted as a web URL or query parameter.</p>
      </div>
      <UrlEncoderDecoder />
      <ToolInfoSection
        howToSteps={[{ step: "Type String", description: "Enter the raw text or complex string." }, { step: "Select Encode", description: "Ensure encode mode is activated." }, { step: "Copy URL", description: "Save the percent-encoded string." }]}
        useCases={["Encoding a full sentence to append it to a WhatsApp share link.", "Formatting spaces (as %20) for an API GET request.", "Ensuring ampersands do not break a complex redirect URL."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/url-encoder/url-decoder', name: 'URL Decoder', description: "Decode percent-encoded strings." }]}
      />
    </>
  );
}