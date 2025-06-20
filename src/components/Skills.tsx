
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState<Record<string, number>>({});

  const programmingLanguages = [
    { name: "Python", level: 95 },
    { name: "Java", level: 80 },
    { name: "C++", level: 75 },
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 80 },
  ];

  const frameworks = [
    { name: "TensorFlow", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-Learn", level: 90 },
    { name: "OpenCV", level: 85 },
    { name: "Flask", level: 80 },
    { name: "FastAPI", level: 75 },
    { name: "Streamlit", level: 80 },
  ];

  const aiMlSkills = [
    { name: "Machine Learning", level: 95 },
    { name: "Deep Learning", level: 90 },
    { name: "Computer Vision", level: 90 },
    { name: "Natural Language Processing", level: 85 },
    { name: "Prompt Engineering", level: 80 },
    { name: "LLMs", level: 75 },
    { name: "RAG", level: 70 },
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "Azure Cloud", "Pydantic", "MySQL", 
    "Docker", "MLflow", "DVC", "Pandas", "NumPy", "Matplotlib", 
    "Seaborn", "Jupyter", "NLTK", "spaCy", "Hugging Face", "LangChain"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars when section becomes visible
          [...programmingLanguages, ...frameworks, ...aiMlSkills].forEach(skill => {
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

  const SkillCategory = ({ title, skills, delay = 0 }: { title: string; skills: typeof programmingLanguages; delay?: number }) => (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
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
  );

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-3xl mx-auto mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 transition-all duration-500 delay-300"></div>
          <p className="text-lg text-muted-foreground">
            My technical skills and expertise in AI/ML and software development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <SkillCategory title="Programming Languages" skills={programmingLanguages} delay={200} />
          <SkillCategory title="AI/ML & Frameworks" skills={frameworks} delay={400} />
          <SkillCategory title="AI/ML Specializations" skills={aiMlSkills} delay={600} />
        </div>

        <div className={`mt-16 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={`px-4 py-2 text-sm border border-border transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-accent/80 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl font-bold mb-6 text-center">Core Computer Science</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Data Structures & Algorithms</h4>
              <p className="text-muted-foreground text-sm">Strong foundation in algorithmic thinking and optimization</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Computer Networks</h4>
              <p className="text-muted-foreground text-sm">Understanding of network protocols and distributed systems</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Database Management</h4>
              <p className="text-muted-foreground text-sm">Experience with MySQL and database design principles</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Operating Systems</h4>
              <p className="text-muted-foreground text-sm">Knowledge of system architecture and process management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
