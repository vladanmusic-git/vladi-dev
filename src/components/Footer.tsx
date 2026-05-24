import { NAV_ITEMS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <nav className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
