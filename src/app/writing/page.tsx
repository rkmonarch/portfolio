import type { Metadata } from "next";
import { essays, essaysInProgress } from "@/lib/data";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "Essays on AI systems, memory, context, and the infrastructure underneath — plus earlier deep dives on Solana internals.",
};

export default function WritingPage() {
  return (
    <>
      <header className="pt-20 sm:pt-28">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          Essays
        </h1>
        <p className="mt-4 text-lg text-ink-secondary leading-relaxed max-w-[52ch]">
          I write to understand things, then publish so the next person
          starts further ahead. Right now that&apos;s mostly AI systems —
          memory, context, agents. Before that, Solana internals.
        </p>
      </header>

      {/* In progress */}
      <section className="mt-16">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-3">
          On my desk
        </p>
        <div className="divide-y divide-line border-y border-line">
          {essaysInProgress.map((essay) => (
            <div key={essay.title} className="py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-[17px] font-medium tracking-tight text-ink text-balance">
                  {essay.title}
                </h2>
                <span className="text-sm text-ink-muted whitespace-nowrap shrink-0 italic">
                  In progress
                </span>
              </div>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">
                {essay.hook}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Published */}
      <section className="mt-16">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-3">
          Published
        </p>
        <div className="divide-y divide-line border-y border-line">
          {essays.map((essay) => (
            <a
              key={essay.title}
              href={essay.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-[17px] font-medium tracking-tight text-ink text-balance">
                  {essay.title}
                </h2>
                <span className="text-sm text-ink-muted whitespace-nowrap shrink-0">
                  {essay.date}
                </span>
              </div>
              <p className="mt-2 text-[15px] text-ink-muted leading-relaxed group-hover:text-ink-secondary transition-colors">
                {essay.hook}
              </p>
            </a>
          ))}
        </div>
      </section>

      <p className="mt-10 text-sm text-ink-muted">
        Everything else lives on{" "}
        <a
          href="https://medium.com/@rkmonarch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink"
        >
          Medium
        </a>
        .
      </p>
    </>
  );
}
