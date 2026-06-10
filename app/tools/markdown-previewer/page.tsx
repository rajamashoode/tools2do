import type { Metadata } from 'next';
import { MarkdownPreviewer } from '@/components/tools/MarkdownPreviewer';

export const metadata: Metadata = {
  title: 'Markdown Previewer',
  description: 'Preview Markdown content with a two-pane live editor. Runs entirely in your browser.',
  alternates: { canonical: 'https://tools2do.com/tools/markdown-previewer' },
};

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
        <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Markdown Previewer</h1>
        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">Preview Markdown content with a two-pane live editor. Runs entirely in your browser.</p>
      </div>
      <MarkdownPreviewer />
    </>
  );
}
