'use client';

import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import { Download, ImageUp, Trash2 } from 'lucide-react';

type OutputFormat = 'image/jpeg' | 'image/webp' | 'image/png';

type Result = {
  originalName: string;
  originalSize: number;
  url: string;
  size: number;
  width: number;
  height: number;
  customName: string;
  fmt: OutputFormat;
};

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(2)} MB`;
}

function extOf(fmt: OutputFormat): string {
  return fmt === 'image/png' ? 'png' : fmt === 'image/webp' ? 'webp' : 'jpg';
}

export function ImageConverter(): React.ReactElement {
  const [files, setFiles]     = useState<File[]>([]);
  const [format, setFormat]   = useState<OutputFormat>('image/webp');
  const [quality, setQuality] = useState(82);
  const [targetW, setTargetW] = useState('');
  const [targetH, setTargetH] = useState('');
  const [prefix, setPrefix]   = useState('tools2do-image');
  const [results, setResults] = useState<Result[]>([]);
  const [busy, setBusy]       = useState(false);
  const [progress, setProgress] = useState('');
  const [error, setError]     = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  function loadFiles(fl: FileList | File[]): void {
    setError(''); setResults([]);
    const valid = Array.from(fl).filter(f => f.type.startsWith('image/'));
    if (!valid.length) { setError('No valid image files selected.'); return; }
    setFiles(valid);
  }

  function onInput(e: ChangeEvent<HTMLInputElement>): void { if (e.target.files?.length) loadFiles(e.target.files); }
  function onDrop(e: DragEvent<HTMLDivElement>): void { e.preventDefault(); if (e.dataTransfer.files.length) loadFiles(e.dataTransfer.files); }

  async function convert(): Promise<void> {
    if (!files.length) return;
    setBusy(true); setResults([]); setError('');
    const out: Result[] = [];
    const q = quality / 100;
    const wTarget = parseInt(targetW) || 0;
    const hTarget = parseInt(targetH) || 0;
    const sanitizedPrefix = prefix.replace(/[^a-zA-Z0-9_-]/g, '-') || 'tools2do-image';

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setProgress(`Converting ${i + 1} of ${files.length}: ${file.name}`);
      try {
        const blob = await processImage(file, format, q, wTarget, hTarget);
        const url  = URL.createObjectURL(blob);
        const dims = await getImageDims(url);
        const base = file.name.replace(/\.[^.]+$/, '');
        out.push({
          originalName: file.name,
          originalSize: file.size,
          url, size: blob.size,
          width: dims.w, height: dims.h,
          fmt: format,
          customName: files.length > 1 ? `${sanitizedPrefix}-${i + 1}` : sanitizedPrefix || `converted-${base}`,
        });
      } catch {
        out.push({ originalName: file.name, originalSize: file.size, url: '', size: 0, width: 0, height: 0, fmt: format, customName: '' });
      }
    }
    setBusy(false); setProgress(''); setResults(out);
  }

  function processImage(file: File, fmt: OutputFormat, q: number, wTarget: number, hTarget: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const objUrl = URL.createObjectURL(file);
      img.onload = () => {
        let w = img.naturalWidth;
        let h = img.naturalHeight;
        if (wTarget && hTarget) { w = wTarget; h = hTarget; }
        else if (wTarget)       { h = Math.round(h * (wTarget / w)); w = wTarget; }
        else if (hTarget)       { w = Math.round(w * (hTarget / h)); h = hTarget; }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d')!.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(objUrl);
        canvas.toBlob(b => b ? resolve(b) : reject(new Error('toBlob failed')), fmt, fmt === 'image/png' ? undefined : q);
      };
      img.onerror = () => { URL.revokeObjectURL(objUrl); reject(new Error('Load failed')); };
      img.src = objUrl;
    });
  }

  function getImageDims(url: string): Promise<{w:number;h:number}> {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve({w: img.naturalWidth, h: img.naturalHeight});
      img.onerror = () => resolve({w:0,h:0});
      img.src = url;
    });
  }

  function updateName(i: number, val: string): void {
    setResults(prev => prev.map((r, idx) => idx === i ? {...r, customName: val} : r));
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 space-y-5">
      {/* Drop zone */}
      <div
        onDrop={onDrop} onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
        role="button" tabIndex={0} aria-label="Upload images"
        className="cursor-pointer rounded-3xl border-2 border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-8 text-center hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
      >
        <ImageUp className="mx-auto h-10 w-10 text-[var(--accent-action)]" aria-hidden="true" />
        <p className="mt-3 font-bold text-[var(--text-primary)]">Drag and drop images, or click to upload</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">Any image format · multiple files · runs entirely in your browser</p>
        <input ref={inputRef} type="file" accept="image/*" multiple onChange={onInput} className="hidden" />
      </div>

      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]">{error}</p>}

      {files.length > 0 && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
          <p className="font-semibold text-[var(--text-primary)]">{files.length} file{files.length !== 1 ? 's' : ''} selected</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Format */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">Output format</label>
              <select value={format} onChange={e => setFormat(e.target.value as OutputFormat)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
                <option value="image/webp">WebP (best web)</option>
                <option value="image/jpeg">JPG</option>
                <option value="image/png">PNG (lossless)</option>
              </select>
            </div>
            {/* Width */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">Width (px, optional)</label>
              <input type="number" value={targetW} onChange={e => setTargetW(e.target.value)} placeholder="e.g. 1280" className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
            </div>
            {/* Height */}
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">Height (px, optional)</label>
              <input type="number" value={targetH} onChange={e => setTargetH(e.target.value)} placeholder="e.g. 720" className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
            </div>
          </div>

          {format !== 'image/png' && (
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">Quality: {quality}%</label>
              <input type="range" min={10} max={100} value={quality} onChange={e => setQuality(+e.target.value)} className="w-full accent-[var(--accent-action)]" />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">File name prefix</label>
            <input value={prefix} onChange={e => setPrefix(e.target.value)} placeholder="tools2do-image" className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
            <p className="mt-1 text-xs text-[var(--text-muted)]">Multiple files will be named prefix-1, prefix-2, etc.</p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button onClick={convert} disabled={busy} className="rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white disabled:opacity-60 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              {busy ? progress || 'Converting...' : `Convert ${files.length > 1 ? `${files.length} Images` : 'Image'}`}
            </button>
            <button onClick={() => { setFiles([]); setResults([]); setError(''); if (inputRef.current) inputRef.current.value = ''; }} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-3 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              <Trash2 className="h-4 w-4" />Clear
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          <p className="font-bold text-[var(--text-primary)]">{results.filter(r => r.url).length} file{results.length !== 1 ? 's' : ''} converted</p>
          {results.map((r, i) => (
            <div key={i} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
              {r.url ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">Original</p>
                    <p className="text-sm text-[var(--text-secondary)]">{r.originalName}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{formatBytes(r.originalSize)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-1">
                      Converted · {r.width}×{r.height} · {formatBytes(r.size)}
                    </p>
                    <img src={r.url} alt="Preview" className="h-24 w-full rounded-xl object-contain bg-[var(--bg-canvas)] mb-3" />
                    <div className="flex gap-2 items-center flex-wrap">
                      <input
                        value={r.customName}
                        onChange={e => updateName(i, e.target.value)}
                        placeholder="File name"
                        className="flex-1 min-w-0 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
                        aria-label="Download file name"
                      />
                      <span className="shrink-0 text-sm text-[var(--text-muted)]">.{extOf(r.fmt)}</span>
                      <a href={r.url} download={`${r.customName || 'converted'}.${extOf(r.fmt)}`} className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent-action)] px-4 py-2 text-sm font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
                        <Download className="h-4 w-4" />Download
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-[var(--danger)]">Could not convert: {r.originalName}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
