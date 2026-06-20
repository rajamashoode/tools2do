import type { Metadata } from 'next';
import { UrlEncoderDecoder } from '@/components/tools/UrlEncoderDecoder';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'URL Encoder / Decoder',
  description: 'Encode and decode URL components safely in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/url-encoder' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'URL Encoder / Decoder',
  description: 'Encode and decode URL components safely in your browser.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/url-encoder',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL Encoder / Decoder</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Encode and decode URL components safely in your browser.</p>
      </div>
      <UrlEncoderDecoder />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Input URL/text', description: 'Paste your raw URL query or address into the input editor.' },
          { step: 'Encode or decode', description: "Click 'Encode' to format special characters, or 'Decode' to make the URL readable." },
          { step: 'Copy output', description: 'Copy the formatted target to use in query parameters or config links.' }
        ]}
        useCases={[
          'Escaping unsafe query string characters for HTTP requests and API routing.',
          'Making highly encoded URL parameters readable for manual review.',
          'Resolving URL link routing glitches by converting special characters.'
        ]}
        privacyNote='All URL transformations run in your browser. Your URLs are never tracked or saved.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/base64', name: 'Base64 Encoder Decoder', description: 'Encode and decode Base64 strings.' },
          { href: '/tools/json-formatter', name: 'JSON Formatter & Validator', description: 'Format, validate, minify and inspect JSON.' },
          { href: '/tools/slug-generator', name: 'Slug Generator', description: 'Generate clean URL slugs from titles.' }
        ]}
      />
</>
  );
}
