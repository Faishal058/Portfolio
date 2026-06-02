import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { RecruiterTerminal } from "@/components/RecruiterTerminal";
import { MatrixBackground } from "@/components/MatrixBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Hero />
      
      {/* Wrapper with geometric Matrix background for specific sections */}
      <div className="relative">
        <MatrixBackground />
        
        <div className="w-full section-divider relative z-10" />
        <About />
        
        <div className="w-full section-divider relative z-10" />
        <Experience />
      </div>
      
      <div className="w-full section-divider" />
      <Projects />
      
      <div className="w-full section-divider" />
      <Certifications />
      
      <div className="w-full section-divider" />
      <Skills />
      
      <div className="w-full section-divider" />
      <Contact />
      
      <Footer />
      
      {/* Floating Interactive Terminal */}
      <RecruiterTerminal />
    </div>
  );
}
