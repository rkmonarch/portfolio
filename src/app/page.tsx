'use client';
// import { useRef } from "react";
// import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaHiking, FaTableTennis, FaFilm, FaEye, FaServer, FaRobot, FaWifi } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
// import Image from "next/image";

const experience = [
  {
    icon: <img src="/soon_logo.png" alt="SOON" className="w-10 h-10 rounded-full object-contain" />,
    company: "SOON",
    role: "Head of Developer Relations",
    desc: "Leading DevRel for SOON, building community and tools for the ecosystem.",
    link: "https://soo.network/",
    period: "Sep 2024 - Present",
  },
  {
    icon: <img src="/solana_logo.jpg" alt="Solana Foundation" className="w-10 h-10 rounded-full object-contain" />,
    company: "Solana",
    role: "Fellow",
    desc: "Recognized for contributions to Solana and developer education.",
    link: "https://solana.com/",
    period: "July 2024 - Sep 2024",
  },
  {
    icon: <img src="/fetcch_logo.jpg" alt="Fetch.ai" className="w-10 h-10 rounded-full object-contain" />,
    company: "Fetcch",
    role: "Software Engineer/ Developer Relations Engineer",
    desc: "Built cross-chain bridge, points infrastructure, and more.",
    link: "https://fetch.xyz/",
    period: "Oct 2023 - June 2024",
  },
  {
    icon: <img src="/iceipts_logo.jpeg" alt="Iceipts Technologies" className="w-10 h-10 rounded-full object-contain" />,
    company: "Iceipts Technologies",
    role: "Junior Developer",
    desc: "Started career building web and mobile solutions.",
    link: 'https://iceipts.com/',
    period: "Sep 2021 - Oct 2023",
  },
];

