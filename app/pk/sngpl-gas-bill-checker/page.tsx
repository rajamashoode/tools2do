import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'SNGPL Gas Bill Checker | Tools2Do',
    description: 'Check your SNGPL Sui Northern Gas bill using your consumer number or reference.',
    alternates: { canonical: 'https://tools2do.com/pk/sngpl-gas-bill-checker' },
  };
}

export default function Page(): React.ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">SNGPL Gas Bill Checker</h1>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Check your SNGPL Sui Northern Gas bill using your consumer number or reference.</p>

        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">SNGPL Gas Bill Check Guide</h2>
          <p className="text-[var(--text-secondary)]">Sui Northern Gas Pipelines Limited (SNGPL) serves Punjab and KPK. To check your gas bill:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Find your <strong>Consumer Number</strong> on your previous gas bill (usually 9-11 digits).</li>
            <li>Visit the SNGPL official portal and enter your consumer number.</li>
            <li>For SSGC (Sindh/Balochistan), use the SSGC portal instead.</li>
          </ol>
          <a href="https://www.sngpl.com.pk/online-bill" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            Open SNGPL Bill Portal →
          </a>
        </div>
    </article>
  );
}
