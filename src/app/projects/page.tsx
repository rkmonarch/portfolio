"use client";
import React from "react";

interface Project {
  title: string;
  link: string;
  desc: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "HashPot",
    link: "https://hashpot.fun",
    desc: "Bitcoin block hash prediction game. Guess the last 3 hex chars of the next block to win the shared pot.",
    tags: ["Bitcoin", "Game", "Prediction"],
  },
  {
    title: "Leo",
    link: "https://leo-lemon.vercel.app",
    desc: "No-code factory for Solana AI agents. Describe, configure, and deploy in under 2 minutes.",
    tags: ["Solana", "AI Agents", "No-Code"],
  },
  {
    title: "Shuffles",
    link: "https://shuffles.xyz",
    desc: "Mobile crypto trading and swapping across 7+ networks.",
    tags: ["Mobile", "DeFi", "Solana"],
  },
  {
    title: "OWS React Native",
    link: "https://github.com/rkmonarch/ows-react-native",
    desc: "React Native library for policy-gated autonomous payments on Solana using Open Wallet Standard (OWS) with HTTP 402 support.",
    tags: ["React Native", "Solana", "OWS"],
  },
  {
    title: "Lucy",
    link: "https://ethglobal.com/showcase/lucy-bi61z",
    desc: "AI-powered DeFi agent NFT managing complex DeFi strategies autonomously.",
    tags: ["AI", "DeFi", "NFT"],
  },
  {
    title: "TapPay",
    link: "https://ethglobal.com/showcase/tappay-941om",
    desc: "Chain-agnostic NFC payment app for seamless cross-chain payments via tap.",
    tags: ["NFC", "Payments", "Cross-Chain"],
  },
  {
    title: "OnlyBlinks",
    link: "https://onlyblinks.com",
    desc: "Registry for 300+ different kinds of Solana blinks registered on the platform.",
    tags: ["Solana", "Blinks", "Registry"],
  },
  {
    title: "SLOGAN SDK",
    link: "https://www.npmjs.com/package/@rkmonarch/slogan",
    desc: "Privacy SDK for Solana built around dual-key stealth addresses, memo-based payment discovery, claim flows, and same-denomination mixer primitives.",
    tags: ["Solana", "Privacy", "SDK"],
  },
  {
    title: "clearsign",
    link: "https://www.npmjs.com/package/clearsign",
    desc: "Security layer for DeFi treasuries and AI agent spend requests. OWS-native multi-signature with human-readable proposals, tamper-proof TTL, anomaly detection, and secure remote signing on Solana.",
    tags: ["Solana", "Multi-Sig", "Security"],
  },
  {
    title: "blinks-mobile-sdk",
    link: "https://www.npmjs.com/package/blinks-mobile-sdk",
    desc: "React Native SDK with custom parsers & decoders for Solana Blinks.",
    tags: ["React Native", "SDK", "Solana"],
  },
  {
    title: "Greg OWS",
    link: "https://github.com/rkmonarch/greg-ows",
    desc: "AI-powered Jupiter Lend trading agent on Solana using Open Wallet Standard (OWS) for secure local key signing.",
    tags: ["AI Agents", "Solana", "DeFi"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-4 font-semibold">
          Work
        </p>
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0d0d1a] tracking-tight">
            Projects
          </h1>
          <span className="text-xs font-mono text-[#9898b0] mb-1">
            {projects.length} projects
          </span>
        </div>
        <p className="text-[#9898b0] text-sm mt-3">
          Things I&apos;ve built and shipped across web3, DeFi, and tooling.
        </p>
      </div>

      {/* Editorial list */}
      <div className="divide-y divide-black/[0.05]">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-6 md:gap-10 py-8 hover:pl-2 transition-all duration-200"
          >
            {/* Number */}
            <span className="text-xs font-mono text-[#9898b0] pt-1.5 w-6 flex-shrink-0 group-hover:text-[#7C3AED] transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-lg md:text-xl font-semibold text-[#0d0d1a] group-hover:text-[#7C3AED] transition-colors">
                  {project.title}
                </h2>
                <span className="text-[#9898b0] group-hover:text-[#7C3AED] transition-colors mt-0.5 flex-shrink-0 text-sm">
                  ↗
                </span>
              </div>
              <p className="text-[#5c5c78] text-sm leading-relaxed mb-4">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-[#9898b0] border border-black/[0.08] px-2 py-0.5 rounded group-hover:border-[#7C3AED]/30 group-hover:text-[#7C3AED] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
