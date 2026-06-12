import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Pakistan Petrol Price Checker',
    description: 'Check current petrol and diesel prices in Pakistan updated monthly by OGRA.',
    alternates: { canonical: 'https://tools2do.com/pk/petrol-price-checker' },
  };
}

export default function Page(): React.ReactElement {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-[var(--text-primary)]">Pakistan Petrol Price Checker</h1>
      <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">Check current petrol and diesel prices in Pakistan updated monthly by OGRA.</p>

        <div className="mt-8 rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 space-y-4">
          <h2 className="text-[length:var(--text-h2)] font-bold text-[var(--text-primary)]">Current Pakistan Fuel Prices</h2>
          <p className="text-[var(--text-secondary)]">Pakistan fuel prices are set by OGRA and revised by the government fortnightly. Check the latest prices at the official sources below:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[{label:'Petrol (Petrol/Gasoline)',hint:'Most common fuel'},{label:'High Speed Diesel (HSD)',hint:'Trucks, buses, heavy vehicles'},{label:'Light Speed Diesel (LSD)',hint:'Agricultural use'},{label:'Kerosene Oil',hint:'Rural and cooking use'}].map(f => (
              <div key={f.label} className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-canvas)] p-3">
                <p className="font-bold text-sm text-[var(--text-primary)]">{f.label}</p>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">{f.hint}</p>
              </div>
            ))}
          </div>
          <a href="https://ogra.org.pk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent-action)] px-5 py-3 font-bold text-sm text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-indigo)]">
            Check Live Prices at OGRA →
          </a>
        </div>
    </article>
  );
}
