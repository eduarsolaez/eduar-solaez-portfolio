import type { LucideIcon } from "lucide-react";
import { Badge } from "./Badge";

export function ProjectCard({
  icon: Icon,
  title,
  description,
  tags,
  confidentialLabel,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  confidentialLabel: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-cyan/60 hover:shadow-[0_0_30px_-12px_var(--accent-cyan)]">
      <div className="mb-4 flex items-start justify-between">
        <div className="rounded-lg border border-border bg-surface-alt p-2.5 text-accent-cyan">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <Badge>{confidentialLabel}</Badge>
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-text-muted">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-surface-alt px-2.5 py-1 font-mono text-xs text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
