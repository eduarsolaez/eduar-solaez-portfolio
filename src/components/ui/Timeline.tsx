export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative space-y-10 border-l border-border pl-8">
      {children}
    </div>
  );
}
