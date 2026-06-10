'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';

const PALETTES = [
  { name: 'Indigo', shades: ['#EEF2FF','#E0E7FF','#C7D2FE','#A5B4FC','#818CF8','#6366F1','#4F46E5','#4338CA','#3730A3','#312E81'] },
  { name: 'Sky', shades:    ['#F0F9FF','#E0F2FE','#BAE6FD','#7DD3FC','#38BDF8','#0EA5E9','#0284C7','#0369A1','#075985','#0C4A6E'] },
  { name: 'Emerald', shades:['#ECFDF5','#D1FAE5','#A7F3D0','#6EE7B7','#34D399','#10B981','#059669','#047857','#065F46','#064E3B'] },
  { name: 'Rose', shades:   ['#FFF1F2','#FFE4E6','#FECDD3','#FDA4AF','#FB7185','#F43F5E','#E11D48','#BE123C','#9F1239','#881337'] },
  { name: 'Amber', shades:  ['#FFFBEB','#FEF3C7','#FDE68A','#FCD34D','#FBBF24','#F59E0B','#D97706','#B45309','#92400E','#78350F'] },
  { name: 'Slate', shades:  ['#F8FAFC','#F1F5F9','#E2E8F0','#CBD5E1','#94A3B8','#64748B','#475569','#334155','#1E293B','#0F172A'] },
];

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgb(${r}, ${g}, ${b})`;
}

function contrastColor(hex: string): string {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return (r*0.299 + g*0.587 + b*0.114) > 128 ? '#000000' : '#FFFFFF';
}

export function ColorPalettePicker(): React.ReactElement {
  const [copied, setCopied] = useState('');
  const [picked, setPicked] = useState('#6366F1');
  const [format, setFormat] = useState<'hex'|'rgb'>('hex');

  async function copy(val: string) {
    await navigator.clipboard.writeText(val);
    setCopied(val);
    setTimeout(() => setCopied(''), 1500);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6 space-y-6">
      {/* Custom picker */}
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 flex items-center gap-4 flex-wrap">
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="h-12 w-12 rounded-xl border border-[var(--border-default)] overflow-hidden">
            <input type="color" value={picked} onChange={e => setPicked(e.target.value)} className="h-full w-full cursor-pointer border-0 p-0" aria-label="Pick a color" />
          </div>
          <span className="text-sm font-semibold text-[var(--text-primary)]">Pick any color</span>
        </label>
        <div className="flex gap-2 flex-1 flex-wrap">
          {(['hex','rgb'] as const).map(f => (
            <button key={f} onClick={() => setFormat(f)} className={`rounded-lg px-3 py-1.5 text-sm font-semibold border transition ${format===f ? 'bg-[var(--accent-indigo)] text-white border-[var(--accent-indigo)]' : 'border-[var(--border-default)] hover:bg-[var(--bg-surface-hover)]'}`}>{f.toUpperCase()}</button>
          ))}
        </div>
        <button onClick={() => copy(format==='hex' ? picked : hexToRgb(picked))} className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent-action)] px-4 py-2 text-sm font-bold text-white hover:opacity-90">
          <Copy className="h-4 w-4"/>{copied === picked || copied === hexToRgb(picked) ? 'Copied!' : `Copy ${format.toUpperCase()}`}
        </button>
      </div>

      {/* Tailwind palettes */}
      {PALETTES.map(palette => (
        <div key={palette.name}>
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">{palette.name}</p>
          <div className="grid grid-cols-5 gap-1 sm:grid-cols-10">
            {palette.shades.map((hex, i) => {
              const val = format === 'hex' ? hex : hexToRgb(hex);
              const shade = (i+1)*100;
              return (
                <button
                  key={hex}
                  onClick={() => copy(val)}
                  title={`${palette.name} ${shade} — ${val}`}
                  style={{ background: hex, color: contrastColor(hex) }}
                  className="group relative rounded-xl h-14 flex flex-col items-center justify-center text-xs font-mono transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
                >
                  <span className="opacity-70 text-[10px]">{shade}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-[9px] transition">{copied===val?'✓':'copy'}</span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
