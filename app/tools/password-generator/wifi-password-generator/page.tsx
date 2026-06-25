import type { Metadata } from 'next';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'WiFi Password Generator – Create Secure Network Keys',
  description: "Generate highly secure, random WiFi passwords (WPA2/WPA3). Protect your home or business network from hackers.",
  alternates: { canonical: 'https://tools2do.com/tools/password-generator/wifi-password-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"WiFi Password Generator","description":"Generate highly secure, random WiFi passwords (WPA2/WPA3). Protect your home or business network from hackers.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/password-generator/wifi-password-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">WiFi Password Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Create a cryptographically strong, random password for your router. Keep your wireless network completely secure.</p>
      </div>
      <PasswordGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Set Length", description: "Choose a long length (we recommend 16+ characters)." }, { step: "Select Characters", description: "Ensure uppercase, lowercase, numbers, and symbols are checked." }, { step: "Copy Key", description: "Copy the generated password to configure your router." }]}
        useCases={["Setting up a secure WPA3 password for a new home router.", "Creating a temporary guest network password.", "Updating a compromised corporate WiFi password."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/password-generator/strong-password-generator', name: 'Strong Password Generator', description: "Create account passwords." }]}
      />
    </>
  );
}