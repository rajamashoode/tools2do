import type { Metadata } from 'next';
import { TimestampConverter } from '@/components/tools/TimestampConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Unix Epoch Converter – Convert Timestamp to Date',
  description: 'Convert Unix epoch timestamps to human-readable dates and vice-versa. Free tool for developers dealing with server times.',
  alternates: { canonical: 'https://tools2do.com/tools/timestamp-converter/unix-epoch-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Unix Epoch Converter","description":"Convert Unix epoch timestamps to human-readable dates and vice-versa. Free tool for developers dealing with server times.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/timestamp-converter/unix-epoch-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Unix Epoch Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly translate standard 10-digit or 13-digit Unix timestamps into your local timezone. A must-have tool for debugging API dates.</p>
      </div>
      <TimestampConverter />
      <ToolInfoSection
        howToSteps={[{ step: 'Enter Epoch', description: 'Paste the Unix timestamp (seconds or milliseconds).' }, { step: 'View Date', description: 'The tool instantly parses it into GMT and your local timezone.' }, { step: 'Format Date', description: 'Copy the human-readable date string.' }]}
        useCases={['Debugging database records that store time as integers.', 'Verifying the expiration time of a JWT token.', 'Translating server logs into a readable format.']}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/timestamp-converter', name: 'Timestamp Converter', description: 'General date and time tools.' }]}
      />
    </>
  );
}