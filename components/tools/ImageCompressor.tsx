'use client';

import { Download, ImageUp, Trash2 } from 'lucide-react';
import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';

type FileResult = {
  originalName: string;
  originalSize: number;
  compressedUrl: string;
  compressedSize: number;
  width: number;
  height: number;
  type: string;
  customName: string;
};

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1048576).toFixed(2)} MB`;
}

function savings(orig: number, comp: number): number {
  return Math.max(0, Math.round((1 - comp / orig) * 100));
}

export function ImageCompressor(): React.ReactElement {
  const [files, setFiles]     = useState<File[]>([]);
  const [quality, setQuality] = useState(80);
  const [results, setResults] = useState<FileResult[]>([]);
  const [busy, setBusy]       = useState(false);
  const [progress, setProgress] = useState('');
  const [error, setError]     = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  function loadFiles(incoming: FileList | File[]): void {
    setError('');
    setResults([]);
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    const valid = Array.from(incoming).filter(f => allowed.includes(f.type));
    if (!valid.length) { setError('Please upload JPEG, PNG, or WebP images.'); return; }
    setFiles(valid);
  }

  function onInput(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files?.length) loadFiles(e.target.files);
  }
  function onDrop(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    if (e.dataTransfer.files.length) loadFiles(e.dataTransfer.files);
  }

  async function compress(): Promise<void> {
    if (!files.length) return;
    setBusy(true);
    setResults([]);
    setError('');
    const out: FileResult[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setProgress(`Compressing ${i + 1} of ${files.length}: ${file.name}`);
      try {
        const blob = await compressFile(file, quality / 100);
        const url  = URL.createObjectURL(blob);
        const dims = await getImageDims(url);
        const base = file.name.replace(/\.[^.]+$/, '');
        out.push({
          originalName: file.name,
          originalSize: file.size,
          compressedUrl: url,
          compressedSize: blob.size,
          width: dims.w,
          height: dims.h,
          type: blob.type,
          customName: `compressed-${base}`,
        });
      } catch {
        out.push({
          originalName: file.name,
          originalSize: file.size,
          compressedUrl: '',
          compressedSize: 0,
          width: 0, height: 0,
          type: '',
          customName: '',
        });
      }
    }
    setBusy(false);
    setProgress('');
    setResults(out);
  }

  function compressFile(file: File, q: number): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d')!.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        const outType = file.type === 'image/png' ? 'image/png' : file.type === 'image/webp' ? 'image/webp' : 'image/jpeg';
        canvas.toBlob(b => b ? resolve(b) : reject(new Error('toBlob failed')), outType, q);
      };
      img.onerror = reject;
      img.src = url;
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

  function ext(type: string): string {
    if (type === 'image/png') return 'png';
    if (type === 'image/webp') return 'webp';
    return 'jpg';
  }

  function updateName(i: number, val: string): void {
    setResults(prev => prev.map((r, idx) => idx === i ? {...r, customName: val} : r));
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 md:px-6 space-y-5">
      {/* Drop zone */}
      <div
        onDrop={onDrop}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
        role="button" tabIndex={0} aria-label="Upload images"
        className="cursor-pointer rounded-3xl border-2 border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-8 text-center hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
      >
        <ImageUp className="mx-auto h-10 w-10 text-[var(--accent-action)]" aria-hidden="true" />
        <p className="mt-3 font-bold text-[var(--text-primary)]">Drag and drop images, or click to upload</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">JPEG, PNG, WebP · multiple files supported · runs in your browser</p>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={onInput} className="hidden" />
      </div>

      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]">{error}</p>}

      {files.length > 0 && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
          <p className="font-semibold text-[var(--text-primary)]">{files.length} file{files.length !== 1 ? 's' : ''} selected</p>
          <div>
            <label htmlFor="quality-sl" className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Quality: {quality}%</label>
            <input id="quality-sl" type="range" min={10} max={100} value={quality} onChange={e => setQuality(+e.target.value)} className="w-full accent-[var(--accent-action)]" />
          </div>
          <div className="flex gap-3 flex-wrap">
            <button onClick={compress} disabled={busy} className="rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white disabled:opacity-60 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              {busy ? progress || 'Compressing...' : `Compress ${files.length > 1 ? `${files.length} Images` : 'Image'}`}
            </button>
            <button onClick={() => { setFiles([]); setResults([]); setError(''); if (inputRef.current) inputRef.current.value = ''; }} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-3 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              <Trash2 className="h-4 w-4" />Clear
            </button>
          </div>
        </div>
      )}

      {/* Results — one card per file */}
      {results.length > 0 && (
        <div className="space-y-4">
          <p className="font-bold text-[var(--text-primary)]">Results — {results.filter(r => r.compressedUrl).length} compressed</p>
          {results.map((r, i) => (
            <div key={i} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
              {r.compressedUrl ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">Original</p>
                    <p className="text-sm text-[var(--text-secondary)]">{r.originalName}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{formatBytes(r.originalSize)} · {r.width}×{r.height}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-[var(--text-muted)] mb-2">Compressed — saved {savings(r.originalSize, r.compressedSize)}%</p>
                    <img src={r.compressedUrl} alt="Preview" className="h-24 rounded-xl object-contain bg-[var(--bg-canvas)] w-full mb-2" />
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{formatBytes(r.compressedSize)}</p>
                    {/* Rename input */}
                    <div className="flex gap-2 items-center flex-wrap">
                      <input
                        value={r.customName}
                        onChange={e => updateName(i, e.target.value)}
                        placeholder="File name"
                        className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
                        aria-label="Download file name"
                      />
                      <span className="text-sm text-[var(--text-muted)]">.{ext(r.type)}</span>
                      <a href={r.compressedUrl} download={`${r.customName || 'compressed'}.${ext(r.type)}`} className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--accent-action)] px-4 py-2 text-sm font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
                        <Download className="h-4 w-4" />Download
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-[var(--danger)]">Could not compress: {r.originalName}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
