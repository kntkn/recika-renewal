"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function MissionVision() {
  const t = useTranslations("philosophy");

  return (
    <>
      {/* Mission */}
      <section className="section-padding">
        <Container>
          <ScrollReveal>
            <SectionHeading title={t("mission_label")} subtitle="" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-foreground text-pretty sm:text-2xl lg:text-3xl">
              {t("mission_text")}
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Vision */}
      <section className="section-padding bg-surface-warm">
        <Container>
          <ScrollReveal>
            <SectionHeading title={t("vision_label")} subtitle="" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-foreground text-pretty sm:text-2xl lg:text-3xl">
              {t("vision_text")}
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
