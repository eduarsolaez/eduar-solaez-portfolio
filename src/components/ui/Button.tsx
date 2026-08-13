import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-md border px-5 py-2.5 font-mono text-sm transition-all duration-200",
        variant === "primary" &&
          "border-accent-green bg-accent-green/10 text-accent-green hover:bg-accent-green hover:text-bg hover:shadow-[0_0_20px_-4px_var(--accent-green)]",
        variant === "secondary" &&
          "border-border bg-surface text-text-primary hover:border-accent-cyan hover:text-accent-cyan",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
