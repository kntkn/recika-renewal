import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { PlatformSection } from "@/components/sections/business-page/platform-section";
import { SolutionSection } from "@/components/sections/business-page/solution-section";
import { BusinessCta } from "@/components/sections/business-page/business-cta";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "business_page" });

  return {
    title: `${t("hero_title")} | RECIKA`,
    description: t("platform_desc"),
  };
}

export default async function BusinessPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "business_page" });

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />
      <PlatformSection />
      <SolutionSection />
      <BusinessCta />
    </>
  );
}
