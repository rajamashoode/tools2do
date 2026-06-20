import type { Metadata } from 'next';
import { UuidGenerator } from '@/components/tools/UuidGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'UUID Generator',
  description: 'Generate v4 UUIDs locally for apps, databases and tests.',
  alternates: { canonical: 'https://tools2do.com/tools/uuid-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'UUID Generator',
  description: 'Generate v4 UUIDs locally for apps, databases and tests.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/uuid-generator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">UUID Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate v4 UUIDs locally for apps, databases and tests.</p>
      </div>
      <UuidGenerator />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Select count', description: 'Choose how many UUIDs you want to generate in a single batch.' },
          { step: 'Choose format', description: 'Configure options like uppercase, lowercase, or brackets.' },
          { step: 'Generate and copy', description: "Click 'Generate' to fetch secure v4 UUIDs, and click to copy results." }
        ]}
        useCases={[
          'Creating unique identifiers for database records or user sessions.',
          'Mocking unique transaction keys or tokens during software testing.',
          'Generating random hardware or network identifiers.'
        ]}
        privacyNote='UUIDs are generated using cryptographic random values locally. No remote API call is made.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/password-generator', name: 'Password Generator', description: 'Generate strong random passwords.' },
          { href: '/tools/slug-generator', name: 'Slug Generator', description: 'Generate clean URL slugs from titles.' },
          { href: '/tools/base64', name: 'Base64 Encoder Decoder', description: 'Encode and decode Base64 strings.' }
        ]}
      />
</>
  );
}
