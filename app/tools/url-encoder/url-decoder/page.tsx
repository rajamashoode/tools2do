import type { Metadata } from 'next';
import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'URL Decoder – Decode URL Encoded Strings Online',
  description: 'Easily decode percent-encoded URLs and strings back into readable text. Free, fast, and completely private browser-based tool.',
  alternates: { canonical: 'https://tools2do.com/tools/url-encoder/url-decoder' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"URL Decoder Online","description":"Easily decode percent-encoded URLs and strings back into readable text. Free, fast, and completely private browser-based tool.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/url-encoder/url-decoder"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL Decoder Online</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Translate unreadable percent-encoded URL strings (like %20 or %3F) back into normal text. Perfect for debugging complex web links.</p>
      </div>
      <UrlEncoderDecoder />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste URL', description: 'Enter the encoded URL or query string.' }, { step: 'Select Decode', description: 'Ensure the decode mode is active.' }, { step: 'View Output', description: 'Instantly view and copy the human-readable decoded URL.' }]}
        useCases={['Reading complex, messy tracking URLs to see where they lead.', 'Debugging API query parameters that failed to parse correctly.', 'Extracting plain text from deep-link URLs.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/url-encoder', name: 'URL Encoder', description: 'Encode normal text into a URL-safe format.' }, { href: '/tools/base64-encoder', name: 'Base64 Encoder', description: 'Encode strings into Base64 format.' }]}
      />
    </>
  );
}