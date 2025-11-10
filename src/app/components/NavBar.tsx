// components/Nav.tsx
'use client';
import Link from 'next/link';
import React, { JSX } from 'react';

export default function Nav(): JSX.Element {
  return (
    <nav className="flex items-center justify-end py-6">
      <div className="space-x-6 text-md text-gray-300">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}
