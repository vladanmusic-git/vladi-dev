import { Mail, Linkedin, Briefcase } from "lucide-react";
import { SITE, LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground/90">{SITE.name}</p>
          <p className="mt-1 text-xs text-subtle">
            Senior AI Engineer · Available remote, US hours
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {SITE.email}
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex rounded-lg p-2 text-muted transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={LINKS.upwork}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="inline-flex rounded-lg p-2 text-muted transition-colors hover:text-foreground"
          >
            <Briefcase className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-subtle">
        &copy; {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  );
}
