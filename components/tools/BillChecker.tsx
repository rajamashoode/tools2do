'use client';
import { useState } from 'react';
import { ExternalLink, Share2 } from 'lucide-react';

type Utility = {
  shortName: string;
  fullName: string;
  city: string;
  officialUrl: string;
  refLabel?: string;
  refLength?: number;
  refPlaceholder?: string;
};

type Props = { utility: Utility };

function validate(ref: string, len: number): string | null {
  const cleaned = ref.replace(/\s/g, '');
  if (!cleaned) return 'Please enter your reference number.';
  if (!/^\d+$/.test(cleaned)) return 'Reference number should contain digits only.';
  if (cleaned.length !== len) return `${len}-digit reference number required. You entered ${cleaned.length} digits.`;
  return null;
}

export function BillChecker({ utility }: Props): React.ReactElement {
  const refLen   = utility.refLength ?? 14;
  const refLabel = utility.refLabel ?? `${refLen}-digit Reference Number`;
  const [ref, setRef]       = useState('');
  const [error, setError]   = useState('');
  const [checked, setChecked] = useState(false);

  function check() {
    const err = validate(ref, refLen);
    if (err) { setError(err); setChecked(false); return; }
    setError('');
    setChecked(true);
  }

  function share() {
    const text = `Check your ${utility.shortName} electricity bill online at tools2do.com`;
    if (navigator.share) {
      navigator.share({ title: `${utility.shortName} Bill Checker`, text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  return (
    <div className="rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
      <div>
        <label htmlFor="ref-input" className="block text-sm font-bold mb-2 text-[var(--text-primary)]">
          {refLabel}
        </label>
        <div className="flex gap-2 flex-wrap">
          <input
            id="ref-input"
            type="tel"
            inputMode="numeric"
            value={ref}
            onChange={e => { setRef(e.target.value.replace(/\D/g,'')); setError(''); setChecked(false); }}
            placeholder={utility.refPlaceholder ?? `Enter ${refLen}-digit reference number`}
            maxLength={refLen + 2}
            className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-3 font-mono text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            aria-describedby="ref-hint"
          />
          <button onClick={check} className="rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            Validate
          </button>
        </div>
        <p id="ref-hint" className="mt-2 text-xs text-[var(--text-muted)]">
          Find your reference number on the top section of your previous {utility.shortName} bill.
        </p>
      </div>

      {error && (
        <div role="alert" className="rounded-xl border border-[var(--danger)] bg-[var(--bg-canvas)] p-3 text-sm text-[var(--danger)]">
          {error}
        </div>
      )}

      {checked && !error && (
        <div className="rounded-xl border border-[var(--success)] bg-[var(--bg-canvas)] p-4 space-y-3">
          <p className="text-sm font-bold text-[var(--success)]">✓ Valid {refLen}-digit reference number format</p>
          <p className="text-sm text-[var(--text-secondary)]">
            Your reference number looks correct. To get your actual bill, visit the official {utility.shortName} portal:
          </p>
          <a
            href={utility.officialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-4 py-2.5 text-sm font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
          >
            <ExternalLink className="h-4 w-4" />
            Open {utility.shortName} Official Bill Portal
          </a>
          <p className="text-xs text-[var(--text-muted)] pt-1">
            Note: Tools2Do validates your reference number format only. Actual bill data is fetched directly from {utility.fullName} servers.
          </p>
        </div>
      )}

      <button onClick={share} className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-action)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
        <Share2 className="h-4 w-4" />Share this tool
      </button>
    </div>
  );
}
