"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function Access() {
  const t = useTranslations("company");

  return (
    <section className="section-padding bg-surface-warm">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("access_title")}
            subtitle={t("access_subtitle")}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-center text-base text-foreground">
              {t("access_address")}
            </p>
            {/* Map placeholder */}
            <div
              className="flex h-64 items-center justify-center rounded-2xl bg-border sm:h-80"
              role="img"
              aria-label={t("access_map_alt")}
            >
              <span className="text-sm text-muted-foreground">
                Google Maps
              </span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
