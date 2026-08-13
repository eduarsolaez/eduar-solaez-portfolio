"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALES = ["es", "en"] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      <span className="text-text-muted">lang:</span>
      {LOCALES.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => router.replace(pathname, { locale: loc })}
          className={cn(
            "rounded px-1.5 py-0.5 uppercase transition-colors",
            loc === locale
              ? "text-accent-green"
              : "text-text-muted hover:text-text-primary",
          )}
          aria-current={loc === locale}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
