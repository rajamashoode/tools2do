'use client';

import { useEffect, useRef, useState } from 'react';

type Position = 'leaderboard' | 'sidebar' | 'in-feed' | 'in-article';
type Props = { position: Position };

// Minimum reserved dimensions per slot to prevent CLS
const reservedStyles: Record<Position, React.CSSProperties> = {
  leaderboard: { minHeight: 100, width: '100%', maxWidth: 728 },
  sidebar:     { minHeight: 250, width:  300 },
  'in-feed':   { minHeight: 280, width: '100%' },
  'in-article':{ minHeight: 280, width: '100%', maxWidth: 336 },
};

const containerClasses: Record<Position, string> = {
  leaderboard:  'mx-auto',
  sidebar:      '',
  'in-feed':    'w-full',
  'in-article': 'mx-auto my-8',
};

export function AdSlot({ position }: Props): React.ReactElement {
  const ref     = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const pushed  = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) setVisible(true); },
      { rootMargin: '200px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || pushed.current) return;
    pushed.current = true;
    const win = window as Window & { adsbygoogle?: unknown[] };
    try {
      win.adsbygoogle = win.adsbygoogle ?? [];
      win.adsbygoogle.push({});
    } catch {
      // AdSense not loaded — slot renders as placeholder
    }
  }, [visible]);

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? 'ca-pub-0000000000000000';
  const slotId   = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID   ?? '0000000000';

  return (
    <div
      ref={ref}
      style={reservedStyles[position]}
      className={`${containerClasses[position]} rounded-2xl border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-2 text-center`}
      aria-label={`${position} advertisement`}
    >
      <p className="mb-1 text-xs text-[var(--text-muted)]">Advertisement</p>
      {visible && (
        <ins
          className="adsbygoogle block"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
}
