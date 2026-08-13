import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/data/contact";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-text-muted">
          {t("builtWith")} · © {year} {t("rights")}
        </p>
        <div className="flex items-center gap-4 text-text-muted">
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="transition-colors hover:text-accent-green"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-accent-green"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-accent-green"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
