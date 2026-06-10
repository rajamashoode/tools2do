import type { Metadata } from 'next';
import { UuidGenerator } from '@/components/tools/UuidGenerator';

export const metadata: Metadata = {
  title: 'UUID Generator',
  description: 'Generate v4 UUIDs locally for apps, databases and tests.',
  alternates: { canonical: 'https://tools2do.com/tools/uuid-generator' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">UUID Generator</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Generate v4 UUIDs locally for apps, databases and tests.</p>
      </div>
      <UuidGenerator />
    </>
  );
}
