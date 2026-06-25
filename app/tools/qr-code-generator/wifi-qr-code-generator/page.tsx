import type { Metadata } from 'next';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'WiFi QR Code Generator – Share Network Access Easily',
  description: 'Create a QR code that automatically connects guests to your WiFi network when scanned. Free and secure browser-based tool.',
  alternates: { canonical: 'https://tools2do.com/tools/qr-code-generator/wifi-qr-code-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"WiFi QR Code Generator","description":"Create a QR code that automatically connects guests to your WiFi network when scanned. Free and secure browser-based tool.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/qr-code-generator/wifi-qr-code-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">WiFi QR Code Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Stop giving out your long WiFi password. Generate a secure QR code that your guests can scan to connect instantly.</p>
      </div>
      <QrCodeGenerator />
      <ToolInfoSection
        howToSteps={[{ step: 'Format Text', description: 'Format your WiFi details as: WIFI:S:NetworkName;T:WPA;P:Password;;' }, { step: 'Generate Code', description: 'The tool will instantly generate the connection QR code.' }, { step: 'Print and Share', description: 'Download and print the QR code to place in your home or cafe.' }]}
        useCases={['Creating a convenient WiFi access point for a cafe or restaurant.', 'Setting up a guest network sign-in card for your home.', 'Providing quick internet access in a corporate waiting room.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/password-generator', name: 'Password Generator', description: 'Create a strong WiFi password.' }]}
      />
    </>
  );
}