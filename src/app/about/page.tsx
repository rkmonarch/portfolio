import type { Metadata } from "next";
import Image from "next/image";
import { site, socials, currently } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "I've always been more interested in understanding systems than headlines.",
};

export default function AboutPage() {
  return (
    <>
      <header className="pt-20 sm:pt-28">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          About
        </h1>
      </header>

      <div className="mt-10 space-y-6 text-[17px] text-ink-secondary leading-relaxed">
        <p className="text-ink text-xl leading-relaxed font-medium tracking-tight">
          The question I keep coming back to is &ldquo;why was it built this
          way?&rdquo;
        </p>
        <p>
          Whether it&apos;s AI memory, market infrastructure, or developer
          tools, I enjoy figuring out why something works before building on
          top of it. Once you understand the architecture, most things stop
          being magic. Then the interesting problems become obvious.
        </p>
        <p>
          That habit shaped my path. I started as a software engineer
          building scan and pay apps and supply chain systems. Then I spent
          three years in developer relations, first at Fetcch and then at
          SOON SVM, explaining systems to smart people every day.
          There&apos;s no faster way to find out which parts you don&apos;t
          actually understand.
        </p>
        <p>
          Now I&apos;m building{" "}
          <a
            href="https://joinlads.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline underline-offset-4 decoration-line-strong hover:decoration-ink transition-colors"
          >
            Lads
          </a>
          : an AI-powered private fitness companion for close friends. It
          helps small groups stay accountable, sync activities, and turn
          progress into useful coaching without making fitness a public feed.
        </p>
        <p>
          Away from the keyboard: trails, and films I&apos;ve already seen
          too many times.
        </p>
      </div>

      <figure className="mt-14">
        <Image
          src="/1.jpeg"
          alt="Rahul Kulkarni speaking at ETH KL"
          width={680}
          height={510}
          className="w-full rounded-xl border border-line object-cover"
        />
      </figure>

      <section className="mt-14 border-t border-line pt-10">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-4">
          Currently
        </p>
        <ul className="space-y-2">
          {currently.items.map((item) => (
            <li key={item} className="text-[15px] text-ink-secondary">
              {item}
            </li>
          ))}
          <li className="text-[15px] text-ink-muted pt-1">
            {currently.location}
          </li>
        </ul>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-4">
          Elsewhere
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-sm text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">
          Or just write to{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink"
          >
            {site.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
