"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { Link } from "@/i18n/navigation";

const products = [
  "unicask",
  "ango",
  "jpnft",
  "livesola",
  "corecika",
] as const;

export function ProductsShowcase() {
  const t = useTranslations("products_section");

  return (
    <section className="section-padding bg-surface-dark text-primary-foreground">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} dark />

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((key) => (
            <StaggerItem key={key}>
              <Link href={`/products/${key}`}>
                <div className="group relative rounded-2xl border border-primary-foreground/10 bg-surface-dark-muted p-8 transition-colors duration-200 hover:border-accent/40">
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-2xl">{t(`${key}_name`)}</h3>
                    <ArrowUpRight
                      className="size-5 text-primary-foreground/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60 text-pretty">
                    {t(`${key}_desc`)}
                  </p>
                  <p className="mt-6 inline-block rounded-full bg-primary-foreground/5 px-3 py-1 text-xs font-medium text-accent">
                    {t(`${key}_kpi`)}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
