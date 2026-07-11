import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Things I've built",
  description:
    "Products across AI agents, payments, privacy, and developer tools, and why each one exists.",
};

export default function ProjectsPage() {
  return (
    <>
      <header className="pt-20 sm:pt-28">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          Things I&apos;ve built
        </h1>
        <p className="mt-4 text-lg text-ink-secondary leading-relaxed max-w-[52ch]">
          Each of these started as a question I couldn&apos;t let go of. The
          short version of every answer is below. The code and the products
          are a click away.
        </p>
      </header>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <article key={project.name} className="py-10">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {project.name}
              </h2>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink whitespace-nowrap"
              >
                Visit ↗
              </a>
            </div>
            <p className="mt-1 text-lg text-ink-secondary">
              {project.tagline}
            </p>
            <p className="mt-4 text-[15px] text-ink-secondary leading-relaxed max-w-[60ch]">
              {project.story}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
