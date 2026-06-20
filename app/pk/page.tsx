import type { Metadata } from 'next';
import { BentoGrid } from '@/components/BentoGrid';
import { HeroSearchBar } from '@/components/HeroSearchBar';
import { PK_TOOLS } from '@/lib/tools-registry';

export const metadata: Metadata = {
  title: 'Pakistan Utility Tools – Bill Check, Subsidy & Program Guides',
  description: 'Free Pakistan utility helpers — check LESCO, MEPCO, IESCO, GEPCO, FESCO, HESCO, PESCO, KE bills. BISP, Ehsaas, petrol prices, and subsidy calculators.',
  alternates: { canonical: 'https://tools2do.com/pk' }
};

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
