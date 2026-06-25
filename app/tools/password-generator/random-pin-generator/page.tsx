import type { Metadata } from 'next';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Random PIN Generator – Generate 4-Digit or 6-Digit PINs',
  description: 'Generate secure, random numeric PIN codes. Create 4-digit, 6-digit, or 8-digit PINs instantly in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/password-generator/random-pin-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Random PIN Generator","description":"Generate secure, random numeric PIN codes. Create 4-digit, 6-digit, or 8-digit PINs instantly in your browser.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/password-generator/random-pin-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Random PIN Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Need a random numeric code? Generate secure PINs for devices, temporary locks, or verification codes instantly.</p>
      </div>
      <PasswordGenerator />
      <ToolInfoSection
        howToSteps={[{ step: 'Select Numbers Only', description: 'Uncheck letters and symbols so only numbers remain.' }, { step: 'Set PIN Length', description: 'Set the length to 4, 6, or your desired number of digits.' }, { step: 'Generate PIN', description: 'Click generate to get your random numeric sequence.' }]}
        useCases={['Generating a secure 4-digit passcode for a physical padlock or smartphone.', 'Creating a random 6-digit 2FA backup code.', 'Generating random numeric IDs for testing purposes.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/password-generator', name: 'Password Generator', description: 'Generate full alphanumeric passwords.' }]}
      />
    </>
  );
}