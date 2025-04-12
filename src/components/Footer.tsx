import { Code, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);
  
  return (
    <footer className="py-8 bg-accent/80 border-t border-border relative overflow-hidden">
      <div className={`absolute w-32 h-32 rounded-full bg-primary/5 -top-16 -left-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute w-24 h-24 rounded-full bg-secondary/5 -bottom-12 right-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`flex items-center gap-2 mb-4 md:mb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Code className="h-5 w-5 text-primary animate-float" />
            <span className="font-bold">DataPortfolio</span>
          </div>
          
          <div className={`text-sm text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            © {year} Jitendra Aluri. All rights reserved.
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              { icon: <Github className="h-5 w-5" />, label: "GitHub", delay: 400 },
              { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", delay: 500 },
              { icon: <Mail className="h-5 w-5" />, label: "Email", delay: 600 }
            ].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className={`hover:text-primary transition-all duration-300 hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDuration: '700ms', transitionDelay: `${item.delay}ms` }}
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
