import MacWindow from "@/components/ui/MacWindow";
import Disclosure from "@/components/site/Disclosure";
import { skills } from "@/lib/content";

function SkillChip({ name, logo }: { name: string; logo: string | null }) {
  return (
    <span className="group inline-flex items-center gap-2 border border-line bg-paper px-2.5 py-1.5 text-ink transition-colors hover:border-orange hover:text-orange">
      {logo ? (
        <span
          aria-hidden
          className="logo-mask h-4 w-4"
          style={{
            WebkitMaskImage: `url(/logos/${logo}.svg)`,
            maskImage: `url(/logos/${logo}.svg)`,
          }}
        />
      ) : (
        <span aria-hidden className="font-mono text-xs text-orange">
          {"</>"}
        </span>
      )}
      <span className="text-sm">{name}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <Disclosure id="skills" index="04" name="Skills" title="The toolbox.">
      <p className="mt-2 mb-8 max-w-xl text-ink/85">
        Languages, frameworks, and the plumbing underneath.
      </p>

      <MacWindow
        tone="inset"
        title="saadat.app/toolbox"
        className="max-w-4xl"
        bodyClassName="p-6"
      >
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <p className="eyebrow mb-3 flex items-center gap-2 text-ink-soft">
                <span className="text-orange">▸</span> {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillChip key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </MacWindow>
    </Disclosure>
  );
}
