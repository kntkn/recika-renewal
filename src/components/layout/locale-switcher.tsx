"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("locale_switcher");

  function switchLocale(newLocale: "ja" | "en") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className={cn("flex items-center gap-1 text-sm", className)} role="group" aria-label={t("label")}>
      <button
        onClick={() => switchLocale("ja")}
        className={cn(
          "px-2 py-1 rounded transition-colors duration-200",
          locale === "ja"
            ? "font-semibold text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-current={locale === "ja" ? "true" : undefined}
      >
        JA
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "px-2 py-1 rounded transition-colors duration-200",
          locale === "en"
            ? "font-semibold text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </button>
    </div>
  );
}
