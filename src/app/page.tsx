import React from 'react';
import Link from 'next/link';

const experience = [
  {
    company: 'SOON',
    role: 'DevRel Lead',
    period: '2024–Current',
    link: 'https://twitter.com/soon_svm',
    color: '#7C3AED',
  },
  {
    company: 'Solana Labs',
    role: 'Solana Fellow',
    period: '2024',
    link: 'https://twitter.com/solana',
    color: '#059669',
  },
  {
    company: 'Shuffles',
    role: 'Founder',
    period: '2023',
    link: 'https://twitter.com/shuffles_xyz',
    color: '#0284C7',
  },
  {
    company: 'Fetcch',
    role: 'DevRel',
    period: '2023–2024',
    link: 'https://twitter.com/FetcchX',
    color: '#DB2777',
  },
  {
    company: 'iCeipts Technologies',
    role: 'Software Engineer',
    period: '2021–2023',
    link: 'https://iceipts.com',
    color: '#D97706',
  },
];

const featured = [
  {
    title: 'HashPot',
    link: 'https://hashpot.fun',
    desc: 'Bitcoin block hash prediction game — guess the last 3 hex chars to win the pot.',
  },
  {
    title: 'Leo',
    link: 'https://leo-lemon.vercel.app',
    desc: 'No-code Solana AI agent factory. Describe once, deploy in under 2 minutes.',
  },
  {
    title: 'Shuffles',
    link: 'https://shuffles.xyz',
    desc: 'Mobile crypto trading and swapping across 7+ networks.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-6 pt-20 pb-28 overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none -z-10"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 left-10 w-[320px] h-[320px] rounded-full pointer-events-none -z-10"
          style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)' }}
        />

        <div className="relative">
          {/* Badge */}
          <div className="fade-up delay-1 mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-mono bg-[#7C3AED]/10 text-[#7C3AED] px-3 py-1.5 rounded-full border border-[#7C3AED]/20 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] pulse-dot" />
              DevRel Lead @ SOON
            </span>
          </div>

          {/* Name */}
          <h1 className="fade-up delay-2 text-[clamp(52px,10vw,96px)] font-bold tracking-tight leading-[0.92] mb-6 text-[#0d0d1a]">
            Rahul<br />
            Kulkarni<span className="text-[#7C3AED]">.</span>
          </h1>

          {/* Tagline */}
          <p className="fade-up delay-3 text-lg md:text-xl text-[#5c5c78] max-w-lg mb-4 leading-relaxed">
            Builder, explorer, and a little bit of a tech optimist.
          </p>

          {/* Bio */}
          <p className="fade-up delay-4 text-[#9898b0] text-base max-w-md mb-10 leading-relaxed">
            Building at the edge of web3 and developer experience.
            Making Solana more accessible, one dev at a time.
          </p>

          {/* CTAs */}
          <div className="fade-up delay-5 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="bg-[#7C3AED] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#6D28D9] transition-colors shadow-sm"
            >
              View Projects →
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#5c5c78] px-5 py-2.5 rounded-lg border border-black/10 hover:border-black/20 hover:text-[#0d0d1a] hover:bg-black/[0.03] transition-colors"
            >
              About Me
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#5c5c78] px-5 py-2.5 rounded-lg border border-black/10 hover:border-black/20 hover:text-[#0d0d1a] hover:bg-black/[0.03] transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-black/[0.06]">
        <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-8 font-semibold">
          Experience
        </p>
        <div className="divide-y divide-black/[0.04]">
          {experience.map((exp) => (
            <a
              key={exp.company}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 -mx-3 px-3 rounded-lg hover:bg-black/[0.03] transition-colors"
            >
              <div className="flex items-center gap-4">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: exp.color }}
                />
                <div>
                  <span className="font-medium text-[#0d0d1a] group-hover:text-[#7C3AED] transition-colors">
                    {exp.company}
                  </span>
                  <span className="text-[#9898b0] mx-2">·</span>
                  <span className="text-[#5c5c78] text-sm">{exp.role}</span>
                </div>
              </div>
              <span className="text-xs text-[#9898b0] font-mono tabular-nums">{exp.period}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Selected Work — editorial list */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-black/[0.06]">
        <div className="flex items-baseline justify-between mb-2">
          <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] font-semibold">
            Selected Work
          </p>
          <Link
            href="/projects"
            className="text-xs text-[#9898b0] hover:text-[#5c5c78] transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6">
          {featured.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 py-5 border-b border-black/[0.05] last:border-0 hover:translate-x-1.5 transition-transform duration-200"
            >
              <span className="text-xs font-mono text-[#9898b0] w-5 flex-shrink-0 group-hover:text-[#7C3AED] transition-colors">
                0{i + 1}
              </span>
              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <span className="font-semibold text-[#0d0d1a] group-hover:text-[#7C3AED] transition-colors whitespace-nowrap">
                  {project.title}
                </span>
                <span className="hidden sm:block text-[#d4d4e0] text-xs flex-1 overflow-hidden">
                  {'·'.repeat(80)}
                </span>
                <span className="text-sm text-[#9898b0] sm:text-right mt-0.5 sm:mt-0 truncate max-w-xs">
                  {project.desc}
                </span>
              </div>
              <span className="text-[#9898b0] group-hover:text-[#7C3AED] transition-colors flex-shrink-0 text-sm">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
