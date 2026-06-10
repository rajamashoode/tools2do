'use client';
import { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';

function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function UuidGenerator(): React.ReactElement {
  const [count, setCount] = useState(5);
  const [uuids, setUuids] = useState<string[]>(() => Array.from({length:5}, generateUUID));
  const [copied, setCopied] = useState<number | null>(null);

  function regenerate() { setUuids(Array.from({length: Math.max(1,Math.min(50,count))}, generateUUID)); }

  async function copy(uuid: string, i: number) {
    await navigator.clipboard.writeText(uuid);
    setCopied(i);
    setTimeout(() => setCopied(null), 1500);
  }

  async function copyAll() {
    await navigator.clipboard.writeText(uuids.join('\n'));
    setCopied(-1);
    setTimeout(() => setCopied(null), 1500);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 space-y-4">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm font-semibold text-[var(--text-primary)]">Count:</label>
            <input type="number" min={1} max={50} value={count} onChange={e => setCount(+e.target.value)} className="w-20 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
          </div>
          <button onClick={regenerate} className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-4 py-2 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            <RefreshCw className="h-4 w-4" />Generate
          </button>
          <button onClick={copyAll} className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            <Copy className="h-4 w-4" />{copied === -1 ? 'Copied!' : 'Copy all'}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        {uuids.map((uuid, i) => (
          <div key={uuid} className="flex items-center gap-2 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3">
            <code className="flex-1 font-mono text-sm text-[var(--text-primary)] break-all">{uuid}</code>
            <button onClick={() => copy(uuid, i)} className="shrink-0 inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              <Copy className="h-3 w-3" />{copied === i ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
