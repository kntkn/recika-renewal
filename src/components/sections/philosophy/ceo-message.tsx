"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function CeoMessage() {
  const t = useTranslations("philosophy");

  return (
    <section className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t("ceo_message_label")} subtitle="" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-start">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-border">
                <span className="text-sm text-muted-foreground">Photo</span>
              </div>
            </div>
            {/* Content */}
            <div>
              <p className="text-lg font-medium text-foreground">
                {t("ceo_name")}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("ceo_role")}
              </p>
              <p className="mt-6 text-base leading-relaxed text-foreground/80 text-pretty">
                {t("ceo_message")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
