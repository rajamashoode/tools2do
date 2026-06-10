'use client';
import { useState } from 'react';
function nowUnix(): number { return Math.floor(Date.now()/1000); }
function nowISO(): string { return new Date().toISOString().slice(0,16); }
export function TimestampConverter(): React.ReactElement {
  const [unix, setUnix]   = useState(String(nowUnix()));
  const [dt, setDt]       = useState(nowISO());
  const [result, setResult] = useState('');
  function toDate() {
    const v = parseInt(unix);
    if (!v) { setResult('Enter a valid Unix timestamp.'); return; }
    const d = new Date(v * 1000);
    setResult(`UTC: ${d.toUTCString()}\nLocal: ${d.toLocaleString()}\nISO: ${d.toISOString()}`);
  }
  function toUnix() {
    const d = new Date(dt);
    if (isNaN(d.getTime())) { setResult('Enter a valid date/time.'); return; }
    setResult(`Unix timestamp: ${Math.floor(d.getTime()/1000)}`);
  }
  function useNow() { setUnix(String(nowUnix())); setDt(nowISO()); setResult(''); }
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 space-y-5">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-3">
        <p className="font-semibold text-[var(--text-primary)]">Unix Timestamp → Date</p>
        <div className="flex gap-2">
          <input value={unix} onChange={e=>setUnix(e.target.value)} placeholder="e.g. 1700000000" className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 font-mono text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
          <button onClick={toDate} className="rounded-xl bg-[var(--accent-action)] px-4 py-2 font-bold text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Convert</button>
          <button onClick={useNow} className="rounded-xl border border-[var(--border-default)] px-3 py-2 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Now</button>
        </div>
      </div>
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-3">
        <p className="font-semibold text-[var(--text-primary)]">Date → Unix Timestamp</p>
        <div className="flex gap-2">
          <input type="datetime-local" value={dt} onChange={e=>setDt(e.target.value)} className="flex-1 rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
          <button onClick={toUnix} className="rounded-xl bg-[var(--accent-action)] px-4 py-2 font-bold text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Convert</button>
        </div>
      </div>
      {result && <pre className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm whitespace-pre-wrap">{result}</pre>}
    </div>
  );
}
