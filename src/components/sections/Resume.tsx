import Section from "@/components/ui/Section";

export default function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="A quick overview of my background and experience."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_0.7fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-base leading-8 text-slate-300">
            My resume summarizes my experience across software development,
            data science, geospatial systems, computer graphics, research, and
            teaching. It includes my technical skills, selected projects,
            education, and professional experience.
          </p>

          <a
            href="/resume/Amir_Mirzai_Golpayegani.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-slate-200"
          >
            Download Resume
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Highlights
          </p>

          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <li>MSc in Computer Science from the University of Calgary</li>
            <li>Experience in geospatial data systems and earth observation</li>
            <li>Projects in backend development, ML, visualization, and DGGS</li>
            <li>Research background in multiresolution data management</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}