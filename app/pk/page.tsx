import { BentoGrid } from '@/components/BentoGrid';
import { HeroSearchBar } from '@/components/HeroSearchBar';
import { PK_TOOLS } from '@/lib/tools-registry';

export default function PakistanHubPage(): React.ReactElement {
  return (
    <>
      <HeroSearchBar
        title="Pakistan Ke Liye Top Utility Tools"
        subtitle="Bill check, subsidy calculator, petrol price helpers, BISP/Ehsaas guidance — Pakistan users ke liye fast mobile-first tools."
      />
      <BentoGrid tools={PK_TOOLS} />
    </>
  );
}
