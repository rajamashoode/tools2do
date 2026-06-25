import type { Metadata } from 'next';
import { Base64Tool } from '@/components/tools/Base64Tool';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Base64 Encoder – Encode Text to Base64 Online',
  description: 'Free online tool to encode any text or string to Base64 format instantly. Secure, private, and processes entirely in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/base64-encoder/base64-encode-string' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Base64 Encoder","description":"Free online tool to encode any text or string to Base64 format instantly. Secure, private, and processes entirely in your browser.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/base64-encoder/base64-encode-string"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Base64 Encoder</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert standard text or code strings into Base64 encoded format. Essential for embedding data or preparing strings for APIs.</p>
      </div>
      <Base64Tool />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Text', description: 'Enter the plain text or string you want to encode.' }, { step: 'Select Encode', description: 'Ensure the tool is set to encode mode.' }, { step: 'Copy Base64', description: 'Instantly copy the resulting Base64 output.' }]}
        useCases={['Encoding credentials for basic HTTP authentication.', 'Converting text strings to safely embed them in URLs.', 'Encoding JSON payloads for JWT tokens.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/base64-encoder/base64-decode-string', name: 'Base64 Decoder', description: 'Decode Base64 back to text.' }, { href: '/tools/url-encoder', name: 'URL Encoder', description: 'Encode text for URLs.' }]}
      />
    </>
  );
}