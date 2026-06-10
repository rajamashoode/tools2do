'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
function parseCSV(text: string): string[][] {
  return text.trim().split(/\r?\n/).filter(Boolean).map(row => {
    const cells: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < row.length; i++) {
      if (row[i] === '"') { inQuotes = !inQuotes; }
      else if (row[i] === ',' && !inQuotes) { cells.push(current.trim()); current = ''; }
      else { current += row[i]; }
    }
    cells.push(current.trim());
    return cells;
  });
}
export function CsvToJson(): React.ReactElement {
  const [csv, setCsv]     = useState('name,age,city\nAli,25,Lahore\nSara,30,Karachi');
  const [json, setJson]   = useState('');
  const [error, setError] = useState('');
  function convert() {
    setError('');
    try {
      const rows = parseCSV(csv);
      const headers = rows[0];
      if (!headers) { setError('CSV has no header row.'); return; }
      const data = rows.slice(1).filter(r=>r.length).map(row => {
        const obj: Record<string,string> = {};
        headers.forEach((h,i) => { obj[h] = row[i] ?? ''; });
        return obj;
      });
      setJson(JSON.stringify(data, null, 2));
    } catch(e) { setError((e as Error).message); }
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">CSV Input</label>
          <textarea value={csv} onChange={e=>setCsv(e.target.value)} rows={14} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-[var(--text-primary)]">JSON Output</label>
            {json && <button onClick={()=>navigator.clipboard.writeText(json)} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline"><Copy className="h-3 w-3"/>Copy</button>}
          </div>
          <pre className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm whitespace-pre-wrap overflow-auto min-h-64">{json||<span className="text-[var(--text-muted)]">JSON output appears here</span>}</pre>
        </div>
      </div>
      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]">{error}</p>}
      <button onClick={convert} className="rounded-xl bg-[var(--accent-action)] px-6 py-2.5 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Convert CSV → JSON</button>
    </div>
  );
}
