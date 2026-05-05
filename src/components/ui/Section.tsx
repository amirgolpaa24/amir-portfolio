type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24">
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-500">
          {eyebrow}
        </p>
      )}

      <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {children}
    </section>
  );
}