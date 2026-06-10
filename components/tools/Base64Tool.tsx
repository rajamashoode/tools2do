'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
export function Base64Tool(): React.ReactElement {
  const [input, setInput]   = useState('');
  const [output, setOutput] = useState('');
  const [error, setError]   = useState('');
  function encode() { setError(''); try { setOutput(btoa(unescape(encodeURIComponent(input)))); } catch { setError('Encode failed — ensure valid UTF-8 text.'); } }
  function decode() { setError(''); try { setOutput(decodeURIComponent(escape(atob(input)))); } catch { setError('Invalid Base64 string.'); } }
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 space-y-4">
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste text to encode, or Base64 to decode..." rows={7} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
      <div className="flex gap-2">
        <button onClick={encode} className="rounded-xl bg-[var(--accent-action)] px-5 py-2.5 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Encode → Base64</button>
        <button onClick={decode} className="rounded-xl border border-[var(--border-default)] px-5 py-2.5 font-semibold hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Decode ← Base64</button>
      </div>
      {error && <p role="alert" className="rounded-xl border border-[var(--danger)] p-3 text-sm text-[var(--danger)]">{error}</p>}
      {output && !error && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-semibold uppercase text-[var(--text-muted)]">Result</p>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline"><Copy className="h-3 w-3"/>Copy</button>
          </div>
          <p className="font-mono text-sm break-all whitespace-pre-wrap">{output}</p>
        </div>
      )}
    </div>
  );
}
