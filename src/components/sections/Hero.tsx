import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { TerminalTypewriter } from "@/components/ui/TerminalTypewriter";
import { EMAIL, FULL_NAME, GITHUB_URL, LINKEDIN_URL } from "@/data/contact";

export function Hero() {
  const t = useTranslations("hero");
  const roles = t.raw("roles") as string[];

  return (
    <section
      id="hero"
      className="grid-backdrop relative flex min-h-[calc(100dvh-65px)] items-center overflow-hidden border-b border-border"
    >
      <Container className="flex flex-col-reverse items-center gap-10 py-16 lg:flex-row lg:justify-between lg:py-0">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="font-mono text-sm text-accent-green">
            {t("greeting")}
          </p>
          <h1 className="mt-3 text-4xl font-bold text-text-primary sm:text-5xl">
            {FULL_NAME}
          </h1>
          <p className="mt-4 h-8 text-lg text-accent-cyan sm:text-xl">
            <TerminalTypewriter words={roles} />
          </p>
          <p className="mt-6 text-base text-text-muted sm:text-lg">
            {t("tagline")}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href="#projects">{t("ctaProjects")}</Button>
            <Button href="#contact" variant="secondary">
              {t("ctaContact")}
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-5 text-text-muted lg:justify-start">
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="transition-colors hover:text-accent-green"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-accent-green"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-accent-green"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Avatar />
      </Container>
    </section>
  );
}
