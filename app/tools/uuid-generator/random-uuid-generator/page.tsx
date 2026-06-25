import type { Metadata } from 'next';
import { UuidGenerator } from '@/components/tools/UuidGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Random UUID Generator – Create Secure Identifiers',
  description: "Generate fully random UUIDs (Universally Unique Identifiers). 100% free, secure, and instant developer ID tool.",
  alternates: { canonical: 'https://tools2do.com/tools/uuid-generator/random-uuid-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Random UUID Generator","description":"Generate fully random UUIDs (Universally Unique Identifiers). 100% free, secure, and instant developer ID tool.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/uuid-generator/random-uuid-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Random UUID Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate cryptographic-quality random UUIDs for your software projects, database keys, or secure tokens.</p>
      </div>
      <UuidGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Set Type", description: "Select the standard UUID v4 format." }, { step: "Generate", description: "Click the button to create a new unique identifier." }, { step: "Implement", description: "Copy the ID and use it as a primary key or session token." }]}
        useCases={["Assigning unique tracking IDs to anonymous users.", "Creating complex, unguessable file names for a cloud storage bucket.", "Populating a mock database with realistic unique keys."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/uuid-generator/uuid-v4-generator', name: 'UUID v4', description: "Generate Version 4 UUIDs." }]}
      />
    </>
  );
}