"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Accent top line */}
      <div className="h-px bg-accent/20" />

      <Container className="section-padding">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Company */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-serif text-2xl tracking-tight">{t("company_name_en").split(" ")[0]}</p>
            <p className="mt-2 text-sm text-primary-foreground/40">
              {t("company_name")}
            </p>
            <div className="mt-4 h-px w-8 bg-accent/30" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/40">
              {t("address")}
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent/60">
              {t("pages_title")}
            </p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer pages">
              {([
                { key: "about", href: "/philosophy" },
                { key: "business", href: "/business" },
                { key: "news", href: "/news" },
                { key: "company", href: "/company" },
                { key: "privacy", href: "/privacy" },
              ] as const).map(
                (item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground"
                  >
                    {t(item.key)}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Business */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent/60">
              {t("business_title")}
            </p>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer business">
              {(["unicask", "ango", "jpnft", "livesola", "corecika"] as const).map(
                (key) => (
                  <Link
                    key={key}
                    href="/business"
                    className="text-sm text-primary-foreground/40 transition-colors hover:text-primary-foreground"
                  >
                    {t(key)}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Company Info */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent/60">
              {t("info_title")}
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/40">
              <p>{t("established")}</p>
              <p>{t("capital")}</p>
              <Link
                href="/privacy"
                className="transition-colors hover:text-primary-foreground"
              >
                {t("privacy")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-primary-foreground/5 pt-8 text-center text-xs text-primary-foreground/30">
          <p>&copy; {t("copyright")}</p>
        </div>
      </Container>
    </footer>
  );
}
