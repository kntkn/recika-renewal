"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/motion/counter";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function StatsBar() {
  const t = useTranslations("stats");

  const stats = [
    {
      element: <Counter value={7.6} prefix="&yen;" suffix="B+" decimals={1} />,
      label: t("assets"),
    },
    {
      element: <Counter value={5} suffix="+" />,
      label: t("products"),
    },
    {
      element: <Counter value={2018} />,
      label: t("founded"),
    },
    {
      element: t("clients_value"),
      label: t("clients"),
    },
  ];

  return (
    <section className="border-y border-accent/10 bg-surface-dark py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${i > 0 ? "lg:border-l lg:border-primary-foreground/10" : ""}`}
              >
                <p className="text-3xl font-semibold tabular-nums text-accent sm:text-4xl lg:text-5xl">
                  {stat.element}
                </p>
                <p className="mt-3 text-xs font-medium tracking-widest uppercase text-primary-foreground/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
