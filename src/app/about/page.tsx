"use client";
import React from "react";
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const focus = [
  {
    label: "Developer Relations",
    detail: "Onboarding, docs, and workshops that get builders shipping faster",
  },
  {
    label: "Agentic Infrastructure",
    detail: "MCP servers and policy-gated systems for AI agents on Solana",
  },
  {
    label: "Ecosystem Growth",
    detail: "Taking projects from zero to mainnet with real adoption",
  },
];

const stack = [
  "TypeScript",
  "Rust",
  "Python",
  "Go",
  "Solana",
  "Anchor",
  "Next.js",
  "React Native",
];

const socials = [
  { href: "mailto:rkweb3.00@gmail.com", Icon: FaEnvelope, label: "Email" },
  { href: "https://x.com/0xrahul", Icon: FaTwitter, label: "X" },
  { href: "https://github.com/rkmonarch", Icon: FaGithub, label: "GitHub" },
  {
    href: "https://linkedin.com/in/0xrahul",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-4 font-semibold">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0d0d1a] tracking-tight">
          Rahul Kulkarni
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-16 items-start">
        {/* Left */}
        <div className="space-y-12">
          {/* Bio */}
          <div className="space-y-4 text-[#5c5c78] text-base leading-relaxed">
            <p>
              I build production systems at the intersection of AI, blockchain,
              and developer tooling. Most recently DevRel Lead at SOON SVM,
              where I worked directly with 50+ teams to take their products from
              zero to mainnet.
            </p>
            <p>
              I&apos;m currently Building{" "}
              <a
                href="https://clearsign.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C3AED] hover:underline underline-offset-4 font-medium"
              >
                clearsign.fun
              </a>
              , a policy-gated signing and intent verification layer for Solana
              treasuries and AI agents.
            </p>
            <p>
              Outside of building, I&apos;m usually exploring a new trail,
              watching a thriller, or planning the next trip.
            </p>
          </div>

          {/* Focus areas */}
          <div>
            <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-5 font-semibold">
              Focus
            </p>
            <div className="space-y-5">
              {focus.map(({ label, detail }) => (
                <div key={label}>
                  <p className="text-sm font-medium text-[#0d0d1a]">{label}</p>
                  <p className="text-sm text-[#9898b0] mt-1">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div>
            <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-5 font-semibold">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-[#5c5c78] border border-black/[0.08] rounded-md px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-5 font-semibold">
              Connect
            </p>
            <div className="flex flex-wrap gap-6">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-[#5c5c78] hover:text-[#7C3AED] transition-colors"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex flex-col gap-4">
          <div className="w-full rounded-2xl overflow-hidden border border-black/[0.07] shadow-sm">
            <img
              src="/rk.jpg"
              alt="Rahul Kulkarni"
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="space-y-1 pl-1">
            <p className="text-sm font-semibold text-[#0d0d1a]">
              Rahul Kulkarni
            </p>
            <p className="text-xs text-[#5c5c78]">Founder @ clearsign.fun</p>
            <p className="text-xs text-[#9898b0]">Solana · AI · DeFi</p>
          </div>
        </div>
      </div>
    </main>
  );
}
