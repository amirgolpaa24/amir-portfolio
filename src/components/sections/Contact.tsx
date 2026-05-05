import Section from "@/components/ui/Section";

const contactLinks = [
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-profile",
    href: "https://www.linkedin.com/in/your-profile",
  },
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/your-username",
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s connect about software, data, research, or opportunities."
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <p className="max-w-2xl text-base leading-8 text-slate-300">
          I am open to software development, data science, research software,
          geospatial, and technical collaboration opportunities.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <p className="text-sm text-slate-500">{link.label}</p>
              <p className="mt-2 break-words text-sm font-medium text-white">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}