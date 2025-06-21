
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Settings } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const programmingLanguages = [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C Programming", icon: "⚡" },
  ];

  const aiMlTechnologies = [
    { name: "PyTorch", icon: "🔥" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Keras", icon: "⚙️" },
    { name: "Scikit-learn", icon: "📊" },
    { name: "OpenCV", icon: "👁️" },
    { name: "NLTK", icon: "📝" },
    { name: "SpaCy", icon: "🔤" },
    { name: "NumPy", icon: "🔢" },
    { name: "Pandas", icon: "🐼" },
    { name: "Matplotlib", icon: "📈" },
  ];

  const webTechnologies = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Flask", icon: "🌶️" },
    { name: "MySQL", icon: "🗄️" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Git", icon: "📚" },
    { name: "Jira", icon: "📋" },
  ];

  const cloudDeployment = [
    { name: "Azure DevOps", icon: "☁️" },
    { name: "AWS Services", icon: "🚀" },
    { name: "Azure ML Studio", icon: "🤖" },
    { name: "MLflow", icon: "📊" },
    { name: "Docker", icon: "🐳" },
    { name: "Jenkins", icon: "⚙️" },
    { name: "Kubernetes", icon: "⚓" },
  ];

  const developerTools = [
    { name: "VS Code", icon: "💻" },
    { name: "Anaconda", icon: "🐍" },
    { name: "Jupyter Notebook", icon: "📓" },
    { name: "Eclipse", icon: "🌙" },
    { name: "MS Office", icon: "📊" },
    { name: "Tableau", icon: "📈" },
  ];

  const specializations = [
    "PyTorch, TensorFlow, Keras, Scikit-learn, OpenCV, NLTK, SpaCy, NumPy, Pandas, Matplotlib",
    "Deep Learning (Neural Networks, Transformers, LLMs - Huggingface), Computer Vision, Natural Language Processing (NLP)",
    "HTML, CSS, Java Script, Spring Boot, Microservices, REST APIs, MySQL, Oracle Database, Git, Bitbucket, Agile, Jira, SDLC",
    "Azure DevOps, AWS Services, Azure ML Studio, MLflow, CI/CD, Docker, Jenkins, Kubernetes",
    "VS Code, Anaconda, Jupyter Notebook, Eclipse, MS Office, Tableau"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  const SkillCategory = ({ 
    title, 
    skills, 
    description, 
    icon, 
    delay = 0 
  }: { 
    title: string; 
    skills: typeof programmingLanguages; 
    description: string;
    icon: React.ReactNode;
    delay?: number; 
  }) => (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-bold text-gray-700 uppercase tracking-wide">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-2xl mb-1">{skill.icon}</div>
              <span className="text-sm text-gray-600 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-start gap-2">
          <div className="text-green-500 mt-1">✓</div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">Skills</h2>
            <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              75%
            </div>
          </div>
          
          <div className="space-y-12">
            <SkillCategory 
              title="Programming Languages" 
              skills={programmingLanguages} 
              description="Python, Java, C Programming"
              icon={<Code className="h-6 w-6 text-blue-600" />}
              delay={200} 
            />
            
            <SkillCategory 
              title="AI & Machine Learning" 
              skills={aiMlTechnologies} 
              description={specializations[0]}
              icon={<span className="text-2xl">🤖</span>}
              delay={400} 
            />
            
            <SkillCategory 
              title="Web Technologies" 
              skills={webTechnologies} 
              description={specializations[2]}
              icon={<span className="text-2xl">🌐</span>}
              delay={600} 
            />
            
            <SkillCategory 
              title="Cloud & Deployment" 
              skills={cloudDeployment} 
              description={specializations[3]}
              icon={<Cloud className="h-6 w-6 text-green-600" />}
              delay={800} 
            />
            
            <SkillCategory 
              title="Developer Tools" 
              skills={developerTools} 
              description={specializations[4]}
              icon={<Settings className="h-6 w-6 text-gray-600" />}
              delay={1000} 
            />
          </div>

          <Card className={`mt-16 p-8 bg-white border border-gray-200 shadow-lg transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-bold mb-6 text-center text-gray-800">Core Specializations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Machine Learning & AI</h4>
                <p className="text-gray-600 text-sm">Deep Learning, Computer Vision, Natural Language Processing, Neural Networks</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Data Science & Analytics</h4>
                <p className="text-gray-600 text-sm">Data Analysis, Statistical Modeling, Data Visualization, Predictive Analytics</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Software Development</h4>
                <p className="text-gray-600 text-sm">Full-stack Development, API Design, Database Management, Version Control</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Cloud & DevOps</h4>
                <p className="text-gray-600 text-sm">Cloud Computing, Containerization, CI/CD Pipelines, Infrastructure Management</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
