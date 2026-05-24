import { GraduationCap } from "lucide-react";
import { ABOUT } from "@/lib/constants";
import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <AnimateIn variant="fadeIn">
            <h2 className="gradient-text text-center text-3xl font-bold tracking-tight md:text-4xl">
              From Film Scores to Source Code
            </h2>
          </AnimateIn>
          <div className="mt-10 space-y-5">
            {ABOUT.story.map((paragraph, i) => (
              <AnimateIn key={i} variant="fadeUp" delay={i * 0.15}>
                <p className="text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn variant="fadeUp" delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              {ABOUT.education.map((edu) => (
                <div
                  key={edu.school}
                  className="card-hover flex items-center gap-3 rounded-xl border border-card-border bg-card px-5 py-3"
                >
                  <GraduationCap className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium">{edu.school}</p>
                    <p className="text-xs text-muted">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
