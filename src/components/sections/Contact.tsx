import { useTranslations } from "next-intl";
import { Mail, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/data/contact";

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-green/60 hover:shadow-[0_0_30px_-12px_var(--accent-green)]"
    >
      <div className="rounded-lg border border-border bg-surface-alt p-3 text-accent-green">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <p className="font-mono text-xs text-text-muted">{label}</p>
        <p className="mt-0.5 text-sm text-text-primary">{value}</p>
      </div>
    </a>
  );
}

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <p className="-mt-6 mb-10 max-w-2xl text-text-muted">
            {t("subtitle")}
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          <RevealOnScroll>
            <ContactCard
              icon={Mail}
              label={t("email")}
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <ContactCard
              icon={MessageCircle}
              label={t("whatsapp")}
              value={WHATSAPP_NUMBER}
              href={WHATSAPP_URL}
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <ContactCard
              icon={LinkedinIcon}
              label={t("linkedin")}
              value="linkedin.com/in/eduar-solaez"
              href={LINKEDIN_URL}
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <ContactCard
              icon={GithubIcon}
              label={t("github")}
              value="github.com/eduarsolaez"
              href={GITHUB_URL}
            />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
