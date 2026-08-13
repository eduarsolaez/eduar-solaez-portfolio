import Image from "next/image";

export function Avatar() {
  return (
    <div className="relative aspect-square w-40 overflow-hidden rounded-2xl border border-accent-green/40 bg-surface shadow-[0_0_40px_-10px_var(--accent-green)] sm:w-56">
      <Image
        src="/images/profile.png"
        alt="Eduar Iván Solaez Olivera"
        fill
        sizes="(min-width: 640px) 224px, 160px"
        className="object-cover object-top"
        priority
      />
    </div>
  );
}
