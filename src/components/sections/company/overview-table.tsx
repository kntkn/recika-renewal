"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const rows = [
  { labelKey: "label_name", valueKey: "value_name" },
  { labelKey: "label_established", valueKey: "value_established" },
  { labelKey: "label_address", valueKey: "value_address" },
  { labelKey: "label_capital", valueKey: "value_capital" },
  { labelKey: "label_ceo", valueKey: "value_ceo" },
  { labelKey: "label_chairman", valueKey: "value_chairman" },
] as const;

export function OverviewTable() {
  const t = useTranslations("company");

  return (
    <section className="section-padding">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={t("overview_title")}
            subtitle={t("overview_subtitle")}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-left">
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.labelKey}
                    className={i < rows.length - 1 ? "border-b border-border" : ""}
                  >
                    <th
                      scope="row"
                      className="w-1/3 bg-surface-warm px-6 py-5 text-sm font-medium text-foreground"
                    >
                      {t(row.labelKey)}
                    </th>
                    <td className="px-6 py-5 text-sm text-foreground/80">
                      {t(row.valueKey)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
