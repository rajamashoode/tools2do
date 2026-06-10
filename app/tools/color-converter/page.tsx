import type { Metadata } from 'next';
import { ColorConverter } from '@/components/tools/ColorConverter';

export const metadata: Metadata = {
  title: 'Color Converter',
  description: 'Convert HEX to RGB and RGB to HEX with a color swatch.',
  alternates: { canonical: 'https://tools2do.com/tools/color-converter' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Color Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert HEX to RGB and RGB to HEX with a color swatch.</p>
      </div>
      <ColorConverter />
    </>
  );
}
