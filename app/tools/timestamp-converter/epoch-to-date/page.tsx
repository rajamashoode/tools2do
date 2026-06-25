import type { Metadata } from 'next';
import { TimestampConverter } from '@/components/tools/TimestampConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Epoch to Date Converter – Convert Timestamps',
  description: "Convert Unix epoch timestamps to human readable dates instantly. Free online developer tool for time debugging.",
  alternates: { canonical: 'https://tools2do.com/tools/timestamp-converter/epoch-to-date' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Epoch to Date Converter","description":"Convert Unix epoch timestamps to human readable dates instantly. Free online developer tool for time debugging.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/timestamp-converter/epoch-to-date"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Epoch to Date Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Translate 10-digit (seconds) or 13-digit (milliseconds) epoch timestamps into readable local time and UTC formats.</p>
      </div>
      <TimestampConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Paste Timestamp", description: "Input the epoch integer." }, { step: "Process", description: "The tool automatically detects if it is in seconds or milliseconds." }, { step: "View Date", description: "Copy the parsed standard date format." }]}
        useCases={["Debugging server logs that only record time in epoch seconds.", "Verifying the \"exp\" (expiration) claim in a decoded JWT token.", "Converting API response times into user-friendly UI strings."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/timestamp-converter', name: 'Timestamp Converter', description: "General time tools." }]}
      />
    </>
  );
}