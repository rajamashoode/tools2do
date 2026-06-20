import type { Metadata } from 'next';
import { UnitConverter } from '@/components/tools/UnitConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Unit Converter',
  description: 'Convert length, weight, temperature and volume units.',
  alternates: { canonical: 'https://tools2do.com/tools/unit-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Unit Converter',
  description: 'Convert length, weight, temperature and volume units.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/unit-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Unit Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert length, weight, temperature and volume units.</p>
      </div>
      <UnitConverter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Choose dimension', description: 'Select length, weight, temperature, or volume categories.' },
          { step: 'Input value', description: 'Type the numeric value you want to convert.' },
          { step: 'Read conversions', description: 'Instantly view conversions across multiple metric and imperial units.' }
        ]}
        useCases={[
          'Converting height or weight measurements between metric and imperial scales.',
          'Converting temperature values between Celsius, Fahrenheit, and Kelvin.',
          'Kitchen recipe measurements conversion for international recipes.'
        ]}
        privacyNote='Unit conversions are processed locally in your browser. No networks are queried.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/percentage-calculator', name: 'Percentage Calculator', description: 'Calculate percentages, increases and decreases.' },
          { href: '/tools/age-calculator', name: 'Age Calculator', description: 'Calculate exact age in years, months and days.' },
          { href: '/tools/timestamp-converter', name: 'Timestamp Converter', description: 'Convert Unix timestamps.' }
        ]}
      />
</>
  );
}
