import type { Metadata } from 'next';
import { Base64Tool } from '@/components/tools/Base64Tool';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Base64 Decoder – Decode Base64 to Text Online',
  description: 'Decode Base64 strings back into readable plain text. Fast, free, and secure online Base64 decoding tool.',
  alternates: { canonical: 'https://tools2do.com/tools/base64-encoder/base64-decode-string' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Base64 Decoder","description":"Decode Base64 strings back into readable plain text. Fast, free, and secure online Base64 decoding tool.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/base64-encoder/base64-decode-string"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Base64 Decoder</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Easily convert Base64 encoded data back into its original text format. All processing is done securely in your browser.</p>
      </div>
      <Base64Tool />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Base64', description: 'Input your Base64 encoded string into the text area.' }, { step: 'Select Decode', description: 'Ensure the tool is set to decode mode.' }, { step: 'Read Text', description: 'The original plain text will instantly appear for you to copy.' }]}
        useCases={['Decoding hidden messages or encoded URLs.', 'Extracting plain text from email headers.', 'Debugging encoded API responses.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/base64-encoder/base64-encode-string', name: 'Base64 Encoder', description: 'Encode text into Base64.' }]}
      />
    </>
  );
}