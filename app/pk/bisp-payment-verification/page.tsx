import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'BISP Payment Verification',
    description: 'Verify your BISP Benazir Income Support Programme payment status using your CNIC.',
    alternates: { canonical: 'https://tools2do.com/pk/bisp-payment-verification' },
  };
}

export default function Page(): React.ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">BISP Payment Verification</h1>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Verify your BISP Benazir Income Support Programme payment status using your CNIC.</p>

        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">BISP Payment Verification</h2>
          <p className="text-[var(--text-secondary)]">To verify your Benazir Income Support Programme payment:</p>
          <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>SMS your <strong>CNIC</strong> (13 digits, no dashes) to <strong>8171</strong>.</li>
            <li>Visit the official BISP portal with your CNIC for detailed payment history.</li>
            <li>Contact nearest BISP office if payment is overdue.</li>
          </ol>
          <a href="https://bisp.gov.pk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            Open BISP Official Portal →
          </a>
        </div>
    </article>
  );
}
