import type { Metadata } from 'next';
import { Base64Tool } from '@/components/tools/Base64Tool';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Base64 Encoder / Decoder',
  description: 'Encode and decode Base64 strings instantly in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/base64' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Base64 Encoder / Decoder',
  description: 'Encode and decode Base64 strings instantly in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/base64',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Base64 Encoder / Decoder</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Encode and decode Base64 strings instantly in your browser.</p>
      </div>
      <Base64Tool />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Input string', description: 'Paste or type the text you wish to process into the input box.' },
          { step: 'Encode or decode', description: "Click 'Encode' to generate Base64 strings, or 'Decode' to restore the original text." },
          { step: 'Copy', description: 'Copy the processed output instantly to your clipboard.' }
        ]}
        useCases={[
          'Encoding binary payloads or string headers for email transmissions.',
          'Decoding Base64-encoded strings found in scripts, emails, or APIs.',
          'Preparing simple data URI schemes or basic obfuscation.'
        ]}
        privacyNote='All encoding and decoding process is completed locally. No text is uploaded to any server.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/url-encoder', name: 'URL Encoder Decoder', description: 'Encode or decode URL components.' },
          { href: '/tools/json-formatter', name: 'JSON Formatter & Validator', description: 'Format, validate, minify and inspect JSON.' },
          { href: '/tools/password-generator', name: 'Password Generator', description: 'Generate strong random passwords.' }
        ]}
      />
</>
  );
}
