import type { Metadata } from 'next';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Strong Password Generator – Create Secure Passwords Online',
  description: 'Generate highly secure, random strong passwords with symbols, numbers, and mixed casing. Your passwords are never saved or sent to a server.',
  alternates: { canonical: 'https://tools2do.com/tools/password-generator/strong-password-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Strong Password Generator","description":"Generate highly secure, random strong passwords with symbols, numbers, and mixed casing. Your passwords are never saved or sent to a server.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/password-generator/strong-password-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Strong Password Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Create uncrackable, complex passwords to secure your online accounts. Our tool generates passwords locally on your device for maximum security.</p>
      </div>
      <PasswordGenerator />
      <ToolInfoSection
        howToSteps={[{ step: 'Set Length', description: 'Choose a long password length (we recommend 16+ characters).' }, { step: 'Include Symbols', description: 'Ensure uppercase, lowercase, numbers, and symbols are all checked.' }, { step: 'Copy Password', description: 'Click generate and copy the password directly to your password manager.' }]}
        useCases={['Creating strong master passwords for password managers like Bitwarden or 1Password.', 'Securing sensitive banking or cryptocurrency exchange accounts.', 'Generating unique passwords for database root users.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/password-generator', name: 'Password Generator', description: 'Customizable random password generator.' }, { href: '/tools/uuid-generator', name: 'UUID Generator', description: 'Generate random UUID strings.' }]}
      />
    </>
  );
}