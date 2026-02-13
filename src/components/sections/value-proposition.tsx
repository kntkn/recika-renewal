"use client";

import { useTranslations } from "next-intl";
import { Cpu, HeadsetIcon, Shield, Globe } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";

const values = [
  { key: "technology", icon: Cpu },
  { key: "support", icon: HeadsetIcon },
  { key: "security", icon: Shield },
  { key: "global", icon: Globe },
] as const;

export function ValueProposition() {
  const t = useTranslations("value");

  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ key, icon: Icon }) => (
            <StaggerItem key={key}>
              <div className="group rounded-2xl border border-border bg-background p-8 transition-colors duration-200 hover:bg-surface-warm">
                <div className="flex size-12 items-center justify-center rounded-xl bg-foreground/5">
                  <Icon className="size-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-balance">
                  {t(`${key}_title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {t(`${key}_desc`)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
