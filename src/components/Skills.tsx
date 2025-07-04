import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Settings, Brain, Globe, Terminal, Cpu } from "lucide-react";
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const programmingLanguages = [{
    name: "Python",
    icon: <Code className="h-6 w-6 text-blue-500" />
  }, {
    name: "Java", 
    icon: <Cpu className="h-6 w-6 text-orange-500" />
  }, {
    name: "C Programming",
    icon: <Terminal className="h-6 w-6 text-gray-600" />
  }];
  const aiMlTechnologies = [{
    name: "PyTorch",
    icon: <Brain className="h-6 w-6 text-red-500" />
  }, {
    name: "TensorFlow",
    icon: <Brain className="h-6 w-6 text-orange-500" />
  }, {
    name: "Keras",
    icon: <Settings className="h-6 w-6 text-red-600" />
  }, {
    name: "Scikit-learn",
    icon: <Database className="h-6 w-6 text-blue-600" />
  }, {
    name: "OpenCV",
    icon: <Globe className="h-6 w-6 text-green-600" />
  }, {
    name: "NLTK",
    icon: <Code className="h-6 w-6 text-purple-500" />
  }, {
    name: "SpaCy",
    icon: <Code className="h-6 w-6 text-blue-500" />
  }, {
    name: "NumPy",
    icon: <Database className="h-6 w-6 text-blue-700" />
  }, {
    name: "Pandas",
    icon: <Database className="h-6 w-6 text-green-500" />
  }, {
    name: "Matplotlib",
    icon: <Settings className="h-6 w-6 text-orange-600" />
  }];
  const webTechnologies = [{
    name: "HTML",
    icon: <Globe className="h-6 w-6 text-orange-500" />
  }, {
    name: "CSS",
    icon: <Globe className="h-6 w-6 text-blue-500" />
  }, {
    name: "JavaScript",
    icon: <Code className="h-6 w-6 text-yellow-500" />
  }, {
    name: "FastAPI",
    icon: <Settings className="h-6 w-6 text-green-600" />
  }, {
    name: "Flask",
    icon: <Code className="h-6 w-6 text-gray-600" />
  }, {
    name: "MySQL",
    icon: <Database className="h-6 w-6 text-blue-600" />
  }, {
    name: "Git",
    icon: <Code className="h-6 w-6 text-orange-600" />
  }];
  const cloudDeployment = [{
    name: "Azure DevOps",
    icon: <Cloud className="h-6 w-6 text-blue-500" />
  }, {
    name: "AWS Services",
    icon: <Cloud className="h-6 w-6 text-orange-500" />
  }, {
    name: "Azure ML Studio",
    icon: <Brain className="h-6 w-6 text-blue-600" />
  }, {
    name: "MLflow",
    icon: <Settings className="h-6 w-6 text-green-500" />
  }, {
    name: "Docker",
    icon: <Database className="h-6 w-6 text-blue-700" />
  }, {
    name: "Jenkins",
    icon: <Settings className="h-6 w-6 text-red-500" />
  }, {
    name: "Kubernetes",
    icon: <Cloud className="h-6 w-6 text-blue-600" />
  }];
  const developerTools = [{
    name: "VS Code",
    icon: <Code className="h-6 w-6 text-blue-500" />
  }, {
    name: "Anaconda",
    icon: <Terminal className="h-6 w-6 text-green-500" />
  }, {
    name: "Jupyter Notebook",
    icon: <Code className="h-6 w-6 text-orange-500" />
  }, {
    name: "Eclipse",
    icon: <Code className="h-6 w-6 text-purple-600" />
  }, {
    name: "MS Office",
    icon: <Settings className="h-6 w-6 text-blue-600" />
  }, {
    name: "Tableau",
    icon: <Database className="h-6 w-6 text-orange-600" />
  }];
  const specializations = ["PyTorch, TensorFlow, Keras, Scikit-learn, OpenCV, NLTK, SpaCy, NumPy, Pandas, Matplotlib", "Deep Learning (Neural Networks, Transformers, LLMs - Huggingface), Computer Vision, Natural Language Processing (NLP)", "HTML, CSS, Java Script, FastAPI, Microservices, MySQL, Oracle Database, Git, Bitbucket, Agile, SDLC", "Azure DevOps, AWS Services, Azure ML Studio, MLflow, CI/CD, Docker, Jenkins, Kubernetes", "VS Code, Anaconda, Jupyter Notebook, Eclipse, MS Office, Tableau"];
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
  }) => <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-bold text-gray-700 uppercase tracking-wide">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-4">
          {skills.map((skill, index) => <div key={index} className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-1">{skill.icon}</div>
              <span className="text-sm text-gray-600 text-center">{skill.name}</span>
            </div>)}
        </div>
        
        <div className="flex items-start gap-2">
          <div className="text-green-500 mt-1">✓</div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>;
  return <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">Skills</h2>
            
          </div>
          
          <div className="space-y-12">
            <SkillCategory title="Programming Languages" skills={programmingLanguages} description="Python, Java, C Programming" icon={<Code className="h-6 w-6 text-blue-600" />} delay={200} />
            
            <SkillCategory title="AI & Machine Learning" skills={aiMlTechnologies} description={specializations[0]} icon={<Brain className="h-6 w-6 text-purple-600" />} delay={400} />
            
            <SkillCategory title="Web Technologies" skills={webTechnologies} description={specializations[2]} icon={<Globe className="h-6 w-6 text-green-600" />} delay={600} />
            
            <SkillCategory title="Cloud & Deployment" skills={cloudDeployment} description={specializations[3]} icon={<Cloud className="h-6 w-6 text-blue-600" />} delay={800} />
            
            <SkillCategory title="Developer Tools" skills={developerTools} description={specializations[4]} icon={<Settings className="h-6 w-6 text-gray-600" />} delay={1000} />
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
    </section>;
};
export default Skills;
