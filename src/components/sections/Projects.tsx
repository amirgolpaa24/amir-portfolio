import Section from "@/components/ui/Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work across software, data, and research."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
          >
            <p className="text-sm text-slate-500">{project.status}</p>

            <h3 className="mt-4 text-xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
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