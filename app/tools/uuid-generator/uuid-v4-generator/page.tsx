import type { Metadata } from 'next';
import { UuidGenerator } from '@/components/tools/UuidGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'UUID v4 Generator – Generate Random UUIDs Online',
  description: 'Generate fully random, secure Version 4 UUIDs instantly. Create single or bulk UUIDs for your database or app development needs.',
  alternates: { canonical: 'https://tools2do.com/tools/uuid-generator/uuid-v4-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"UUID v4 Generator","description":"Generate fully random, secure Version 4 UUIDs instantly. Create single or bulk UUIDs for your database or app development needs.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/uuid-generator/uuid-v4-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">UUID v4 Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Instantly generate cryptographically secure Version 4 Universally Unique Identifiers (UUIDs). Generate thousands at once.</p>
      </div>
      <UuidGenerator />
      <ToolInfoSection
        howToSteps={[{ step: 'Select Version', description: 'Ensure the tool is set to generate v4 UUIDs.' }, { step: 'Set Quantity', description: 'Choose how many UUIDs you need generated.' }, { step: 'Generate', description: 'Click generate and copy the list of unique IDs.' }]}
        useCases={['Creating unique primary keys for database records.', 'Generating random session IDs for web applications.', 'Creating unique file names to avoid upload collisions.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/password-generator', name: 'Password Generator', description: 'Generate random secure passwords.' }]}
      />
    </>
  );
}