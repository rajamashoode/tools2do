'use client';
import { useState } from 'react';

const SLABS = [
  { max: 50,  rate: 3.95,  label: 'Protected (1–50 units)',    subsidy: 'Full subsidy — heavily protected rate' },
  { max: 100, rate: 7.74,  label: 'Protected (51–100 units)',   subsidy: 'Protected slab — subsidized rate' },
  { max: 200, rate: 10.06, label: 'Low use (101–200 units)',    subsidy: 'Partial subsidy may apply' },
  { max: 300, rate: 17.60, label: 'Medium use (201–300 units)', subsidy: 'No subsidy — market rate' },
  { max: 400, rate: 20.50, label: 'High use (301–400 units)',   subsidy: 'No subsidy — higher slab' },
  { max: 500, rate: 22.65, label: 'Heavy use (401–500 units)',  subsidy: 'No subsidy — peak slab' },
  { max: 9999,rate: 24.76, label: 'Above 500 units',            subsidy: 'No subsidy — maximum slab' },
];

function getSlab(units: number) {
  return SLABS.find(s => units <= s.max) ?? SLABS[SLABS.length - 1];
}

export function ElectricitySubsidyCalculator(): React.ReactElement {
  const [units, setUnits] = useState('150');
  const n = parseInt(units) || 0;
  const slab = getSlab(n);
  const estimate = n * slab.rate;
  const isProtected = n <= 100;

  return (
    <div className="mx-auto max-w-xl px-4 py-10 md:px-6 space-y-4">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
        <div>
          <label htmlFor="units-input" className="block text-sm font-bold mb-2 text-[var(--text-primary)]">
            Monthly electricity consumption (units / kWh)
          </label>
          <input
            id="units-input"
            type="number"
            min={1}
            max={2000}
            value={units}
            onChange={e => setUnits(e.target.value)}
            placeholder="e.g. 200"
            className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
          />
          <p className="mt-1 text-xs text-[var(--text-muted)]">Find your monthly units on your electricity bill under "Units Consumed".</p>
        </div>
      </div>

      {n > 0 && (
        <div className="space-y-3">
          <div className={`rounded-2xl border p-5 space-y-2 ${isProtected ? 'border-[var(--success)] bg-[var(--bg-surface)]' : 'border-[var(--border-default)] bg-[var(--bg-surface)]'}`}>
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--text-muted)]">Your Slab</p>
            <p className="text-xl font-extrabold text-[var(--text-primary)]">{slab.label}</p>
            <p className={`text-sm font-semibold ${isProtected ? 'text-[var(--success)]' : 'text-[var(--text-secondary)]'}`}>{slab.subsidy}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-center">
              <p className="text-xs text-[var(--text-muted)] mb-1">Rate per unit</p>
              <p className="text-2xl font-extrabold text-[var(--accent-action)]">Rs. {slab.rate}</p>
            </div>
            <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-center">
              <p className="text-xs text-[var(--text-muted)] mb-1">Estimated bill</p>
              <p className="text-2xl font-extrabold text-[var(--accent-action)]">Rs. {Math.round(estimate).toLocaleString()}</p>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] px-1">
            Note: This is an estimate based on NEPRA base rates. Actual bill includes fuel adjustment charges, taxes, meter rent and fixed charges. Rates are subject to quarterly revision.
          </p>
        </div>
      )}
    </div>
  );
}
