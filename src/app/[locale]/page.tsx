import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ValueProposition } from "@/components/sections/value-proposition";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { BusinessOverview } from "@/components/sections/business-overview";
import { ClientsBar } from "@/components/sections/clients-bar";
import { NewsPreview } from "@/components/sections/news-preview";
import { CtaSection } from "@/components/sections/cta-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <StatsBar />
      <ValueProposition />
      <ProductsShowcase />
      <BusinessOverview />
      <ClientsBar />
      <NewsPreview />
      <CtaSection />
    </>
  );
}
