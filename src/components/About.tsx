
import { Card } from "@/components/ui/card";
import { Briefcase, Code, FileText, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            A passionate AI/ML engineer specializing in Computer Vision and Deep Learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-slide-up">
            <h3 className="text-xl font-bold mb-4">My Journey</h3>
            <p className="mb-4">
              I'm currently pursuing my B.Tech in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning at Vignan's Foundation For Science, Technology & Research (CGPA: 7.70).
            </p>
            <p>
              With expertise in Python, TensorFlow, PyTorch, and Computer Vision, I'm passionate about developing AI solutions that solve real-world problems, particularly in medical imaging and e-commerce analytics.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Education & Experience</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">B.Tech in CSE - AI & ML</h4>
                  <p className="text-sm text-muted-foreground">
                    Vignan's Foundation For Science, Technology & Research (Aug 2022 - April 2026)
                  </p>
                  <p className="text-sm text-muted-foreground">CGPA: 7.70</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Team Lead - WiseChoice</h4>
                  <p className="text-sm text-muted-foreground">E-commerce Analytics Platform (Nov 2023 - April 2024)</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Certifications</h4>
                  <p className="text-sm text-muted-foreground">Learning Analytical Tools - IIT Bombay</p>
                  <p className="text-sm text-muted-foreground">Generative AI and Large Language Models - IIMB Banglore</p>
                  <p className="text-sm text-muted-foreground">Microsoft Certified Azure Fundamentals</p>
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
