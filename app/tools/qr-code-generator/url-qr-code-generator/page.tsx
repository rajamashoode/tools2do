import type { Metadata } from 'next';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'URL QR Code Generator – Create QR Codes for Links',
  description: 'Generate high-quality QR codes for any URL or website link. Free, private, and customizable browser-based QR generator.',
  alternates: { canonical: 'https://tools2do.com/tools/qr-code-generator/url-qr-code-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"URL QR Code Generator","description":"Generate high-quality QR codes for any URL or website link. Free, private, and customizable browser-based QR generator.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/qr-code-generator/url-qr-code-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">URL QR Code Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly create a scannable QR code for your website, social media profile, or YouTube video. Works instantly without server uploads.</p>
      </div>
      <QrCodeGenerator />
      <ToolInfoSection
        howToSteps={[{ step: 'Paste Link', description: 'Type or paste the full URL (including https://) into the text box.' }, { step: 'Customize Color', description: 'Change the foreground and background colors to match your brand.' }, { step: 'Download Image', description: 'Save the generated QR code as a high-resolution PNG image.' }]}
        useCases={['Creating a QR code for a restaurant menu link.', 'Putting a scannable link to a portfolio on a printed resume.', 'Generating a quick link to a promotional landing page for flyers.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/qr-code-generator/wifi-qr-code-generator', name: 'WiFi QR Code Generator', description: 'Create QR codes to share WiFi.' }]}
      />
    </>
  );
}