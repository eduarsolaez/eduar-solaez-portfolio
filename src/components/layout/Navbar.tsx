"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Download, Menu, X } from "lucide-react";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";
import { CV_URL } from "@/data/contact";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SECTION_IDS = [
  "about",
  "skills",
  "experience",
  "projects",
  "cybersecurity",
  "education",
  "contact",
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const activeId = useActiveSection([...SECTION_IDS]);
  const [open, setOpen] = useState(false);

  const links = SECTION_IDS.map((id) => ({ id, label: t(id) }));

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-mono text-sm text-accent-green"
          aria-label="Home"
        >
          eiv@portfolio:~$
        </a>

        <div className="hidden items-center gap-8 xl:flex">
          <ul className="flex items-center gap-5">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={cn(
                    "font-mono text-[13px] transition-colors",
                    activeId === link.id
                      ? "text-accent-green"
                      : "text-text-muted hover:text-text-primary",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            <LanguageSwitcher />
            <a
              href={CV_URL}
              download
              className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-text-primary transition-colors hover:border-accent-cyan hover:text-accent-cyan"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              {t("downloadCv")}
            </a>
          </div>
        </div>

        <button
          type="button"
          className="text-text-primary xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 py-4 xl:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-mono text-sm",
                    activeId === link.id
                      ? "text-accent-green"
                      : "text-text-muted",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <LanguageSwitcher />
            <a
              href={CV_URL}
              download
              className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 font-mono text-xs text-text-primary"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              {t("downloadCv")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
