import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  label,
  title,
  children,
  id,
  more,
}: {
  label?: string;
  title?: string;
  children: ReactNode;
  id?: string;
  more?: { href: string; text: string };
}) {
  return (
    <section id={id} className="mt-24 scroll-mt-20">
      {label && (
        <p className="text-[13px] font-medium text-ink-muted tracking-wide uppercase mb-3">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-xl font-semibold tracking-tight text-ink mb-8">
          {title}
        </h2>
      )}
      {children}
      {more && (
        <Link
          href={more.href}
          className="inline-block mt-8 text-sm text-ink-secondary hover:text-ink transition-colors underline underline-offset-4 decoration-line-strong hover:decoration-ink"
        >
          {more.text}
        </Link>
      )}
    </section>
  );
}

export function ExternalArrow() {
  return (
    <span aria-hidden className="inline-block text-ink-muted transition-colors group-hover:text-ink">
      ↗
    </span>
  );
}
