import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { MissionVision } from "@/components/sections/philosophy/mission-vision";
import { CeoMessage } from "@/components/sections/philosophy/ceo-message";
import { Values } from "@/components/sections/philosophy/values";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "philosophy" });

  return {
    title: `${t("hero_title")} | RECIKA`,
    description: t("mission_text"),
  };
}

export default async function PhilosophyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "philosophy" });

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />
      <MissionVision />
      <CeoMessage />
      <Values />
    </>
  );
}
