'use client';
import { useState } from 'react';
import { Copy, Trash2 } from 'lucide-react';
export function JsFormatter(): React.ReactElement {
  const [input,setInput]   = useState('');
  const [output,setOutput] = useState('');
  function format() {
    setOutput(input.replace(/;/g,';\n').replace(/\{/g,' {\n  ').replace(/\}/g,'\n}\n').replace(/\n\s*\n/g,'\n').trim());
  }
  function minify() {
    setOutput(input.replace(/\/\/[^\n]*/g,'').replace(/\s+/g,' ').replace(/\s*([{}();,=+\-*/<>!&|])\s*/g,'$1').trim());
  }
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <div className="flex gap-2 flex-wrap">
        <button onClick={format} className="rounded-xl bg-[var(--accent-action)] px-4 py-2 font-bold text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Format</button>
        <button onClick={minify} className="rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Minify</button>
        <button onClick={()=>{setInput('');setOutput('');}} className="inline-flex items-center gap-1 rounded-xl border border-[var(--border-default)] px-4 py-2 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Trash2 className="h-4 w-4"/>Clear</button>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste your JavaScript here..." rows={18} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        <div className="relative rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)]">
          {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg border border-[var(--border-default)] bg-[var(--bg-canvas)] px-2 py-1 text-xs hover:bg-[var(--bg-surface-hover)]"><Copy className="h-3 w-3"/>Copy</button>}
          <pre className="p-4 text-sm font-mono whitespace-pre-wrap overflow-auto min-h-64">{output||<span className="text-[var(--text-muted)]">Output appears here</span>}</pre>
        </div>
      </div>
    </div>
  );
}
