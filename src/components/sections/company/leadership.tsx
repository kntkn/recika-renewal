"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";

const leaders = [
  {
    nameKey: "chairman_name",
    nameEnKey: "chairman_name_en",
    roleKey: "chairman_role",
    bioKey: "chairman_bio",
  },
  {
    nameKey: "ceo_name",
    nameEnKey: "ceo_name_en",
    roleKey: "ceo_role",
    bioKey: "ceo_bio",
  },
] as const;

export function Leadership() {
  const t = useTranslations("company");

  return (
    <section className="section-padding bg-surface-warm">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("leadership_title")}
            subtitle={t("leadership_subtitle")}
          />
        </ScrollReveal>
        <StaggerChildren className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-2">
          {leaders.map((leader) => (
            <StaggerItem key={leader.nameKey}>
              <div className="text-center">
                {/* Photo placeholder */}
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-border">
                  <span className="text-sm text-muted-foreground">Photo</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-foreground">
                  {t(leader.nameKey)}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(leader.nameEnKey)}
                </p>
                <p className="mt-1 text-sm font-medium text-accent">
                  {t(leader.roleKey)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {t(leader.bioKey)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
