import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 lg:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold tracking-[0.2em] uppercase",
          dark ? "text-accent-light" : "text-accent"
        )}
      >
        {subtitle}
      </p>
      <h2
        className={cn(
          "mt-3 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl",
          dark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mx-auto mt-6 h-px w-12",
          align === "left" && "mx-0",
          dark ? "bg-accent/60" : "bg-accent/40"
        )}
      />
    </div>
  );
}
