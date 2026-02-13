"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Link } from "@/i18n/navigation";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="section-padding bg-surface-dark text-primary-foreground">
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/60 text-pretty">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t("primary")}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              {t("secondary")}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
