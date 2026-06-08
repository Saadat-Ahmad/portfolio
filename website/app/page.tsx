import Sidebar from "@/components/site/Sidebar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="overflow-x-clip pt-16 transition-[padding] duration-300 ease-out lg:pl-[var(--sidebar-w)] lg:pt-0">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
