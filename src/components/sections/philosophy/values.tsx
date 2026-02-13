"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const values = [
  {
    titleKey: "value_innovation_title",
    descKey: "value_innovation_desc",
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
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    titleKey: "value_integrity_title",
    descKey: "value_integrity_desc",
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
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    titleKey: "value_impact_title",
    descKey: "value_impact_desc",
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
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558"
        />
      </svg>
    ),
  },
] as const;

export function Values() {
  const t = useTranslations("philosophy");

  return (
    <section className="section-padding bg-surface-warm">
      <Container>
        <ScrollReveal>
          <SectionHeading title={t("values_label")} subtitle="" />
        </ScrollReveal>
        <StaggerChildren className="grid gap-8 sm:grid-cols-3">
          {values.map((value) => (
            <StaggerItem key={value.titleKey}>
              <div className="rounded-2xl border border-border bg-background p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface-warm text-accent">
                  {value.icon}
                </div>
                <h3 className="mt-6 font-serif text-2xl text-foreground text-balance">
                  {t(value.titleKey)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {t(value.descKey)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
