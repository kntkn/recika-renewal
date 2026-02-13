"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function BusinessOverview() {
  const t = useTranslations("business");

  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Platform Business */}
          <ScrollReveal delay={0}>
            <div className="rounded-2xl border border-border bg-surface-warm p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                01
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-balance">
                {t("platform_title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                {t("platform_desc")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t("platform_features")
                  .split(" / ")
                  .map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Solution Business */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface-warm p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                02
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-balance">
                {t("solution_title")}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                {t("solution_desc")}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {t("solution_features")
                  .split(" / ")
                  .map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
