"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/writing", label: "Essays" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#fcfcfc]/85 backdrop-blur-md border-b border-line">
      <nav
        aria-label="Main"
        className="max-w-[680px] mx-auto px-6 h-14 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Rahul Kulkarni, home"
          className="text-sm font-semibold tracking-tight text-ink hover:text-ink-secondary transition-colors"
        >
          RK
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-ink font-medium"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="sm:hidden text-sm text-ink-secondary hover:text-ink transition-colors py-2 -my-2 px-1"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="sm:hidden border-t border-line bg-[#fcfcfc]"
        >
          <div className="max-w-[680px] mx-auto px-6 py-3 flex flex-col">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3 text-[15px] border-b border-line last:border-0 transition-colors ${
                  pathname === href
                    ? "text-ink font-medium"
                    : "text-ink-secondary"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
