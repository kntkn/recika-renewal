"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { type FormEvent } from "react";

const inquiryTypes = [
  "type_blockchain",
  "type_product",
  "type_partnership",
  "type_recruit",
  "type_other",
] as const;

export function ContactForm() {
  const t = useTranslations("contact");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(t("submit_success"));
  }

  return (
    <section className="section-padding">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                {t("form_title")}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <form
                action="#"
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                {/* Company name */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground"
                  >
                    {t("label_company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    {t("label_name")}
                    <span className="ml-1 text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground"
                  >
                    {t("label_email")}
                    <span className="ml-1 text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground"
                  >
                    {t("label_phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {/* Inquiry type */}
                <div>
                  <label
                    htmlFor="inquiry-type"
                    className="block text-sm font-medium text-foreground"
                  >
                    {t("label_type")}
                    <span className="ml-1 text-accent" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    required
                    defaultValue=""
                    className="mt-2 block w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <option value="" disabled>
                      {t("type_placeholder")}
                    </option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {t(type)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground"
                  >
                    {t("label_message")}
                    <span className="ml-1 text-accent" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-2 block w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg">
                  {t("submit")}
                </Button>
              </form>
            </ScrollReveal>
          </div>

          {/* Company info sidebar */}
          <div className="lg:col-span-1">
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl bg-surface-warm p-8">
                <h3 className="text-lg font-medium text-foreground">
                  {t("info_title")}
                </h3>
                <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    {t("info_company")}
                  </p>
                  <p className="leading-relaxed">{t("info_address")}</p>
                  <p>
                    <a
                      href={`mailto:${t("info_email")}`}
                      className="text-accent transition-colors hover:text-accent-light"
                    >
                      {t("info_email")}
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
