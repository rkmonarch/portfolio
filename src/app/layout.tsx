// app/layout.tsx
import './globals.css';
import React from 'react';
import Nav from './components/NavBar';

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
        <footer className="max-w-6xl mx-auto px-2 md:px-4 lg:px-6 py-10 text-center text-gray-400 border-t border-[#1A1F27] mt-auto text-sm">
          <div>Built with ☕ and a love for reliable infra.</div>
          <div className="mt-2">Rahul Kulkarni • {new Date().getFullYear()}</div>
        </footer>
      </body>
    </html>
  );
}
