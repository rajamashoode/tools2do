import type { Metadata } from 'next';
import { ColorPalettePicker } from '@/components/tools/ColorPalettePicker';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Random Color Generator – Discover Unique Hex Codes',
  description: "Generate beautiful random colors and palettes instantly. Copy HEX, RGB, and HSL values for your next design project.",
  alternates: { canonical: 'https://tools2do.com/tools/color-palette-generator/random-color-generator' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"Random Color Generator","description":"Generate beautiful random colors and palettes instantly. Copy HEX, RGB, and HSL values for your next design project.","applicationCategory":"DesignApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/color-palette-generator/random-color-generator"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Random Color Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Hit the spacebar to generate random colors. Get inspired for your next web design, logo, or graphic art project.</p>
      </div>
      <ColorPalettePicker />
      <ToolInfoSection
        howToSteps={[{ step: "Generate", description: "Click generate or press spacebar to create a new color." }, { step: "Review Palette", description: "Explore matching tints, shades, and complementary colors." }, { step: "Copy Codes", description: "Click any color to copy its HEX code instantly." }]}
        useCases={["Finding inspiration for a new website theme.", "Picking random distinct colors for data visualization charts.", "Brainstorming logo color schemes."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/color-converter', name: 'Color Converter', description: "Convert between color formats." }]}
      />
    </>
  );
}