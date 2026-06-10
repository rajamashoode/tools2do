'use client';

import { Search } from 'lucide-react';

type Props = {
  title: string;
  subtitle: string;
};

// Triggers the ⌘K handler that CommandPalette (mounted in Navbar) listens for.
function openCommandPalette(): void {
  window.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      ctrlKey: true,
      bubbles: true,
    })
  );
}

export function HeroSearchBar({ title, subtitle }: Props): React.ReactElement {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 text-center md:px-6 md:py-24">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[var(--accent-action)]">
        Fast · Private · Browser-only
      </p>
      <h1 className="text-[length:var(--text-hero)] font-extrabold leading-tight text-[var(--text-primary)]">
        {title}
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg">
        {subtitle}
      </p>
      <button
        type="button"
        onClick={openCommandPalette}
        aria-label="Search tools — press Ctrl+K or Cmd+K"
        className="mx-auto mt-8 flex w-full max-w-2xl cursor-pointer items-center gap-3 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] p-2 text-left shadow-xl transition hover:border-[var(--accent-indigo)] hover:shadow-[0_0_24px_rgba(99,102,241,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
      >
        <Search className="ml-3 h-5 w-5 shrink-0 text-[var(--text-muted)]" aria-hidden="true" />
        <span className="min-w-0 flex-1 text-sm text-[var(--text-muted)]">
          Type a tool or shortcut... (Press ⌘K)
        </span>
        <kbd className="mr-1 shrink-0 rounded-full border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)]">
          ⌘K
        </kbd>
      </button>
    </section>
  );
}
