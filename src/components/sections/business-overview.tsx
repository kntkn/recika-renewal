"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function BusinessOverview() {
  const t = useTranslations("business");

  const items = [
    {
      num: "01",
      title: t("platform_title"),
      desc: t("platform_desc"),
      features: t("platform_features"),
    },
    {
      num: "02",
      title: t("solution_title"),
      desc: t("solution_desc"),
      features: t("solution_features"),
    },
  ];

  return (
    <section className="section-padding bg-surface-warm">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={item.num} delay={i * 0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 lg:p-10">
                {/* Accent left border */}
                <div className="absolute top-0 left-0 h-full w-1 bg-accent/20" />

                <p className="font-serif text-5xl font-light text-accent/15 lg:text-6xl">
                  {item.num}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-balance">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.features.split(" / ").map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs font-medium text-foreground/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
