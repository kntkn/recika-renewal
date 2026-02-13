"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const clientKeys = ["dentsu", "toyota", "chiba", "kyoto"] as const;

export function ClientsBar() {
  const t = useTranslations("clients");

  return (
    <section className="border-y border-border bg-background py-16">
      <Container>
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clientKeys.map((key) => (
              <span
                key={key}
                className="text-lg font-light tracking-wide text-muted-foreground/60 sm:text-xl"
              >
                {t(key)}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
