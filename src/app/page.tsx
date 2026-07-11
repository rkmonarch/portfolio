import Link from "next/link";
import { Section } from "@/components/section";
import {
  site,
  projects,
  essays,
  essaysInProgress,
  experience,
  openSource,
  currently,
} from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const featuredEssays = [
    ...essays.filter((e) => e.featured),
    ...essaysInProgress.filter((e) => e.featured),
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-4">
        <h1 className="rise rise-1 text-[clamp(2.25rem,7vw,3.5rem)] font-semibold tracking-tight leading-[1.05] text-ink">
          Rahul Kulkarni
        </h1>
        <p className="rise rise-1 mt-4 text-base text-ink-muted">
          Builder · Engineer · Writer
        </p>
        <p className="rise rise-2 mt-10 text-xl sm:text-2xl font-medium tracking-tight leading-snug text-ink text-balance">
          Building AI systems that make complex technology feel simple.
        </p>
        <div className="rise rise-2 mt-6 text-lg text-ink-secondary leading-relaxed">
          <p>I build products, explain systems, and write about AI and Crypto.</p>
          <p>
            Currently building{" "}
            <a
              href="https://clearsign.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink transition-colors"
            >
              ClearSign
            </a>
            .
          </p>
          <p>Previously DevRel Lead at SOON SVM.</p>
        </div>
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

      {/* Things I've built */}
      <Section
        label="Things I've built"
        more={{ href: "/projects", text: "Everything I've built" }}
      >
        <div className="divide-y divide-line border-y border-line">
          {featuredProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-ink">
                  {project.name}
                </h3>
                <span
                  aria-hidden
                  className="text-ink-muted group-hover:text-ink transition-colors text-sm"
                >
                  ↗
                </span>
              </div>
              <p className="mt-1 text-ink-secondary">{project.tagline}</p>
              <p className="mt-3 text-[15px] text-ink-muted leading-relaxed group-hover:text-ink-secondary transition-colors">
                {project.story}
              </p>
            </a>
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
      <Section label="About">
        <div className="space-y-5 text-[17px] text-ink-secondary leading-relaxed">
          <p>
            I&apos;ve always been more interested in understanding systems
            than headlines. Whether it&apos;s AI memory, market
            infrastructure, or developer tools, I like figuring out why
            something works before building on top of it.
          </p>
          <p>
            Most of my time goes into building products, writing about what I
            learn, and experimenting with what AI-first software should feel
            like.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-block mt-6 text-sm text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink"
        >
          More about me
        </Link>
      </Section>

      {/* Currently */}
      <Section label="Currently">
        <ul className="space-y-2.5">
          {currently.items.map((item) => (
            <li key={item} className="text-[15px] text-ink-secondary">
              {item}
            </li>
          ))}
          <li className="text-[15px] text-ink-muted pt-1">
            {currently.location}
          </li>
        </ul>
      </Section>

      {/* Experience */}
      <Section label="Experience">
        <ol className="space-y-10">
          {experience.map((role) => (
            <li
              key={role.company}
              className="grid grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr] gap-4"
            >
              <span className="text-sm text-ink-muted pt-0.5 whitespace-nowrap">
                {role.period}
              </span>
              <div>
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
                <p className="mt-1.5 text-[15px] text-ink-muted leading-relaxed">
                  {role.story}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Open Source */}
      <Section label="Open source">
        <ul className="space-y-6">
          {openSource.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <p className="font-mono text-sm text-ink group-hover:underline underline-offset-4">
                  {item.name}
                </p>
                <p className="mt-1 text-[15px] text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" label="Contact">
        <p className="text-[17px] text-ink-secondary leading-relaxed max-w-[52ch]">
          Always happy to talk about AI systems, developer tools, or whatever
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
            href="https://x.com/0xrahul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-10 px-5 rounded-full border border-line-strong text-sm font-medium text-ink hover:border-ink transition-colors"
          >
            @0xrahul
          </a>
        </div>
      </Section>
    </>
  );
}
