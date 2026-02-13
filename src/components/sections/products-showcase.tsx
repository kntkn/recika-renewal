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
    <section className="section-padding relative overflow-hidden bg-surface-dark text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 line-grid" />

      <Container className="relative z-10">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} dark />

        <StaggerChildren className="space-y-4">
          {products.map((key, i) => (
            <StaggerItem key={key}>
              <Link href="/business">
                <div className="group flex flex-col gap-6 rounded-2xl border border-primary-foreground/[0.06] bg-surface-dark-muted/80 p-8 transition-all duration-200 hover:border-accent/30 sm:flex-row sm:items-center sm:gap-10 lg:p-10">
                  {/* Left: Number + Name */}
                  <div className="flex items-baseline gap-4 sm:min-w-[240px]">
                    <span className="text-xs font-medium tabular-nums text-accent/60">
                      0{i + 1}
                    </span>
                    <h3 className="font-serif text-2xl transition-colors duration-200 group-hover:text-accent sm:text-3xl">
                      {t(`${key}_name`)}
                    </h3>
                  </div>

                  {/* Middle: Description */}
                  <p className="flex-1 text-sm leading-relaxed text-primary-foreground/50 text-pretty">
                    {t(`${key}_desc`)}
                  </p>

                  {/* Right: KPI + Arrow */}
                  <div className="flex items-center gap-4 sm:min-w-[180px] sm:justify-end">
                    <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                      {t(`${key}_kpi`)}
                    </span>
                    <ArrowUpRight
                      className="size-5 text-primary-foreground/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
