import type { Metadata } from 'next';
import { ColorConverter } from '@/components/tools/ColorConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'RGB to HEX Converter – Convert RGB to Web Colors',
  description: "Convert RGB values to web-safe HEX codes online. Fast, free, and accurate color converter for web development.",
  alternates: { canonical: 'https://tools2do.com/tools/color-converter/rgb-to-hex' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"RGB to HEX Converter","description":"Convert RGB values to web-safe HEX codes online. Fast, free, and accurate color converter for web development.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/color-converter/rgb-to-hex"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">RGB to HEX Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Turn RGB color values into standard 6-digit HEX codes. Essential for HTML and CSS web development.</p>
      </div>
      <ColorConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Input RGB", description: "Enter the Red, Green, and Blue values." }, { step: "Convert", description: "Instantly see the HEX equivalent." }, { step: "Copy HEX", description: "Click to copy the HEX string for your CSS." }]}
        useCases={["Translating digital screen RGB colors to web stylesheets.", "Extracting HEX codes from image color picker tools.", "Standardizing UI color tokens."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/color-converter/hex-to-rgb', name: 'HEX to RGB Converter', description: "Convert HEX to RGB." }]}
      />
    </>
  );
}