'use client';

import { CheckCircle2, Copy, FileUp, Trash2, Wand2 } from 'lucide-react';
import { ChangeEvent, useMemo, useRef, useState } from 'react';

type Stats = { chars: number; keys: number };

function countKeys(value: unknown): number {
  if (Array.isArray(value)) return value.reduce<number>((sum, item) => sum + countKeys(item), 0);
  if (value && typeof value === 'object') return Object.entries(value as Record<string, unknown>).reduce<number>((sum, [, item]) => sum + 1 + countKeys(item), 0);
  return 0;
}

function highlightJson(json: string): string {
  const escaped = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/("(?:\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"\s*:)|("(?:\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*")|\b(true|false)\b|\b(null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g, (match) => {
    if (/^".*":$/.test(match.trim())) return `<span class="syntax-key">${match}</span>`;
    if (match.startsWith('"')) return `<span class="syntax-string">${match}</span>`;
    if (match === 'true' || match === 'false') return `<span class="syntax-boolean">${match}</span>`;
    if (match === 'null') return `<span class="syntax-null">${match}</span>`;
    return `<span class="syntax-number">${match}</span>`;
  });
}

function parseErrorLocation(input: string, message: string): string {
  const match = message.match(/position (\d+)/i);
  if (!match) return message;
  const position = Number(match[1]);
  const before = input.slice(0, position);
  const lines = before.split('\n');
  return `${message} at line ${lines.length}, column ${lines[lines.length - 1].length + 1}`;
}

export function JsonFormatter(): React.ReactElement {
  const [input, setInput] = useState('{\n  "site": "tools2do.com",\n  "private": true\n}');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState<Stats | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const lines = useMemo(() => input.split('\n').map((_, index) => index + 1), [input]);
  const highlighted = useMemo(() => highlightJson(output), [output]);

  function transform(spaces: number | null): void {
    try {
      const parsed: unknown = JSON.parse(input);
      const next = spaces === null ? JSON.stringify(parsed) : JSON.stringify(parsed, null, spaces);
      setOutput(next);
      setStats({ chars: next.length, keys: countKeys(parsed) });
      setError('');
    } catch (exception) {
      const message = exception instanceof Error ? exception.message : 'Invalid JSON';
      setError(parseErrorLocation(input, message));
      setStats(null);
    }
  }

  function onUpload(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setInput(String(reader.result ?? ''));
    reader.readAsText(file);
  }

  async function copyOutput(): Promise<void> {
    if (output) await navigator.clipboard.writeText(output);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => transform(2)} className="rounded-xl bg-[var(--accent-action)] px-4 py-2 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Wand2 className="mr-2 inline h-4 w-4" />Format</button>
        <button type="button" onClick={() => transform(null)} className="rounded-xl border border-[var(--border-default)] px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Minify</button>
        <button type="button" onClick={copyOutput} className="rounded-xl border border-[var(--border-default)] px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Copy className="mr-2 inline h-4 w-4" />Copy Output</button>
        <button type="button" onClick={() => { setInput(''); setOutput(''); setError(''); setStats(null); }} className="rounded-xl border border-[var(--border-default)] px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Trash2 className="mr-2 inline h-4 w-4" />Clear</button>
        <button type="button" onClick={() => fileRef.current?.click()} className="rounded-xl border border-[var(--border-default)] px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><FileUp className="mr-2 inline h-4 w-4" />Upload JSON file</button>
        <input ref={fileRef} type="file" accept="application/json,.json" onChange={onUpload} className="hidden" />
      </div>
      {error && <p role="alert" className="mb-4 rounded-xl border border-[var(--danger)] bg-[var(--bg-surface)] p-3 text-[var(--danger)]">{error}</p>}
      {stats && <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-4 py-2 text-sm text-[var(--success)]"><CheckCircle2 className="h-4 w-4" />Valid JSON · {stats.chars} characters · {stats.keys} keys</p>}
      <div className="grid gap-4 lg:grid-cols-2">
        <label className={`grid min-h-[560px] grid-cols-[3rem_1fr] overflow-hidden rounded-2xl border ${error ? 'border-[var(--danger)]' : 'border-[var(--border-default)]'} bg-[var(--bg-surface)]`}>
          <span className="sr-only">Raw JSON input</span>
          <span className="select-none bg-[var(--bg-canvas)] px-3 py-4 text-right text-sm leading-6 text-[var(--text-muted)]">{lines.map((line) => <span key={line} className="block">{line}</span>)}</span>
          <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.ctrlKey && event.key === 'Enter') transform(2); }} spellCheck={false} className="min-h-[560px] resize-none bg-transparent p-4 font-mono text-sm leading-6 outline-none" />
        </label>
        <pre className="min-h-[560px] overflow-auto rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-sm leading-6"><code dangerouslySetInnerHTML={{ __html: highlighted || 'Formatted output appears here.' }} /></pre>
      </div>
    </section>
  );
}
