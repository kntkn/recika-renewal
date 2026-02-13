import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { PrivacyContent } from "@/components/sections/privacy/privacy-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: `${t("hero_title")} | RECIKA`,
    description: t("intro"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />
      <PrivacyContent />
    </>
  );
}
