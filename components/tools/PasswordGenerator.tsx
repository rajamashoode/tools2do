'use client';
import { useState, useCallback } from 'react';
import { Copy, RefreshCw } from 'lucide-react';
export function PasswordGenerator(): React.ReactElement {
  const [length, setLength] = useState(16);
  const [upper, setUpper]   = useState(true);
  const [lower, setLower]   = useState(true);
  const [nums, setNums]     = useState(true);
  const [syms, setSyms]     = useState(false);
  const [password, setPassword] = useState('');
  const [copied, setCopied]     = useState(false);
  const generate = useCallback(() => {
    const sets = [upper?'ABCDEFGHIJKLMNOPQRSTUVWXYZ':'', lower?'abcdefghijklmnopqrstuvwxyz':'', nums?'0123456789':'', syms?'!@#$%^&*()_+-=[]{}:,.<>?':''].join('');
    if (!sets) { setPassword('Select at least one character type.'); return; }
    const arr = new Uint32Array(length);
    crypto.getRandomValues(arr);
    setPassword(Array.from(arr).map(x=>sets[x%sets.length]).join(''));
    setCopied(false);
  }, [length, upper, lower, nums, syms]);
  const copy = async () => { await navigator.clipboard.writeText(password); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  const strength = (!password||password.length<8)?'Weak':password.length<12?'Fair':password.length<16?'Good':'Strong';
  const strengthColor = {Weak:'var(--danger)',Fair:'#F59E0B',Good:'var(--accent-action)',Strong:'var(--success)'}[strength];
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 space-y-5">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Length: {length}</label>
          <input type="range" min={4} max={64} value={length} onChange={e=>setLength(+e.target.value)} className="w-full accent-[var(--accent-action)]"/>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[{label:'A–Z',v:upper,set:setUpper},{label:'a–z',v:lower,set:setLower},{label:'0–9',v:nums,set:setNums},{label:'Symbols',v:syms,set:setSyms}].map(o=>(
            <label key={o.label} className="flex items-center gap-2 cursor-pointer text-sm">
              <input type="checkbox" checked={o.v} onChange={e=>o.set(e.target.checked)} className="accent-[var(--accent-indigo)]"/>
              {o.label}
            </label>
          ))}
        </div>
        <button onClick={generate} className="w-full rounded-xl bg-[var(--accent-action)] py-3 font-bold text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Generate Password</button>
      </div>
      {password && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="font-mono text-lg font-bold break-all text-[var(--text-primary)]">{password}</p>
            <div className="flex gap-2 shrink-0">
              <button onClick={generate} aria-label="Regenerate" className="rounded-xl border border-[var(--border-default)] p-2 hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><RefreshCw className="h-4 w-4"/></button>
              <button onClick={copy} className="rounded-xl bg-[var(--accent-action)] px-4 py-2 text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"><Copy className="mr-1 inline h-4 w-4"/>{copied?'Copied!':'Copy'}</button>
            </div>
          </div>
          <p className="mt-3 text-sm" style={{color:strengthColor}}>Strength: <strong>{strength}</strong></p>
        </div>
      )}
    </div>
  );
}
