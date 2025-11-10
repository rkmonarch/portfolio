'use client';
import React from 'react';

const projects = [
  {
    title: "Shuffles",
    link: "https://shuffles.xyz",
    logo: "/shuffles.jpg",
    desc: "Effortless mobile crypto trading and swapping.",
  },
  {
    title: "SOON Staking Script",
    link: "https://github.com/rkmonarch/SOON-staking-script",
    logo: "/soon_logo.png",
    desc: "Automatically stake SOON tokens and receive gSOON LST on BSC.",
  },
  {
    title: "Lucy",
    link: "https://ethglobal.com/showcase/lucy-bi61z",
    logo: "https://t3.ftcdn.net/jpg/10/04/27/38/360_F_1004273881_5TwA1UzUr2kiQZvZGyZ1THMbn5w2vgRq.jpg",
    desc: "AI-powered DeFi agent NFT managing complex DeFi strategies.",
  },
  {
    title: "TapPay",
    link: "https://ethglobal.com/showcase/tappay-941om",
    logo: "https://github.com/Open-Sorcerer/TapPay/blob/main/assets/images/magic.png?raw=true",
    desc: "Chain-agnostic mobile payment app using NFC cards for cross-chain payments.",
  },
  {
    title: "OnlyBlinks",
    link: "https://onlyblinks.com",
    logo: "/onlyblinks.jpg",
    desc: "Registry for 300+ different kinds of blinks registered on the platform.",
  },
  {
    title: "simpfor‑fun SDK",
    link: "https://www.npmjs.com/package/simpfor-fun-sdk",
    logo: "/simpy.jpg",
    desc: "Copy‑trading SDK built from scratch for Hyperliquid.",
  },
  {
    title: "blinks‑mobile‑sdk",
    link: "https://www.npmjs.com/package/blinks-mobile-sdk",
    logo: "/blinks.jpg",
    desc: "React Native SDK with custom parsers & decoders for Blinks.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-white font-sans py-16 px-6 sm:px-16">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-2 text-left">Projects</h1>
      <p className="text-gray-400 mb-10 text-left text-lg">
        Some projects which I built and contributed to
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Project Image */}
            <div className="w-full h-48 flex items-center justify-center bg-black">
              <img
                src={project.logo}
                alt={project.title}
                className="max-h-full w-auto object-contain"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col gap-3">
              <div className="font-bold text-2xl">{project.title}</div>
              <div className="text-gray-300 text-base">{project.desc}</div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-[#00FFD1] font-semibold hover:text-[#00FFE5]"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
