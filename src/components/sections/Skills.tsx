import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="border-b border-border py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <RevealOnScroll key={category.id} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-mono text-sm text-accent-cyan">
                    {t(`categories.${category.id}.label`)}
                  </h3>
                  {category.inProgress && (
                    <Badge variant="accent">
                      {t(`categories.${category.id}.badge`)}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skillIds.map((skillId) => (
                    <Badge key={skillId}>{t(`items.${skillId}`)}</Badge>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
