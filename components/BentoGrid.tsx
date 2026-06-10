'use client';

import { BentoTile } from '@/components/BentoTile';
import type { Tool } from '@/lib/tools-registry';

type Props = { tools: Tool[] };

export function BentoGrid({ tools }: Props): React.ReactElement {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-12 gap-4 px-4 py-10 md:gap-6 md:px-6" aria-label="Tools grid">
      {tools.map((tool) => <BentoTile key={tool.id} tool={tool} />)}
    </section>
  );
}
