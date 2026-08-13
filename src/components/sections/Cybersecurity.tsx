import { useTranslations } from "next-intl";
import { ShieldHalf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const TRACK_IDS = ["linux", "python", "pentesting"] as const;

export function Cybersecurity() {
  const t = useTranslations("cybersecurity");

  return (
    <section id="cybersecurity" className="border-b border-border py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-accent-green/30 bg-surface">
            <div className="flex items-center gap-2 border-b border-border bg-surface-alt px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-text-muted">
                <ShieldHalf className="h-3.5 w-3.5" aria-hidden="true" />
                {t("prompt")}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <p className="max-w-3xl text-text-muted">{t("intro")}</p>

              <ul className="mt-6 space-y-3 font-mono text-sm">
                {TRACK_IDS.map((id) => (
                  <li
                    key={id}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-surface-alt px-4 py-3"
                  >
                    <span className="text-text-primary">
                      {t(`tracks.${id}.label`)}
                    </span>
                    <span className="rounded-full border border-accent-green/40 bg-accent-green/10 px-2.5 py-0.5 text-xs text-accent-green">
                      {t(`tracks.${id}.stage`)}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-xs text-text-muted">
                # {t("disclaimer")}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
