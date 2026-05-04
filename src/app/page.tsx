export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
          Personal Portfolio
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          Amir Mirzai Golpayegani
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Software developer and data scientist with experience in geospatial
          systems, earth observation data, computer graphics, and research-driven
          software development.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-slate-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}