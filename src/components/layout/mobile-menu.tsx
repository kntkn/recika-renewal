"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "about", href: "/philosophy" },
  { key: "business", href: "/business" },
  { key: "news", href: "/news" },
  { key: "company", href: "/company" },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2"
        aria-label={isOpen ? t("menu_close") : t("menu_open")}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed inset-0 z-40 bg-background",
              "pb-[env(safe-area-inset-bottom)]"
            )}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl font-light tracking-wide text-foreground transition-colors hover:text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3, ease: "easeOut" }}
                className="mt-4 flex flex-col items-center gap-6"
              >
                <LocaleSwitcher />
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" size="lg">
                    {t("cta")}
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
