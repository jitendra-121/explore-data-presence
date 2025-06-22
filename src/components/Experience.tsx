
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
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

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Company Name",
      location: "Location",
      duration: "Month Year – Present",
      responsibilities: [
        "Key Responsibility/Achievement 1",
        "Key Responsibility/Achievement 2", 
        "Key Responsibility/Achievement 3"
      ]
    },
    {
      title: "Data Scientist",
      company: "Organization Name",
      location: "Location",
      duration: "Month Year – Month Year",
      responsibilities: [
        "Key Responsibility/Achievement 1",
        "Key Responsibility/Achievement 2",
        "Key Responsibility/Achievement 3"
      ]
    },
    {
      title: "Research Intern",
      company: "University/Research Lab",
      location: "Location", 
      duration: "Month Year – Month Year",
      responsibilities: [
        "Key Responsibility/Achievement 1",
        "Key Responsibility/Achievement 2",
        "Key Responsibility/Achievement 3"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey in AI/ML and data science, showcasing growth and impact across various roles.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className={`p-6 border border-border hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span className="font-medium">{exp.company}</span>
                          <span>• {exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-3">Key Responsibilities & Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Experience;
