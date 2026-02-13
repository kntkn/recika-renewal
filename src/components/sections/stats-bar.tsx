"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/motion/counter";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function StatsBar() {
  const t = useTranslations("stats");

  return (
    <section className="bg-surface-warm py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {/* Assets */}
            <div className="text-center">
              <p className="text-3xl font-semibold tabular-nums text-foreground sm:text-4xl">
                <Counter value={7.6} prefix="&yen;" suffix="B+" decimals={1} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t("assets")}</p>
            </div>

            {/* Products */}
            <div className="text-center">
              <p className="text-3xl font-semibold tabular-nums text-foreground sm:text-4xl">
                <Counter value={5} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t("products")}</p>
            </div>

            {/* Founded */}
            <div className="text-center">
              <p className="text-3xl font-semibold tabular-nums text-foreground sm:text-4xl">
                <Counter value={2018} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t("founded")}</p>
            </div>

            {/* Clients */}
            <div className="text-center">
              <p className="text-3xl font-semibold text-foreground sm:text-4xl">
                {t("clients_value")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{t("clients")}</p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
