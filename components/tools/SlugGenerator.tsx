'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
function makeSlug(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').replace(/-{2,}/g,'-');
}
export function SlugGenerator(): React.ReactElement {
  const [input, setInput]   = useState('Free Online Tools for Everyone');
  const [copied, setCopied] = useState(false);
  const slug = makeSlug(input);
  async function copy() { await navigator.clipboard.writeText(slug); setCopied(true); setTimeout(()=>setCopied(false),2000); }
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Title or phrase</label>
        <input value={input} onChange={e=>setInput(e.target.value)} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      </div>
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xs font-semibold uppercase text-[var(--text-muted)]">Generated Slug</p>
          <button onClick={copy} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline"><Copy className="h-3 w-3"/>{copied?'Copied!':'Copy'}</button>
        </div>
        <p className="font-mono text-[var(--text-primary)] break-all">{slug || '—'}</p>
      </div>
    </div>
  );
}
