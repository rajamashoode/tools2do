import type { Metadata } from 'next';
import { TimestampConverter } from '@/components/tools/TimestampConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Timestamp Converter',
  description: 'Convert Unix timestamps to dates and back.',
  alternates: { canonical: 'https://tools2do.com/tools/timestamp-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Timestamp Converter',
  description: 'Convert Unix timestamps to dates and back.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/timestamp-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Timestamp Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert Unix timestamps to dates and back.</p>
      </div>
      <TimestampConverter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Input value', description: 'Paste a Unix epoch timestamp (seconds or milliseconds) or pick a local calendar date.' },
          { step: 'Convert', description: 'Click to translate the timestamp to human-readable date formats and ISO strings.' },
          { step: 'Copy format', description: 'Copy your chosen format (UTC, Local, ISO, epoch) for use in databases or logs.' }
        ]}
        useCases={[
          'Translating database epoch timestamps to human dates for log auditing.',
          'Converting specific calendar dates to Unix timestamps for backend configs.',
          'Troubleshooting API date parameter formats (RFC 2822, ISO 8601).'
        ]}
        privacyNote='Calculations run client-side. No calendar date data or timestamps are logged.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/age-calculator', name: 'Age Calculator', description: 'Calculate exact age from date of birth.' },
          { href: '/tools/unit-converter', name: 'Unit Converter', description: 'Convert length, weight, temperature and volume units.' },
          { href: '/tools/percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages, increases and decreases.' }
        ]}
      />
</>
  );
}
