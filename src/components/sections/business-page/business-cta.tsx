"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { Link } from "@/i18n/navigation";

export function BusinessCta() {
  const t = useTranslations("business_page");

  return (
    <section className="section-padding bg-surface-dark text-primary-foreground">
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {t("cta_title")}
          </h2>
          <div className="mt-10">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t("cta_button")}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
