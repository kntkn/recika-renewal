"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";

const services = [
  {
    titleKey: "consulting_title",
    descKey: "consulting_desc",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
  {
    titleKey: "development_title",
    descKey: "development_desc",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    titleKey: "operations_title",
    descKey: "operations_desc",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
  },
] as const;

export function SolutionSection() {
  const t = useTranslations("business_page");

  return (
    <section className="section-padding bg-surface-warm">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("solution_title")}
            subtitle={t("solution_subtitle")}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-muted-foreground text-pretty lg:mb-16">
            {t("solution_desc")}
          </p>
        </ScrollReveal>
        <StaggerChildren className="grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.titleKey}>
              <div className="rounded-2xl border border-border bg-background p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-warm text-accent">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground text-balance">
                  {t(service.titleKey)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {t(service.descKey)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
