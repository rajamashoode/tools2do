'use client';
import { useState } from 'react';
import { Copy, Trash2 } from 'lucide-react';

export function WordCounter(): React.ReactElement {
  const [text, setText] = useState('');
  const words     = text.trim() ? (text.trim().match(/\S+/g) || []).length : 0;
  const chars     = text.length;
  const noSpaces  = text.replace(/\s/g, '').length;
  const sentences = text.trim() ? (text.trim().match(/[^.!?]+[.!?]+/g) || []).length : 0;
  const paras     = text.trim() ? text.trim().split(/\n\s*\n/).filter(Boolean).length : 0;
  const readTime  = Math.max(1, Math.ceil(words / 200));
  const stats = [
    { label: 'Words', value: words },
    { label: 'Characters', value: chars },
    { label: 'No spaces', value: noSpaces },
    { label: 'Sentences', value: sentences },
    { label: 'Paragraphs', value: paras },
    { label: 'Min read', value: readTime },
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <div className="flex flex-wrap gap-2 mb-2">
        <button onClick={() => setText('')} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Trash2 className="h-4 w-4"/>Clear</button>
        <button onClick={() => navigator.clipboard.writeText(text)} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Copy className="h-4 w-4"/>Copy</button>
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste or type your text here..." rows={10} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {stats.map(s => (
          <div key={s.label} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-center">
            <p className="text-2xl font-extrabold text-[var(--accent-action)]">{s.value}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
