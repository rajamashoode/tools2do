import type { Metadata } from 'next';
import { UnitConverter } from '@/components/tools/UnitConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Temperature Converter – Celsius, Fahrenheit, Kelvin',
  description: "Instantly convert temperatures between Celsius, Fahrenheit, and Kelvin. Free online temperature conversion calculator.",
  alternates: { canonical: 'https://tools2do.com/tools/unit-converter/temperature-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Temperature Converter","description":"Instantly convert temperatures between Celsius, Fahrenheit, and Kelvin. Free online temperature conversion calculator.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/unit-converter/temperature-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Temperature Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly translate weather forecasts and cooking temperatures between global standard units.</p>
      </div>
      <UnitConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Select Mode", description: "Change the conversion category to temperature." }, { step: "Input Degrees", description: "Type in your starting temperature." }, { step: "View Output", description: "Read the exact converted temperature instantly." }]}
        useCases={["Converting an oven baking temperature from Fahrenheit to Celsius.", "Understanding a foreign weather forecast.", "Calculating scientific lab temperatures into Kelvin."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/unit-converter/length-converter', name: 'Length Converter', description: "Convert distance and length." }]}
      />
    </>
  );
}