'use client';

import { Copy, MessageCircle } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';

type Utility = { shortName: string; fullName: string; city: string; officialUrl: string };
type Props = { utility?: Utility };

const DEFAULT_UTILITY: Utility = { shortName: 'LESCO', fullName: 'Lahore Electric Supply Company', city: 'Lahore', officialUrl: 'https://bill.pitc.com.pk/lescobill' };

export function LescoBillChecker({ utility = DEFAULT_UTILITY }: Props): React.ReactElement {
  const [reference, setReference] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const error = useMemo(() => reference.length > 0 && !/^\d{14}$/.test(reference) ? `Enter exactly 14 numeric digits for your ${utility.shortName} reference number.` : '', [reference, utility.shortName]);
  const amount = useMemo(() => `Rs. ${(Number(reference.slice(-4) || '2475') + 1800).toLocaleString('en-PK')}`, [reference]);
  const units = useMemo(() => Number(reference.slice(-3) || '218'), [reference]);
  const dueDate = '25 June 2026';

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (/^\d{14}$/.test(reference)) setSubmitted(true);
  }

  async function copyReference(): Promise<void> { await navigator.clipboard.writeText(reference); }

  const whatsAppText = encodeURIComponent(`${utility.shortName} reference number: ${reference}. Please check my duplicate bill.`);
  return (
    <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-xl">
      <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-[1fr_auto]">
        <label className="block"><span className="mb-2 block text-sm font-semibold text-[var(--text-secondary)]">{utility.shortName} Reference Number</span><input value={reference} onChange={(event) => { setReference(event.target.value.replace(/\D/g, '').slice(0, 14)); setSubmitted(false); }} inputMode="numeric" placeholder={`Enter your 14-digit ${utility.shortName} Reference Number`} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" aria-invalid={Boolean(error)} /></label>
        <button type="submit" className="self-end rounded-2xl bg-[var(--accent-action)] px-6 py-3 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Check Bill</button>
      </form>
      {error && <p role="alert" className="mt-3 text-sm text-[var(--danger)]">{error}</p>}
      {submitted && <section className="mt-5 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-5" aria-label={`${utility.shortName} bill summary`}><h2 className="text-xl font-bold">Bill Summary</h2><dl className="mt-4 grid gap-3 text-sm md:grid-cols-2"><div><dt className="text-[var(--text-muted)]">Name</dt><dd className="font-semibold">Sample {utility.city} Consumer</dd></div><div><dt className="text-[var(--text-muted)]">Reference No.</dt><dd className="font-semibold">{reference}</dd></div><div><dt className="text-[var(--text-muted)]">Amount Due</dt><dd className="font-semibold">{amount}</dd></div><div><dt className="text-[var(--text-muted)]">Due Date</dt><dd className="font-semibold">{dueDate}</dd></div><div><dt className="text-[var(--text-muted)]">Units Consumed</dt><dd className="font-semibold">{units}</dd></div></dl><p className="mt-4 text-sm text-[var(--text-secondary)]">This is a realistic mock preview because live WAPDA/utility APIs require official server authorization. For live results, visit <a href={utility.officialUrl} target="_blank" rel="noreferrer" className="font-bold text-[var(--accent-action)]">{utility.shortName} official portal →</a></p><div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={copyReference} className="rounded-xl border border-[var(--border-default)] px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Copy className="mr-2 inline h-4 w-4" />Copy reference number</button><a href={`https://wa.me/?text=${whatsAppText}`} target="_blank" rel="noreferrer" className="rounded-xl border border-[var(--border-default)] px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><MessageCircle className="mr-2 inline h-4 w-4" />Share on WhatsApp</a></div></section>}
    </div>
  );
}
