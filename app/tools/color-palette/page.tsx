import type { Metadata } from 'next';
import { ColorPalettePicker } from '@/components/tools/ColorPalettePicker';
import { ToolInfoSection } from '@/components/ToolInfoSection';
import { RelatedTools } from '@/components/RelatedTools';

export const metadata: Metadata = {
  title: 'Color Palette Picker',
  description: 'Browse Tailwind CSS color palettes, pick custom colors, and copy HEX or RGB values.',
  alternates: { canonical: 'https://tools2do.com/tools/color-palette' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Color Palette Picker',
  description: 'Browse Tailwind CSS color palettes, pick custom colors, and copy HEX or RGB values.',
  applicationCategory: 'WebApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://tools2do.com/tools/color-palette',
};

export default function Page(): React.ReactElement {
  return (
    <>
      <script id="tool-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Color Palette Picker</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Browse Tailwind CSS color palettes, pick custom colors, and copy HEX or RGB values.</p>
      </div>
      <ColorPalettePicker />
    
      <ToolInfoSection
        howToSteps={[
          { step: 'Browse colors', description: 'Scroll through standard Tailwind CSS color palettes from 50 to 950 weights.' },
          { step: 'Copy code', description: 'Click any color square to copy its HEX value instantly.' },
          { step: 'Use in project', description: 'Paste values directly into your Tailwind configurations or CSS sheets.' }
        ]}
        useCases={[
          'Finding specific Tailwind shade variants for frontend styling.',
          'Selecting consistent color scales for user interfaces.',
          'Copying hex values quickly without opening extensive documentation.'
        ]}
        privacyNote='The palette is completely static. Your selections and copying actions are entirely local.'
      />
      <RelatedTools
        tools={[
          { href: '/tools/color-converter', name: 'Color Converter', description: 'Convert HEX to RGB and RGB to HEX.' },
          { href: '/tools/markdown-previewer', name: 'Markdown Previewer', description: 'Preview Markdown content with a live editor.' },
          { href: '/tools/css-formatter', name: 'CSS Formatter', description: 'Format or minify CSS stylesheets.' }
        ]}
      />
</>
  );
}
