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
    <section className="relative flex h-dvh items-center overflow-hidden bg-surface-dark text-primary-foreground">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(194,120,48,0.08),transparent)]" />

      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* Accent line + label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent">
              Blockchain & RWA
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-8 font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl"
          >
            {t("tagline")}
          </motion.h1>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/50 text-pretty sm:text-xl"
          >
            {t("lead")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-12 flex flex-wrap gap-4"
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
                className="border-primary-foreground/20 text-primary-foreground hover:border-primary-foreground/40 hover:bg-primary-foreground/5"
              >
                {t("cta_secondary")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="absolute right-[10%] top-0 h-full w-px origin-top bg-primary-foreground/[0.04] hidden lg:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="absolute right-[20%] top-0 h-full w-px origin-top bg-primary-foreground/[0.03] hidden lg:block"
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="sr-only">{t("scroll_down")}</span>
          <ArrowDown className="size-5 text-primary-foreground/30" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
