import Hero from "./components/hero";
import LanguageToggle from "./components/general/language-toggle";
import Navbar from "./components/general/navbar";
import About from "./components/about";
import WorkExp from "./components/workexp";
import Contact from "./components/contact";
import Clients from "./components/clients";
import Projects from "./components/projects";
import TechStack from "./components/techstack";
import Footer from "./components/general/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full bg-[#051923]/80 overflow-x-hidden pt-10">
      <Hero />
      <Clients />
      <Projects />
      <TechStack />
      <WorkExp />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
