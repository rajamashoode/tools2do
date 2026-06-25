import type { Metadata } from 'next';
import { UuidGenerator } from '@/components/tools/UuidGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Bulk GUID Generator – Generate Multiple GUIDs Online',
  description: 'Generate multiple GUIDs (Globally Unique Identifiers) at once. Free, fast, and secure developer tool for C# and Windows environments.',
  alternates: { canonical: 'https://tools2do.com/tools/uuid-generator/guid-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Bulk GUID Generator","description":"Generate multiple GUIDs (Globally Unique Identifiers) at once. Free, fast, and secure developer tool for C# and Windows environments.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/uuid-generator/guid-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Bulk GUID Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly generate batches of GUIDs for your Microsoft/C# development projects. Copy them instantly with a single click.</p>
      </div>
      <UuidGenerator />
      <ToolInfoSection
        howToSteps={[{ step: 'Enter Amount', description: 'Specify the number of GUIDs you wish to generate (e.g., 100).' }, { step: 'Generate Batch', description: 'Click the generate button to create your bulk list.' }, { step: 'Copy All', description: 'Use the copy button to grab the entire list at once.' }]}
        useCases={['Generating bulk IDs for testing a database seed script.', 'Creating unique identifiers for Microsoft COM components.', 'Populating sample data for C# application testing.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/uuid-generator/uuid-v4-generator', name: 'UUID v4 Generator', description: 'Generate standard UUIDs.' }]}
      />
    </>
  );
}