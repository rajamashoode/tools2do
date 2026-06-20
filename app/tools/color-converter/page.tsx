import type { Metadata } from 'next';
import { ColorConverter } from '@/components/tools/ColorConverter';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Color Converter',
  description: 'Convert HEX to RGB and RGB to HEX with a color swatch.',
  alternates: { canonical: 'https://tools2do.com/tools/color-converter' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Color Converter',
  description: 'Convert HEX to RGB and RGB to HEX with a color swatch.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/color-converter',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Color Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert HEX to RGB and RGB to HEX with a color swatch.</p>
      </div>
      <ColorConverter />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Input color value', description: 'Enter a HEX code or RGB values in the text inputs.' },
          { step: 'View swatch', description: 'Look at the real-time color swatch showing the loaded shade.' },
          { step: 'Copy converted', description: 'Copy the computed HEX, RGB, or HSL conversions instantly.' }
        ]}
        useCases={[
          'Translating design mockup color codes between HEX and CSS RGB styles.',
          'Checking color representation values for layout stylings.',
          'Fine-tuning shade styling variants on websites.'
        ]}
        privacyNote='Color translation logic is calculated in your browser via local JavaScript.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/color-palette', name: 'Color Palette Picker', description: 'Browse Tailwind CSS color palettes.' },
          { href: '/tools/markdown-previewer', name: 'Markdown Previewer', description: 'Preview Markdown content with a live editor.' },
          { href: '/tools/html-formatter', name: 'HTML Formatter', description: 'Format or minify HTML markup.' }
        ]}
      />
</>
  );
}
