import type { Metadata } from 'next';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';

export const metadata: Metadata = {
  title: 'QR Code Generator',
  description: 'Generate QR codes for URLs, text and contacts.',
  alternates: { canonical: 'https://tools2do.com/tools/qr-code-generator' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">QR Code Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate QR codes for URLs, text and contacts.</p>
      </div>
      <QrCodeGenerator />
    </>
  );
}
