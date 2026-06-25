import type { Metadata } from 'next';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Email QR Code Generator – Create Scannable Emails',
  description: "Generate a QR code that instantly drafts an email when scanned. Prefill the recipient, subject, and body online.",
  alternates: { canonical: 'https://tools2do.com/tools/qr-code-generator/email-qr-code-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Email QR Code Generator","description":"Generate a QR code that instantly drafts an email when scanned. Prefill the recipient, subject, and body online.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/qr-code-generator/email-qr-code-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Email QR Code Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Make it incredibly easy for customers to contact you. Create a QR code that automatically opens their email app with your address pre-filled.</p>
      </div>
      <QrCodeGenerator />
      <ToolInfoSection
        howToSteps={[{ step: "Format Address", description: "Format the text as: mailto:your@email.com?subject=Hello" }, { step: "Customize", description: "Change the color of the QR code." }, { step: "Download", description: "Save the image and place it on your marketing materials." }]}
        useCases={["Putting a contact QR code on a business card.", "Adding an easy support email link to a printed manual.", "Allowing event attendees to quickly email RSVP confirmations."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/qr-code-generator/url-qr-code-generator', name: 'URL QR Code Generator', description: "Create link QR codes." }]}
      />
    </>
  );
}