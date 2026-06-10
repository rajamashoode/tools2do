import type { Metadata } from 'next';
import { ColorPalettePicker } from '@/components/tools/ColorPalettePicker';

export const metadata: Metadata = {
  title: 'Color Palette Picker',
  description: 'Browse Tailwind CSS color palettes, pick custom colors, and copy HEX or RGB values.',
  alternates: { canonical: 'https://tools2do.com/tools/color-palette' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Color Palette Picker</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Browse Tailwind CSS color palettes, pick custom colors, and copy HEX or RGB values.</p>
      </div>
      <ColorPalettePicker />
    </>
  );
}
