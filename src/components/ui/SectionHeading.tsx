export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent-green">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold text-text-primary sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
