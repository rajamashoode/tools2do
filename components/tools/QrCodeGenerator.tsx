'use client';
import { useState } from 'react';
export function QrCodeGenerator(): React.ReactElement {
  const [text,setText]   = useState('https://tools2do.com');
  const [size,setSize]   = useState(240);
  const [imgSrc,setImgSrc] = useState('');
  function generate() {
    const s = Math.max(120,Math.min(600,size));
    const data = encodeURIComponent(text||'https://tools2do.com');
    setImgSrc(`https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&data=${data}&format=png`);
  }
  return (
    <div className="mx-auto max-w-md px-4 py-10 md:px-6 space-y-4">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">URL or text</label>
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="https://tools2do.com" className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Size: {size}px</label>
          <input type="range" min={120} max={600} step={40} value={size} onChange={e=>setSize(+e.target.value)} className="w-full accent-[var(--accent-action)]"/>
        </div>
        <button onClick={generate} className="w-full rounded-xl bg-[var(--accent-action)] py-3 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Generate QR Code</button>
      </div>
      {imgSrc && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center space-y-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc} alt="Generated QR code" className="mx-auto rounded-xl" width={size} height={size}/>
          <p className="text-xs text-[var(--text-muted)]">Right-click or long-press the image to save it.</p>
          <a href={imgSrc} download="qr-code.png" className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Download PNG</a>
        </div>
      )}
    </div>
  );
}
