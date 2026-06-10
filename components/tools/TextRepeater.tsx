'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
export function TextRepeater(): React.ReactElement {
  const [text,setText]       = useState('Hello, World!');
  const [count,setCount]     = useState(5);
  const [separator,setSep]   = useState('newline');
  const [output,setOutput]   = useState('');
  function repeat() {
    const sep = separator==='newline'?'\n':separator==='space'?' ':', ';
    setOutput(Array(Math.max(1,Math.min(500,count))).fill(text).join(sep));
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Text to repeat</label>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={4} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Repeat count</label>
          <input type="number" min={1} max={500} value={count} onChange={e=>setCount(+e.target.value)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Separator</label>
          <select value={separator} onChange={e=>setSep(e.target.value)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            <option value="newline">New line</option>
            <option value="space">Space</option>
            <option value="comma">Comma</option>
          </select>
        </div>
      </div>
      <button onClick={repeat} className="rounded-xl bg-[var(--accent-action)] px-6 py-2.5 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Repeat Text</button>
      {output && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-semibold uppercase text-[var(--text-muted)]">Result</p>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline"><Copy className="h-3 w-3"/>Copy</button>
          </div>
          <p className="text-sm whitespace-pre-wrap max-h-64 overflow-auto">{output}</p>
        </div>
      )}
    </div>
  );
}
