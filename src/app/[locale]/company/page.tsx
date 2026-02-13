import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { OverviewTable } from "@/components/sections/company/overview-table";
import { Leadership } from "@/components/sections/company/leadership";
import { HistoryTimeline } from "@/components/sections/company/history-timeline";
import { Access } from "@/components/sections/company/access";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "company" });

  return {
    title: `${t("hero_title")} | RECIKA`,
    description: t("value_name"),
  };
}

export default async function CompanyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "company" });

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />
      <OverviewTable />
      <Leadership />
      <HistoryTimeline />
      <Access />
    </>
  );
}
