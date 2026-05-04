import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}