import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Timeline } from "@/components/ui/Timeline";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experience } from "@/data/experience";

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="border-b border-border py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <Timeline>
            {experience.map((item) => {
              const bullets = t.raw(`items.${item.id}.bullets`) as string[];
              return (
                <TimelineItem
                  key={item.id}
                  title={t(`items.${item.id}.role`)}
                  subtitle={item.company}
                  period={item.period}
                >
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-text-muted marker:text-accent-green">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </TimelineItem>
              );
            })}
          </Timeline>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
