import MacWindow from "@/components/ui/MacWindow";
import Disclosure from "@/components/site/Disclosure";
import PixelMac from "@/components/site/PixelMac";
import { profile, education } from "@/lib/content";
import { BOOT } from "@/lib/ascii";

const facts: [string, string][] = [
  ["name", profile.name],
  ["role", profile.role],
  ["based", profile.location],
  ["school", `${education.degree.replace("B.Tech, ", "B.Tech ")} · AMU '27`],
  ["now", "Recklabs · desktop AI"],
];

export default function About() {
  return (
    <Disclosure id="about" name="About" title="Engineer, end to end." divider="stripe">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h3 className="max-w-xl text-balance font-serif text-2xl font-light leading-snug sm:text-3xl">
            I build the product, the API behind it, and the{" "}
            <span className="italic text-orange">boxes it runs on</span>.
          </h3>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-ink/80">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div>
          <MacWindow
            tone="inset"
            title="whoami"
            className="font-mono text-sm"
            titleRight={<PixelMac size={14} className="text-ink-soft" />}
          >
            <div className="mb-4 space-y-0.5 text-xs text-ink-soft">
              {BOOT.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
            <dl className="space-y-2.5">
              {facts.map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <dt className="w-16 shrink-0 text-orange">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 border-t border-line pt-3 text-ink-soft">
              <span className="text-orange">terminal@saadat</span>:~${" "}
              <span className="term-cursor" />
            </div>
          </MacWindow>
        </div>
      </div>
    </Disclosure>
  );
}
