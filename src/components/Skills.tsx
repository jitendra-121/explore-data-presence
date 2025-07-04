
import { useState, useEffect } from "react";
import { Code, Database, Cloud, Settings, Brain, Globe } from "lucide-react";
import SkillCategory from "./SkillCategory";
import CoreSpecializations from "./CoreSpecializations";
import {
  programmingLanguages,
  aiMlTechnologies,
  webTechnologies,
  cloudDeployment,
  developerTools,
  specializations
} from "@/data/skillsData";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const section = document.getElementById("skills");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">Skills</h2>
          </div>
          
          <div className="space-y-12">
            <SkillCategory 
              title="Programming Languages" 
              skills={programmingLanguages} 
              description="Python, Java, C Programming" 
              icon={<Code className="h-6 w-6 text-blue-600" />} 
              delay={200} 
              isVisible={isVisible}
            />
            
            <SkillCategory 
              title="AI & Machine Learning" 
              skills={aiMlTechnologies} 
              description={specializations[0]} 
              icon={<Brain className="h-6 w-6 text-purple-600" />} 
              delay={400} 
              isVisible={isVisible}
            />
            
            <SkillCategory 
              title="Web Technologies" 
              skills={webTechnologies} 
              description={specializations[2]} 
              icon={<Globe className="h-6 w-6 text-green-600" />} 
              delay={600} 
              isVisible={isVisible}
            />
            
            <SkillCategory 
              title="Cloud & Deployment" 
              skills={cloudDeployment} 
              description={specializations[3]} 
              icon={<Cloud className="h-6 w-6 text-blue-600" />} 
              delay={800} 
              isVisible={isVisible}
            />
            
            <SkillCategory 
              title="Developer Tools" 
              skills={developerTools} 
              description={specializations[4]} 
              icon={<Settings className="h-6 w-6 text-gray-600" />} 
              delay={1000} 
              isVisible={isVisible}
            />
          </div>

          <CoreSpecializations isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
