import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default Index;
