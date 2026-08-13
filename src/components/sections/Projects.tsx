import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="border-b border-border py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="-mt-6 mb-10 max-w-3xl text-text-muted">
            {t("subtitle")}
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.05}>
              <ProjectCard
                icon={project.icon}
                title={t(`items.${project.id}.title`)}
                description={t(`items.${project.id}.description`)}
                tags={t.raw(`items.${project.id}.tags`) as string[]}
                confidentialLabel={t("confidentialBadge")}
              />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
