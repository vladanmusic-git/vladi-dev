import Image from "next/image";
import { Building2, GraduationCap } from "lucide-react";
import { ABOUT } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

const credIcons = { hall: Building2, degree: GraduationCap };

export default function About() {
  return (
    // overflow-x-clip: the photo slides in from 40px to the right, which made a
    // phone page 16px wider than the screen until it revealed. Clip (not hidden)
    // creates no scroll container, so the photo's md:sticky keeps working.
    <section id="about" className="relative overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-[300px_1fr] md:gap-16">
          {/* Photo + credentials */}
          <AnimateIn variant="fadeRight" className="md:sticky md:top-28">
            <div className="gradient-ring relative mx-auto w-fit rounded-3xl shadow-2xl">
              <div className="relative h-72 w-60 overflow-hidden rounded-[calc(1.5rem-2px)]">
                <Image
                  src="/images/vladi-headshot.png"
                  alt="Vladi Mijatovic"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimateIn>

          {/* Story */}
          <div>
            <AnimateIn variant="fadeIn">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-2">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                {ABOUT.heading}
              </h2>
            </AnimateIn>

            <div className="mt-7 space-y-5">
              {ABOUT.story.map((paragraph, i) => (
                <AnimateIn key={i} variant="fadeUp" delay={i * 0.08}>
                  <p className="leading-relaxed text-muted">{paragraph}</p>
                </AnimateIn>
              ))}
            </div>

            <AnimateIn variant="fadeUp" delay={0.2}>
              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ABOUT.credentials.map((cred) => {
                  const Icon = credIcons[cred.icon];
                  return (
                    <div
                      key={cred.label}
                      className="glass-card flex items-center gap-3 rounded-xl px-4 py-3"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-accent-2" />
                      <div>
                        <p className="text-sm font-medium leading-tight">
                          {cred.label}
                        </p>
                        <p className="text-xs text-subtle">{cred.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
