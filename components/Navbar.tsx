'use client';

import Link from 'next/link';
import { GitFork, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { CommandPalette } from '@/components/CommandPalette';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteConfig } from '@/lib/site-config';

const navLinks = [
  { href: '/',                      label: 'Developer Tools'    },
  { href: '/pk',                    label: 'Pakistan Utilities' },
  { href: '/blog',                  label: 'Blog'               },
  { href: '/tools/json-formatter',  label: 'JSON Formatter'     },
  { href: '/pk/check-lesco-bill',   label: 'LESCO Bill'         },
];

export function Navbar(): React.ReactElement {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-[var(--bg-canvas)]/80 backdrop-blur-md">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
          >
            tools2do<span className="text-[var(--accent-action)]">.com</span>
          </Link>

          {/* Desktop search trigger */}
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            className="hidden min-w-80 items-center justify-between rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)] md:flex"
            aria-label="Open command palette"
          >
            <span className="inline-flex items-center gap-2">
              <Search className="h-4 w-4" aria-hidden="true" />
              Search tools
            </span>
            <kbd className="rounded-md border border-[var(--border-default)] px-2 py-0.5 text-xs">⌘K</kbd>
          </button>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
              aria-label="Star on GitHub"
            >
              <GitFork className="h-4 w-4" aria-hidden="true" />
              Star
            </a>
            <ThemeToggle />
            <Link
              href="/pk"
              className="rounded-full border border-[var(--border-default)] px-3 py-2 text-sm hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
              aria-label="Open Pakistan utilities"
            >
              🇵🇰 PK
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="rounded-full p-2 text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)] md:hidden"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            {drawerOpen
              ? <X className="h-6 w-6" aria-hidden="true" />
              : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>

        {/* Mobile drawer */}
        {drawerOpen && (
          <div className="border-t border-[var(--border-default)] bg-[var(--bg-canvas)] p-4 md:hidden">
            <button
              type="button"
              onClick={() => { setPaletteOpen(true); setDrawerOpen(false); }}
              className="mb-3 flex w-full items-center gap-2 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-left text-[var(--text-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              Search tools
            </button>
            <nav className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-4">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Single CommandPalette instance — handles its own ⌘K listener */}
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
