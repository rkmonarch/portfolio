// app/layout.tsx
import './globals.css';
import React from 'react';
import Nav from './components/NavBar';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaTwitter } from 'react-icons/fa';

export const metadata = {
  title: 'Rahul Kulkarni',
  description: 'Builds on Solana • DevRel • Infrastructure • Movies & Trails',
  icons: {
    icon: '/rk.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased min-h-screen flex flex-col justify-between">
        <header className="max-w-6xl mx-auto px-2 md:px-4 lg:px-6 py-4 w-full">
          <Nav />
        </header>
        <main className="flex-grow max-w-6xl px-2 md:px-4 lg:px-6 mx-auto">{children}</main>
        <footer className="max-w-4xl mx-auto px-6 py-10 text-center text-gray-400 border-t border-[#1A1F27] mt-auto text-sm">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://twitter.com/0xrahul" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com/in/0xrahul" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><FaLinkedin size={20} /></a>
            <a href="https://github.com/rkmonarch" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><FaGithub size={20} /></a>
            <a href="https://instagram.com/rahulll.24" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><FaInstagram size={20} /></a>
            <a href="https://medium.com/@rkmonarch" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><FaMedium size={20} /></a>
            <a href="mailto:rkweb3.00@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition"><FaEnvelope size={20} /></a>
          </div>

          <div className="mt-2 text-white text-base font-medium">Rahul Kulkarni • {new Date().getFullYear()}</div>
          <div>Built with ☕ and a love for reliable infra.</div>
        </footer>
      </body>
    </html>
  );
}
