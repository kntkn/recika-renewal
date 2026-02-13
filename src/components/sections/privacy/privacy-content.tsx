"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const sections = [
  { titleKey: "section1_title", textKey: "section1_text" },
  { titleKey: "section2_title", textKey: "section2_text" },
  { titleKey: "section3_title", textKey: "section3_text" },
  { titleKey: "section4_title", textKey: "section4_text" },
  { titleKey: "section5_title", textKey: "section5_text" },
  { titleKey: "section6_title", textKey: "section6_text" },
  { titleKey: "section7_title", textKey: "section7_text" },
  { titleKey: "section8_title", textKey: "section8_text" },
] as const;

export function PrivacyContent() {
  const t = useTranslations("privacy");

  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-foreground/80 text-pretty">
              {t("intro")}
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <ScrollReveal key={section.titleKey}>
                <h2 className="text-lg font-medium text-foreground">
                  {t(section.titleKey)}
                </h2>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/80 text-pretty">
                  {t(section.textKey)}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-16 border-t border-border pt-8 text-sm text-muted-foreground">
              <p>{t("effective_date")}</p>
              <p className="mt-1">{t("revision_date")}</p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
