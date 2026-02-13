"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";

const products = [
  { key: "unicask" },
  { key: "ango" },
  { key: "jpnft" },
  { key: "livesola" },
  { key: "corecika" },
] as const;

export function PlatformSection() {
  const t = useTranslations("business_page");

  return (
    <section className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("platform_title")}
            subtitle={t("platform_subtitle")}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-muted-foreground text-pretty lg:mb-16">
            {t("platform_desc")}
          </p>
        </ScrollReveal>
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const tags = t(`${product.key}_tags`).split(",");
            return (
              <StaggerItem key={product.key}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-colors duration-200 hover:border-accent/30">
                  <h3 className="font-serif text-2xl text-foreground">
                    {t(`${product.key}_name`)}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {t(`${product.key}_desc`)}
                  </p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-medium text-accent">
                      {t(`${product.key}_kpi`)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block rounded-full bg-surface-warm px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
