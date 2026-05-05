import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}