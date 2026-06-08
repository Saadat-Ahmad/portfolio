import Disclosure from "@/components/site/Disclosure";
import { experiences, education } from "@/lib/content";

export default function Experience() {
  return (
    <Disclosure
      id="experience"
      index="02"
      name="Experience"
      title="Where I've shipped."
    >
      <div>
        {experiences.map((exp, i) => (
          <article
            key={exp.company}
            className="group grid gap-5 border-t border-line py-9 first:border-t-0 first:pt-0 lg:grid-cols-[210px_1fr] lg:gap-12"
          >
            {/* meta column */}
            <div className="font-mono text-xs text-ink-soft">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl leading-none text-line transition-colors group-hover:text-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 border border-orange px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-orange">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" /> Now
                  </span>
                )}
              </div>
              <div className="mt-4 uppercase tracking-[0.1em]">{exp.period}</div>
              <div className="mt-1 text-ink">{exp.location}</div>
            </div>

            {/* body column */}
            <div>
              <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                {exp.role} <span className="text-ink-soft">/ {exp.company}</span>
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/80">
                {exp.summary}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2">
                {exp.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="flex gap-3 text-sm leading-relaxed text-ink/75"
                  >
                    <span className="mt-0.5 font-mono text-orange">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-line px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {/* Education: final row on the timeline */}
        <article className="group grid gap-5 border-t border-line py-9 lg:grid-cols-[210px_1fr] lg:gap-12">
          <div className="font-mono text-xs text-ink-soft">
            <span className="font-serif text-4xl leading-none text-line transition-colors group-hover:text-orange">
              ★
            </span>
            <div className="mt-4 uppercase tracking-[0.1em]">{education.period}</div>
            <div className="mt-1 text-ink">Aligarh, India</div>
          </div>
          <div>
            <p className="eyebrow text-orange">Education</p>
            <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-2 text-base text-ink/80">
              {education.school}, {education.university}.
            </p>
          </div>
        </article>
      </div>
    </Disclosure>
  );
}
