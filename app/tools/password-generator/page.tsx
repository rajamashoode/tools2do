import type { Metadata } from 'next';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Password Generator – Create Strong Passwords Online',
  description: 'Use Tools2Do\'s secure offline Password Generator to create strong random passwords. Select length, capital letters, numbers, and symbols.',
  alternates: { canonical: 'https://tools2do.com/tools/password-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Secure Password Generator',
  description: 'Free offline random password generator utilizing secure browser crypto APIs.',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/password-generator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Password Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate strong random passwords with crypto.getRandomValues.</p>
      </div>
      <PasswordGenerator />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Select options', description: 'Choose password length and which character sets (uppercase, lowercase, numbers, symbols) to include.' },
          { step: 'Generate', description: "Click 'Generate Password' to create random combinations instantly." },
          { step: 'Copy', description: "Click 'Copy' to save the strong password to your clipboard." }
        ]}
        useCases={[
          'Creating strong, unguessable credentials for new online accounts.',
          'Generating secure API tokens, secret keys, or passphrases.',
          'Updating outdated weak passwords to high-entropy random strings.'
        ]}
        privacyNote='Passwords are generated locally in your browser using the secure Web Cryptography API. They are never sent over the network.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/uuid-generator', name: 'UUID Generator', description: 'Generate v4 UUIDs locally.' },
          { href: '/tools/slug-generator', name: 'Slug Generator', description: 'Generate clean URL slugs from any title or phrase.' },
          { href: '/tools/base64', name: 'Base64 Encoder Decoder', description: 'Encode and decode Base64 strings.' }
        ]}
      />
</>
  );
}
