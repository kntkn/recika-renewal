import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/sections/contact/contact-form";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: `${t("hero_title")} | RECIKA`,
    description: t("form_title"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <PageHero title={t("hero_title")} subtitle={t("hero_subtitle")} />
      <ContactForm />
    </>
  );
}
