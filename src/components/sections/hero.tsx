"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex h-dvh items-center bg-surface-dark text-primary-foreground">
      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-5xl leading-tight tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {t("tagline")}
          </motion.h1>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/70 text-pretty sm:text-xl"
          >
            {t("lead")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t("cta_primary")}
              </Button>
            </Link>
            <Link href="/business">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                {t("cta_secondary")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="sr-only">{t("scroll_down")}</span>
          <ArrowDown className="size-5 text-primary-foreground/40" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
