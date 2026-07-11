import type { Metadata } from "next";
import { site, experience, recognition } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Builder focused on AI, developer tools, and crypto infrastructure.",
};

const tools = [
  {
    area: "AI systems",
    detail:
      "MCP servers, agentic workflows, RAG pipelines, and the guardrails that make agents trustworthy.",
  },
  {
    area: "Products",
    detail:
      "Full-stack web and mobile with TypeScript, Next.js, and React Native. Shipped to real users, not demos.",
  },
  {
    area: "Infrastructure",
    detail:
      "On-chain programs and SDKs across Solana, Ethereum, and Aptos, in Rust, Move, and Solidity.",
  },
];

export default function ResumePage() {
  return (
    <>
      <header className="pt-20 sm:pt-28">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Resume
          </h1>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink whitespace-nowrap"
          >
            Download PDF ↗
          </a>
        </div>
        <p className="mt-6 text-xl text-ink leading-relaxed font-medium tracking-tight text-balance">
          Builder focused on AI, developer tools, and crypto infrastructure.
        </p>
        <p className="mt-3 text-lg text-ink-secondary leading-relaxed max-w-[54ch]">
          I enjoy turning complex systems into products that feel simple.
          Founder of ClearSign. Before that I helped more than fifty teams
          ship to Solana mainnet as DevRel Lead at SOON SVM.
        </p>
      </header>

      {/* Experience */}
      <section className="mt-16 border-t border-line pt-10">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-8">
          Experience
        </p>
        <ol className="space-y-12">
          {experience.map((role) => (
            <li key={role.company}>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-[17px] font-semibold tracking-tight text-ink">
                  {role.company}
                </h2>
                <span className="text-sm text-ink-muted whitespace-nowrap">
                  {role.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-ink-secondary">{role.title}</p>
              <p className="mt-3 text-[15px] text-ink-secondary leading-relaxed">
                {role.story}
              </p>
              {role.metrics && (
                <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">
                  {role.metrics}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Independent work */}
      <section className="mt-16 border-t border-line pt-10">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-8">
          Independent work
        </p>
        <ol className="space-y-12">
          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-[17px] font-semibold tracking-tight text-ink">
                ClearSign
              </h2>
              <span className="text-sm text-ink-muted whitespace-nowrap">
                Since 2026
              </span>
            </div>
            <p className="mt-3 text-[15px] text-ink-secondary leading-relaxed">
              A signing and verification layer for Solana treasuries and AI
              agents, live on mainnet. Agents run on-chain transactions
              through plain language verification, policy checks, and anomaly
              detection. Every proposal is hashed, time limited, and approved
              by multiple signers.
            </p>
          </li>
          <li>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-[17px] font-semibold tracking-tight text-ink">
                Joule Finance
              </h2>
              <span className="text-sm text-ink-muted whitespace-nowrap">
                2024 to 2025
              </span>
            </div>
            <p className="mt-3 text-[15px] text-ink-secondary leading-relaxed">
              Built the on-chain programs for an LRT bridge and money market
              on Aptos: lending, borrowing, and cross-chain LST support via
              Axelar.
            </p>
            <p className="mt-2 text-[15px] text-ink-muted leading-relaxed">
              100k transactions in the first week of testnet; 50k+ money
              market users.
            </p>
          </li>
        </ol>
      </section>

      {/* How I work */}
      <section className="mt-16 border-t border-line pt-10">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-8">
          What I work with
        </p>
        <dl className="space-y-6">
          {tools.map(({ area, detail }) => (
            <div key={area}>
              <dt className="text-[15px] font-medium text-ink">{area}</dt>
              <dd className="mt-1 text-[15px] text-ink-secondary leading-relaxed">
                {detail}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Recognition */}
      <section className="mt-16 border-t border-line pt-10">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-8">
          Recognition
        </p>
        <ul className="space-y-3">
          {recognition.map((item) => (
            <li
              key={item}
              className="text-[15px] text-ink-secondary leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-16 text-sm text-ink-muted">
        For references and details, write to{" "}
        <a
          href={`mailto:${site.email}`}
          className="text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink"
        >
          {site.email}
        </a>
        .
      </p>
    </>
  );
}
