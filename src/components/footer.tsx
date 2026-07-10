import { site, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-[680px] mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <p className="text-sm text-ink-muted">
          {site.name} · {new Date().getFullYear()}
        </p>
        <ul className="flex items-center gap-5">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
