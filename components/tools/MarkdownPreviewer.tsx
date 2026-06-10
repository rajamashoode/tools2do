'use client';
import { useState } from 'react';
import { Copy } from 'lucide-react';

function parseMarkdown(md: string): string {
  return md
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/^#{6}\s(.+)$/gm,'<h6>$1</h6>')
    .replace(/^#{5}\s(.+)$/gm,'<h5>$1</h5>')
    .replace(/^#{4}\s(.+)$/gm,'<h4>$1</h4>')
    .replace(/^#{3}\s(.+)$/gm,'<h3>$1</h3>')
    .replace(/^#{2}\s(.+)$/gm,'<h2>$1</h2>')
    .replace(/^#{1}\s(.+)$/gm,'<h1>$1</h1>')
    .replace(/\*\*\*(.+?)\*\*\*/g,'<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/^>\s(.+)$/gm,'<blockquote>$1</blockquote>')
    .replace(/^---$/gm,'<hr/>')
    .replace(/^[-*]\s(.+)$/gm,'<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, s => `<ul>${s}</ul>`)
    .replace(/^\d+\.\s(.+)$/gm,'<oli>$1</oli>')
    .replace(/(<oli>.*<\/oli>\n?)+/g, s => `<ol>${s.replace(/<\/?oli>/g, m => m === '<oli>' ? '<li>' : '</li>')}</ol>`)
    .replace(/\n\n/g,'</p><p>')
    .replace(/^(?!<[h1-6ulob])/gm,'')
    .replace(/\n/g,'<br/>')
    .replace(/^(.+)$/gm, s => /^<[h1-6ulobp]/.test(s) ? s : `<p>${s}</p>`)
    .replace(/<p><\/p>/g,'');
}

const SAMPLE = `# Welcome to Markdown Previewer

Write **bold**, *italic*, or \`inline code\`.

## Features
- Real-time preview
- **No server** — runs in your browser
- Supports headers, lists, links and more

[Visit Tools2Do](https://tools2do.com)

> Blockquotes look like this.

---

Ordered list:
1. First item
2. Second item
3. Third item`;

export function MarkdownPreviewer(): React.ReactElement {
  const [md, setMd] = useState(SAMPLE);
  const html = parseMarkdown(md);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Markdown</p>
            <button onClick={() => setMd('')} className="text-xs text-[var(--text-muted)] hover:text-[var(--danger)]">Clear</button>
          </div>
          <textarea value={md} onChange={e => setMd(e.target.value)} rows={24} className="w-full rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 font-mono text-sm outline-none resize-y focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Preview</p>
            <button onClick={() => navigator.clipboard.writeText(html)} className="inline-flex items-center gap-1 text-xs text-[var(--accent-action)] hover:underline">
              <Copy className="h-3 w-3"/>Copy HTML
            </button>
          </div>
          <div
            className="min-h-64 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 prose prose-sm max-w-none overflow-auto"
            style={{['--tw-prose-body' as string]: 'var(--text-secondary)', ['--tw-prose-headings' as string]: 'var(--text-primary)'}}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
}
