'use client';
import React from 'react';
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const interests = [
  { icon: '💻', label: 'Web3 & Solana' },
  { icon: '✈️', label: 'Traveling & Hiking' },
  { icon: '🏏', label: 'Cricket' },
  { icon: '🎬', label: 'Movies & TV' },
  { icon: '📚', label: 'Reading' },
  { icon: '👨‍👩‍👧‍👦', label: 'Family & Friends' },
  { icon: '🍳', label: 'Cooking' },
];

const currentlyReading = [
  { title: 'The Island of Sea Women', author: 'Lisa See' },
  { title: 'The Night Circus', author: 'Erin Morgenstern' },
];

const socials = [
  { href: 'mailto:rkweb3.00@gmail.com', Icon: FaEnvelope, label: 'Email' },
  { href: 'https://twitter.com/0xrahul', Icon: FaTwitter, label: 'Twitter' },
  { href: 'https://github.com/rkmonarch', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/0xrahul', Icon: FaLinkedin, label: 'LinkedIn' },
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-14">
        <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-4 font-semibold">About</p>
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
              Hey! I&apos;m Rahul. I love building cool things in web3, exploring new countries
              and cultures, and spending time with family and friends.
            </p>
            <p>
              I&apos;m currently leading Developer Relations at{' '}
              <a
                href="https://twitter.com/soon_svm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C3AED] hover:underline underline-offset-4 font-medium"
              >
                SOON
              </a>
              , where I host weekly Discord office hours, help developers navigate the ecosystem,
              and build resources that make blockchain development less painful.
            </p>
            <p>
              When I&apos;m not deep in code, I&apos;m reading, watching thriller or horror movies,
              or exploring a new trail. Timothée Chalamet is my favorite actor. My favorite films
              are <strong className="text-[#0d0d1a] font-medium">Dune</strong> and{' '}
              <strong className="text-[#0d0d1a] font-medium">Grown Ups</strong>, and my favorite
              shows are <strong className="text-[#0d0d1a] font-medium">Dark</strong> and{' '}
              <strong className="text-[#0d0d1a] font-medium">The Vampire Diaries</strong>.
            </p>
          </div>

          {/* Interests — no boxes, just clean inline chips */}
          <div>
            <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-5 font-semibold">
              Interests
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {interests.map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-[#5c5c78]">
                  <span className="text-base">{icon}</span>
                  <span className="text-sm">{label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Currently Reading */}
          <div>
            <p className="text-xs font-mono text-[#7C3AED] uppercase tracking-[0.15em] mb-5 font-semibold">
              Currently Reading
            </p>
            <div className="space-y-4">
              {currentlyReading.map(({ title, author }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5 leading-none">📖</span>
                  <div>
                    <p className="text-sm font-medium text-[#0d0d1a]">{title}</p>
                    <p className="text-xs text-[#9898b0] mt-0.5">{author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect — plain text links, no boxes */}
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
            <p className="text-sm font-semibold text-[#0d0d1a]">Rahul Kulkarni</p>
            <p className="text-xs text-[#5c5c78]">DevRel Lead @ SOON</p>
            <p className="text-xs text-[#9898b0]">Solana · Web3 · DeFi</p>
          </div>
        </div>
      </div>
    </main>
  );
}
