import type { Metadata } from 'next';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Random String Generator – Generate Random Text',
  description: "Generate fully random strings of text, letters, and numbers. Perfect for tokens, hashes, and dummy data generation.",
  alternates: { canonical: 'https://tools2do.com/tools/password-generator/random-string-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Random String Generator","description":"Generate fully random strings of text, letters, and numbers. Perfect for tokens, hashes, and dummy data generation.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/password-generator/random-string-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Random String Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Instantly generate random alphanumeric strings. Customize the exact length and character sets required for your project.</p>
      </div>
      <PasswordGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Define Length", description: "Set exactly how many characters long the string should be." }, { step: "Toggle Characters", description: "Turn off symbols if you only want alphanumeric outputs." }, { step: "Generate", description: "Click to create a new unique random string." }]}
        useCases={["Creating a unique API key or client secret for a web application.", "Generating a random referral code string (e.g. 8 uppercase letters).", "Creating a non-sequential order ID for an ecommerce platform."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/uuid-generator/random-uuid-generator', name: 'Random UUID', description: "Generate UUID identifiers." }]}
      />
    </>
  );
}