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
    <section className="section-padding bg-surface-warm">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((i) => (
            <StaggerItem key={i}>
              <article className="group rounded-2xl border border-border bg-background p-6 transition-colors duration-200 hover:border-accent/30">
                <div className="flex items-center gap-3">
                  <time className="text-sm tabular-nums text-muted-foreground">
                    {t(`news_${i}_date`)}
                  </time>
                  <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {t(`news_${i}_category`)}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-medium leading-snug text-balance group-hover:text-accent transition-colors duration-200">
                  {t(`news_${i}_title`)}
                </h3>
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
