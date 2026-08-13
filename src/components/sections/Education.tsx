import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Timeline } from "@/components/ui/Timeline";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { education } from "@/data/education";

export function Education() {
  const t = useTranslations("education");

  return (
    <section id="education" className="border-b border-border py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <Timeline>
            {education.map((item) => (
              <TimelineItem
                key={item.id}
                title={t(`items.${item.id}.degree`)}
                subtitle={item.institution}
              >
                <p className="mt-2 text-sm text-text-muted italic">
                  {t(`items.${item.id}.detail`)}
                </p>
              </TimelineItem>
            ))}
          </Timeline>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
