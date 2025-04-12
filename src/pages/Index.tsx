
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Fixed social links */}
      <div className="fixed left-6 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-border">
        <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:alex@example.com" className="text-foreground/70 hover:text-primary transition-colors">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </a>
      </div>
      
      {/* Fixed email on right side */}
      <div className="fixed right-6 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-border">
        <a href="mailto:alex@example.com" className="text-foreground/70 hover:text-primary transition-colors vertical-text" style={{
        writingMode: "vertical-rl"
      }}>jitendraaluri10@gmail.com</a>
      </div>
    </div>;
};

export default Index;
