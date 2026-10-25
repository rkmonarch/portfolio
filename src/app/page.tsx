import Link from "next/link";
import { Section } from "@/components/section";
import {
  site,
  projects,
  currentWork,
  essays,
  essaysInProgress,
  experience,
  type Project,
} from "@/lib/data";

const experiencePreview = ["Stealth Derivatives Startup", "SOON SVM", "Fetcch"];

function WorkRow({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-ink">
          {project.name}
        </h3>
        {project.href && (
          <span
            aria-hidden
            className="text-ink-muted group-hover:text-ink transition-colors text-sm"
          >
            ↗
          </span>
        )}
      </div>
      <p className="mt-1 text-ink-secondary">{project.tagline}</p>
      <p className="mt-3 text-[15px] text-ink-muted leading-relaxed group-hover:text-ink-secondary transition-colors">
        {project.summary ?? project.story}
      </p>
      {project.stack && (
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">
          {project.stack}
        </p>
      )}
    </>
  );
  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-8"
    >
      {inner}
    </a>
  ) : (
    <div className="group block py-8">{inner}</div>
  );
}

export default function Home() {
  const selectedWork = [currentWork, ...projects.filter((p) => p.featured)];
  const featuredEssays = [
    ...essays.filter((e) => e.featured),
    ...essaysInProgress.filter((e) => e.featured),
  ];
  const roles = experience.filter((r) =>
    experiencePreview.includes(r.company)
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-4">
        <h1 className="rise rise-1 text-[clamp(2.25rem,7vw,3.5rem)] font-semibold tracking-tight leading-[1.05] text-ink">
          Rahul Kulkarni
        </h1>
        <p className="rise rise-2 mt-6 text-xl sm:text-2xl font-medium tracking-tight leading-snug text-ink text-balance">
          Software engineer building products across markets, crypto, and AI.
        </p>
        <p className="rise rise-2 mt-6 text-lg text-ink-secondary leading-relaxed">
          Currently building trading infrastructure for a stealth derivatives
          startup.
        </p>
        <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center h-10 px-5 rounded-full bg-ink text-[#fcfcfc] text-sm font-medium hover:bg-black transition-colors"
          >
            Things I&apos;ve built
          </Link>
          <Link
            href="/writing"
            className="inline-flex items-center h-10 px-5 rounded-full border border-line-strong text-sm font-medium text-ink hover:border-ink transition-colors"
          >
            Read essays
          </Link>
        </div>
      </section>

      {/* Selected work */}
      <Section
        label="Selected work"
        more={{ href: "/projects", text: "Everything I've built" }}
      >
        <div className="divide-y divide-line border-y border-line">
          {selectedWork.map((project) => (
            <WorkRow key={project.name} project={project} />
          ))}
        </div>
      </Section>

      {/* Essays */}
      <Section label="Essays" more={{ href: "/writing", text: "All essays" }}>
        <div className="divide-y divide-line border-y border-line">
          {featuredEssays.map((essay) => {
            const inner = (
              <>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[17px] font-medium tracking-tight text-ink text-balance">
                    {essay.title}
                  </h3>
                  <span className="text-sm text-ink-muted whitespace-nowrap shrink-0 italic">
                    {essay.date ?? "In progress"}
                  </span>
                </div>
                <p className="mt-2 text-[15px] text-ink-muted leading-relaxed group-hover:text-ink-secondary transition-colors">
                  {essay.hook}
                </p>
              </>
            );
            return essay.href ? (
              <a
                key={essay.title}
                href={essay.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-6"
              >
                {inner}
              </a>
            ) : (
              <div key={essay.title} className="group block py-6">
                {inner}
              </div>
            );
          })}
        </div>
      </Section>

      {/* About */}
      <Section label="About" more={{ href: "/about", text: "More about me" }}>
        <p className="text-[17px] text-ink-secondary leading-relaxed">
          I like building products that sit close to the infrastructure. My
          work has moved from mobile apps to crypto, developer tools, AI
          systems, and now trading infrastructure. I&apos;d rather understand
          how a system actually works and ship something real on top of it
          than stay inside one category.
        </p>
      </Section>

      {/* Experience */}
      <Section
        label="Experience"
        more={{ href: "/resume", text: "Full resume" }}
      >
        <ol className="space-y-4">
          {roles.map((role) => (
            <li
              key={role.company}
              className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-4"
            >
              <span className="text-sm text-ink-muted pt-0.5 whitespace-nowrap">
                {role.period}
              </span>
              <p className="text-[15px] font-medium text-ink">
                {role.title},{" "}
                {role.href ? (
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {role.company}
                  </a>
                ) : (
                  role.company
                )}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <p className="text-[17px] text-ink-secondary leading-relaxed max-w-[52ch]">
          Always happy to talk about trading systems, AI, crypto, or whatever
          you&apos;re building. Email and X are the fastest ways to reach me.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center h-10 px-5 rounded-full bg-ink text-[#fcfcfc] text-sm font-medium hover:bg-black transition-colors"
          >
            {site.email}
          </a>
          <a
            href="https://x.com/0xrahulk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-10 px-5 rounded-full border border-line-strong text-sm font-medium text-ink hover:border-ink transition-colors"
          >
            @0xrahulk
          </a>
        </div>
      </Section>
    </>
  );
}
