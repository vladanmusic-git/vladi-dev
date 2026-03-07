import Image from "next/image";
import { HERO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-32 pb-20 md:flex-row md:pt-40 md:pb-28">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {HERO.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          {HERO.subtext}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
          <a
            href="#portfolio"
            className="rounded-full bg-accent px-8 py-3 text-center font-medium text-white transition-colors hover:bg-accent-hover"
          >
            {HERO.cta1}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-card-border px-8 py-3 text-center font-medium transition-colors hover:bg-card"
          >
            {HERO.cta2}
          </a>
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="relative h-56 w-56 overflow-hidden rounded-3xl shadow-2xl md:h-72 md:w-72">
          <Image
            src="/images/profile.png"
            alt="Vladi Mijatovic"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
