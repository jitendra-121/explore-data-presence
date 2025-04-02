
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Alex Chen</span>
          </h1>
          <h2 className={`text-2xl md:text-4xl mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Data Scientist & Machine Learning Enthusiast
          </h2>
          <p className={`text-lg text-muted-foreground mb-8 max-w-2xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I transform complex data into actionable insights using Python, machine learning, and statistical analysis. 
            Currently pursuing my Master's in Data Science at Stanford University.
          </p>
          
          <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button className="bg-primary hover:bg-primary/90 text-white transition-transform duration-300 hover:scale-105">
              View Projects
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-transform duration-300 hover:scale-105">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-secondary/20 to-primary/5 blur-3xl rounded-full transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      
      {/* Animated typing cursor effect */}
      <div className={`absolute left-[calc(50%+3rem)] top-[calc(50%-4rem)] h-6 w-1 bg-primary transition-opacity duration-1000 delay-1000 ${isLoaded ? 'animate-pulse' : 'opacity-0'}`}></div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#about" className="flex flex-col items-center gap-2 text-sm">
          <span>Scroll down</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
