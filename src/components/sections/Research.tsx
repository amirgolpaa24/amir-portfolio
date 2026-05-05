import Section from "@/components/ui/Section";
import { researchItems } from "@/data/research";

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Research work focused on geospatial data, earth observation, and terrain analysis."
    >
      <div className="space-y-5">
        {researchItems.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm text-slate-500">{item.type}</p>

            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              {item.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}