import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A brief overview of my background and interests.">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-8 text-slate-300">
          <p>
            I am a software developer with a background in computer science, data
            science, geospatial systems, visualization, and machine learning.
          </p>

          <p>
            I enjoy building clean, useful, and technically grounded systems,
            from backend services and data pipelines to interactive tools and
            research prototypes.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Focus Areas
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "Software Development",
              "Data Science",
              "Geospatial Systems",
              "Computer Graphics",
              "Remote Sensing",
              "Machine Learning",
              "Backend Development",
              "Research Prototyping",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}