'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }): React.ReactElement {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center md:px-6">
      <p className="text-6xl font-extrabold text-[var(--danger)] opacity-30">!</p>
      <h1 className="mt-4 text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Something went wrong</h1>
      <p className="mt-4 text-[var(--text-secondary)]">This tool hit an unexpected error. All processing runs in your browser so no data was sent anywhere.</p>
      <div className="mt-8 flex justify-center gap-3">
        <button onClick={reset} className="rounded-xl bg-[var(--accent-action)] px-6 py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Try again</button>
        <Link href="/" className="rounded-xl border border-[var(--border-default)] px-6 py-3 font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">All tools</Link>
      </div>
    </div>
  );
}
