'use client';

import { type ChangeEvent, type DragEvent, useRef, useState } from 'react';
import { FileDown, FilePlus, Trash2 } from 'lucide-react';

type PdfPage = unknown;

type PdfDocument = {
  getPageIndices: () => number[];
  getPageCount: () => number;
  copyPages: (src: PdfDocument, indices: number[]) => Promise<PdfPage[]>;
  addPage: (page: PdfPage) => void;
  save: () => Promise<Uint8Array>;
};

type PDFLibGlobal = {
  PDFDocument: {
    create: () => Promise<PdfDocument>;
    load: (bytes: ArrayBuffer) => Promise<PdfDocument>;
  };
};

declare global {
  interface Window {
    PDFLib?: PDFLibGlobal;
  }
}

function parsePageRanges(s: string, max: number): number[] {
  const set: number[] = [];

  s.split(',').forEach((part) => {
    const [a, b] = part
      .trim()
      .split('-')
      .map((x) => parseInt(x.trim(), 10));

    if (!isNaN(a)) {
      const end = isNaN(b) ? a : b;

      for (let i = a; i <= end && i <= max; i++) {
        if (i > 0) set.push(i - 1);
      }
    }
  });

  return [...new Set(set)].sort((a, b) => a - b);
}

export function PdfMergeSplit(): React.ReactElement {
  const [files, setFiles] = useState<File[]>([]);
  const [pages, setPages] = useState('');
  const [outName, setOutName] = useState('tools2do-pdf');
  const [status, setStatus] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  function loadFiles(fl: FileList | File[]): void {
    setError('');
    setPdfUrl('');
    setStatus('');

    const valid = Array.from(fl).filter((f) => f.type === 'application/pdf');

    if (!valid.length) {
      setError('Please select PDF files.');
      return;
    }

    setFiles((prev) => [...prev, ...valid]);
  }

  function removeFile(i: number): void {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
  }

  async function loadPDFLib(): Promise<void> {
    if (window.PDFLib) return;

    await new Promise<void>((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://unpkg.com/pdf-lib/dist/pdf-lib.min.js';
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('pdf-lib load failed'));
      document.head.appendChild(s);
    });
  }

  function fileToBytes(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result as ArrayBuffer);
      r.onerror = reject;
      r.readAsArrayBuffer(file);
    });
  }

  function saveBlob(bytes: Uint8Array): void {
    const arrayBuffer = bytes.buffer.slice(
      bytes.byteOffset,
      bytes.byteOffset + bytes.byteLength
    ) as ArrayBuffer;

    const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
    setPdfUrl(URL.createObjectURL(blob));
  }

  async function merge(): Promise<void> {
    if (!files.length) {
      setError('Add at least one PDF.');
      return;
    }

    setBusy(true);
    setError('');
    setPdfUrl('');

    try {
      setStatus('Loading PDF library...');
      await loadPDFLib();

      if (!window.PDFLib) {
        throw new Error('PDF library was not loaded.');
      }

      const { PDFDocument } = window.PDFLib;

      setStatus(`Merging ${files.length} PDF${files.length > 1 ? 's' : ''}...`);

      const out = await PDFDocument.create();

      for (const file of files) {
        const bytes = await fileToBytes(file);
        const src = await PDFDocument.load(bytes);
        const copied = await out.copyPages(src, src.getPageIndices());

        copied.forEach((p) => out.addPage(p));
      }

      const bytes = await out.save();
      saveBlob(bytes);

      setStatus(`Done! ${out.getPageCount()} pages merged.`);
    } catch (e) {
      setError((e as Error).message || 'Merge failed.');
    }

    setBusy(false);
  }

  async function split(): Promise<void> {
    if (!files.length) {
      setError('Select a PDF to split.');
      return;
    }

    if (!pages.trim()) {
      setError('Enter page numbers or ranges, e.g. 1,3,5-7');
      return;
    }

    setBusy(true);
    setError('');
    setPdfUrl('');

    try {
      setStatus('Loading PDF library...');
      await loadPDFLib();

      if (!window.PDFLib) {
        throw new Error('PDF library was not loaded.');
      }

      const { PDFDocument } = window.PDFLib;

      setStatus('Splitting PDF...');

      const bytes = await fileToBytes(files[0]);
      const src = await PDFDocument.load(bytes);
      const indices = parsePageRanges(pages, src.getPageCount());

      if (!indices.length) {
        setError('No valid pages found. Check your input.');
        setBusy(false);
        return;
      }

      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, indices);

      copied.forEach((p) => out.addPage(p));

      const outBytes = await out.save();
      saveBlob(outBytes);

      setStatus(`Done! ${out.getPageCount()} pages extracted.`);
    } catch (e) {
      setError((e as Error).message || 'Split failed.');
    }

    setBusy(false);
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 md:px-6 space-y-5">
      <div
        onDrop={(e: DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          if (e.dataTransfer.files.length) loadFiles(e.dataTransfer.files);
        }}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
        }}
        role="button"
        tabIndex={0}
        aria-label="Upload PDFs"
        className="cursor-pointer rounded-3xl border-2 border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-8 text-center hover:border-[var(--accent-indigo)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
      >
        <FilePlus className="mx-auto h-10 w-10 text-[var(--accent-action)]" />

        <p className="mt-3 font-bold text-[var(--text-primary)]">
          Drag and drop PDF files, or click to upload
        </p>

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Merge multiple PDFs · or split pages from one PDF · runs in your browser
        </p>

        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          multiple
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files?.length) loadFiles(e.target.files);
          }}
          className="hidden"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]"
        >
          {error}
        </p>
      )}

      {files.length > 0 && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
          <div className="space-y-2">
            {files.map((f, i) => (
              <div
                key={`${f.name}-${i}`}
                className="flex items-center gap-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-3"
              >
                <span className="text-xs font-bold text-[var(--text-muted)] w-5">
                  {i + 1}
                </span>

                <p className="flex-1 text-sm truncate text-[var(--text-primary)]">
                  {f.name}
                </p>

                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-xs text-[var(--danger)] rounded-lg border border-[var(--border-default)] px-2 py-1 hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">
                Pages to extract for Split
              </label>

              <input
                value={pages}
                onChange={(e) => setPages(e.target.value)}
                placeholder="e.g. 1,3,5-7"
                className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-[var(--text-primary)]">
                Output file name
              </label>

              <div className="flex gap-2 items-center">
                <input
                  value={outName}
                  onChange={(e) => setOutName(e.target.value)}
                  placeholder="tools2do-pdf"
                  className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
                />

                <span className="text-sm text-[var(--text-muted)] shrink-0">
                  .pdf
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              type="button"
              onClick={merge}
              disabled={busy}
              className="rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-white disabled:opacity-60 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              {busy ? status : 'Merge PDFs'}
            </button>

            <button
              type="button"
              onClick={split}
              disabled={busy}
              className="rounded-xl border border-[var(--border-default)] px-5 py-3 font-semibold text-sm disabled:opacity-60 hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              Split First PDF
            </button>

            <button
              type="button"
              onClick={() => {
                setFiles([]);
                setPdfUrl('');
                setStatus('');
                setError('');
                if (inputRef.current) inputRef.current.value = '';
              }}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] px-4 py-3 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              <Trash2 className="h-4 w-4" />
              Clear
            </button>
          </div>
        </div>
      )}

      {pdfUrl && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-center space-y-3">
          <p className="font-semibold text-[var(--success)]">{status}</p>

          <a
            href={pdfUrl}
            download={`${outName || 'tools2do-pdf'}.pdf`}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-6 py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
          >
            <FileDown className="h-5 w-5" />
            Download {outName || 'tools2do-pdf'}.pdf
          </a>
        </div>
      )}
    </section>
  );
}