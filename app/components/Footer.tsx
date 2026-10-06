import { PERSONAL_INFO } from "@/constants";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-6 pb-9 text-sm text-mute">
      <span className="font-display text-2xl font-semibold text-ink sm:text-[26px]">
        {PERSONAL_INFO.name}
      </span>
      <span>© {PERSONAL_INFO.copyrightYear} All rights reserved</span>
    </footer>
  );
}

