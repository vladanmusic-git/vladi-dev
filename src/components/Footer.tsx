import { Briefcase } from "lucide-react";
import { SITE, LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground/90">{SITE.name}</p>
          <p className="mt-1 text-xs text-subtle">
            {SITE.role} · Available remote, US hours
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={LINKS.upwork}
            target="_blank"
            rel="noopener noreferrer"
            data-upwork-click="footer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Briefcase className="h-4 w-4" />
            Hire me on Upwork
          </a>
          <a
            href="/privacy"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Privacy
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-subtle">
        &copy; {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  );
}
