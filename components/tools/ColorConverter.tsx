'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
function hexToRgb(h:string): {r:number,g:number,b:number}|null {
  let hex = h.replace('#','').trim();
  if (hex.length===3) hex = hex.split('').map(x=>x+x).join('');
  const n = parseInt(hex,16);
  if (isNaN(n)) return null;
  return {r:(n>>16)&255,g:(n>>8)&255,b:n&255};
}
function rgbToHex(r:number,g:number,b:number): string {
  return [r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();
}
export function ColorConverter(): React.ReactElement {
  const [hex, setHex] = useState('6366F1');
  const [rgb, setRgb] = useState('99, 102, 241');
  const [swatch, setSwatch] = useState('#6366F1');
  const [error, setError]   = useState('');
  function fromHex() {
    setError('');
    const c = hexToRgb(hex);
    if (!c) { setError('Enter a valid HEX color (e.g. 6366F1 or #6366F1)'); return; }
    setRgb(`${c.r}, ${c.g}, ${c.b}`);
    setSwatch(`#${hex.replace('#','').padStart(6,'0')}`);
  }
  function fromRgb() {
    setError('');
    const parts = rgb.match(/\d+/g)?.map(Number);
    if (!parts || parts.length < 3) { setError('Enter RGB as: 99, 102, 241'); return; }
    const [r,g,b] = parts;
    setHex(rgbToHex(r,g,b));
    setSwatch(`rgb(${r},${g},${b})`);
  }
  return (
    <div className="mx-auto max-w-xl px-4 py-10 md:px-6 space-y-5">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-3">
        <p className="font-semibold text-[var(--text-primary)]">HEX → RGB</p>
        <div className="flex gap-2">
          <input value={hex} onChange={e=>setHex(e.target.value)} placeholder="6366F1" className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 font-mono text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
          <button onClick={fromHex} className="rounded-xl bg-[var(--accent-action)] px-4 py-2 font-bold text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Convert</button>
        </div>
      </div>
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-3">
        <p className="font-semibold text-[var(--text-primary)]">RGB → HEX</p>
        <div className="flex gap-2">
          <input value={rgb} onChange={e=>setRgb(e.target.value)} placeholder="99, 102, 241" className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 font-mono text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
          <button onClick={fromRgb} className="rounded-xl bg-[var(--accent-action)] px-4 py-2 font-bold text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Convert</button>
        </div>
      </div>
      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]">{error}</p>}
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 flex items-center gap-4">
        <div className="h-16 w-16 rounded-xl flex-shrink-0 border border-[var(--border-default)]" style={{background:swatch}}/>
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-2">
            <p className="font-mono text-sm">#{hex.replace('#','')}</p>
            <button onClick={()=>navigator.clipboard.writeText('#'+hex.replace('#',''))} aria-label="Copy hex"><Copy className="h-3.5 w-3.5 text-[var(--accent-action)]"/></button>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-mono text-sm">rgb({rgb})</p>
            <button onClick={()=>navigator.clipboard.writeText(`rgb(${rgb})`)} aria-label="Copy rgb"><Copy className="h-3.5 w-3.5 text-[var(--accent-action)]"/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
