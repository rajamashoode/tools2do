'use client';

import { CheckCircle, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';

type Utility = { shortName: string; fullName: string; city: string; officialUrl: string };
type Props = { utility?: Utility };

const DEFAULT_UTILITY: Utility = {
  shortName: 'LESCO',
  fullName: 'Lahore Electric Supply Company',
  city: 'Lahore',
  officialUrl: 'https://bill.pitc.com.pk/lescobill',
};

export function LescoBillChecker({ utility = DEFAULT_UTILITY }: Props): React.ReactElement {
  const [reference, setReference] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const error = useMemo(
    () =>
      reference.length > 0 && !/^\d{14}$/.test(reference)
        ? `Enter exactly 14 numeric digits for your ${utility.shortName} reference number.`
        : '',
    [reference, utility.shortName],
  );

  const isValid = /^\d{14}$/.test(reference);

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (isValid) setSubmitted(true);
  }

  async function copyReference(): Promise<void> {
    await navigator.clipboard.writeText(reference);
  }

  const whatsAppText = encodeURIComponent(
    `${utility.shortName} reference number: ${reference}. Please check my duplicate bill.`,
  );

  return (
    <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-xl">
      <form onSubmit={onSubmit} className="grid gap-3 md:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[var(--text-secondary)]">
            {utility.shortName} Reference Number
          </span>
          <input
            id={`${utility.shortName.toLowerCase()}-reference`}
            value={reference}
            onChange={(event) => {
              setReference(event.target.value.replace(/\D/g, '').slice(0, 14));
              setSubmitted(false);
            }}
            inputMode="numeric"
            placeholder={`Enter your 14-digit ${utility.shortName} Reference Number`}
            className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${utility.shortName.toLowerCase()}-error` : undefined}
          />
        </label>
        <button
          type="submit"
          className="self-end rounded-2xl bg-[var(--accent-action)] px-6 py-3 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
        >
          Validate
        </button>
      </form>

      {error && (
        <p
          id={`${utility.shortName.toLowerCase()}-error`}
          role="alert"
          className="mt-3 text-sm text-[var(--danger)]"
        >
          {error}
        </p>
      )}

      {submitted && isValid && (
        <section
          className="mt-5 rounded-2xl border border-[var(--success)] bg-[var(--bg-canvas)] p-5"
          aria-label={`${utility.shortName} reference number validated`}
        >
          {/* Validation confirmation */}
          <div className="flex items-start gap-3">
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                Reference number format is valid
              </h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Your 14-digit {utility.shortName} reference number looks correctly formatted.
                To get your <strong>actual bill amount, due date, and payment status</strong>, visit
                the official {utility.fullName} portal below — live billing data is only available
                from {utility.shortName} directly.
              </p>
            </div>
          </div>

          {/* Reference number display */}
          <div className="mt-4 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Your Reference Number
            </p>
            <p className="mt-1 font-mono text-xl font-bold text-[var(--text-primary)]">{reference}</p>
          </div>

          {/* Action buttons */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={utility.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Open {utility.shortName} Official Portal
            </a>
            <button
              type="button"
              onClick={copyReference}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] px-4 py-2.5 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              Copy reference number
            </button>
            <a
              href={`https://wa.me/?text=${whatsAppText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] px-4 py-2.5 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Share on WhatsApp
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            Tools2Do is an independent helper site. We do not have access to {utility.shortName} billing
            databases and cannot display your actual bill amount or due date. Always verify payment details
            on the official portal.
          </p>
        </section>
      )}
    </div>
  );
}
