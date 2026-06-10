'use client';

import Link from 'next/link';
import {
  AlignJustify, AlignLeft, ArrowLeftRight, ArrowRight, BadgeCheck,
  Binary, BookOpenText, Braces, Calendar, Calculator, Clock3,
  Crop, Eraser, FileCode2, FileDown, FilePlus, Fingerprint,
  Flame, Fuel, Hash, ImageDown, KeyRound, Link as LinkIcon,
  Palette, Phone, Pipette, QrCode, ReceiptText, Regex, Repeat,
  Replace, ShieldCheck, Table2, Type, WholeWord, Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Tool } from '@/lib/tools-registry';

const ICONS: Record<string, LucideIcon> = {
  AlignJustify, AlignLeft, ArrowLeftRight, ArrowRight, BadgeCheck,
  Binary, BookOpenText, Braces, Calendar, Calculator, Clock3,
  Crop, Eraser, FileCode2, FileDown, FilePlus, Fingerprint,
  Flame, Fuel, Hash, ImageDown, KeyRound, Link: LinkIcon,
  Palette, Phone, Pipette, QrCode, ReceiptText, Regex, Repeat,
  Replace, ShieldCheck, Table2, Type, WholeWord, Zap,
};

const sizeClasses: Record<Tool['tileSize'], string> = {
  large:  'col-span-12 min-h-72 md:col-span-6 lg:col-span-4',
  medium: 'col-span-6  min-h-56 md:col-span-4 lg:col-span-3',
  small:  'col-span-6  min-h-40 md:col-span-3 lg:col-span-2',
};

type Props = { tool: Tool };

export function BentoTile({ tool }: Props): React.ReactElement {
  const Icon = ICONS[tool.icon] ?? Braces;
  return (
    <Link
      href={tool.slug}
      className={`
        ${sizeClasses[tool.tileSize]}
        group flex flex-col justify-between rounded-2xl
        border border-[var(--border-default)] bg-[var(--bg-surface)] p-4
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[var(--accent-indigo)]
        hover:bg-[var(--bg-surface-hover)] hover:shadow-[0_0_24px_rgba(99,102,241,0.25)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]
      `}
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--bg-canvas)] text-[var(--accent-action)]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {tool.isNew && (
          <span className="rounded-full bg-[var(--accent-indigo)] px-2 py-1 text-xs font-bold text-white">New</span>
        )}
      </div>
      <div className="mt-3 space-y-2">
        <p className="text-base font-bold leading-snug text-[var(--text-primary)]">{tool.name}</p>
        {tool.tileSize !== 'small' && (
          <p className="text-sm leading-6 text-[var(--text-secondary)]">{tool.description}</p>
        )}
        {tool.tileSize === 'large' && (
          <div className="mt-2 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">Quick Preview</p>
            <div className="flex gap-2">
              <span className="min-w-0 flex-1 rounded-xl border border-[var(--border-default)] px-3 py-2 text-sm text-[var(--text-muted)]">Paste input here...</span>
              <span className="rounded-xl bg-[var(--accent-action)] px-3 py-2 text-sm font-bold text-white">Open</span>
            </div>
          </div>
        )}
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent-action)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
          Open tool <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
