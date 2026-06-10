'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';
const PARAS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit.',
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
];
export function LoremIpsumGenerator(): React.ReactElement {
  const [count,setCount]   = useState(3);
  const [type,setType]     = useState<'paragraphs'|'sentences'|'words'>('paragraphs');
  const [output,setOutput] = useState('');
  function generate() {
    const n = Math.max(1,Math.min(50,count));
    if (type==='paragraphs') {
      setOutput(Array.from({length:n},(_,i)=>PARAS[i%PARAS.length]).join('\n\n'));
    } else if (type==='sentences') {
      const all = PARAS.join(' ').match(/[^.!?]+[.!?]+/g)||[];
      setOutput(Array.from({length:n},(_,i)=>all[i%all.length]).join(' '));
    } else {
      const words = PARAS.join(' ').split(/\s+/);
      setOutput(Array.from({length:n},(_,i)=>words[i%words.length]).join(' ')+'.');
    }
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 md:px-6 space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Count</label>
          <input type="number" min={1} max={50} value={count} onChange={e=>setCount(+e.target.value)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"/>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-[var(--text-primary)]">Type</label>
          <select value={type} onChange={e=>setType(e.target.value as typeof type)} className="w-full rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
        </div>
      </div>
      <button onClick={generate} className="rounded-xl bg-[var(--accent-action)] px-6 py-2.5 font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">Generate</button>
      {output && (
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs font-semibold uppercase text-[var(--text-muted)]">Result</p>
            <button onClick={()=>navigator.clipboard.writeText(output)} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline"><Copy className="h-3 w-3"/>Copy</button>
          </div>
          <p className="text-sm leading-7 whitespace-pre-wrap">{output}</p>
        </div>
      )}
    </div>
  );
}
