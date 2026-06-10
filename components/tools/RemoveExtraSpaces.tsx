'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
export function RemoveExtraSpaces(): React.ReactElement {
  const [input,setInput] = useState('');
  const [output,setOutput] = useState('');
  function clean() {
    setOutput(input.replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim());
  }
  function removeLines() {
    setOutput(input.replace(/\r?\n/g,' ').replace(/[ \t]+/g,' ').trim());
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste text with extra spaces or line breaks..." rows={8} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      <div className="flex gap-2 flex-wrap">
        <button onClick={clean} className="rounded-xl bg-[var(--accent-action)] px-5 py-2.5 font-bold text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Remove Extra Spaces</button>
        <button onClick={removeLines} className="rounded-xl border border-[var(--border-default)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Remove Line Breaks</button>
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
