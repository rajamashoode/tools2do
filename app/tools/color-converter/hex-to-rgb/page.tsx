import type { Metadata } from 'next';
import { ColorConverter } from '@/components/tools/ColorConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'HEX to RGB Converter – Convert Color Codes Online',
  description: "Easily convert HEX color codes to RGB values online. Free developer tool for web designers and frontend engineers.",
  alternates: { canonical: 'https://tools2do.com/tools/color-converter/hex-to-rgb' },
};

const jsonLd = {"@context":"https://schema.org","@type":"WebApplication","name":"HEX to RGB Converter","description":"Easily convert HEX color codes to RGB values online. Free developer tool for web designers and frontend engineers.","applicationCategory":"DeveloperApplication","operatingSystem":"Web Browser","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"url":"https://tools2do.com/tools/color-converter/hex-to-rgb"};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">HEX to RGB Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Quickly translate web HEX colors (like #FFFFFF) into RGB format (255, 255, 255). Perfect for CSS formatting and UI design.</p>
      </div>
      <ColorConverter />
      <ToolInfoSection
        howToSteps={[{ step: "Enter HEX", description: "Type or paste your 6-digit HEX code." }, { step: "View RGB", description: "The tool instantly translates it to RGB." }, { step: "Copy Value", description: "Copy the CSS-ready RGB string to your clipboard." }]}
        useCases={["Converting brand color guidelines into usable CSS variables.", "Translating HEX values for graphic design software like Photoshop.", "Debugging inconsistent colors across stylesheets."]}
        privacyNote="All processing is executed locally using your browser. Your data is never sent to a server."
      />
      <RelatedTools
        tools={[{ href: '/tools/color-converter/rgb-to-hex', name: 'RGB to HEX Converter', description: "Convert RGB to HEX." }, { href: '/tools/color-palette-generator', name: 'Color Palette Generator', description: "Generate harmonious color schemes." }]}
      />
    </>
  );
}