import { AdSlot } from '@/components/AdSlot';
import { BentoGrid } from '@/components/BentoGrid';
import { HeroSearchBar } from '@/components/HeroSearchBar';
import { GLOBAL_TOOLS, PK_TOOLS } from '@/lib/tools-registry';

// NOTE: WebSite + Organization schema is injected once in app/layout.tsx.
// Do NOT add a second copy of it here — it would duplicate on every page load.

export default function HomePage(): React.ReactElement {
  const allTools = [...GLOBAL_TOOLS, ...PK_TOOLS];
  return (
    <>
      <HeroSearchBar
        title="Free online tools that run instantly in your browser"
        subtitle="Developer utilities, image tools, converters, text helpers, and Pakistan utility guides — no signup, no server processing."
      />
      <AdSlot position="leaderboard" />
      <BentoGrid tools={allTools} />
    </>
  );
}
