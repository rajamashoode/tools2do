import type { Metadata } from 'next';
import { CsvToJson } from '@/components/tools/CsvToJson';

export const metadata: Metadata = {
  title: 'CSV to JSON Converter',
  description: 'Convert CSV data to JSON instantly in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/csv-to-json' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">CSV to JSON Converter</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Convert CSV data to JSON instantly in your browser.</p>
      </div>
      <CsvToJson />
    </>
  );
}
