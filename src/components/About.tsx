
import { Card } from "@/components/ui/card";
import { Briefcase, Code, FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            A passionate data scientist specializing in machine learning and predictive analytics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4">My Journey</h3>
            <p className="mb-4">
              I'm currently pursuing my Master's degree in Data Science at Stanford University, where I've been developing expertise in machine learning algorithms, statistical analysis, and data visualization.
            </p>
            <p>
              With a background in Computer Science and 2+ years of experience in data analysis, I'm passionate about using data to solve real-world problems and extract meaningful insights that drive business decisions.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Education & Experience</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">MSc in Data Science</h4>
                  <p className="text-sm text-muted-foreground">Stanford University (2022 - Present)</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">BSc in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">University of California, Berkeley (2018 - 2022)</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Data Analyst Intern</h4>
                  <p className="text-sm text-muted-foreground">Tech Innovations Inc. (Summer 2021)</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Code className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Research Assistant</h4>
                  <p className="text-sm text-muted-foreground">AI Research Lab, Berkeley (2020 - 2022)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
