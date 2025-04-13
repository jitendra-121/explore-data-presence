
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { 
  Brain, 
  Database, 
  LineChart, 
  BarChart4, 
  Code2, 
  BookOpen, 
  Flask, 
  Binary,
  Layers,
  Cpu,
  AreaChart,
  Microscope
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

interface SkillItem {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState<Record<string, number>>({});

  const technicalSkills: SkillItem[] = [
    { name: "Python", level: 95, icon: <Code2 className="h-5 w-5 text-primary" /> },
    { name: "Machine Learning", level: 90, icon: <Brain className="h-5 w-5 text-primary" /> },
    { name: "Data Analysis", level: 85, icon: <BarChart4 className="h-5 w-5 text-primary" /> },
    { name: "SQL & Databases", level: 80, icon: <Database className="h-5 w-5 text-primary" /> },
    { name: "Deep Learning", level: 75, icon: <Layers className="h-5 w-5 text-primary" /> },
    { name: "Data Visualization", level: 85, icon: <LineChart className="h-5 w-5 text-primary" /> },
    { name: "R Programming", level: 70, icon: <Code2 className="h-5 w-5 text-primary" /> },
    { name: "Big Data (Spark, Hadoop)", level: 65, icon: <Binary className="h-5 w-5 text-primary" /> },
  ];

  const toolsLibraries = [
    { name: "Scikit-Learn", icon: <Flask className="h-5 w-5" /> },
    { name: "TensorFlow", icon: <Cpu className="h-5 w-5" /> },
    { name: "PyTorch", icon: <Layers className="h-5 w-5" /> },
    { name: "Pandas", icon: <BarChart4 className="h-5 w-5" /> },
    { name: "NumPy", icon: <AreaChart className="h-5 w-5" /> },
    { name: "Matplotlib", icon: <LineChart className="h-5 w-5" /> },
    { name: "Seaborn", icon: <LineChart className="h-5 w-5" /> },
    { name: "Jupyter", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Git", icon: <Code2 className="h-5 w-5" /> },
    { name: "Docker", icon: <Database className="h-5 w-5" /> },
    { name: "AWS", icon: <Database className="h-5 w-5" /> },
    { name: "Tableau", icon: <BarChart4 className="h-5 w-5" /> }
  ];

  const researchInterests = [
    { name: "Natural Language Processing", icon: <BookOpen className="h-5 w-5 text-primary" /> },
    { name: "Computer Vision", icon: <Microscope className="h-5 w-5 text-primary" /> },
    { name: "Predictive Analytics", icon: <AreaChart className="h-5 w-5 text-primary" /> },
    { name: "Time Series Analysis", icon: <LineChart className="h-5 w-5 text-primary" /> },
    { name: "Recommender Systems", icon: <Layers className="h-5 w-5 text-primary" /> },
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
    <section id="skills" className="section-padding bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 transition-all duration-500 delay-300"></div>
          <p className="text-lg text-muted-foreground">
            My technical skills and areas of expertise
          </p>
        </div>
        
        <Tabs defaultValue="technical" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="tools">Tools & Libraries</TabsTrigger>
            <TabsTrigger value="research">Research Interests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="mt-4">
            <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-muted-foreground bg-background/80 px-2 py-0.5 rounded-full text-sm">{progress[skill.name] || 0}%</span>
                  </div>
                  <Progress 
                    value={progress[skill.name] || 0} 
                    className="h-2 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="mt-4">
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {toolsLibraries.map((tool, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center p-4 bg-card rounded-lg border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="p-3 bg-accent rounded-full mb-3">
                      {tool.icon}
                    </div>
                    <span className="text-center font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="research" className="mt-4">
            <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {researchInterests.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    style={{ 
                      transitionDelay: `${(index + 5) * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">{item.name}</h3>
                      <Slider 
                        defaultValue={[85]} 
                        max={100} 
                        step={1}
                        className="w-full" 
                        disabled 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
