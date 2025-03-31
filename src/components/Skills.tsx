
import { Progress } from "@/components/ui/progress";

const Skills = () => {
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

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            My technical skills and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-gradient-to-r from-primary to-secondary" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Tools & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {toolsLibraries.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-3 py-2 bg-accent rounded-full text-sm border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Areas of Interest</h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Predictive Analytics</li>
                <li>Time Series Analysis</li>
                <li>Recommender Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
