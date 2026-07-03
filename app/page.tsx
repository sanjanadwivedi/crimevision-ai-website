import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Workflow from "@/components/sections/Workflow";
import Hero from "@/components/sections/Hero";
import Platform from "@/components/sections/Platform";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Platform />

      <Workflow />

      <Stats />

      <CTA />

      <Footer />
    </main>
  );
}
