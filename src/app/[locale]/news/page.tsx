import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { NewsList } from "@/components/sections/news-page/news-list";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news_page" });

  return {
    title: `${t("hero_title")} | RECIKA`,
    description: t("news_1_title"),
  };
}

export default async function NewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "news_page" });

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />
      <NewsList />
    </>
  );
}
