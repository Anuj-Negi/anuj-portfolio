import { NAV_LINKS, PERSONAL_INFO } from "@/constants";

export function Navbar() {
  return (
    <header className="mx-auto max-w-[1100px] px-6">
      <nav className="flex flex-wrap items-center justify-between gap-4 py-6.5">
        <a
          href="#"
          className="font-display text-4xl font-semibold text-ink no-underline transition-opacity hover:opacity-85"
        >
          {PERSONAL_INFO.name}
        </a>
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium tracking-wider uppercase text-mute sm:gap-7.5 sm:text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="font-medium text-org underline underline-offset-4 transition-opacity hover:opacity-85"
        >
          {PERSONAL_INFO.email}
        </a>
      </nav>
    </header>
  );
}

