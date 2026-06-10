'use client';
import { useState } from 'react';
type Conv = { label: string; from: string; to: string; factor: number };
const CONVERSIONS: Conv[] = [
  {label:'Centimeters → Inches',from:'cm',to:'in',factor:1/2.54},
  {label:'Inches → Centimeters',from:'in',to:'cm',factor:2.54},
  {label:'Kilograms → Pounds',from:'kg',to:'lb',factor:2.2046226218},
  {label:'Pounds → Kilograms',from:'lb',to:'kg',factor:1/2.2046226218},
  {label:'Kilometers → Miles',from:'km',to:'mi',factor:0.621371},
  {label:'Miles → Kilometers',from:'mi',to:'km',factor:1/0.621371},
  {label:'Meters → Feet',from:'m',to:'ft',factor:3.28084},
  {label:'Feet → Meters',from:'ft',to:'m',factor:1/3.28084},
  {label:'Celsius → Fahrenheit',from:'°C',to:'°F',factor:0},
  {label:'Fahrenheit → Celsius',from:'°F',to:'°C',factor:0},
  {label:'Liters → Gallons',from:'L',to:'gal',factor:0.264172},
  {label:'Gallons → Liters',from:'gal',to:'L',factor:3.78541},
];
function convert(val: number, conv: Conv): number {
  if (conv.from==='°C') return val*9/5+32;
  if (conv.from==='°F') return (val-32)*5/9;
  return val * conv.factor;
}
export function UnitConverter(): React.ReactElement {
  const [value, setValue] = useState('1');
  const [selected, setSelected] = useState(0);
  const conv = CONVERSIONS[selected];
  const result = convert(parseFloat(value)||0, conv);
  return (
    <div className="mx-auto max-w-xl px-4 py-10 md:px-6 space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Conversion type</label>
        <select value={selected} onChange={e=>setSelected(+e.target.value)} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
          {CONVERSIONS.map((c,i)=><option key={i} value={i}>{c.label}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Value ({conv.from})</label>
        <input type="number" value={value} onChange={e=>setValue(e.target.value)} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      </div>
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center">
        <p className="text-sm text-[var(--text-secondary)] mb-1">{value||0} {conv.from} =</p>
        <p className="text-4xl font-extrabold text-[var(--accent-action)]">{result.toFixed(4)}</p>
        <p className="text-lg font-semibold text-[var(--text-primary)] mt-1">{conv.to}</p>
      </div>
    </div>
  );
}
