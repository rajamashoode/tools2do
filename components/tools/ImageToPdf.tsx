'use client';

import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import { FileDown, ImageUp, Trash2 } from 'lucide-react';

export function ImageToPdf(): React.ReactElement {
  const [files, setFiles]   = useState<File[]>([]);
  const [pdfName, setPdfName] = useState('images-to-pdf');
  const [status, setStatus] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [busy, setBusy]     = useState(false);
  const [error, setError]   = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  function loadFiles(fl: FileList | File[]): void {
    setError(''); setPdfUrl(''); setStatus('');
    const valid = Array.from(fl).filter(f => f.type.startsWith('image/'));
    if (!valid.length) { setError('No valid image files selected.'); return; }
    setFiles(prev => [...prev, ...valid]);
  }

  function removeFile(i: number): void { setFiles(prev => prev.filter((_, idx) => idx !== i)); }
  function moveUp(i: number): void { if (i === 0) return; setFiles(prev => { const a = [...prev]; [a[i-1],a[i]] = [a[i],a[i-1]]; return a; }); }

  async function convert(): Promise<void> {
    if (!files.length) { setError('Add at least one image.'); return; }
    setBusy(true); setError(''); setStatus(''); setPdfUrl('');

    try {
      // Dynamically load jsPDF from CDN
      setStatus('Loading PDF library...');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
const { jsPDF } = (window as any).jspdf;
      const pdf = new jsPDF();
      setStatus(`Creating PDF from ${files.length} image${files.length > 1 ? 's' : ''}...`);

      for (let i = 0; i < files.length; i++) {
        setStatus(`Processing image ${i + 1} of ${files.length}...`);
        const dataUrl = await fileToDataUrl(files[i]);
        const img = await loadImage(dataUrl);
        if (i > 0) pdf.addPage();
        const W = pdf.internal.pageSize.getWidth();
        const H = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(W / img.width, H / img.height);
        const x = (W - img.width * ratio) / 2;
        const y = (H - img.height * ratio) / 2;
        pdf.addImage(dataUrl, 'JPEG', x, y, img.width * ratio, img.height * ratio);
      }

      const blob = pdf.output('blob');
      setPdfUrl(URL.createObjectURL(blob));
      setStatus(`Done! PDF ready — ${files.length} page${files.length > 1 ? 's' : ''}.`);
    } catch (e) {
      setError((e as Error).message || 'PDF creation failed.');
    }
    setBusy(false);
  }

  function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement('script');
      s.src = src; s.onload = () => resolve(); s.onerror = () => reject(new Error('Script load failed'));
      document.head.appendChild(s);
    });
  }

  function fileToDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result as string);
      r.onerror = reject;
      r.readAsDataURL(file);
    });
  }

  function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 md:px-6 space-y-5">
      <div
        onDrop={(e: DragEvent<HTMLDivElement>) => { e.preventDefault(); if (e.dataTransfer.files.length) loadFiles(e.dataTransfer.files); }}
        onDragOver={e => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click(); }}
        role="button" tabIndex={0} aria-label="Upload images for PDF"
        className="cursor-pointer rounded-3xl border-2 border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-8 text-center hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
      >
        <ImageUp className="mx-auto h-10 w-10 text-[var(--accent-action)]" />
        <p className="mt-3 font-bold text-[var(--text-primary)]">Drag and drop images, or click to upload</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">Each image becomes one PDF page · order is adjustable · runs in your browser</p>
        <input ref={inputRef} type="file" accept="image/*" multiple onChange={(e: ChangeEvent<HTMLInputElement>) => { if (e.target.files?.length) loadFiles(e.target.files); }} className="hidden" />
      </div>

      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]">{error}</p>}

      {files.length > 0 && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
          <p className="font-semibold text-[var(--text-primary)]">Images ({files.length}) — drag to reorder</p>
          <div className="space-y-2">
            {files.map((f, i) => (
              <div key={`${f.name}-${i}`} className="flex items-center gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-3">
                <span className="text-xs font-bold text-[var(--text-muted)] w-5 shrink-0">{i + 1}</span>
                <p className="flex-1 text-sm truncate text-[var(--text-primary)]">{f.name}</p>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => moveUp(i)} disabled={i === 0} className="rounded-lg border border-[var(--border-default)] px-2 py-1 text-xs disabled:opacity-30 hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">↑</button>
                  <button onClick={() => removeFile(i)} className="rounded-lg border border-[var(--border-default)] px-2 py-1 text-xs text-[var(--danger)] hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">✕</button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">PDF file name</label>
            <div className="flex gap-2 items-center">
              <input value={pdfName} onChange={e => setPdfName(e.target.value)} placeholder="images-to-pdf" className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
              <span className="text-sm text-[var(--text-muted)] shrink-0">.pdf</span>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button onClick={convert} disabled={busy} className="rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white disabled:opacity-60 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              {busy ? status || 'Converting...' : 'Convert to PDF'}
            </button>
            <button onClick={() => { setFiles([]); setPdfUrl(''); setStatus(''); setError(''); if (inputRef.current) inputRef.current.value = ''; }} className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-3 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
              <Trash2 className="h-4 w-4" />Clear
            </button>
          </div>
        </div>
      )}

      {pdfUrl && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center space-y-3">
          <p className="font-semibold text-[var(--text-primary)]">{status}</p>
          <a href={pdfUrl} download={`${pdfName || 'images-to-pdf'}.pdf`} className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-6 py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            <FileDown className="h-5 w-5" />Download {pdfName || 'images-to-pdf'}.pdf
          </a>
        </div>
      )}
    </section>
  );
}
