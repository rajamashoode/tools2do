import type { Metadata } from 'next';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Secure Password Maker – Generate Safe Passwords',
  description: "Create uncrackable, safe passwords instantly. Free online secure password maker for all your online accounts.",
  alternates: { canonical: 'https://tools2do.com/tools/password-generator/secure-password-maker' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Secure Password Maker","description":"Create uncrackable, safe passwords instantly. Free online secure password maker for all your online accounts.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/password-generator/secure-password-maker"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Secure Password Maker</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate a password that is impossible for hackers to guess. Customize the length and character sets to meet any website&apos;s requirements.</p>
      </div>
      <PasswordGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Adjust Complexity", description: "Enable symbols and numbers." }, { step: "Generate", description: "Click the button to create a new secure password." }, { step: "Save securely", description: "Copy it directly into your password manager." }]}
        useCases={["Creating a master password for a password management app.", "Generating a secure credential for a sensitive banking login.", "Updating weak, reused passwords across older accounts."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/password-generator/random-pin-generator', name: 'Random PIN Generator', description: "Generate numeric pins." }]}
      />
    </>
  );
}