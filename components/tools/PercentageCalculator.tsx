'use client';
import { useState } from 'react';
export function PercentageCalculator(): React.ReactElement {
  const [value,setValue]   = useState('100');
  const [percent,setPercent] = useState('15');
  const v = parseFloat(value)||0;
  const p = parseFloat(percent)||0;
  const amount   = (v*p/100);
  const increased = v + amount;
  const decreased = v - amount;
  const results = [
    {label:`${p}% of ${v}`,value:amount.toFixed(2)},
    {label:`${v} + ${p}%`,value:increased.toFixed(2)},
    {label:`${v} − ${p}%`,value:decreased.toFixed(2)},
  ];
  return (
    <div className="mx-auto max-w-md px-4 py-10 md:px-6 space-y-4">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Value</label>
          <input type="number" value={value} onChange={e=>setValue(e.target.value)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Percentage (%)</label>
          <input type="number" value={percent} onChange={e=>setPercent(e.target.value)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
      </div>
      <div className="grid gap-3">
        {results.map(r=>(
          <div key={r.label} className="flex items-center justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
            <span className="text-sm text-[var(--text-secondary)]">{r.label}</span>
            <span className="text-xl font-extrabold text-[var(--accent-action)]">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
