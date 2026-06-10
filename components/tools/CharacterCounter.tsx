'use client';
import { useState } from 'react';
export function CharacterCounter(): React.ReactElement {
  const [text, setText] = useState('');
  const limits = [
    { name: 'Twitter/X', max: 280 }, { name: 'Instagram Bio', max: 150 },
    { name: 'Meta Description', max: 160 }, { name: 'SMS', max: 160 },
    { name: 'YouTube Title', max: 100 }, { name: 'LinkedIn Post', max: 3000 },
  ];
  const total    = text.length;
  const noSpaces = text.replace(/\s/g, '').length;
  const lines    = text.length ? text.split(/\r\n|\r|\n/).length : 0;
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste or type your text here..." rows={8} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
      <div className="grid grid-cols-3 gap-3">
        {[{l:'Total chars',v:total},{l:'No spaces',v:noSpaces},{l:'Lines',v:lines}].map(s=>(
          <div key={s.l} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-center">
            <p className="text-3xl font-extrabold text-[var(--accent-action)]">{s.v}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
        <p className="text-sm font-semibold mb-3 text-[var(--text-primary)]">Platform limits</p>
        <div className="grid gap-2">
          {limits.map(pl => {
            const pct = Math.min(100, Math.round((total / pl.max) * 100));
            const over = total > pl.max;
            return (
              <div key={pl.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[var(--text-secondary)]">{pl.name}</span>
                  <span className={over ? 'text-[var(--danger)] font-bold' : 'text-[var(--text-muted)]'}>{total}/{pl.max}</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--bg-canvas)]">
                  <div className={`h-1.5 rounded-full transition-all ${over ? 'bg-[var(--danger)]' : 'bg-[var(--accent-action)]'}`} style={{width:`${pct}%`}} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
