"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/stagger-children";

const newsItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
] as const;

const categoryColors: Record<string, string> = {
  "プロジェクト": "bg-accent/10 text-accent",
  "Project": "bg-accent/10 text-accent",
  "プレスリリース": "bg-foreground/10 text-foreground",
  "Press Release": "bg-foreground/10 text-foreground",
  "テクノロジー": "bg-surface-dark text-primary-foreground",
  "Technology": "bg-surface-dark text-primary-foreground",
};

export function NewsList() {
  const t = useTranslations("news_page");

  return (
    <section className="section-padding">
      <Container>
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => {
            const category = t(`news_${item.id}_category`);
            const colorClass = categoryColors[category] || "bg-foreground/10 text-foreground";

            return (
              <StaggerItem key={item.id}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-colors duration-200 hover:border-accent/30">
                  <div className="flex items-center gap-3">
                    <time className="text-xs tabular-nums text-muted-foreground">
                      {t(`news_${item.id}_date`)}
                    </time>
                    <span
                      className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${colorClass}`}
                    >
                      {category}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-medium leading-snug text-foreground text-balance group-hover:text-accent transition-colors duration-200">
                    {t(`news_${item.id}_title`)}
                  </h3>
                  <p className="mt-3 line-clamp-2 flex-1 text-sm text-muted-foreground text-pretty">
                    {t(`news_${item.id}_summary`)}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
