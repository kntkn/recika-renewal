"use client";

import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-surface-dark pt-32 pb-16 lg:pt-40 lg:pb-24">
      <Container>
        <ScrollReveal>
          <h1 className="font-serif text-5xl tracking-tight text-primary-foreground text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-4 text-sm font-medium tracking-widest uppercase text-primary-foreground/60">
            {subtitle}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
