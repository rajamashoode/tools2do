'use client';
import { useState } from 'react';
export function RegexTester(): React.ReactElement {
  const [pattern, setPattern] = useState('\\b\\w{5}\\b');
  const [text, setText]       = useState('The quick brown fox jumps over the lazy dog.');
  const [flags, setFlags]     = useState({ global: true, ignoreCase: false, multiline: false });
  const [result, setResult]   = useState('');
  const [error, setError]     = useState('');
  function test() {
    setError('');
    try {
      const f = (flags.global?'g':'')+(flags.ignoreCase?'i':'')+(flags.multiline?'m':'');
      const r = new RegExp(pattern, f);
      const matches = [...text.matchAll(r)];
      setResult(matches.length > 0 ? `${matches.length} match(es):\n${matches.map(m=>`"${m[0]}" at index ${m.index}`).join('\n')}` : 'No matches found.');
    } catch(e) { setError((e as Error).message); }
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Regex Pattern</label>
          <input value={pattern} onChange={e=>setPattern(e.target.value)} placeholder="Enter regex pattern..." className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 font-mono text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <div className="flex items-end gap-3 flex-wrap">
          {(['global','ignoreCase','multiline'] as const).map(f=>(
            <label key={f} className="flex items-center gap-1.5 text-sm cursor-pointer">
              <input type="checkbox" checked={flags[f]} onChange={e=>setFlags(p=>({...p,[f]:e.target.checked}))} className="accent-[var(--accent-indigo)]"/>
              {f==='global'?'Global (g)':f==='ignoreCase'?'Ignore case (i)':'Multiline (m)'}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Test String</label>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={5} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      </div>
      <button onClick={test} className="rounded-xl bg-[var(--accent-action)] px-6 py-2.5 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Test Regex</button>
      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 font-mono text-sm text-[var(--danger)]">Error: {error}</p>}
      {result && !error && <pre className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-sm whitespace-pre-wrap font-mono">{result}</pre>}
    </div>
  );
}
