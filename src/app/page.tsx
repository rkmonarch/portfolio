// app/page.tsx
import React, { JSX } from 'react';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
<section className="min-h-[60vh] flex flex-col justify-start pt-4">
  {/* almost flush left-aligned */}
  <div className="w-full text-left px-2 md:px-4 lg:px-6">
    <h1 className="text-4xl font-bold mb-3">Hey, I&apos;m Rahul Kulkarni.</h1>

    <h2 className="text-[1.1rem] font-semibold mb-3 text-gray-200">
      Builder, explorer, and a little bit of a tech optimist.
    </h2>

    <p className="text-[1.05rem] text-gray-400 leading-relaxed mb-8">
      I’m a developer who loves building clean, reliable systems that just work. I spend most of my time experimenting with new ways to make web3 more usable and accessible by building cool stuff on Solana and helping others do the same. I care deeply about good developer experience, scalable infra, and products that feel simple but are technically powerful under the hood. When I’m not deep in code, you’ll probably find me watching movies, exploring new tech, or hunting for a good trail to hike.
    </p>

    {/* Highlights & Achievements — one liners */}
    <div className="space-y-2 text-gray-400 text-[1.05rem] leading-relaxed">
      <p>
        Currently leading Developer Relations at{' '}
        <Link href="https://twitter.com/soon_svm" target="_blank" rel="noopener noreferrer" className="text-[#00FFD1] font-semibold underline underline-offset-4 hover:text-[#00FFE5]">
          SOON
        </Link>
      </p>
      <p>
        Previously Solana Fellow at{' '}
        <Link href="https://twitter.com/solana" target="_blank" rel="noopener noreferrer" className="text-[#14F195] font-semibold underline hover:underline underline-offset-4">
          Solana Labs
        </Link>
      </p>
      <p>
        Founded{' '}
        <Link href="https://twitter.com/shuffles_xyz" target="_blank" rel="noopener noreferrer" className="text-[#5EEAD4] font-semibold underline hover:underline underline-offset-4">
          Shuffles
        </Link>{' '}
        mobile crypto trading across 7+ networks
      </p>
      <p>
        Handled DevRel at{' '}
        <Link href="https://twitter.com/FetcchX" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] font-semibold underline hover:underline underline-offset-4">
          Fetcch
        </Link>{' '}
        built wallets, points tools, and DeFi systems
      </p>
      <p>
        Built CRM and ERP systems at{' '}
        <Link href="https://iceipts.com" target="_blank" rel="noopener noreferrer" className="text-[#93C5FD] font-semibold underline hover:underline underline-offset-4">
          iCeipts Technologies
        </Link>
      </p>
      <p>
        Member of{' '}
        <Link href="https://twitter.com/superteam" target="_blank" rel="noopener noreferrer" className="text-[#FFDD57] font-semibold underline hover:underline underline-offset-4">
          Superteam
        </Link>{' '}
        helping builders in the Solana ecosystem
      </p>
    </div>
  </div>
</section>



  );
}
