
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Star } from "lucide-react";

const Interests = () => {
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

    const section = document.getElementById("interests");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const interests = [
    {
      title: "Interest 1",
      description: "Brief description of why this interest is important or what it involves.",
      icon: <Heart className="h-6 w-6 text-red-500" />
    },
    {
      title: "Interest 2", 
      description: "Brief description of why this interest is important or what it involves.",
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Interest 3",
      description: "Brief description of why this interest is important or what it involves.", 
      icon: <Star className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <section id="interests" className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Passions Beyond Code</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond my work in AI/ML, I am deeply interested in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <Card 
                key={index}
                className={`p-6 bg-white border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                      {interest.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">{interest.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
