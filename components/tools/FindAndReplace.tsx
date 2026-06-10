'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
export function FindAndReplace(): React.ReactElement {
  const [text,setText]       = useState('');
  const [find,setFind]       = useState('');
  const [replace,setReplace] = useState('');
  const [output,setOutput]   = useState('');
  const [useRegex,setUseRegex] = useState(false);
  const [ignoreCase,setIgnoreCase] = useState(false);
  const [count,setCount]     = useState(0);
  function run() {
    if (!find) { setOutput(text); setCount(0); return; }
    let result = text;
    let n = 0;
    if (useRegex) {
      try {
        const flags = 'g' + (ignoreCase ? 'i' : '');
        const r = new RegExp(find, flags);
        result = text.replace(r, m => { n++; return replace || m; });
        n = (text.match(new RegExp(find, flags)) || []).length;
        result = text.replace(r, replace);
      } catch { setOutput('Invalid regex pattern.'); return; }
    } else {
      const f = ignoreCase ? new RegExp(find.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi') : null;
      if (f) {
        result = text.replace(f, m => { n++; return replace; });
        n = (text.match(f)||[]).length;
        result = text.replace(f, replace);
      } else {
        n = text.split(find).length - 1;
        result = text.split(find).join(replace);
      }
    }
    setOutput(result);
    setCount(n);
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." rows={8} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      <div className="grid gap-3 sm:grid-cols-2">
        <input value={find} onChange={e=>setFind(e.target.value)} placeholder="Find..." className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        <input value={replace} onChange={e=>setReplace(e.target.value)} placeholder="Replace with..." className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <label className="flex items-center gap-1.5 text-sm cursor-pointer"><input type="checkbox" checked={useRegex} onChange={e=>setUseRegex(e.target.checked)} className="accent-[var(--accent-indigo)]"/>Use Regex</label>
        <label className="flex items-center gap-1.5 text-sm cursor-pointer"><input type="checkbox" checked={ignoreCase} onChange={e=>setIgnoreCase(e.target.checked)} className="accent-[var(--accent-indigo)]"/>Ignore case</label>
        <button onClick={run} className="rounded-xl bg-[var(--accent-action)] px-5 py-2 font-bold text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Replace All</button>
        {count > 0 && <span className="text-sm text-[var(--text-secondary)]">{count} replacement(s) made</span>}
      </div>
      {output && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-semibold uppercase text-[var(--text-muted)]">Result</p>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline"><Copy className="h-3 w-3"/>Copy</button>
          </div>
          <p className="text-sm whitespace-pre-wrap">{output}</p>
        </div>
      )}
    </div>
  );
}
