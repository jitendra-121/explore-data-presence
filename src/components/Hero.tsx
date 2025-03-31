
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Alex Chen</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-6">
            Data Scientist & Machine Learning Enthusiast
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            I transform complex data into actionable insights using Python, machine learning, and statistical analysis. 
            Currently pursuing my Master's in Data Science at Stanford University.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              View Projects
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-secondary/20 to-primary/5 blur-3xl rounded-full" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-sm">
          <span>Scroll down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
