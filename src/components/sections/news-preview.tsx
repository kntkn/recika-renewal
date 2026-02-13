"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";
import { Link } from "@/i18n/navigation";

const newsItems = [1, 2, 3] as const;

export function NewsPreview() {
  const t = useTranslations("news");

  return (
    <section className="section-padding bg-background">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <StaggerChildren className="divide-y divide-border">
          {newsItems.map((i) => (
            <StaggerItem key={i}>
              <article className="group flex flex-col gap-3 py-8 transition-colors duration-200 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex items-center gap-4 sm:min-w-[200px]">
                  <time className="text-sm tabular-nums text-muted-foreground">
                    {t(`news_${i}_date`)}
                  </time>
                  <span className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {t(`news_${i}_category`)}
                  </span>
                </div>
                <h3 className="flex-1 text-base font-medium leading-snug text-balance transition-colors duration-200 group-hover:text-accent">
                  {t(`news_${i}_title`)}
                </h3>
                <ArrowRight className="hidden size-4 text-muted-foreground/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent sm:block" />
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-12 text-center">
          <Link href="/news">
            <Button variant="outline" className="gap-2">
              {t("view_all")}
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
