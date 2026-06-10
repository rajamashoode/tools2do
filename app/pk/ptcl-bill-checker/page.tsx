import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'PTCL Bill Checker | Tools2Do',
    description: 'Validate your PTCL consumer number and access your telephone and broadband bill.',
    alternates: { canonical: 'https://tools2do.com/pk/ptcl-bill-checker' },
  };
}

export default function Page(): React.ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">PTCL Bill Checker</h1>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Validate your PTCL consumer number and access your telephone and broadband bill.</p>

        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">PTCL Bill Check Guide</h2>
          <p className="text-[var(--text-secondary)]">To check your PTCL telephone or broadband bill:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Find your <strong>10-digit PTCL consumer number</strong> on any previous bill.</li>
            <li>Visit the official PTCL self-service portal or my.ptcl.net.pk</li>
            <li>Enter your telephone number or account number to view your bill.</li>
          </ol>
          <a href="https://my.ptcl.net.pk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            Open PTCL Self-Service Portal →
          </a>
        </div>
    </article>
  );
}
