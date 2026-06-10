import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Ehsaas Program 8171 Tracking | Tools2Do',
    description: 'Check your Ehsaas Program eligibility and payment status using your CNIC.',
    alternates: { canonical: 'https://tools2do.com/pk/ehsaas-program-tracking' },
  };
}

export default function Page(): React.ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Ehsaas Program 8171 Tracking</h1>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Check your Ehsaas Program eligibility and payment status using your CNIC.</p>

        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">8171 Ehsaas Program — Check Eligibility</h2>
          <p className="text-[var(--text-secondary)]">Ehsaas Program payments are distributed through the National Socio-Economic Registry (NSER). To check your eligibility:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Send your <strong>CNIC number</strong> (without dashes) to <strong>8171</strong> via SMS.</li>
            <li>You will receive an SMS reply with your eligibility status.</li>
            <li>Alternatively, visit the official BISP/Ehsaas portal for online verification.</li>
          </ol>
          <a href="https://8171.pass.gov.pk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            Open Official Ehsaas Portal →
          </a>
        </div>
    </article>
  );
}
