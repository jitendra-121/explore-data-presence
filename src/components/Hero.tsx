
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Full-width banner image with left-to-right animation */}
      <div className="w-full overflow-hidden mb-16">
        <div className={`w-full transition-all duration-1500 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
          <img 
            src="/lovable-uploads/70462249-80ef-436b-9dc2-63c2011e903f.png" 
            alt="Crafting AI-Driven Solutions for a Better World" 
            className="w-full shadow-lg hover:shadow-xl transition-all duration-300"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Avatar className={`w-48 h-48 border-4 border-primary/50 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <AvatarImage alt="Jitendra Chowdary Aluri" src="/lovable-uploads/5b7502da-a465-4d09-8179-f3883bbb3e61.jpg" className="object-contain" />
            <AvatarFallback>JCA</AvatarFallback>
          </Avatar>
          
          <div className={`max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Jitendra Chowdary Aluri</span>
            </h1>
            <h2 className={`text-2xl md:text-4xl mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              AI/ML Engineer & Computer Science Student
            </h2>
            <p className={`text-lg text-muted-foreground mb-8 max-w-2xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              I specialize in Machine Learning, Deep Learning, and AI solutions with expertise in Python, TensorFlow, and Computer Vision. Currently pursuing B.Tech in Computer Science Engineering with focus on AI and ML at Vignan's Foundation For Science, Technology & Research.
            </p>
            
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button 
                className="bg-primary hover:bg-primary/90 text-white transition-transform duration-300 hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 transition-transform duration-300 hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-l from-secondary/20 to-primary/5 blur-3xl rounded-full transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      
      <div className={`absolute left-[calc(50%+3rem)] top-[calc(50%-4rem)] h-6 w-1 bg-primary transition-opacity duration-1000 delay-1000 ${isLoaded ? 'animate-pulse' : 'opacity-0'}`}></div>
      
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
