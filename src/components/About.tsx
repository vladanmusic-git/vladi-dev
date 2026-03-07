import { GraduationCap } from "lucide-react";
import { ABOUT } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            From Film Scores to Source Code
          </h2>
          <div className="mt-10 space-y-5">
            {ABOUT.story.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            {ABOUT.education.map((edu) => (
              <div
                key={edu.school}
                className="flex items-center gap-3 rounded-xl border border-card-border bg-card px-5 py-3"
              >
                <GraduationCap className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-medium">{edu.school}</p>
                  <p className="text-xs text-muted">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
