import type { Metadata } from 'next';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'QR Code Generator',
  description: 'Generate QR codes for URLs, text and contacts.',
  alternates: { canonical: 'https://tools2do.com/tools/qr-code-generator' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'QR Code Generator',
  description: 'Generate QR codes for URLs, text and contacts.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/qr-code-generator',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">QR Code Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate QR codes for URLs, text and contacts.</p>
      </div>
      <QrCodeGenerator />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Enter input', description: 'Enter the URL, plain text, or contact info you want encoded.' },
          { step: 'Generate', description: 'Click generate to create the high-resolution QR image.' },
          { step: 'Download', description: "Click 'Download QR' or save the image file to share." }
        ]}
        useCases={[
          'Creating scan codes for websites, menus, or posters.',
          'Sharing Wi-Fi connection configurations or contact cards.',
          'Adding scan links on print documents for easy mobile access.'
        ]}
        privacyNote='QR codes are generated via the QR Server API. Your input text is sent to their server. Do not enter confidential information.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/url-encoder', name: 'URL Encoder Decoder', description: 'Encode or decode URL components.' },
          { href: '/tools/slug-generator', name: 'Slug Generator', description: 'Generate clean URL slugs from titles.' },
          { href: '/tools/base64', name: 'Base64 Encoder Decoder', description: 'Encode and decode Base64 strings.' }
        ]}
      />
</>
  );
}