const movies = [
  {
    title: "Dark",
    subtitle: "Netflix Series",
    image: "/dark.jpg",
    details: "A mind-bending German sci-fi thriller about time travel, fate, and family secrets. One of the most complex and rewarding shows on Netflix.",
  },
  {
    title: "Dune",
    subtitle: "Movie",
    image: "/dune.webp",
    details: "Epic sci-fi adaptation starring Timothée Chalamet. Stunning visuals, world-building, and a powerful story of destiny.",
  },
  {
    title: "A Complete Unknown",
    subtitle: "Movie",
    image: "/complete-unknown.avif",
    details: "Timothée Chalamet as Bob Dylan in a biopic exploring the early years of the legendary musician.",
  },
  {
    title: "Call Me by Your Name",
    subtitle: "Movie",
    image: "/CBYN.webp",
    details: "A coming-of-age romance film starring Timothée Chalamet as Elio Perlman. Beautiful, emotional, and unforgettable.",
  },
  {
    title: "Vampire Diaries",
    subtitle: "TV Show",
    image: "/vampire_diaries.avif",
    details: "A supernatural drama series with romance, mystery, and lots of twists. A guilty pleasure and all-time favorite.",
  },
  {
    title: "Grown Ups",
    subtitle: "Movie",
    image: "/grown_ups.jpg",
    details: "A hilarious comedy about friendship and growing up, starring Adam Sandler and friends. Always fun to rewatch.",
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'work' | 'experience' | 'movies' | 'contact'>('work');
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);
  const projects = [
    {
      title: "SOON Staking Script",
      link: "https://github.com/rkmonarch/SOON-staking-script",
      logo: "/soon_logo.png",
      desc: "A TypeScript script to automatically stake SOON tokens and receive gSOON LST on BSC (Binance Smart Chain).",
    },
    {
      title: "Lucy",
      link: "https://ethglobal.com/showcase/lucy-bi61z",
      logo: <FaRobot className="w-10 h-10 text-[#60a5fa] bg-[#181c24] rounded-full p-2 mb-3" />,
      desc: "Your personal AI-powered DeFi agent that lives as an NFT, managing complex DeFi strategies through natural language while securing assets in its own Token Bound Account.",
    },
    {
      title: "TapPay",
      link: "https://ethglobal.com/showcase/tappay-941om",
      logo: <FaWifi className="w-10 h-10 text-[#34d399] bg-[#181c24] rounded-full p-2 mb-3" />,
      desc: "A chain-agnostic mobile payment app using NFC cards for secure, seamless cross-chain transactions. Pay with your favorite token on any chain, anywhere. Powered by Chainlink CCIP and LayerZero for ultimate flexibility and security.",
    },
    {
      title: "SOON Docs",
      link: "https://docs.soo.network",
      logo: "/soon_logo.png",
      desc: "Wrote and maintain developer docs for SOON.",
    },
    {
      title: "svm-mcp",
      link: "https://github.com/rkmonarch/svm-mcp",
      logo: <FaServer className="w-10 h-10 text-[#f59e42] bg-[#181c24] rounded-full p-2 mb-3" />,
      desc: "Model Context Protocol server for SOON/Solana integration.",
    },
    {
      title: "Shuffles",
      link: "https://shuffles.xyz",
      logo: "/shuffles.jpg",
      desc: "Effortless mobile crypto trading and swapping.",
    },
    {
      title: "VeilPay",
      link: "https://www.veilpay.xyz/",
      logo: "/veilpay.webp",
      desc: "Privacy-first donation platform for any token.",
    },
    {
      title: "OnlyBlinks",
      link: "https://onlyblinks.com",
      logo: "/onlyblinks.jpg",
      desc: "Explore 200+ Solana blinks across DeFi, NFTs, and more.",
    },
    {
      title: "Blinks React Native SDK",
      link: "https://github.com/rkmonarch/blinks-mobile-sdk",
      logo: <FaEye className="w-10 h-10 text-[#60a5fa] bg-[#181c24] rounded-full p-2 mb-3" />,
      desc: "Add Solana blinks to your mobile apps with ease.",
    },
    {
      title: "plex.cash",
      link: "https://fetcch.xyz",
      logo: "/plex.svg",
      desc: "OS for onchain points and loyalty. Gamify engagement and incentivize your community with Plex's no-code system.",
    },
    {
      title: "SyncX",
      link: "https://syncx.vercel.app/",
      logo: "/syncx.jpg",
      desc: "Connect with your audience and grow your business seamlessly ⚡",
    },
  ];

  return (
    <main className="bg-[#0D1117] text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start px-6 sm:px-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hey, I&apos;m Rahul</h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
          I build tools on Solana, hike new trails, smash shuttlecocks in pickleball, and binge Timothée Chalamet movies.
        </p>
      </section>

      {/* Tab Row */}
      <section className="py-10 px-6 sm:px-16">
        <div className="flex gap-2 mb-10 border-b border-[#232a36] max-w-2xl mx-auto">
          <button
            className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition ${selectedTab === 'work' ? 'bg-[#232a36] text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setSelectedTab('work')}
          >
            Work
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition ${selectedTab === 'experience' ? 'bg-[#232a36] text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setSelectedTab('experience')}
          >
            Experience
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition ${selectedTab === 'movies' ? 'bg-[#232a36] text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setSelectedTab('movies')}
          >
            Movies
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-t-lg focus:outline-none transition ${selectedTab === 'contact' ? 'bg-[#232a36] text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setSelectedTab('contact')}
          >
            Contact
          </button>
        </div>
        {/* Tab Content */}
        {selectedTab === 'work' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#232a36] rounded-2xl shadow-lg p-6 flex flex-col items-start hover:scale-[1.03] transition-transform min-h-[120px]"
              >
                {typeof project.logo === 'string' ? (
                  <img src={project.logo} alt={project.title} className="w-10 h-10 rounded-full object-contain mb-3" />
                ) : (
                  project.logo
                )}
                <div className="font-bold text-lg mb-1">{project.title}</div>
                <div className="text-xs text-gray-400 mb-2">{project.desc}</div>
                <div className="text-xs text-gray-400">View Project</div>
              </a>
            ))}
          </div>
        )}
        {selectedTab === 'experience' && (
          <div className="flex flex-col gap-6 max-w-2xl mx-auto relative">
            {/* Timeline vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#232a36] z-0" />
            {experience.map((exp, idx) => (
              <div key={exp.company} className="flex items-start gap-4 bg-[#161B22] rounded-xl p-5 relative z-10">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <span className="w-3 h-3 rounded-full bg-[#3b82f6] block mt-2 mb-2 z-10" />
                  {idx !== experience.length - 1 && <span className="flex-1 w-0.5 bg-[#232a36]" />}
                </div>
                <div className="mt-1">{exp.icon}</div>
                <div>
                  <div className="font-bold text-lg flex flex-wrap items-center gap-2">
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-white">{exp.role} @ {exp.company}</a>
                    ) : (
                      <span>{exp.role} @ {exp.company}</span>
                    )}
                    <span className="text-xs text-gray-400 ml-2">{exp.period}</span>
                  </div>
                  <div className="text-gray-400 text-base mt-1">{exp.desc}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedTab === 'movies' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {movies.map((movie, idx) => (
                <button
                  key={movie.title}
                  onClick={() => setSelectedMovie(idx)}
                  className="group relative rounded-2xl overflow-hidden shadow-lg bg-[#232a36] hover:scale-[1.03] transition-transform text-left"
                >
                  <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-lg font-bold text-white drop-shadow mb-1">{movie.title}</div>
                    <div className="text-sm text-gray-300 drop-shadow">{movie.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
            {/* Modal for movie details */}
            {selectedMovie !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setSelectedMovie(null)}>
                <div className="bg-[#181c24] rounded-2xl shadow-2xl max-w-md w-full p-8 relative" onClick={e => e.stopPropagation()}>
                  <button className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl" onClick={() => setSelectedMovie(null)}>&times;</button>
                  <img src={movies[selectedMovie].image} alt={movies[selectedMovie].title} className="w-full h-56 object-cover rounded-xl mb-4" />
                  <div className="text-2xl font-bold mb-2">{movies[selectedMovie].title}</div>
                  <div className="text-base text-gray-400 mb-4">{movies[selectedMovie].subtitle}</div>
                  <div className="text-base text-gray-200">{movies[selectedMovie].details}</div>
                </div>
              </div>
            )}
          </div>
        )}
        {selectedTab === 'contact' && (
          <div className="flex flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <a href="https://github.com/rkmonarch" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[#232a36] text-white hover:bg-[#232a36]/80 shadow transition text-lg font-medium">
              <FaGithub className="text-3xl" />
              <span className="text-xs mt-1">GitHub</span>
            </a>
            <a href="https://twitter.com/0xrahulk" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[#232a36] text-white hover:bg-[#232a36]/80 shadow transition text-lg font-medium">
              <FaTwitter className="text-3xl" />
              <span className="text-xs mt-1">Twitter</span>
            </a>
            <a href="https://linkedin.com/in/0xrahul" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[#232a36] text-white hover:bg-[#232a36]/80 shadow transition text-lg font-medium">
              <FaLinkedin className="text-3xl" />
              <span className="text-xs mt-1">LinkedIn</span>
            </a>
            <a href="mailto:rkweb3.00@gmail.com" className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[#232a36] text-white hover:bg-[#232a36]/80 shadow transition text-lg font-medium">
              <FaEnvelope className="text-3xl" />
              <span className="text-xs mt-1">Email</span>
            </a>
            <a href="https://t.me/rkmonarch" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl bg-[#232a36] text-white hover:bg-[#232a36]/80 shadow transition text-lg font-medium">
              <FaTelegramPlane className="text-3xl" />
              <span className="text-xs mt-1">Telegram</span>
            </a>
          </div>
        )}
      </section>

      {/* Beautiful Beyond Code Section */}
      <section className="bg-gradient-to-br from-[#0D1117] via-[#161B22] to-[#232a36] py-20 px-6 sm:px-16 relative">
        <h2 className="text-4xl font-semibold mb-10 text-center">Beyond Code</h2>
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none select-none opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#3b82f6] via-transparent to-transparent" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          <div className="bg-[#1F252E] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
            <FaHiking className="text-4xl mb-4 text-[#3b82f6]" />
            <h3 className="text-xl font-bold mb-2">Traveling</h3>
            <p className="text-sm text-gray-400">From the Himalayas to hidden beaches — I collect moments, not things.</p>
          </div>
          <div className="bg-[#1F252E] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
            <FaTableTennis className="text-4xl mb-4 text-[#3b82f6]" />
            <h3 className="text-xl font-bold mb-2">Sports &amp; Outdoors</h3>
            <p className="text-sm text-gray-400">Pickleball, badminton, hiking — if it involves movement, I&apos;m in.</p>
          </div>
          <div className="bg-[#1F252E] p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform">
            <FaFilm className="text-4xl mb-4 text-[#3b82f6]" />
            <h3 className="text-xl font-bold mb-2">Movie Buff</h3>
            <p className="text-sm text-gray-400">My go-to comfort zone? Anything with Timothée. Dune, CMBYN — all-time favs.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 bg-[#0D1117] text-gray-400 border-t border-[#1A1F27]">
        <p>Built with ☕, 🏞️, and a lot of 🎥 replays.</p>
      </footer>
    </main>
  );
}
