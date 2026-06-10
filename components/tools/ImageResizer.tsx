'use client';

import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import { Download, ImageUp, Trash2 } from 'lucide-react';

type Result = { originalName: string; originalSize: number; url: string; size: number; width: number; height: number; customName: string; };

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(2)} MB`;
}

const PRESETS = [
  { label: 'Instagram Square', w: 1080, h: 1080 },
  { label: 'Instagram Story', w: 1080, h: 1920 },
  { label: 'Facebook Post', w: 1200, h: 630 },
  { label: 'Twitter Header', w: 1500, h: 500 },
  { label: 'Passport Photo (px)', w: 600, h: 800 },
  { label: 'HD (1280×720)', w: 1280, h: 720 },
  { label: 'Full HD (1920×1080)', w: 1920, h: 1080 },
];

export function ImageResizer(): React.ReactElement {
  const [files, setFiles]     = useState<File[]>([]);
  const [targetW, setTargetW] = useState('1280');
  const [targetH, setTargetH] = useState('');
  const [keepRatio, setKeepRatio] = useState(true);
  const [quality, setQuality] = useState(82);
  const [prefix, setPrefix]   = useState('resized');
  const [results, setResults] = useState<Result[]>([]);
  const [busy, setBusy]       = useState(false);
  const [progress, setProgress] = useState('');
  const [error, setError]     = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  function loadFiles(fl: FileList | File[]): void {
    setError(''); setResults([]);
    const valid = Array.from(fl).filter(f => f.type.startsWith('image/'));
    if (!valid.length) { setError('No valid image files found.'); return; }
    setFiles(valid);
  }

  function applyPreset(w: number, h: number): void { setTargetW(String(w)); setTargetH(String(h)); setKeepRatio(false); }

  function processFile(file: File, wTarget: number, hTarget: number, kr: boolean, q: number): Promise<{blob: Blob; w: number; h: number}> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const objUrl = URL.createObjectURL(file);
      img.onload = () => {
        let w = img.naturalWidth, h = img.naturalHeight;
        if (wTarget && hTarget && !kr) { w = wTarget; h = hTarget; }
        else if (wTarget && kr)        { h = Math.round(h * (wTarget / w)); w = wTarget; }
        else if (hTarget && kr)        { w = Math.round(w * (hTarget / h)); h = hTarget; }
        else if (wTarget)              { h = Math.round(h * (wTarget / w)); w = wTarget; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d')!.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(objUrl);
        const mime = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
        canvas.toBlob(b => b ? resolve({blob: b, w, h}) : reject(new Error('failed')), mime, q);
      };
      img.onerror = () => { URL.revokeObjectURL(objUrl); reject(new Error('load failed')); };
      img.src = objUrl;
    });
  }

  async function resize(): Promise<void> {
    if (!files.length) return;
    setBusy(true); setResults([]); setError('');
    const wTarget = parseInt(targetW) || 0;
    const hTarget = parseInt(targetH) || 0;
    if (!wTarget && !hTarget) { setError('Enter at least a width or height.'); setBusy(false); return; }
    const q = quality / 100;
    const sanitizedPrefix = prefix.replace(/[^a-zA-Z0-9_-]/g, '-') || 'resized';
    const out: Result[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setProgress(`Resizing ${i + 1} of ${files.length}: ${file.name}`);
      try {
        const {blob, w, h} = await processFile(file, wTarget, hTarget, keepRatio, q);
        const url = URL.createObjectURL(blob);
        const base = file.name.replace(/\.[^.]+$/, '');
        out.push({
          originalName: file.name, originalSize: file.size,
          url, size: blob.size, width: w, height: h,
          customName: files.length > 1 ? `${sanitizedPrefix}-${i + 1}` : sanitizedPrefix || `resized-${base}`,
        });
      } catch {
        out.push({ originalName: file.name, originalSize: file.size, url: '', size: 0, width: 0, height: 0, customName: '' });
      }
    }
    setBusy(false); setProgress(''); setResults(out);
  }

  function ext(file: File): string { return file.type === 'image/png' ? 'png' : 'jpg'; }
  function updateName(i: number, val: string): void { setResults(prev => prev.map((r, idx) => idx === i ? {...r, customName: val} : r)); }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 space-y-5">
      <div
        onDrop={e => { e.preventDefault(); if (e.dataTransfer.files.length) loadFiles(e.dataTransfer.files); }}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
        role="button" tabIndex={0} aria-label="Upload images"
        className="cursor-pointer rounded-3xl border-2 border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-8 text-center hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
      >
        <ImageUp className="mx-auto h-10 w-10 text-[var(--accent-action)]" />
        <p className="mt-3 font-bold text-[var(--text-primary)]">Drag and drop images, or click to upload</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">Multiple files supported · runs in your browser · no upload</p>
        <input ref={inputRef} type="file" accept="image/*" multiple onChange={(e: ChangeEvent<HTMLInputElement>) => { if (e.target.files?.length) loadFiles(e.target.files); }} className="hidden" />
      </div>

      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]">{error}</p>}

      {files.length > 0 && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
          <p className="font-semibold text-[var(--text-primary)]">{files.length} file{files.length !== 1 ? 's' : ''} selected</p>

          {/* Presets */}
          <div>
            <p className="text-sm font-semibold mb-2 text-[var(--text-primary)]">Quick presets</p>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map(p => (
                <button key={p.label} onClick={() => applyPreset(p.w, p.h)} className="rounded-lg border border-[var(--border-default)] px-2.5 py-1.5 text-xs font-semibold hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-indigo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">Width (px)</label>
              <input type="number" value={targetW} onChange={e => setTargetW(e.target.value)} placeholder="e.g. 1280" className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">Height (px)</label>
              <input type="number" value={targetH} onChange={e => setTargetH(e.target.value)} placeholder="e.g. 720" className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
            </div>
            <div className="flex items-end pb-1">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" checked={keepRatio} onChange={e => setKeepRatio(e.target.checked)} className="accent-[var(--accent-indigo)]" />
                Keep aspect ratio
              </label>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">Quality: {quality}%</label>
              <input type="range" min={10} max={100} value={quality} onChange={e => setQuality(+e.target.value)} className="w-full accent-[var(--accent-action)]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">File name prefix</label>
            <input value={prefix} onChange={e => setPrefix(e.target.value)} placeholder="resized" className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
          </div>

          <div className="flex gap-3 flex-wrap">
            <button onClick={resize} disabled={busy} className="rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white disabled:opacity-60 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              {busy ? progress || 'Resizing...' : `Resize ${files.length > 1 ? `${files.length} Images` : 'Image'}`}
            </button>
            <button onClick={() => { setFiles([]); setResults([]); setError(''); if (inputRef.current) inputRef.current.value = ''; }} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-3 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              <Trash2 className="h-4 w-4" />Clear
            </button>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <p className="font-bold text-[var(--text-primary)]">{results.filter(r => r.url).length} image{results.length !== 1 ? 's' : ''} resized</p>
          {results.map((r, i) => (
            <div key={i} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
              {r.url ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">Original</p>
                    <p className="text-sm text-[var(--text-secondary)]">{r.originalName} · {formatBytes(r.originalSize)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">Resized · {r.width}×{r.height} · {formatBytes(r.size)}</p>
                    <img src={r.url} alt="Preview" className="h-24 w-full rounded-xl object-contain bg-[var(--bg-canvas)] mb-3" />
                    <div className="flex gap-2 items-center flex-wrap">
                      <input value={r.customName} onChange={e => updateName(i, e.target.value)} placeholder="File name" className="flex-1 min-w-0 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" aria-label="Download file name" />
                      <span className="text-sm text-[var(--text-muted)] shrink-0">.{ext(files[i])}</span>
                      <a href={r.url} download={`${r.customName || 'resized'}.${ext(files[i])}`} className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent-action)] px-4 py-2 text-sm font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
                        <Download className="h-4 w-4" />Download
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-[var(--danger)]">Could not resize: {r.originalName}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
