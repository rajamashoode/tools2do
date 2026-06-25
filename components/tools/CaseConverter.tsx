'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
export function CaseConverter(): React.ReactElement {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const conversions = [
    { label: 'UPPERCASE', fn: (s:string) => s.toUpperCase() },
    { label: 'lowercase', fn: (s:string) => s.toLowerCase() },
    { label: 'Title Case', fn: (s:string) => s.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()) },
    { label: 'Sentence case', fn: (s:string) => s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()) },
    { label: 'slug-format', fn: (s:string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') },
    { label: 'camelCase', fn: (s:string) => s.toLowerCase().replace(/[^a-z0-9]+(.)/g,(_,c)=>c.toUpperCase()) },
    { label: 'snake_case', fn: (s:string) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_') },
    { label: 'kebab-case', fn: (s:string) => s.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') },
    { label: 'PascalCase', fn: (s:string) => s.toLowerCase().replace(/(?:^|[^a-z0-9]+)(.)/g,(_,c)=>c.toUpperCase()) },
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <textarea value={input} onChange={e=>{setInput(e.target.value);setOutput('');}} placeholder="Paste your text here..." rows={6} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      <div className="flex flex-wrap gap-2">
        {conversions.map(c=>(
          <button key={c.label} onClick={()=>setOutput(c.fn(input))} className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border-default)] px-4 py-2 text-sm font-semibold hover:border-[var(--accent-indigo)] hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">{c.label}</button>
        ))}
      </div>
      {output && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-semibold uppercase text-[var(--text-muted)]">Result</p>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline"><Copy className="h-3 w-3"/>Copy</button>
          </div>
          <p className="font-mono text-sm text-[var(--text-primary)] whitespace-pre-wrap break-all">{output}</p>
        </div>
      )}
    </div>
  );
}
