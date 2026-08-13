import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="about" className="border-b border-border py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </RevealOnScroll>

        <div className="grid gap-10 lg:grid-cols-3">
          <RevealOnScroll className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4 text-text-muted">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="rounded-xl border border-border bg-surface p-6 font-mono text-sm">
              <p>
                <span className="text-accent-green">role:</span>{" "}
                <span className="text-text-muted">
                  {t("quickFacts.role")}
                </span>
              </p>
              <p className="mt-3">
                <span className="text-accent-green">focus:</span>{" "}
                <span className="text-text-muted">
                  {t("quickFacts.focus")}
                </span>
              </p>
              <p className="mt-3">
                <span className="text-accent-green">based_in:</span>{" "}
                <span className="text-text-muted">
                  {t("quickFacts.basedIn")}
                </span>
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
