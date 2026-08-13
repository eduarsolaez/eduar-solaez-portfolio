import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs",
        variant === "default" &&
          "border-border bg-surface-alt text-text-muted",
        variant === "accent" &&
          "border-accent-green/40 bg-accent-green/10 text-accent-green",
        className,
      )}
    >
      {children}
    </span>
  );
}
