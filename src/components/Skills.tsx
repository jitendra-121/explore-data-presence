
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState<Record<string, number>>({});

  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Data Analysis", level: 85 },
    { name: "SQL & Databases", level: 80 },
    { name: "Deep Learning", level: 75 },
    { name: "Data Visualization", level: 85 },
    { name: "R Programming", level: 70 },
    { name: "Big Data (Spark, Hadoop)", level: 65 },
  ];

  const toolsLibraries = [
    "Scikit-Learn", "TensorFlow", "PyTorch", "Pandas", 
    "NumPy", "Matplotlib", "Seaborn", "Jupyter", 
    "Git", "Docker", "AWS", "Tableau"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars when section becomes visible
          technicalSkills.forEach(skill => {
            setTimeout(() => {
              setProgress(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, 300);
          });
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 transition-all duration-500 delay-300"></div>
          <p className="text-lg text-muted-foreground">
            My technical skills and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{progress[skill.name] || 0}%</span>
                  </div>
                  <Progress 
                    value={progress[skill.name] || 0} 
                    className="h-2 transition-all duration-300" 
                    indicatorClassName="bg-gradient-to-r from-primary to-secondary" 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-xl font-bold mb-6">Tools & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {toolsLibraries.map((tool, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-2 bg-accent rounded-full text-sm border border-border transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-accent/80 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Areas of Interest</h3>
              <ul className="space-y-3 list-disc pl-5">
                {["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Time Series Analysis", "Recommender Systems"].map((item, index) => (
                  <li 
                    key={index} 
                    className="transition-all duration-500"
                    style={{ 
                      transitionDelay: `${(index + 5) * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(20px)'
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
