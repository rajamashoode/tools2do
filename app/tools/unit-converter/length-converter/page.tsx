import type { Metadata } from 'next';
import { UnitConverter } from '@/components/tools/UnitConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Length Converter – Convert Meters, Feet, and Inches',
  description: "Easily convert between meters, centimeters, feet, inches, miles, and kilometers. Free online unit conversion tool.",
  alternates: { canonical: 'https://tools2do.com/tools/unit-converter/length-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Length Converter","description":"Easily convert between meters, centimeters, feet, inches, miles, and kilometers. Free online unit conversion tool.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/unit-converter/length-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Length Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Instantly translate measurements between the metric system and imperial system. Accurate and simple to use.</p>
      </div>
      <UnitConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Select Units", description: "Choose the length category and specify your starting and target units." }, { step: "Enter Value", description: "Input the number you wish to convert." }, { step: "Read Result", description: "Instantly view the mathematically accurate conversion." }]}
        useCases={["Converting a person's height from centimeters to feet and inches.", "Translating driving distances from miles to kilometers.", "Calculating fabric measurements for a sewing project."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/unit-converter/weight-converter', name: 'Weight Converter', description: "Convert pounds, kilograms, and ounces." }]}
      />
    </>
  );
}