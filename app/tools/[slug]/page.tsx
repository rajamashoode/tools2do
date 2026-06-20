import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TOOLS_REGISTRY } from '@/lib/tools-registry';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOLS_REGISTRY.find((item) => item.slug === `/tools/${slug}`);
  if (!tool) return { title: 'Tool Not Found', robots: { index: false, follow: true } };
  return { title: tool.name, description: tool.description, alternates: { canonical: `https://tools2do.com${tool.slug}` }, robots: { index: false, follow: true } };
}

export default async function GenericToolPage({ params }: Props): Promise<React.ReactElement> {
  const { slug } = await params;
  const tool = TOOLS_REGISTRY.find((item) => item.slug === `/tools/${slug}`);
  if (!tool) notFound();
  return <article className="mx-auto max-w-4xl px-4 py-14 md:px-6"><h1 className="text-[length:var(--text-h1)] font-extrabold">{tool.name}</h1><p className="mt-4 leading-7 text-[var(--text-secondary)]">{tool.description}</p><div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6"><p className="text-[var(--text-secondary)]">This lightweight browser tool page is ready for a dedicated client-side implementation. No data is sent to a server.</p></div></article>;
}
