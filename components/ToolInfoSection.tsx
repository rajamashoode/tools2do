interface Step {
  step: string;
  description: string;
}

interface ToolInfoSectionProps {
  howToSteps: Step[];
  useCases: string[];
  privacyNote: string;
}

/**
 * ToolInfoSection — standard below-the-fold content block for tool pages.
 *
 * Renders:
 *  - "How to use this tool" — numbered steps (AGENTS.md §14.2)
 *  - "What this tool is useful for" — bullet use-cases (AGENTS.md §14.1 item 11)
 *  - "Privacy & processing" — accurate privacy note (AGENTS.md §16.4)
 *
 * Each section uses a dedicated <section> with aria-labelledby for accessibility.
 * All heading levels are h2 — these appear below the tool UI inside <main>.
 */
export function ToolInfoSection({
  howToSteps,
  useCases,
  privacyNote,
}: ToolInfoSectionProps): React.ReactElement {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-2 pb-10 md:px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* How to use */}
      <section
        aria-labelledby="how-to-heading"
        className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5"
      >
        <h2
          id="how-to-heading"
          className="text-base font-bold text-[var(--text-primary)] mb-3"
        >
          How to use this tool
        </h2>
        <ol className="space-y-3 text-sm text-[var(--text-secondary)] list-none">
          {howToSteps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--accent-indigo)] bg-opacity-20 text-[var(--accent-indigo)] text-xs font-bold">
                {i + 1}
              </span>
              <span>
                <strong className="text-[var(--text-primary)]">{s.step}</strong>
                {s.description && (
                  <span className="block text-xs mt-0.5">{s.description}</span>
                )}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Use cases */}
      <section
        aria-labelledby="use-cases-heading"
        className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5"
      >
        <h2
          id="use-cases-heading"
          className="text-base font-bold text-[var(--text-primary)] mb-3"
        >
          What this tool is useful for
        </h2>
        <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
          {useCases.map((uc, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-[var(--accent-action)] shrink-0">✓</span>
              <span>{uc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Privacy */}
      <section
        aria-labelledby="privacy-heading"
        className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5"
      >
        <h2
          id="privacy-heading"
          className="text-base font-bold text-[var(--text-primary)] mb-3"
        >
          Privacy &amp; processing
        </h2>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {privacyNote}
        </p>
      </section>
    </div>
  );
}
