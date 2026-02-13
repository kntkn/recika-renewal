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
        "mb-12 lg:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl",
          dark ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-3 text-sm font-medium tracking-widest uppercase",
          dark ? "text-primary-foreground/60" : "text-muted-foreground"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
