import { AdSlot } from '@/components/AdSlot';
import { BentoGrid } from '@/components/BentoGrid';
import { HeroSearchBar } from '@/components/HeroSearchBar';
import { GLOBAL_TOOLS } from '@/lib/tools-registry';

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSearchBar
        title="Free online tools that run instantly in your browser"
        subtitle="Developer utilities, image tools, converters, text helpers, and Pakistan utility guides — no signup, no server processing."
      />
      <AdSlot position="leaderboard" />
      <BentoGrid tools={GLOBAL_TOOLS} />
    </>
  );
}
