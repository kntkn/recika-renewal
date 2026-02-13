"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";

const events = [
  { date: "2018.12", key: "history_2018_12" },
  { date: "2019.06", key: "history_2019_06" },
  { date: "2020.03", key: "history_2020_03" },
  { date: "2021.04", key: "history_2021_04" },
  { date: "2022.01", key: "history_2022_01" },
  { date: "2023.06", key: "history_2023_06" },
  { date: "2024.03", key: "history_2024_03" },
  { date: "2025.07", key: "history_2025_07" },
  { date: "2025.11", key: "history_2025_11" },
] as const;

export function HistoryTimeline() {
  const t = useTranslations("company");

  return (
    <section className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("history_title")}
            subtitle={t("history_subtitle")}
          />
        </ScrollReveal>
        <div className="mx-auto max-w-2xl">
          <StaggerChildren className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0 left-[5.5rem] w-px bg-border sm:left-[7rem]"
              aria-hidden="true"
            />
            {events.map((event) => (
              <StaggerItem key={event.key}>
                <div className="relative flex items-start gap-6 pb-10 last:pb-0 sm:gap-8">
                  {/* Date */}
                  <span className="w-16 shrink-0 pt-0.5 text-right text-sm font-medium tabular-nums text-muted-foreground sm:w-20">
                    {event.date}
                  </span>
                  {/* Dot */}
                  <div
                    className="relative mt-1.5 h-3 w-3 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {/* Event */}
                  <p className="pt-0.5 text-sm text-foreground sm:text-base">
                    {t(event.key)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </Container>
    </section>
  );
}
