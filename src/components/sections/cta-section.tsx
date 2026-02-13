"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Link } from "@/i18n/navigation";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="section-padding relative overflow-hidden bg-surface-dark text-primary-foreground">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_110%,rgba(194,120,48,0.06),transparent)]" />

      <Container className="relative z-10 text-center">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            {t("subtitle")}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-7xl">
            {t("title")}
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-accent/40" />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t("primary")}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
            >
              {t("secondary")}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
