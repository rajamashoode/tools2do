import type { Metadata } from 'next';
import { UnitConverter } from '@/components/tools/UnitConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Weight Converter – Convert Kilograms to Pounds',
  description: "Convert between kilograms, grams, pounds, and ounces instantly. Accurate, free, and easy-to-use online weight converter.",
  alternates: { canonical: 'https://tools2do.com/tools/unit-converter/weight-converter' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Weight Converter","description":"Convert between kilograms, grams, pounds, and ounces instantly. Accurate, free, and easy-to-use online weight converter.","applicationCategory":"WebApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/unit-converter/weight-converter"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Weight Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Translate weight measurements between metric and imperial units. Perfect for cooking, fitness, and shipping calculations.</p>
      </div>
      <UnitConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Choose Weight", description: "Select the weight or mass category." }, { step: "Input Values", description: "Enter the amount in your starting unit." }, { step: "Get Conversion", description: "Instantly see the exact equivalent in your target unit." }]}
        useCases={["Converting a baking recipe from grams to ounces.", "Tracking gym progress by converting kilograms to pounds.", "Calculating package shipping weight limits."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/unit-converter/length-converter', name: 'Length Converter', description: "Convert distances and lengths." }]}
      />
    </>
  );
}