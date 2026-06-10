'use client';
import { useState } from 'react';
function today(): string { return new Date().toISOString().slice(0,10); }
export function AgeCalculator(): React.ReactElement {
  const [dob,setDob]   = useState('2000-01-01');
  const [asof,setAsof] = useState(today());
  const [result,setResult] = useState('');
  function calc() {
    const b = new Date(dob), a = new Date(asof);
    if (isNaN(b.getTime())||isNaN(a.getTime())||a<b) { setResult('Enter valid dates (date of birth must be before as-of date).'); return; }
    let years  = a.getFullYear()-b.getFullYear();
    let months = a.getMonth()-b.getMonth();
    let days   = a.getDate()-b.getDate();
    if (days < 0)   { months--; days += new Date(a.getFullYear(), a.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    const totalDays = Math.floor((a.getTime()-b.getTime())/(86400000));
    setResult(`Age: ${years} year${years!==1?'s':''}, ${months} month${months!==1?'s':''}, ${days} day${days!==1?'s':''}\nTotal days lived: ${totalDays.toLocaleString()}\nNext birthday: ${nextBirthday(b,a)}`);
  }
  function nextBirthday(b:Date,a:Date): string {
    const nb = new Date(a.getFullYear(), b.getMonth(), b.getDate());
    if (nb <= a) nb.setFullYear(a.getFullYear()+1);
    const diff = Math.ceil((nb.getTime()-a.getTime())/86400000);
    return `${nb.toDateString()} (in ${diff} days)`;
  }
  return (
    <div className="mx-auto max-w-md px-4 py-10 md:px-6 space-y-4">
      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 space-y-4">
        <div>
          <label htmlFor="dob" className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Date of Birth</label>
          <input id="dob" type="date" value={dob} onChange={e=>setDob(e.target.value)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <div>
          <label htmlFor="asof" className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Calculate Age As Of</label>
          <input id="asof" type="date" value={asof} onChange={e=>setAsof(e.target.value)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <button onClick={calc} className="w-full rounded-xl bg-[var(--accent-action)] py-3 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Calculate Age</button>
      </div>
      {result && <pre className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 text-sm whitespace-pre-wrap leading-7">{result}</pre>}
    </div>
  );
}
