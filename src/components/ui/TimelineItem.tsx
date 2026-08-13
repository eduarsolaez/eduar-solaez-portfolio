export function TimelineItem({
  title,
  subtitle,
  period,
  children,
}: {
  title: string;
  subtitle: string;
  period?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative">
      <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-accent-green shadow-[0_0_10px_var(--accent-green)]" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {period && (
          <span className="font-mono text-xs text-accent-cyan">{period}</span>
        )}
      </div>
      <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
      {children}
    </div>
  );
}
