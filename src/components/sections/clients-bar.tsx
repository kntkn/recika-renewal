"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const clientKeys = ["dentsu", "toyota", "chiba", "kyoto"] as const;

export function ClientsBar() {
  const t = useTranslations("clients");

  return (
    <section className="bg-background py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {clientKeys.map((key, i) => (
              <div key={key} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-border">|</span>
                )}
                <span className="px-4 text-lg font-light tracking-wide text-foreground/40 sm:text-xl lg:text-2xl">
                  {t(key)}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
