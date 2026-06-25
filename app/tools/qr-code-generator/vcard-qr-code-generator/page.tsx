import type { Metadata } from 'next';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'vCard QR Code Generator – Share Contact Info Instantly',
  description: "Create a vCard QR code to share your contact information. Scanners can instantly save your name, phone, and email to their contacts.",
  alternates: { canonical: 'https://tools2do.com/tools/qr-code-generator/vcard-qr-code-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"vCard QR Code Generator","description":"Create a vCard QR code to share your contact information. Scanners can instantly save your name, phone, and email to their contacts.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/qr-code-generator/vcard-qr-code-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">vCard QR Code Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Modernize your networking. Generate a QR code that instantly adds your comprehensive contact details directly into someone&apos;s phonebook.</p>
      </div>
      <QrCodeGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Create vCard String", description: "Format your details into standard vCard format." }, { step: "Paste Text", description: "Input the string into the generator." }, { step: "Export Code", description: "Download the high-resolution QR image." }]}
        useCases={["Printing modern, digital-first business cards.", "Displaying a contact QR code at a conference booth.", "Adding contact details to real estate yard signs."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/qr-code-generator/wifi-qr-code-generator', name: 'WiFi QR Code Generator', description: "Share network access." }]}
      />
    </>
  );
}