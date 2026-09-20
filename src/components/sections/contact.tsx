import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { SITE, SOCIAL_LINKS } from "@/constants/site";

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

/**
 * Contact — professional, three options.
 * Headline: "Let's build something." — concise, engineering-tone.
 */
export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="If you're working on AI systems, automation, or production full-stack applications, I'd like to hear about it. Response time is usually within a day."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {SOCIAL_LINKS.map((social, idx) => {
          const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
          return (
            <Reveal key={social.label} delay={idx * 0.05}>
              <a
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="surface surface-hover group flex h-full flex-col justify-between p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary">
                    {Icon && <Icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />}
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-6 space-y-1">
                  <p className="text-fluid-lg font-medium">{social.label}</p>
                  {social.handle && (
                    <p className="font-mono text-xs text-muted-foreground break-all">
                      {social.handle}
                    </p>
                  )}
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>

      {/* Quiet secondary line — direct email for recruiters who skim. */}
      <Reveal delay={0.15}>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Or email me directly at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-mono text-foreground underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
