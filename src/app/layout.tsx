import './globals.css';
import React from 'react';
import { Analytics } from '@vercel/analytics/next';
import Nav from './components/NavBar';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';

export const metadata = {
  title: 'Rahul Kulkarni',
  description: 'Builds on Solana • DevRel • Infrastructure • Movies & Trails',
  icons: { icon: '/rk.jpg' },
};

const socials = [
  { href: 'https://twitter.com/0xrahul', Icon: FaTwitter, label: 'Twitter' },
  { href: 'https://github.com/rkmonarch', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/0xrahul', Icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:rkweb3.00@gmail.com', Icon: FaEnvelope, label: 'Email' },
  { href: 'https://instagram.com/rahulll.24', Icon: FaInstagram, label: 'Instagram' },
  { href: 'https://medium.com/@rkmonarch', Icon: FaMedium, label: 'Medium' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow pt-16">{children}</main>
        <footer className="border-t border-black/[0.06] mt-24">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-sm text-[#9898b0]">
              <span className="text-[#5c5c78] font-medium">Rahul Kulkarni</span> · {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-5">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#9898b0] hover:text-[#7C3AED] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
